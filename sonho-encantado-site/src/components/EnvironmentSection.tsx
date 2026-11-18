import { useState } from 'react';
import { ENVIRONMENT_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

export function EnvironmentSection() {
  const [missingSrcs, setMissingSrcs] = useState<Record<string, boolean>>({});

  const visiblePhotos = ENVIRONMENT_CONTENT.photos.filter(
    (photo) => !(import.meta.env.PROD && missingSrcs[photo.src]),
  );
  const hasPhotos = visiblePhotos.length > 0;

  return (
    <section
      aria-labelledby="ambiente-heading"
      className="relative overflow-hidden border-t border-brand-dark/10 bg-brand-paper py-14 sm:py-18 lg:py-24"
    >
      <div
        className={`container-editorial relative z-10 grid grid-cols-1 gap-10 ${
          hasPhotos ? 'items-center lg:grid-cols-12 lg:gap-14' : ''
        }`}
      >
        <Reveal className={hasPhotos ? 'lg:col-span-6' : 'max-w-5xl'}>
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

          <dl
            className={`mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 ${
              !hasPhotos ? 'lg:grid-cols-4' : ''
            }`}
          >
            {ENVIRONMENT_CONTENT.pillars.map((pillar, idx) => (
              <div key={pillar.title} className="border-t-2 border-brand-dark/15 pt-4">
                <dt className="flex items-center gap-2.5 font-display text-base font-extrabold text-brand-dark sm:text-[1.06rem]">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-xs font-extrabold text-brand-dark">
                    0{idx + 1}
                  </span>
                  <span>{pillar.title}</span>
                </dt>
                <dd className="mt-2 text-[0.96rem] leading-relaxed text-brand-muted sm:text-base">
                  {pillar.text}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {hasPhotos && (
          <Reveal
            delayMs={100}
            className={`relative grid grid-cols-1 gap-6 lg:col-span-6 ${
              visiblePhotos.length === 2 ? 'sm:grid-cols-2' : 'max-w-md'
            }`}
          >
            <div
              aria-hidden="true"
              className="ambient-breathe-slow pointer-events-none absolute -inset-6 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(237, 200, 75, 0.16) 0%, rgba(98, 185, 213, 0.08) 50%, transparent 74%)',
              }}
            />

            {visiblePhotos.map((photo, idx) => (
              <figure
                key={photo.src}
                className={`relative z-10 ${
                  visiblePhotos.length === 2 && idx === 1 ? 'sm:mt-8' : ''
                }`}
              >
                <PhotoSlot
                  src={photo.src}
                  alt={photo.alt}
                  photoGuide={photo.photoGuide}
                  width={1000}
                  height={1100}
                  aspectClass={idx === 0 ? 'aspect-[4/4.2]' : 'aspect-[4/4.6]'}
                  objectPosition="object-[50%_25%]"
                  className="shadow-editorial"
                  onMissing={() =>
                    setMissingSrcs((prev) => ({ ...prev, [photo.src]: true }))
                  }
                />
                <figcaption className="mt-2.5 text-sm font-medium text-brand-muted">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
