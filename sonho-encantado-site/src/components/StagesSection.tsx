import { TEACHING_STAGES } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

const ACCENT_MAP = {
  yellow: {
    bar: 'bg-brand-yellow',
    tag: 'text-brand-dark bg-brand-yellow/40',
  },
  blue: {
    bar: 'bg-brand-blue',
    tag: 'text-brand-dark bg-brand-blue/30',
  },
  green: {
    bar: 'bg-brand-green',
    tag: 'text-white bg-brand-green',
  },
};

export function StagesSection() {
  return (
    <section
      id="etapas-de-ensino"
      aria-labelledby="etapas-heading"
      className="border-y border-brand-dark/10 bg-brand-cream py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              Etapas de Ensino
            </p>
            <h2
              id="etapas-heading"
              className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
            >
              Cada fase da infância acompanhada com ritmo próprio.
            </h2>
          </div>
          <p className="text-body-fluid text-brand-muted lg:col-span-5">
            Atendimento contínuo do Baby Class e Educação Infantil até o 5º ano do Ensino Fundamental.
          </p>
        </div>

        {/* Proporção desktop 7/5 para evitar colunas estreitas e textos pequenos */}
        <div className="mt-10 divide-y divide-brand-dark/12 border-y border-brand-dark/12">
          {TEACHING_STAGES.map((stage, index) => {
            const accent = ACCENT_MAP[stage.accentColor];
            const reverseDesktop = index % 2 === 1;

            return (
              <article
                key={stage.id}
                className="grid grid-cols-1 items-center gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-12"
              >
                <div className={`lg:col-span-7 ${reverseDesktop ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-sm font-extrabold text-brand-green">
                      {stage.number}
                    </span>
                    <span className={`h-1 w-8 rounded-full ${accent.bar}`} aria-hidden="true" />
                    <span
                      className={`rounded-full px-3 py-0.5 font-display text-xs font-bold ${accent.tag}`}
                    >
                      {stage.tag}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-extrabold text-brand-dark sm:text-[1.85rem]">
                    {stage.title}
                  </h3>

                  <p className="text-body-fluid mt-3 max-w-2xl text-brand-ink">
                    {stage.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-2.5 border-t border-brand-dark/10 pt-4 sm:grid-cols-2">
                    {stage.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm font-medium text-brand-muted sm:text-[0.95rem]"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accent.bar}`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`lg:col-span-5 ${reverseDesktop ? 'lg:order-1' : 'lg:order-2'}`}>
                  <PhotoSlot
                    src={stage.imageSrc}
                    alt={stage.imageAlt}
                    photoGuide={stage.photoGuide}
                    aspectClass="aspect-[16/10]"
                    objectPosition="object-[50%_20%]"
                    className="shadow-card"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
