import { useState } from 'react';
import { ACTIVITIES_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

export function ActivitiesSection() {
  const { featuredMusic, secondaryActivities } = ACTIVITIES_CONTENT;
  const [musicPhotoMissing, setMusicPhotoMissing] = useState(false);
  const hideMusicPhoto = import.meta.env.PROD && musicPhotoMissing;

  return (
    <section
      id="experiencias"
      aria-labelledby="experiencias-heading"
      className="bg-white py-14 sm:py-18 lg:py-24"
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

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Música em bloco editorial verde-escuro limpo */}
          <Reveal className="lg:col-span-7">
            <article className="flex h-full flex-col justify-between rounded-lg bg-brand-dark p-6 text-brand-paper sm:p-9">
              <div>
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
                  {featuredMusic.category}
                </p>

                <h3 className="text-subsection-title mt-3 font-display font-extrabold text-white">
                  {featuredMusic.title}
                </h3>

                <p className="text-body-fluid mt-3 max-w-[54ch] text-[#DCE7E1]">
                  {featuredMusic.description}
                </p>

                <p className="mt-5 border-t border-brand-paper/15 pt-4 text-sm font-semibold text-brand-yellow">
                  {featuredMusic.focusPoints.join(' · ')}
                </p>
              </div>

              {!hideMusicPhoto && (
                <div className="mt-6">
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

          {/* Computação e Inglês em composição tipográfica aberta, sem caixas coloridas nem ícones genéricos */}
          <Reveal
            delayMs={90}
            className="flex flex-col justify-center divide-y divide-brand-dark/15 border-y border-brand-dark/15 lg:col-span-5"
          >
            {secondaryActivities.map((activity, idx) => (
              <article
                key={activity.id}
                className={`border-l-2 py-8 pl-5 sm:pl-6 ${
                  idx === 0 ? 'border-l-brand-blue' : 'border-l-brand-yellow'
                }`}
              >
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.15em] text-brand-green">
                  {activity.category}
                </p>

                <h3 className="text-subsection-title mt-2.5 font-display font-extrabold text-brand-dark">
                  {activity.title}
                </h3>

                <p className="text-body-fluid mt-3 text-brand-ink">
                  {activity.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-brand-muted">
                  {activity.focusPoints.join(' · ')}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
