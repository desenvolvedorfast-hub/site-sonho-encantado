import { useState, type ReactNode } from 'react';
import { ENVIRONMENT_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

const PILLAR_THEMES = [
  { topBorder: 'border-t-brand-green', badgeBg: 'bg-brand-green/10 text-brand-green' },
  { topBorder: 'border-t-brand-yellow', badgeBg: 'bg-brand-yellow/35 text-brand-dark' },
  { topBorder: 'border-t-brand-blue', badgeBg: 'bg-brand-blue-soft text-brand-dark' },
  { topBorder: 'border-t-brand-dark', badgeBg: 'bg-brand-cream text-brand-dark' },
  { topBorder: 'border-t-brand-green', badgeBg: 'bg-brand-green/10 text-brand-green' },
];

function getPillarIcon(index: number): ReactNode {
  const cls = 'h-5 w-5 shrink-0';
  switch (index) {
    case 0:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.5M5.6 5.6l1.8 1.8M18.4 5.6l-1.8 1.8M9 18h6M10 21h4M8.5 14.5a5 5 0 1 1 7 0c-.8.7-1.3 1.5-1.5 2.5h-4c-.2-1-.7-1.8-1.5-2.5z" />
        </svg>
      );
    case 1:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l8 4.5-8 4.5-8-4.5L12 4zM4 13l8 4.5 8-4.5M4 17.5L12 22l8-4.5" />
        </svg>
      );
    case 2:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
        </svg>
      );
    case 3:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7-4.4-7-9.6A4.2 4.2 0 0 1 12 7.5a4.2 4.2 0 0 1 7 2.9C19 15.6 12 20 12 20z" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5h6M9 13l2 2 4-4" />
        </svg>
      );
  }
}

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

        <div
          className={`mt-10 grid grid-cols-1 gap-8 ${
            hasPhotos ? 'items-start lg:grid-cols-12 lg:gap-12' : ''
          }`}
        >
          <div
            className={`space-y-6 ${
              hasPhotos ? 'lg:col-span-7' : 'grid grid-cols-1 gap-6 space-y-0 lg:grid-cols-2'
            }`}
          >
            {/* Escola Cristã */}
            <Reveal delayMs={60}>
              <article className="rounded-lg border border-brand-dark/10 border-l-4 border-l-brand-yellow bg-white p-6 shadow-card sm:p-7">
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

            {/* Metodologia Vygotsky */}
            <Reveal delayMs={110}>
              <article className="rounded-lg border border-brand-dark/10 border-l-4 border-l-brand-green bg-brand-paper p-6 shadow-card sm:p-7">
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
                <figure key={photo.src} className="rounded-lg border border-brand-dark/10 bg-white p-2.5 shadow-card">
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
                  <figcaption className="px-1 pb-1 pt-2.5 text-sm font-medium text-brand-muted">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          )}
        </div>

        {/* Seção prioritária A: “Na prática cotidiana” */}
        <Reveal delayMs={150}>
          <div className="mt-14 border-t border-brand-dark/15 pt-10 lg:mt-16 lg:pt-12">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <p className="eyebrow-label">{ENVIRONMENT_CONTENT.practiceEyebrow}</p>
                <h3 className="text-subsection-title mt-2.5 font-display font-extrabold text-brand-dark">
                  {ENVIRONMENT_CONTENT.practiceTitle}
                </h3>
              </div>

              <div className="rounded-lg border border-brand-dark/12 border-l-4 border-l-brand-yellow bg-white p-5 shadow-card sm:p-6 lg:col-span-7">
                <p className="text-body-fluid font-medium text-brand-ink">
                  {ENVIRONMENT_CONTENT.practiceLead}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
              {ENVIRONMENT_CONTENT.pillars.map((pillar, idx) => {
                const theme = PILLAR_THEMES[idx % PILLAR_THEMES.length];
                const spanClasses =
                  idx < 3
                    ? 'lg:col-span-2'
                    : idx === 3
                      ? 'lg:col-span-3'
                      : 'md:col-span-2 lg:col-span-3';

                return (
                  <article
                    key={pillar.title}
                    className={`flex flex-col justify-between rounded-lg border border-brand-dark/12 border-t-[3px] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-dark/25 hover:shadow-card sm:p-6 ${theme.topBorder} ${spanClasses}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-display text-xl font-extrabold tracking-tight text-brand-green">
                          0{idx + 1}
                        </span>
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${theme.badgeBg}`}
                        >
                          {getPillarIcon(idx)}
                        </span>
                      </div>

                      <h4 className="mt-4 font-display text-lg font-extrabold text-brand-dark sm:text-xl">
                        {pillar.title}
                      </h4>

                      <p className="mt-2 text-[0.96rem] leading-relaxed text-brand-muted sm:text-base">
                        {pillar.text}
                      </p>
                    </div>

                    <div
                      aria-hidden="true"
                      className="mt-5 h-px w-10 bg-brand-dark/15"
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
