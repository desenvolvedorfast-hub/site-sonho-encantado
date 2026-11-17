import { useState } from 'react';
import { SCHOOL_IDENTITY } from '../data/schoolContent';

interface BrandLogoProps {
  tone?: 'light' | 'dark';
  compact?: boolean;
}

/**
 * Preserva integralmente a logomarca original em /images/logo-sonho-encantado.png.
 * Caso o arquivo de imagem ainda não tenha sido copiado para public/images/,
 * exibe um identificador tipográfico discreto sem substituir a identidade oficial.
 */
export function BrandLogo({ tone = 'dark', compact = false }: BrandLogoProps) {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  const titleColor = tone === 'light' ? 'text-brand-paper' : 'text-brand-dark';
  const subColor = tone === 'light' ? 'text-brand-paper/80' : 'text-brand-muted';

  return (
    <a
      href="#topo"
      className="group inline-flex items-center gap-3 rounded-xl py-1 focus-visible:outline-offset-4"
      aria-label={`${SCHOOL_IDENTITY.officialName} — voltar ao início da página`}
    >
      {!imageUnavailable ? (
        <img
          src={SCHOOL_IDENTITY.logoSrc}
          alt={`Logomarca oficial do ${SCHOOL_IDENTITY.officialName}`}
          onError={() => setImageUnavailable(true)}
          className={`${
            compact ? 'h-10 w-auto' : 'h-12 w-auto sm:h-14'
          } max-w-[140px] object-contain`}
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex shrink-0 items-center justify-center rounded-xl border px-2.5 py-2 font-display text-sm font-extrabold tracking-tight ${
            tone === 'light'
              ? 'border-brand-paper/30 bg-brand-paper/10 text-brand-yellow'
              : 'border-brand-green/25 bg-brand-green text-brand-yellow'
          }`}
        >
          SE
        </span>
      )}

      <span className="flex flex-col leading-tight">
        <span className={`font-display text-sm font-extrabold sm:text-base ${titleColor}`}>
          {SCHOOL_IDENTITY.officialName}
        </span>
        <span className={`text-xs font-medium ${subColor}`}>
          {SCHOOL_IDENTITY.slogan}
        </span>
      </span>
    </a>
  );
}
