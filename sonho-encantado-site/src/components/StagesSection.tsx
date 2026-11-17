import { TEACHING_STAGES } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

const ACCENT_MAP = {
  yellow: {
    badge: 'bg-brand-yellow text-brand-dark',
    border: 'border-l-brand-yellow',
    bullet: 'bg-brand-yellow',
  },
  blue: {
    badge: 'bg-brand-blue text-brand-dark',
    border: 'border-l-brand-blue',
    bullet: 'bg-brand-blue',
  },
  green: {
    badge: 'bg-brand-green text-brand-paper',
    border: 'border-l-brand-green',
    bullet: 'bg-brand-green',
  },
};

export function StagesSection() {
  return (
    <section
      id="etapas-de-ensino"
      aria-labelledby="etapas-heading"
      className="border-y border-brand-dark/10 bg-brand-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
            Etapas de Ensino
          </p>
          <h2
            id="etapas-heading"
            className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
          >
            Cada fase da infância acompanhada com ritmo próprio e atenção dedicada.
          </h2>
        </div>

        {/* Blocos horizontais individualizados, evitando grade genérica de 3 cartões */}
        <div className="mt-12 space-y-8">
          {TEACHING_STAGES.map((stage, index) => {
            const accent = ACCENT_MAP[stage.accentColor];
            const isReversed = index % 2 === 1;

            return (
              <article
                key={stage.id}
                className={`grid grid-cols-1 items-center gap-7 rounded-editorial border border-brand-dark/10 border-l-[6px] ${accent.border} bg-brand-paper p-5 shadow-card sm:p-8 lg:grid-cols-12 lg:gap-10`}
              >
                <div
                  className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <PhotoSlot
                    src={stage.imageSrc}
                    alt={stage.imageAlt}
                    slotLabel={stage.imageSlotLabel}
                    aspectClass="aspect-[16/10]"
                  />
                </div>

                <div
                  className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <span
                    className={`inline-block rounded-full px-3.5 py-1 font-display text-xs font-extrabold uppercase tracking-wider ${accent.badge}`}
                  >
                    {stage.tag}
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-extrabold text-brand-dark sm:text-3xl">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-brand-muted sm:text-lg">
                    {stage.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {stage.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm font-medium text-brand-ink sm:text-[0.95rem]"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accent.bullet}`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
