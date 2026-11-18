import { HISTORY_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

export function HistorySection() {
  return (
    <section
      id="nossa-historia"
      aria-labelledby="historia-heading"
      className="relative overflow-hidden bg-brand-paper py-14 sm:py-18 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(237, 200, 75, 0.14) 0%, transparent 72%)',
        }}
      />

      <div className="container-editorial relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <div className="border-t-4 border-brand-green bg-white p-2.5 shadow-editorial">
            <PhotoSlot
              src={HISTORY_CONTENT.imageSrc}
              alt={HISTORY_CONTENT.imageAlt}
              photoGuide={HISTORY_CONTENT.photoGuide}
              naturalAspect
              objectPosition="object-[50%_20%]"
            />
          </div>

          <blockquote className="mt-6 border-l-4 border-brand-yellow pl-5 font-display text-base font-bold leading-snug text-brand-dark sm:text-lg">
            “{HISTORY_CONTENT.quote}”
          </blockquote>
        </Reveal>

        <Reveal delayMs={90} className="order-1 lg:order-2 lg:col-span-7">
          <p className="eyebrow-label">{HISTORY_CONTENT.eyebrow}</p>

          <h2
            id="historia-heading"
            className="text-section-title mt-3 max-w-2xl font-display font-extrabold text-brand-dark"
          >
            {HISTORY_CONTENT.title}
          </h2>

          <div className="text-body-fluid mt-6 max-w-[60ch] space-y-5 text-brand-ink">
            {HISTORY_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-dark/12 pt-6">
            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-2.5 font-display text-[0.95rem] font-extrabold text-brand-dark shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(18,59,43,0.28)] active:scale-[0.985]"
            >
              <span>{HISTORY_CONTENT.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>

            <span className="text-sm font-medium text-brand-muted sm:text-[0.95rem]">
              Atendimento direto pela secretaria no WhatsApp oficial.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
