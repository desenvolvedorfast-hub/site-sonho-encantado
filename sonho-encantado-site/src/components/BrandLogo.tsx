import { useState } from 'react';
import { SCHOOL_IDENTITY } from '../data/schoolContent';

interface BrandLogoProps {
  tone?: 'light' | 'dark';
  compact?: boolean;
}

export function BrandLogo({ tone = 'dark', compact = false }: BrandLogoProps) {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  const titleColor = tone === 'light' ? 'text-brand-paper' : 'text-brand-dark';
  const subColor = tone === 'light' ? 'text-[#DCE7E1]' : 'text-brand-muted';

  return (
    <a
      href="#topo"
      className="group inline-flex min-w-0 items-center gap-3 rounded-lg py-1 focus-visible:outline-offset-4"
      aria-label={`${SCHOOL_IDENTITY.officialName} — voltar ao início da página`}
    >
      {!imageUnavailable ? (
        <img
          src={SCHOOL_IDENTITY.logoSrc}
          alt={`Logomarca oficial do ${SCHOOL_IDENTITY.officialName}`}
          onError={() => setImageUnavailable(true)}
          className={`${
            compact ? 'h-10 w-auto max-w-[120px]' : 'h-11 w-auto max-w-[140px] sm:h-12'
          } shrink-0 rounded-md object-contain`}
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-display text-sm font-extrabold ${
            tone === 'light'
              ? 'border-brand-paper/30 bg-brand-paper/10 text-brand-yellow'
              : 'border-brand-green/20 bg-brand-green text-brand-yellow'
          }`}
        >
          SE
        </span>
      )}

      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`truncate font-display text-sm font-extrabold sm:text-[0.95rem] ${titleColor}`}
        >
          {SCHOOL_IDENTITY.officialName}
        </span>
        <span className={`truncate text-xs font-medium ${subColor}`}>
          {SCHOOL_IDENTITY.slogan}
        </span>
      </span>
    </a>
  );
}
