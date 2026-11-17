import { ENVIRONMENT_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function EnvironmentSection() {
  return (
    <section
      aria-labelledby="ambiente-heading"
      className="border-t border-brand-dark/10 bg-brand-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="lg:col-span-6">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
            {ENVIRONMENT_CONTENT.eyebrow}
          </p>
          <h2
            id="ambiente-heading"
            className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
          >
            {ENVIRONMENT_CONTENT.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            {ENVIRONMENT_CONTENT.description}
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ENVIRONMENT_CONTENT.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-brand-dark/10 bg-brand-paper p-5"
              >
                <dt className="flex items-center gap-2.5 font-display text-base font-extrabold text-brand-dark">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-extrabold text-brand-dark">
                    0{idx + 1}
                  </span>
                  {pillar.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {pillar.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Colagem de dois espaços reservados para fotos reais do ambiente escolar */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
          {ENVIRONMENT_CONTENT.photos.map((photo, idx) => (
            <figure
              key={photo.src}
              className={idx === 1 ? 'sm:mt-8' : ''}
            >
              <PhotoSlot
                src={photo.src}
                alt={photo.alt}
                slotLabel={photo.slotLabel}
                aspectClass={idx === 0 ? 'aspect-[4/4.3]' : 'aspect-[4/4.8]'}
                className="shadow-card"
              />
              <figcaption className="mt-2.5 text-sm font-medium text-brand-muted">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
