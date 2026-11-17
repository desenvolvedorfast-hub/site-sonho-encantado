import { HISTORY_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HistorySection() {
  return (
    <section
      id="nossa-historia"
      aria-labelledby="historia-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Imagem Editorial à Esquerda */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <PhotoSlot
              src={HISTORY_CONTENT.imageSrc}
              alt={HISTORY_CONTENT.imageAlt}
              slotLabel={HISTORY_CONTENT.imageSlotLabel}
              aspectClass="aspect-[4/5]"
              className="shadow-editorial"
            />
            <blockquote className="mt-5 border-l-4 border-brand-yellow pl-4 text-base italic leading-relaxed text-brand-muted">
              “{HISTORY_CONTENT.quote}”
            </blockquote>
          </div>
        </div>

        {/* Narrativa Institucional à Direita */}
        <div className="order-1 lg:order-2 lg:col-span-7">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
            {HISTORY_CONTENT.eyebrow}
          </p>
          <h2
            id="historia-heading"
            className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
          >
            {HISTORY_CONTENT.title}
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-ink sm:text-lg">
            {HISTORY_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-dark/10 pt-7">
            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-brand-yellow px-6 py-2.5 font-display text-sm font-extrabold text-brand-dark transition-transform duration-150 hover:-translate-y-0.5"
            >
              {HISTORY_CONTENT.ctaLabel}
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>
            <span className="text-sm font-medium text-brand-muted">
              Atendimento direto pelo WhatsApp institucional da secretaria.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
