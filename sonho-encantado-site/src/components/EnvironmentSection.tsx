import { useState } from 'react';
import { ENVIRONMENT_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

export function EnvironmentSection() {
  const [missingSrcs, setMissingSrcs] = useState<Record<string, boolean>>({});

  const visiblePhotos = ENVIRONMENT_CONTENT.photos.filter(
    (photo) => !(import.meta.env.PROD && missingSrcs[photo.src]),
  );
  const hasPhotos = visiblePhotos.length > 0;

  const { christianHighlight, vygotskyHighlight } = ENVIRONMENT_CONTENT;

  return (
    <section
      aria-labelledby="ambiente-heading"
      className="border-t border-brand-dark/10 bg-brand-cream py-14 sm:py-18 lg:py-24"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow-label">{ENVIRONMENT_CONTENT.eyebrow}</p>
            <h2
              id="ambiente-heading"
              className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
            >
              {ENVIRONMENT_CONTENT.title}
            </h2>
          </div>
        </Reveal>

        {/* Destaques principais (Identidade Cristã + Lev Vygotsky) ao lado das fotografias reais */}
        <div
          className={`mt-10 grid grid-cols-1 gap-8 ${
            hasPhotos ? 'items-start lg:grid-cols-12 lg:gap-12' : ''
          }`}
        >
          <div className={`space-y-6 ${hasPhotos ? 'lg:col-span-7' : 'grid grid-cols-1 gap-6 space-y-0 lg:grid-cols-2'}`}>
            {/* 1º Destaque: Identidade Cristã e Formação Humana */}
            <Reveal delayMs={60}>
              <article className="border-l-4 border-brand-yellow bg-white p-6 sm:p-7">
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
                  {christianHighlight.eyebrow}
                </p>
                <h3 className="text-subsection-title mt-2 font-display font-extrabold text-brand-dark">
                  {christianHighlight.title}
                </h3>
                <p className="text-body-fluid mt-3 text-brand-ink">
                  {christianHighlight.text}
                </p>
                <p className="mt-4 border-t border-brand-dark/10 pt-3.5 text-sm font-semibold text-brand-muted">
                  {christianHighlight.values.join(' · ')}
                </p>
              </article>
            </Reveal>

            {/* 2º Destaque: Metodologia Inspirada em Lev Vygotsky */}
            <Reveal delayMs={110}>
              <article className="border-l-4 border-brand-green bg-brand-paper p-6 sm:p-7">
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
                  {vygotskyHighlight.eyebrow}
                </p>
                <h3 className="text-subsection-title mt-2 font-display font-extrabold text-brand-dark">
                  {vygotskyHighlight.title}
                </h3>
                <p className="text-body-fluid mt-3 text-brand-ink">
                  {vygotskyHighlight.text}
                </p>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-brand-muted sm:text-base">
                  {vygotskyHighlight.zdpSummary}
                </p>

                {/* Progressão visual simples da mediação pedagógica */}
                <div className="mt-5 grid grid-cols-1 gap-3 border-t border-brand-dark/12 pt-4 sm:grid-cols-3">
                  {vygotskyHighlight.steps.map((step) => (
                    <div key={step.label}>
                      <p className="font-display text-xs font-extrabold uppercase tracking-wider text-brand-green">
                        {step.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-brand-dark">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>

          {hasPhotos && (
            <Reveal
              delayMs={130}
              className={`grid grid-cols-1 gap-6 lg:col-span-5 ${
                visiblePhotos.length === 2 ? 'sm:grid-cols-2 lg:grid-cols-1' : 'max-w-md'
              }`}
            >
              {visiblePhotos.map((photo, idx) => (
                <figure key={photo.src}>
                  <PhotoSlot
                    src={photo.src}
                    alt={photo.alt}
                    photoGuide={photo.photoGuide}
                    width={1000}
                    height={idx === 0 ? 750 : 625}
                    aspectClass={idx === 0 ? 'aspect-[4/3]' : 'aspect-[16/10]'}
                    objectPosition="object-[50%_25%]"
                    onMissing={() =>
                      setMissingSrcs((prev) => ({ ...prev, [photo.src]: true }))
                    }
                  />
                  <figcaption className="mt-2 text-sm font-medium text-brand-muted">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          )}
        </div>

        {/* 3º Destaque: Ludicidade + os 5 princípios da rotina escolar */}
        <Reveal delayMs={150}>
          <div className="mt-10 border-t border-brand-dark/15 pt-8">
            <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
                {ENVIRONMENT_CONTENT.practiceEyebrow}
              </p>
              <p className="max-w-3xl text-base leading-relaxed text-brand-ink">
                {ENVIRONMENT_CONTENT.practiceLead}
              </p>
            </div>

            <dl className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {ENVIRONMENT_CONTENT.pillars.map((pillar, idx) => (
                <div key={pillar.title} className="border-t-2 border-brand-dark/15 pt-3.5">
                  <dt className="font-display text-base font-extrabold text-brand-dark">
                    <span className="mr-1.5 text-xs font-extrabold text-brand-green">
                      0{idx + 1}.
                    </span>
                    {pillar.title}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-muted">
                    {pillar.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
