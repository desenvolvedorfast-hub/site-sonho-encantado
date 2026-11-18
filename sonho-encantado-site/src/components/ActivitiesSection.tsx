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

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-brand-dark p-6 text-brand-paper shadow-editorial sm:p-9">
              <div
                aria-hidden="true"
                className="ambient-breathe-slow pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(237, 200, 75, 0.16) 0%, transparent 70%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-xs font-extrabold uppercase tracking-[0.15em] text-brand-yellow">
                    {featuredMusic.category}
                  </span>
                  <svg
                    aria-hidden="true"
                    className="h-7 w-7 text-brand-yellow/90"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M12 22V8l12-2.5V20"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="9.5" cy="23" r="3.5" stroke="currentColor" strokeWidth="2.2" />
                    <circle cx="21.5" cy="20.5" r="3.5" stroke="currentColor" strokeWidth="2.2" />
                  </svg>
                </div>

                <h3 className="text-subsection-title mt-3 font-display font-extrabold text-white">
                  {featuredMusic.title}
                </h3>

                <p className="text-body-fluid mt-3 max-w-[54ch] text-[#DCE7E1]">
                  {featuredMusic.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {featuredMusic.focusPoints.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-brand-paper/25 bg-brand-paper/10 px-3.5 py-1 text-xs font-semibold text-brand-paper sm:text-[0.82rem]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {!hideMusicPhoto && (
                <div className="relative z-10 mt-7">
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

          <Reveal delayMs={100} className="flex flex-col justify-between gap-6 lg:col-span-5">
            {secondaryActivities.map((activity, idx) => (
              <article
                key={activity.id}
                className={`flex flex-1 flex-col justify-between border-t-4 p-6 transition-colors duration-300 sm:p-8 ${
                  idx === 0
                    ? 'border-t-brand-blue bg-brand-blue-soft/65 hover:bg-brand-blue-soft/90'
                    : 'border-t-brand-yellow bg-brand-cream/85 hover:bg-brand-cream'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
                      {activity.category}
                    </span>

                    {idx === 0 ? (
                      <svg
                        aria-hidden="true"
                        className="h-6 w-6 text-brand-dark"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="22"
                          height="14"
                          rx="2.5"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M9 23h10M14 19v4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        aria-hidden="true"
                        className="h-6 w-6 text-brand-dark"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M4.5 14h19M14 4c3 3.2 4.5 6.5 4.5 10s-1.5 6.8-4.5 10c-3-3.2-4.5-6.5-4.5-10S11 7.2 14 4z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-subsection-title mt-3 font-display font-extrabold text-brand-dark">
                    {activity.title}
                  </h3>

                  <p className="text-body-fluid mt-3 text-brand-ink">
                    {activity.description}
                  </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-dark/12 pt-4 text-sm font-semibold text-brand-dark">
                  {activity.focusPoints.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
