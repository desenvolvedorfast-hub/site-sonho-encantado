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
 * - Em desenvolvimento (import.meta.env.DEV), exibe orientação técnica objetiva para inserção.
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
      className={`group relative overflow-hidden rounded-md bg-brand-cream ${
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
              : 'h-full object-cover group-hover:scale-[1.02]'
          } ${objectPosition} ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col justify-between border border-dashed border-brand-dark/25 p-4 sm:p-6"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-brand-dark/12 pb-2">
            <span className="font-display text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-brand-dark">
              {photoGuide.section}
            </span>
            <span className="text-xs font-semibold text-brand-muted">
              {photoGuide.idealRatio}
            </span>
          </div>

          <div className="mt-4 text-left">
            <p className="text-xs font-semibold leading-snug text-brand-ink sm:text-sm">
              {photoGuide.recommendedType}
            </p>
            <p className="mt-1.5 font-mono text-[0.72rem] text-brand-green">
              {photoGuide.filePath}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
