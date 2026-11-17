import { useState } from 'react';
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
  const [missingImages, setMissingImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="etapas-de-ensino"
      aria-labelledby="etapas-heading"
      className="border-y border-brand-dark/10 bg-brand-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              Etapas de Ensino
            </p>
            <h2
              id="etapas-heading"
              className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
            >
              Cada fase da infância acompanhada com ritmo próprio.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-muted lg:col-span-5">
            Atendimento contínuo do Baby Class e Educação Infantil até o 5º ano do Ensino Fundamental.
          </p>
        </div>

        {/* Lista editorial com linhas divisórias finas (sem cartões repetitivos) */}
        <div className="mt-12 divide-y divide-brand-dark/12 border-y border-brand-dark/12">
          {TEACHING_STAGES.map((stage) => {
            const accent = ACCENT_MAP[stage.accentColor];
            const isPhotoMissing = Boolean(missingImages[stage.id]);

            return (
              <article
                key={stage.id}
                className="grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-12 lg:gap-12"
              >
                {/* Número + Título */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
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

                  <h3 className="mt-3 font-display text-2xl font-extrabold text-brand-dark sm:text-3xl">
                    {stage.title}
                  </h3>
                </div>

                {/* Descrição e destaques */}
                <div className={isPhotoMissing ? 'lg:col-span-8' : 'lg:col-span-4'}>
                  <p className="text-base leading-relaxed text-brand-ink">
                    {stage.summary}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-brand-dark/10 pt-4">
                    {stage.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm font-medium text-brand-muted"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${accent.bar}`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fotografia (exibida apenas quando disponível em public/images) */}
                {!isPhotoMissing && (
                  <div className="lg:col-span-4">
                    <PhotoSlot
                      src={stage.imageSrc}
                      alt={stage.imageAlt}
                      objectPosition="object-[50%_20%]"
                      className="shadow-card"
                      onMissing={() =>
                        setMissingImages((prev) => ({ ...prev, [stage.id]: true }))
                      }
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
