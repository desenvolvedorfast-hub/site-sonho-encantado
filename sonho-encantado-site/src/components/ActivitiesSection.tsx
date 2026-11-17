import { ACTIVITIES_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function ActivitiesSection() {
  const { featuredMusic, secondaryActivities } = ACTIVITIES_CONTENT;

  return (
    <section
      id="experiencias"
      aria-labelledby="experiencias-heading"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              {ACTIVITIES_CONTENT.eyebrow}
            </p>
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

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <article className="flex flex-col justify-between rounded-2xl bg-brand-dark p-6 text-brand-paper sm:p-8 lg:col-span-6">
            <div>
              <span className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-yellow">
                {featuredMusic.category}
              </span>
              <h3 className="mt-2.5 font-display text-2xl font-extrabold text-brand-paper sm:text-3xl">
                {featuredMusic.title}
              </h3>
              <p className="text-body-fluid mt-3 text-[#DCE7E1]">
                {featuredMusic.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
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

            <div className="mt-6">
              <PhotoSlot
                src={featuredMusic.imageSrc}
                alt={featuredMusic.imageAlt}
                photoGuide={featuredMusic.photoGuide}
                aspectClass="aspect-[16/10]"
                objectPosition="object-[50%_20%]"
              />
            </div>
          </article>

          <div className="flex flex-col justify-center divide-y divide-brand-dark/15 border-y border-brand-dark/15 lg:col-span-6">
            {secondaryActivities.map((activity, idx) => (
              <article key={activity.id} className="py-7 sm:py-8">
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
                <p className="text-body-fluid mt-2.5 text-brand-ink">
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
