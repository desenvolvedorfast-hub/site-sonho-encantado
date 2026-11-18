import { useEffect, useRef, useState } from 'react';
import type { PhotoGuide } from '../data/schoolContent';

interface PhotoSlotProps {
  src: string;
  alt: string;
  photoGuide: PhotoGuide;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  aspectClass?: string;
  naturalAspect?: boolean;
  objectPosition?: string;
  priority?: boolean;
  onMissing?: () => void;
}

/**
 * Renderiza a fotografia oficial com proporção fixa (prevenindo CLS).
 * - Em produção (import.meta.env.PROD), se a imagem não existir, oculta o slot por completo (return null).
 * - Em desenvolvimento (import.meta.env.DEV), mantém o placeholder com orientações de inserção.
 */
export function PhotoSlot({
  src,
  alt,
  photoGuide,
  width = 1200,
  height = 900,
  className = '',
  imgClassName = '',
  aspectClass = 'aspect-[4/3]',
  naturalAspect = false,
  objectPosition = 'object-[50%_20%]',
  priority = false,
  onMissing,
}: PhotoSlotProps) {
  const [missing, setMissing] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setMissing(true);
      onMissing?.();
    }
  }, [onMissing]);

  if (missing && import.meta.env.PROD) {
    return null;
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-brand-dark/12 bg-brand-cream transition-shadow duration-300 ${
        naturalAspect && !missing ? '' : aspectClass
      } ${className}`}
    >
      {!missing ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...(priority ? { fetchpriority: 'high' as const } : {})}
          onError={() => {
            setMissing(true);
            onMissing?.();
          }}
          className={`w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            naturalAspect
              ? 'h-auto max-h-[580px] object-cover group-hover:scale-[1.015]'
              : 'h-full object-cover group-hover:scale-[1.025]'
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
