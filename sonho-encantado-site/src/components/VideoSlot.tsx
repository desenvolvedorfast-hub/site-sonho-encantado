import type { VideoGuide } from '../data/schoolContent';

interface VideoSlotProps {
  video: VideoGuide;
}

/**
 * Reprodutor de vídeo institucional sob demanda (sem autoplay com som e sem fundo animado).
 * - Em produção, vídeos sem autorização explícita (authorized=false) não são exibidos.
 * - Em desenvolvimento, exibe um placeholder informativo com o caminho esperado do vídeo e da capa.
 */
export function VideoSlot({ video }: VideoSlotProps) {
  if (!video.authorized && import.meta.env.PROD) {
    return null;
  }

  const containerWidth = video.orientation === 'vertical' ? 'max-w-[300px]' : 'max-w-2xl';
  const ratioClass = video.orientation === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';

  if (!video.authorized) {
    return (
      <div
        className={`w-full ${containerWidth} rounded-md border border-dashed border-brand-dark/25 bg-brand-cream/70 p-4 text-left`}
      >
        <p className="font-display text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-brand-dark">
          Vídeo institucional · {video.orientation === 'vertical' ? 'Vertical' : 'Horizontal'}
        </p>
        <p className="mt-1.5 text-sm font-bold text-brand-ink">{video.title}</p>
        <p className="mt-1 text-xs leading-relaxed text-brand-muted">{video.pendingNote}</p>
        <p className="mt-2 font-mono text-[0.72rem] text-brand-green">
          {video.src} (capa: {video.posterSrc})
        </p>
      </div>
    );
  }

  return (
    <figure className={`w-full ${containerWidth}`}>
      <div className={`overflow-hidden rounded-md border border-brand-dark/15 bg-brand-dark ${ratioClass}`}>
        <video
          controls
          preload="metadata"
          playsInline
          poster={video.posterSrc}
          aria-label={video.title}
          className="h-full w-full object-cover"
        >
          <source src={video.src} type="video/mp4" />
          Seu navegador não oferece suporte à reprodução de vídeo.
        </video>
      </div>
      <figcaption className="mt-2 text-sm font-medium text-brand-muted">
        {video.description}
      </figcaption>
    </figure>
  );
}
