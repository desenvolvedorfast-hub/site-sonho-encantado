import { useState } from 'react';
import { ACTIVITIES_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

export function ActivitiesSection() {
  const { featuredMusic, secondaryActivities } = ACTIVITIES_CONTENT;
  const [musicPhotoMissing, setMusicPhotoMissing] = useState(false);
  const [secondaryMissing, setSecondaryMissing] = useState<Record<string, boolean>>({});

  const hideMusicPhoto = import.meta.env.PROD && musicPhotoMissing;

  return (
    <section
      id="experiencias"
      aria-labelledby="experiencias-heading"
      className="border-t border-brand-dark/10 bg-brand-paper py-14 sm:py-18 lg:py-24"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow-label">{ACTIVITIES_CONTENT.eyebrow}</p>
              <h2
                id="experiencias-heading"
                className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
              >
                {ACTIVITIES_CONTENT.title}
              </h2>
            </div>
            <p className="text-body-fluid text-brand-muted lg:col-span-5">
              {ACTIVITIES_CONTENT.intro}
            </p>
          </div>
        </Reveal>

        {/* 1. Música em destaque horizontal equilibrado */}
        <Reveal delayMs={60}>
          <article className="mt-10 grid grid-cols-1 items-center gap-8 rounded-lg bg-brand-dark p-6 text-brand-paper sm:p-9 lg:grid-cols-12 lg:gap-12">
            <div className={hideMusicPhoto ? 'lg:col-span-10' : 'lg:col-span-5'}>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
                {featuredMusic.category}
              </p>

              <h3 className="text-subsection-title mt-3 font-display font-extrabold text-white">
                {featuredMusic.title}
              </h3>

              <p className="text-body-fluid mt-3 text-[#DCE7E1]">
                {featuredMusic.description}
              </p>

              <p className="mt-4 border-l-2 border-brand-yellow/70 pl-3.5 text-sm leading-relaxed text-[#D0DFD7]">
                {featuredMusic.curriculumDistinction}
              </p>

              <p className="mt-5 text-sm font-semibold text-brand-yellow">
                {featuredMusic.focusPoints.join(' · ')}
              </p>
            </div>

            {!hideMusicPhoto && (
              <div className="lg:col-span-7">
                <PhotoSlot
                  src={featuredMusic.imageSrc}
                  alt={featuredMusic.imageAlt}
                  photoGuide={featuredMusic.photoGuide}
                  width={1200}
                  height={675}
                  aspectClass="aspect-[16/9]"
                  objectPosition="object-[50%_20%]"
                  onMissing={() => setMusicPhotoMissing(true)}
                />
              </div>
            )}
          </article>
        </Reveal>

        {/* 2. Computação e Inglês em composição editorial par com forte hierarquia tipográfica */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {secondaryActivities.map((activity, idx) => {
            const hidePhoto = import.meta.env.PROD && Boolean(secondaryMissing[activity.id]);

            return (
              <Reveal key={activity.id} delayMs={90 + idx * 60}>
                <article
                  className={`flex h-full flex-col justify-between border-t-4 bg-white p-6 sm:p-8 ${
                    idx === 0 ? 'border-t-brand-blue' : 'border-t-brand-yellow'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-xs font-extrabold uppercase tracking-[0.15em] text-brand-green">
                          {activity.category}
                        </p>
                        <h3 className="text-subsection-title mt-2 font-display font-extrabold text-brand-dark">
                          {activity.title}
                        </h3>
                      </div>

                      {/* Elemento gráfico discreto ligado à linguagem de cada disciplina */}
                      {idx === 0 ? (
                        <div
                          aria-hidden="true"
                          className="shrink-0 border border-brand-blue/50 bg-brand-blue-soft/60 px-2.5 py-1 font-mono text-xs font-bold text-brand-dark"
                        >
                          {'</>'}
                        </div>
                      ) : (
                        <div
                          aria-hidden="true"
                          className="shrink-0 border border-brand-yellow/70 bg-brand-cream px-2.5 py-1 font-display text-xs font-extrabold tracking-wide text-brand-dark"
                        >
                          EN · PT
                        </div>
                      )}
                    </div>

                    <p className="text-body-fluid mt-4 text-brand-ink">
                      {activity.description}
                    </p>

                    <p className="mt-4 text-sm font-semibold text-brand-muted">
                      {activity.focusPoints.join(' · ')}
                    </p>
                  </div>

                  {!hidePhoto && (
                    <div className="mt-6">
                      <PhotoSlot
                        src={activity.imageSrc}
                        alt={activity.imageAlt}
                        photoGuide={activity.photoGuide}
                        width={1200}
                        height={750}
                        aspectClass="aspect-[16/10]"
                        objectPosition="object-[50%_20%]"
                        onMissing={() =>
                          setSecondaryMissing((prev) => ({ ...prev, [activity.id]: true }))
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
