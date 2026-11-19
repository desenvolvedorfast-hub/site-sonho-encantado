import { useState } from 'react';
import { TEACHING_STAGES } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

const STAGE_ACCENT_MAP = {
  yellow: {
    border: 'border-l-brand-yellow',
    label: 'text-brand-dark',
  },
  blue: {
    border: 'border-l-brand-blue',
    label: 'text-brand-dark',
  },
  green: {
    border: 'border-l-brand-green',
    label: 'text-brand-green',
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

        <div className="mt-12 divide-y divide-brand-dark/15 border-y border-brand-dark/15">
          {TEACHING_STAGES.map((stage, index) => {
            const theme = STAGE_ACCENT_MAP[stage.accentColor];
            const reverseDesktop = index % 2 === 1;
            const hidePhoto = import.meta.env.PROD && Boolean(missingIds[stage.id]);

            return (
              <Reveal key={stage.id} delayMs={index * 60}>
                <article className="grid grid-cols-1 items-center gap-8 py-10 sm:py-12 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={`border-l-2 pl-5 sm:pl-6 ${theme.border} ${
                      hidePhoto
                        ? 'lg:col-span-10'
                        : `lg:col-span-6 ${reverseDesktop ? 'lg:order-2' : 'lg:order-1'}`
                    }`}
                  >
                    <p className={`font-display text-xs font-extrabold uppercase tracking-[0.16em] ${theme.label}`}>
                      {stage.number} — {stage.tag}
                    </p>

                    <h3 className="text-subsection-title mt-3 font-display font-extrabold text-brand-dark">
                      {stage.title}
                    </h3>

                    <p className="text-body-fluid mt-3 max-w-[54ch] text-brand-ink">
                      {stage.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-brand-dark/10 pt-4">
                      {stage.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[0.96rem] font-medium leading-relaxed text-brand-muted sm:text-base"
                        >
                          <span aria-hidden="true" className="font-bold text-brand-green">
                            —
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!hidePhoto && (
                    <div className={`lg:col-span-6 ${reverseDesktop ? 'lg:order-1' : 'lg:order-2'}`}>
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
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
