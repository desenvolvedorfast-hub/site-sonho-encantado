import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

function parseEnvFile(content) {
  const vars = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIdx = line.indexOf('=');
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    let value = line.slice(eqIdx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) vars[key] = value;
  }
  return vars;
}

async function loadEnv() {
  const envVars = {};
  for (const fileName of ['.env', '.env.local']) {
    try {
      const content = await fs.readFile(path.resolve(fileName), 'utf8');
      Object.assign(envVars, parseEnvFile(content));
    } catch {
      // Arquivo opcional ausente
    }
  }
  return {
    siteUrl: (process.env.VITE_SITE_URL ?? envVars.VITE_SITE_URL ?? '').trim().replace(/\/+$/, ''),
    cfBeaconToken: (
      process.env.VITE_CF_BEACON_TOKEN ??
      envVars.VITE_CF_BEACON_TOKEN ??
      ''
    ).trim(),
  };
}

function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function main() {
  const distDir = path.resolve('dist');
  const distServerEntry = path.resolve('dist-server/entry-server.js');
  const htmlPath = path.join(distDir, 'index.html');

  const [{ siteUrl, cfBeaconToken }, { render }, templateHtml] = await Promise.all([
    loadEnv(),
    import(pathToFileURL(distServerEntry).href),
    fs.readFile(htmlPath, 'utf8'),
  ]);

  const appHtml = render();
  let finalHtml = templateHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const hasValidSiteUrl = /^https?:\/\/[^/\s]+/i.test(siteUrl);

  if (hasValidSiteUrl) {
    const safeUrl = escapeAttr(siteUrl);
    const title = 'Centro Educacional Sonho Encantado | Escola no Guamá, Belém/PA';
    const description =
      'Educando para o Futuro! Há aproximadamente 20 anos acolhendo famílias no Guamá, Belém/PA, do Baby Class ao 5º ano do Ensino Fundamental.';
    const ogImage = `${safeUrl}/images/hero-escola.jpg`;

    const domainMeta = [
      `<link rel="canonical" href="${safeUrl}/" />`,
      `<meta property="og:url" content="${safeUrl}/" />`,
      `<meta property="og:image" content="${ogImage}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="1200" />`,
      `<meta property="og:image:alt" content="Centro Educacional Sonho Encantado no bairro do Guamá, Belém/PA" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${description}" />`,
      `<meta name="twitter:image" content="${ogImage}" />`,
    ].join('\n    ');

    finalHtml = finalHtml.replace('<!-- PRERENDER_META -->', domainMeta);

    finalHtml = finalHtml.replace(
      /(<script id="school-jsonld" type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
      (_, openTag, jsonContent, closeTag) => {
        const parsed = JSON.parse(jsonContent);
        parsed.url = `${siteUrl}/`;
        parsed.logo = `${siteUrl}/images/logo-sonho-encantado.png`;
        parsed.image = `${siteUrl}/images/hero-escola.jpg`;
        return `${openTag}\n      ${JSON.stringify(parsed, null, 2).replace(/\n/g, '\n      ')}\n    ${closeTag}`;
      },
    );

    const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
    const sitemapXml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      '  <url>',
      `    <loc>${safeUrl}/</loc>`,
      '    <changefreq>monthly</changefreq>',
      '    <priority>1.0</priority>',
      '  </url>',
      '</urlset>',
      '',
    ].join('\n');

    await Promise.all([
      fs.writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8'),
      fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8'),
    ]);
  } else {
    finalHtml = finalHtml.replace(/\s*<!-- PRERENDER_META -->/, '');
    await fs.writeFile(path.join(distDir, 'robots.txt'), 'User-agent: *\nAllow: /\n', 'utf8');
    await fs.rm(path.join(distDir, 'sitemap.xml'), { force: true });
  }

  if (cfBeaconToken) {
    const safeToken = JSON.stringify({ token: cfBeaconToken });
    const beaconTag = `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='${safeToken}'></script>`;
    finalHtml = finalHtml.replace('<!-- CF_ANALYTICS -->', beaconTag);
  } else {
    finalHtml = finalHtml.replace(/\s*<!-- CF_ANALYTICS -->/, '');
  }

  await fs.writeFile(htmlPath, finalHtml, 'utf8');
  console.log('✓ Pré-render estático concluído em dist/index.html');
}

main().catch((error) => {
  console.error('Erro no pré-render:', error);
  process.exit(1);
});
