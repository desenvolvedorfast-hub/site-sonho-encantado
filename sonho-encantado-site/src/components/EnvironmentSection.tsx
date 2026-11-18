import { ENVIRONMENT_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function EnvironmentSection() {
  return (
    <section
      aria-labelledby="ambiente-heading"
      className="border-t border-brand-dark/10 bg-white py-14 sm:py-18 lg:py-24"
    >
      <div className="container-editorial grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <p className="eyebrow-label">{ENVIRONMENT_CONTENT.eyebrow}</p>

          <h2
            id="ambiente-heading"
            className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
          >
            {ENVIRONMENT_CONTENT.title}
          </h2>

          <p className="text-body-fluid mt-4 max-w-[54ch] text-brand-muted">
            {ENVIRONMENT_CONTENT.description}
          </p>

          <dl className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {ENVIRONMENT_CONTENT.pillars.map((pillar, idx) => (
              <div key={pillar.title} className="border-t-2 border-brand-dark/15 pt-4">
                <dt className="flex items-center gap-2.5 font-display text-base font-extrabold text-brand-dark sm:text-[1.06rem]">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-extrabold text-brand-dark">
                    0{idx + 1}
                  </span>
                  <span>{pillar.title}</span>
                </dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-brand-muted sm:text-base">
                  {pillar.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
          {ENVIRONMENT_CONTENT.photos.map((photo, idx) => (
            <figure key={photo.src} className={idx === 1 ? 'sm:mt-8' : ''}>
              <PhotoSlot
                src={photo.src}
                alt={photo.alt}
                photoGuide={photo.photoGuide}
                aspectClass={idx === 0 ? 'aspect-[4/4.2]' : 'aspect-[4/4.6]'}
                objectPosition="object-[50%_25%]"
                className="shadow-editorial"
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
