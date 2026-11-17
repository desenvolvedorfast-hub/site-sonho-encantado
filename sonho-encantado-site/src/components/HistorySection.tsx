import { HISTORY_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HistorySection() {
  return (
    <section
      id="nossa-historia"
      aria-labelledby="historia-heading"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Fotografia em proporção natural (evita faixas pretas e cortes de rostos) */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <PhotoSlot
            src={HISTORY_CONTENT.imageSrc}
            alt={HISTORY_CONTENT.imageAlt}
            photoGuide={HISTORY_CONTENT.photoGuide}
            naturalAspect
            objectPosition="object-[50%_20%]"
            className="shadow-editorial"
          />
          <blockquote className="mt-4 border-l-2 border-brand-yellow pl-4 text-sm italic leading-relaxed text-brand-muted sm:text-base">
            “{HISTORY_CONTENT.quote}”
          </blockquote>
        </div>

        {/* Narrativa editorial */}
        <div className="order-1 lg:order-2 lg:col-span-7">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
            {HISTORY_CONTENT.eyebrow}
          </p>
          <h2
            id="historia-heading"
            className="text-section-title mt-3 max-w-2xl font-display font-extrabold text-brand-dark"
          >
            {HISTORY_CONTENT.title}
          </h2>

          <div className="text-body-fluid mt-5 max-w-2xl space-y-4 text-brand-ink">
            {HISTORY_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-brand-dark/12 pt-5">
            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-2.5 font-display text-sm font-extrabold text-brand-dark transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>{HISTORY_CONTENT.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>
            <span className="text-sm font-medium text-brand-muted">
              Atendimento direto pela secretaria no WhatsApp oficial.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
