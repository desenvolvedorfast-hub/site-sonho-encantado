import { useState } from 'react';

interface PhotoSlotProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectClass?: string;
  naturalAspect?: boolean;
  objectPosition?: string;
  priority?: boolean;
  onMissing?: () => void;
}

/**
 * Exibe exclusivamente fotografias reais disponíveis em public/images/.
 * - Se naturalAspect=true, preserva a proporção original do arquivo (sem faixas pretas ou distorções).
 * - Se naturalAspect=false, detecta orientação (vertical/horizontal) no carregamento para evitar cortar rostos.
 * - Se o arquivo não existir, oculta o slot silenciosamente (sem exibir mensagens de pendência ao visitante).
 */
export function PhotoSlot({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectClass,
  naturalAspect = false,
  objectPosition = 'object-[50%_20%]',
  priority = false,
  onMissing,
}: PhotoSlotProps) {
  const [missing, setMissing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [detectedRatio, setDetectedRatio] = useState<string>(aspectClass ?? 'aspect-[4/3]');

  if (missing) {
    return null;
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-brand-cream ${
        naturalAspect ? '' : detectedRatio
      } ${className}`}
    >
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
          setLoaded(true);
        }}
        onError={() => {
          setMissing(true);
          onMissing?.();
        }}
        className={`w-full transition-all duration-500 ease-out ${
          naturalAspect
            ? 'h-auto max-h-[600px] object-cover'
            : 'h-full object-cover group-hover:scale-[1.02]'
        } ${objectPosition} ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      />
    </div>
  );
}
