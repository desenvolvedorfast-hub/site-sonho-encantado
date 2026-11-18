import { TEACHING_STAGES } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

const STAGE_STYLE_MAP = {
  yellow: {
    bar: 'bg-brand-yellow',
    accentBorder: 'border-l-brand-yellow',
    tag: 'bg-brand-yellow/45 text-brand-dark',
  },
  blue: {
    bar: 'bg-brand-blue',
    accentBorder: 'border-l-brand-blue',
    tag: 'bg-brand-blue/30 text-brand-dark',
  },
  green: {
    bar: 'bg-brand-green',
    accentBorder: 'border-l-brand-green',
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
        <Reveal>
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
        </Reveal>

        {/* Capítulos editoriais abertos separados por linhas arquitetônicas (evita repetição de cards) */}
        <div className="mt-12 divide-y divide-brand-dark/15 border-y border-brand-dark/15">
          {TEACHING_STAGES.map((stage, index) => {
            const theme = STAGE_STYLE_MAP[stage.accentColor];
            const reverseDesktop = index % 2 === 1;

            return (
              <Reveal key={stage.id} delayMs={index * 60}>
                <article className="grid grid-cols-1 items-center gap-8 py-10 sm:py-12 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={`border-l-4 pl-5 sm:pl-6 lg:col-span-6 ${theme.accentBorder} ${
                      reverseDesktop ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-sm font-extrabold text-brand-green">
                        {stage.number}
                      </span>
                      <span className={`h-1 w-8 rounded-full ${theme.bar}`} aria-hidden="true" />
                      <span
                        className={`rounded-full px-3.5 py-0.5 font-display text-xs font-extrabold uppercase tracking-wider ${theme.tag}`}
                      >
                        {stage.tag}
                      </span>
                    </div>

                    <h3 className="text-subsection-title mt-3.5 font-display font-extrabold text-brand-dark">
                      {stage.title}
                    </h3>

                    <p className="text-body-fluid mt-3 max-w-[54ch] text-brand-ink">
                      {stage.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5 border-t border-brand-dark/10 pt-4">
                      {stage.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[0.96rem] font-medium leading-relaxed text-brand-muted sm:text-base"
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
                      className="shadow-editorial"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
