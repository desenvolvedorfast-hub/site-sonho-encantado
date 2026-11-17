import { useState } from 'react';
import { ENVIRONMENT_CONTENT } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function EnvironmentSection() {
  const [missingPhotos, setMissingPhotos] = useState<Record<string, boolean>>({});

  const visiblePhotos = ENVIRONMENT_CONTENT.photos.filter(
    (photo) => !missingPhotos[photo.src],
  );
  const hasPhotos = visiblePhotos.length > 0;

  return (
    <section
      aria-labelledby="ambiente-heading"
      className="border-t border-brand-dark/10 bg-brand-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 gap-12 ${
            hasPhotos ? 'lg:grid-cols-12 lg:items-center' : ''
          }`}
        >
          <div className={hasPhotos ? 'lg:col-span-6' : 'max-w-5xl'}>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              {ENVIRONMENT_CONTENT.eyebrow}
            </p>
            <h2
              id="ambiente-heading"
              className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
            >
              {ENVIRONMENT_CONTENT.title}
            </h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-muted sm:text-lg">
              {ENVIRONMENT_CONTENT.description}
            </p>

            {/* Pilares com linhas finas no topo em vez de caixas repetidas */}
            <dl
              className={`mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 ${
                !hasPhotos ? 'lg:grid-cols-4' : ''
              }`}
            >
              {ENVIRONMENT_CONTENT.pillars.map((pillar, idx) => (
                <div key={pillar.title} className="border-t border-brand-dark/15 pt-4">
                  <dt className="font-display text-base font-extrabold text-brand-dark">
                    <span className="mr-2 text-xs font-extrabold text-brand-green">
                      0{idx + 1}.
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

          {hasPhotos && (
            <div
              className={`grid grid-cols-1 gap-6 lg:col-span-6 ${
                visiblePhotos.length === 2 ? 'sm:grid-cols-2' : ''
              }`}
            >
              {visiblePhotos.map((photo, idx) => (
                <figure key={photo.src} className={idx === 1 ? 'sm:mt-8' : ''}>
                  <PhotoSlot
                    src={photo.src}
                    alt={photo.alt}
                    objectPosition="object-[50%_25%]"
                    className="shadow-card"
                    onMissing={() =>
                      setMissingPhotos((prev) => ({ ...prev, [photo.src]: true }))
                    }
                  />
                  <figcaption className="mt-2.5 text-sm font-medium text-brand-muted">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
