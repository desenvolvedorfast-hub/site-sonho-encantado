import { useState, type ReactNode } from 'react';
import { ACTIVITIES_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

function getExperienceIcon(id: string): ReactNode {
  const cls = 'h-5 w-5 shrink-0 text-brand-dark';
  if (id === 'ingles-projetos') {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M3.6 12h16.8M12 3a13.5 13.5 0 0 1 0 18M12 3a13.5 13.5 0 0 0 0 18" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 0 1 6.5 4H12v16H6.5A2.5 2.5 0 0 0 4 22V6.5zM20 6.5A2.5 2.5 0 0 0 17.5 4H12v16h5.5a2.5 2.5 0 0 1 2.5 2V6.5z" />
    </svg>
  );
}

export function ActivitiesSection() {
  const { featuredMusic, routineExperiences } = ACTIVITIES_CONTENT;
  const [musicPhotoMissing, setMusicPhotoMissing] = useState(false);

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

        {/* Destaque horizontal: Música e Movimento na Rotina Pedagógica */}
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

        {/* Inglês nos Projetos + Leitura, Artes e Brincadeiras */}
        <div className="mt-8 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {routineExperiences.map((item, idx) => (
            <Reveal key={item.id} delayMs={90 + idx * 60}>
              <article
                className={`flex h-full flex-col justify-between rounded-lg border border-brand-dark/12 border-t-4 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card sm:p-8 ${
                  idx === 0 ? 'border-t-brand-blue' : 'border-t-brand-yellow'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xs font-extrabold uppercase tracking-[0.15em] text-brand-green">
                        {item.category}
                      </p>
                      <h3 className="text-subsection-title mt-2 font-display font-extrabold text-brand-dark">
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${
                        idx === 0 ? 'bg-brand-blue-soft' : 'bg-brand-cream'
                      }`}
                    >
                      {getExperienceIcon(item.id)}
                    </span>
                  </div>

                  <p className="text-body-fluid mt-3.5 text-brand-ink">
                    {item.description}
                  </p>
                </div>

                <p className="mt-5 border-t border-brand-dark/10 pt-4 text-sm font-semibold text-brand-muted">
                  {item.focusPoints.join(' · ')}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
