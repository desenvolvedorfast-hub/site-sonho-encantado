import { ACTIVITIES_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function ActivitiesSection() {
  const { featuredMusic, secondaryActivities } = ACTIVITIES_CONTENT;

  return (
    <section
      id="experiencias"
      aria-labelledby="experiencias-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
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

        {/* Composição editorial assimétrica: Música em destaque + Computação e Inglês empilhados */}
        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-12">
          {/* Música */}
          <article className="flex flex-col justify-between rounded-editorial border border-brand-dark/10 bg-brand-dark p-6 text-brand-paper shadow-editorial sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-brand-yellow px-3.5 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-brand-dark">
                  {featuredMusic.category}
                </span>
                {/* Elemento gráfico musical sutil */}
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 text-brand-yellow"
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

              <h3 className="mt-5 font-display text-2xl font-extrabold text-brand-paper sm:text-3xl">
                {featuredMusic.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#DCE7E1]">
                {featuredMusic.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {featuredMusic.focusPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-brand-paper/20 bg-brand-paper/10 px-3 py-1 text-xs font-semibold text-brand-paper"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <PhotoSlot
                src={featuredMusic.imageSrc}
                alt={featuredMusic.imageAlt}
                slotLabel={featuredMusic.imageSlotLabel}
                aspectClass="aspect-[16/10]"
              />
            </div>
          </article>

          {/* Computação e Inglês */}
          <div className="flex flex-col justify-between gap-7 lg:col-span-6">
            {secondaryActivities.map((activity, idx) => (
              <article
                key={activity.id}
                className={`flex flex-1 flex-col justify-between rounded-editorial border border-brand-dark/10 p-6 shadow-card sm:p-8 ${
                  idx === 0 ? 'bg-brand-blue-soft' : 'bg-brand-cream'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-xs font-extrabold uppercase tracking-wider text-brand-green">
                      {activity.category}
                    </span>
                    {idx === 0 ? (
                      <svg
                        aria-hidden="true"
                        className="h-7 w-7 text-brand-dark"
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
                        className="h-7 w-7 text-brand-dark"
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

                  <h3 className="mt-4 font-display text-2xl font-extrabold text-brand-dark">
                    {activity.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-brand-ink">
                    {activity.description}
                  </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {activity.focusPoints.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-brand-dark/15 bg-brand-paper px-3 py-1 text-xs font-semibold text-brand-dark"
                    >
                      {point}
                    </li>
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
