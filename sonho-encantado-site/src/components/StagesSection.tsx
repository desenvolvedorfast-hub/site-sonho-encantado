import { useState } from 'react';
import { TEACHING_STAGES } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

const STAGE_THEME_MAP = {
  yellow: {
    topStrip: 'bg-brand-yellow',
    label: 'text-brand-dark',
    bullet: 'bg-brand-yellow',
  },
  blue: {
    topStrip: 'bg-brand-blue',
    label: 'text-brand-dark',
    bullet: 'bg-brand-blue',
  },
  green: {
    topStrip: 'bg-brand-green',
    label: 'text-brand-green',
    bullet: 'bg-brand-green',
  },
};

export function StagesSection() {
  const [missingIds, setMissingIds] = useState<Record<string, boolean>>({});

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

        {/* Cards das 3 etapas reais com imagem + faixa cromática + conteúdo objetivo */}
        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {TEACHING_STAGES.map((stage, index) => {
            const theme = STAGE_THEME_MAP[stage.accentColor];
            const hidePhoto = import.meta.env.PROD && Boolean(missingIds[stage.id]);

            return (
              <Reveal key={stage.id} delayMs={index * 70}>
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-dark/12 bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-editorial">
                  <div className={`h-1.5 w-full ${theme.topStrip}`} aria-hidden="true" />

                  {!hidePhoto && (
                    <div className="p-3 pb-0">
                      <PhotoSlot
                        src={stage.imageSrc}
                        alt={stage.imageAlt}
                        photoGuide={stage.photoGuide}
                        width={1200}
                        height={750}
                        aspectClass="aspect-[16/10]"
                        objectPosition="object-[50%_20%]"
                        onMissing={() =>
                          setMissingIds((prev) => ({ ...prev, [stage.id]: true }))
                        }
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p
                        className={`font-display text-xs font-extrabold uppercase tracking-[0.15em] ${theme.label}`}
                      >
                        {stage.number} — {stage.tag}
                      </p>

                      <h3 className="text-subsection-title mt-2 font-display font-extrabold text-brand-dark">
                        {stage.title}
                      </h3>

                      <p className="text-body-fluid mt-3 text-brand-ink">
                        {stage.summary}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-2 border-t border-brand-dark/10 pt-4">
                      {stage.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[0.94rem] font-medium leading-snug text-brand-muted"
                        >
                          <span
                            aria-hidden="true"
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bullet}`}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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
