# Site Institucional — Centro Educacional Sonho Encantado

Site institucional estático em **React 18 + TypeScript + Vite 5 + Tailwind CSS 3**, com pré-renderização HTML estática, fontes locais (`@fontsource`) e publicação no **Cloudflare** (`wrangler.jsonc`).

Sem banco de dados, sem backend, sem CMS pago e sem coleta de dados pessoais.

---

## Comandos Principais

Execute dentro da pasta `sonho-encantado-site/`:

```bash
# Instalar dependências (incluindo fontes locais)
npm install

# Rodar servidor de desenvolvimento (com placeholders de fotos pendentes visíveis)
npm run dev

# Compilar TypeScript, gerar build cliente + SSR e pré-renderizar dist/index.html
npm run build

# Visualizar localmente a build final pré-renderizada
npm run preview
