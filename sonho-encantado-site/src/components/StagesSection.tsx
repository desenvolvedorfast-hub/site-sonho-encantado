import { TEACHING_STAGES } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

const STAGE_STYLE_MAP = {
  yellow: {
    container: 'bg-white border-brand-dark/10 border-l-brand-yellow',
    bar: 'bg-brand-yellow',
    tag: 'bg-brand-yellow/45 text-brand-dark',
  },
  blue: {
    container: 'bg-brand-blue-soft/65 border-brand-blue/35 border-l-brand-blue',
    bar: 'bg-brand-blue',
    tag: 'bg-brand-blue/35 text-brand-dark',
  },
  green: {
    container: 'bg-white border-brand-dark/10 border-l-brand-green',
    bar: 'bg-brand-green',
    tag: 'bg-brand-green text-white',
  },
};

export function StagesSection() {
  return (
    <section
      id="etapas-de-ensino"
      aria-labelledby="etapas-heading"
      className="border-y border-brand-dark/10 bg-brand-cream py-14 sm:py-18 lg:py-24"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow-label">Etapas de Ensino</p>
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

        {/* Faixas editoriais individualizadas com alternância controlada esquerda/direita */}
        <div className="mt-10 space-y-6 lg:space-y-8">
          {TEACHING_STAGES.map((stage, index) => {
            const theme = STAGE_STYLE_MAP[stage.accentColor];
            const reverseDesktop = index % 2 === 1;

            return (
              <article
                key={stage.id}
                className={`grid grid-cols-1 items-center gap-7 rounded-2xl border border-l-[5px] p-5 shadow-card sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10 ${theme.container}`}
              >
                <div className={`lg:col-span-6 ${reverseDesktop ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-sm font-extrabold text-brand-green">
                      {stage.number}
                    </span>
                    <span className={`h-1 w-8 rounded-full ${theme.bar}`} aria-hidden="true" />
                    <span
                      className={`rounded-full px-3.5 py-1 font-display text-xs font-extrabold uppercase tracking-wider ${theme.tag}`}
                    >
                      {stage.tag}
                    </span>
                  </div>

                  <h3 className="text-subsection-title mt-4 font-display font-extrabold text-brand-dark">
                    {stage.title}
                  </h3>

                  <p className="text-body-fluid mt-3 max-w-[54ch] text-brand-ink">
                    {stage.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-brand-dark/12 pt-4">
                    {stage.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[0.95rem] font-medium leading-relaxed text-brand-muted sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${theme.bar}`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`lg:col-span-6 ${reverseDesktop ? 'lg:order-1' : 'lg:order-2'}`}>
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
