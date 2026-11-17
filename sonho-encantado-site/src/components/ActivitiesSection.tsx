import { useState } from 'react';
import { ACTIVITIES_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function ActivitiesSection() {
  const { featuredMusic, secondaryActivities } = ACTIVITIES_CONTENT;
  const [musicPhotoMissing, setMusicPhotoMissing] = useState(false);

  return (
    <section
      id="experiencias"
      aria-labelledby="experiencias-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              {ACTIVITIES_CONTENT.eyebrow}
            </p>
            <h2
              id="experiencias-heading"
              className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
            >
              {ACTIVITIES_CONTENT.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-muted lg:col-span-5">
            {ACTIVITIES_CONTENT.intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Bloco editorial em destaque escuro para Música */}
          <article className="flex flex-col justify-between rounded-2xl bg-brand-dark p-7 text-brand-paper sm:p-9 lg:col-span-6">
            <div>
              <span className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-yellow">
                {featuredMusic.category}
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-brand-paper sm:text-3xl">
                {featuredMusic.title}
              </h3>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-[#DCE7E1]">
                {featuredMusic.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {featuredMusic.focusPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-brand-paper/20 px-3 py-1 text-xs font-semibold text-brand-paper"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {!musicPhotoMissing && (
              <div className="mt-7">
                <PhotoSlot
                  src={featuredMusic.imageSrc}
                  alt={featuredMusic.imageAlt}
                  objectPosition="object-[50%_20%]"
                  onMissing={() => setMusicPhotoMissing(true)}
                />
              </div>
            )}
          </article>

          {/* Coluna aberta com linhas editoriais para Computação e Inglês */}
          <div className="flex flex-col justify-center divide-y divide-brand-dark/15 border-y border-brand-dark/15 lg:col-span-6">
            {secondaryActivities.map((activity, idx) => (
              <article key={activity.id} className="py-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
                    {activity.category}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      idx === 0 ? 'bg-brand-blue' : 'bg-brand-yellow'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-2.5 font-display text-2xl font-extrabold text-brand-dark">
                  {activity.title}
                </h3>
                <p className="mt-2.5 max-w-prose text-base leading-relaxed text-brand-ink">
                  {activity.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-brand-muted">
                  {activity.focusPoints.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
