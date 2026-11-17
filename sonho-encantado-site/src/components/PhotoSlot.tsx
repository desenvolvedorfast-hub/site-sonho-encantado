import { useState } from 'react';
import type { PhotoGuide } from '../data/schoolContent';

interface PhotoSlotProps {
  src: string;
  alt: string;
  photoGuide: PhotoGuide;
  className?: string;
  imgClassName?: string;
  aspectClass?: string;
  naturalAspect?: boolean;
  objectPosition?: string;
  priority?: boolean;
}

/**
 * Renderiza a fotografia oficial limpa quando disponível em public/images/.
 * Quando a fotografia ainda não estiver presente, exibe um placeholder editorial elegante
 * com as orientações de inserção (seção, tipo recomendado, proporção e caminho do arquivo).
 */
export function PhotoSlot({
  src,
  alt,
  photoGuide,
  className = '',
  imgClassName = '',
  aspectClass,
  naturalAspect = false,
  objectPosition = 'object-[50%_20%]',
  priority = false,
}: PhotoSlotProps) {
  const [missing, setMissing] = useState(false);
  const [detectedRatio, setDetectedRatio] = useState<string>(aspectClass ?? 'aspect-[4/3]');

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-brand-dark/10 bg-brand-cream ${
        missing ? aspectClass ?? 'aspect-[4/3]' : naturalAspect ? '' : detectedRatio
      } ${className}`}
    >
      {!missing ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={(event) => {
            const { naturalWidth, naturalHeight } = event.currentTarget;
            if (!naturalAspect && !aspectClass && naturalWidth > 0 && naturalHeight > 0) {
              setDetectedRatio(naturalHeight > naturalWidth ? 'aspect-[4/5]' : 'aspect-[4/3]');
            }
          }}
          onError={() => setMissing(true)}
          className={`w-full transition-transform duration-500 ease-out ${
            naturalAspect
              ? 'h-auto max-h-[580px] object-cover'
              : 'h-full object-cover group-hover:scale-[1.02]'
          } ${objectPosition} ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="relative flex h-full w-full flex-col justify-between p-4 sm:p-6"
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            viewBox="0 0 400 300"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="340" cy="50" r="80" fill="#EDC84B" fillOpacity="0.22" />
            <circle cx="60" cy="260" r="95" fill="#62B9D5" fillOpacity="0.18" />
          </svg>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 bg-white/90 px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-wider text-brand-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />
              {photoGuide.section}
            </span>
            <span className="rounded-full bg-brand-paper/90 px-2.5 py-0.5 text-[0.7rem] font-semibold text-brand-muted">
              {photoGuide.idealRatio}
            </span>
          </div>

          <div className="relative z-10 mt-3 rounded-lg border border-brand-dark/10 bg-white/92 p-3 text-left">
            <p className="text-xs font-semibold leading-snug text-brand-ink sm:text-sm">
              {photoGuide.recommendedType}
            </p>
            <p className="mt-1 font-mono text-[0.72rem] text-brand-green">
              {photoGuide.filePath}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
