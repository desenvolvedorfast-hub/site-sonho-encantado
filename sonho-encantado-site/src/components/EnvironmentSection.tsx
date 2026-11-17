import { ENVIRONMENT_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function EnvironmentSection() {
  return (
    <section
      aria-labelledby="ambiente-heading"
      className="border-t border-brand-dark/10 bg-brand-cream py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
            {ENVIRONMENT_CONTENT.eyebrow}
          </p>
          <h2
            id="ambiente-heading"
            className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
          >
            {ENVIRONMENT_CONTENT.title}
          </h2>
          <p className="text-body-fluid mt-4 text-brand-muted">
            {ENVIRONMENT_CONTENT.description}
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">
            {ENVIRONMENT_CONTENT.pillars.map((pillar, idx) => (
              <div key={pillar.title} className="border-t border-brand-dark/15 pt-4">
                <dt className="font-display text-base font-extrabold text-brand-dark">
                  <span className="mr-2 text-xs font-extrabold text-brand-green">
                    0{idx + 1}.
                  </span>
                  {pillar.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-brand-muted sm:text-[0.95rem]">
                  {pillar.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
          {ENVIRONMENT_CONTENT.photos.map((photo, idx) => (
            <figure key={photo.src} className={idx === 1 ? 'sm:mt-6' : ''}>
              <PhotoSlot
                src={photo.src}
                alt={photo.alt}
                photoGuide={photo.photoGuide}
                aspectClass={idx === 0 ? 'aspect-[4/4]' : 'aspect-[4/4.4]'}
                objectPosition="object-[50%_25%]"
                className="shadow-card"
              />
              <figcaption className="mt-2 text-sm font-medium text-brand-muted">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
