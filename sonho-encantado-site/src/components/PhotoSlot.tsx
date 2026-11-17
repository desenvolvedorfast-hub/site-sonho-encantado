import { useState } from 'react';

interface PhotoSlotProps {
  src: string;
  alt: string;
  slotLabel: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Exibe fotografias reais autorizadas quando presentes em public/images/.
 * Enquanto o arquivo não for inserido, apresenta um placeholder editorial claro e honesto,
 * evitando simular imagens genéricas de terceiros como se fossem da escola.
 */
export function PhotoSlot({
  src,
  alt,
  slotLabel,
  aspectClass = 'aspect-[4/3]',
  className = '',
  priority = false,
}: PhotoSlotProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-editorial border border-brand-dark/10 bg-brand-cream ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="relative flex h-full w-full flex-col justify-between p-5 sm:p-6"
        >
          {/* Textura gráfica discreta derivada de crescimento e descoberta */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="330" cy="70" r="95" fill="#EDC84B" fillOpacity="0.24" />
            <circle cx="70" cy="340" r="115" fill="#62B9D5" fillOpacity="0.22" />
            <path
              d="M40 280C120 220 220 180 355 95"
              stroke="#075F36"
              strokeOpacity="0.18"
              strokeWidth="2"
              strokeDasharray="6 8"
              fill="none"
            />
          </svg>

          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 bg-brand-paper/90 px-3 py-1 text-xs font-semibold text-brand-dark">
              <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden="true" />
              Espaço para foto autorizada
            </span>
          </div>

          <div className="relative z-10 rounded-xl border border-brand-dark/10 bg-brand-paper/90 p-3.5 backdrop-blur-none">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-brand-green">
              Substituição pendente
            </p>
            <p className="mt-1 text-sm font-medium text-brand-ink">{slotLabel}</p>
          </div>
        </div>
      )}
    </div>
  );
}
