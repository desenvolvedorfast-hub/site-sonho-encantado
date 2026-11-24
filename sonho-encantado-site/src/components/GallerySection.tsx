import { useState } from 'react';
import { GALLERY_PHOTOS, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

export function GallerySection() {
  const [missingIds, setMissingIds] = useState<Record<string, boolean>>({});

  const visiblePhotos = GALLERY_PHOTOS.filter(
    (photo) => !(import.meta.env.PROD && missingIds[photo.id]),
  );

  if (visiblePhotos.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="galeria-heading"
      className="border-t border-brand-dark/10 bg-brand-cream/85 py-14 sm:py-18 lg:py-22"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow-label">Nossos Ambientes e Vivências</p>
              <h2
                id="galeria-heading"
                className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
              >
                Conheça os espaços que acolhem cada descoberta.
              </h2>
            </div>

            <a
              href={SCHOOL_IDENTITY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] shrink-0 items-center font-display text-sm font-bold text-brand-green underline decoration-brand-green/40 underline-offset-4 transition-colors hover:text-brand-dark"
            >
              Acompanhar {SCHOOL_IDENTITY.instagramHandle} →
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div
            className={`mt-9 grid gap-6 ${
              visiblePhotos.length === 1
                ? 'max-w-3xl grid-cols-1'
                : visiblePhotos.length === 2
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-12'
            }`}
          >
            {visiblePhotos.map((photo, index) => {
              const spanClass =
                visiblePhotos.length < 3
                  ? ''
                  : visiblePhotos.length === 3
                    ? index === 0
                      ? 'md:col-span-6'
                      : 'md:col-span-3'
                    : index === 0
                      ? 'md:col-span-7'
                      : index === 1
                        ? 'md:col-span-5'
                        : 'md:col-span-6';

              const aspectClass =
                index === 0 && visiblePhotos.length >= 3
                  ? 'aspect-[16/10]'
                  : 'aspect-[4/3]';

              return (
                <figure
                  key={photo.id}
                  className={`flex flex-col overflow-hidden rounded-lg border border-brand-dark/12 bg-white shadow-card ${spanClass}`}
                >
                  <PhotoSlot
                    src={photo.src}
                    alt={photo.alt}
                    photoGuide={photo.photoGuide}
                    width={index === 0 ? 1280 : 1200}
                    height={index === 0 ? 800 : 900}
                    aspectClass={aspectClass}
                    objectPosition="object-[50%_20%]"
                    className="rounded-none"
                    onMissing={() =>
                      setMissingIds((prev) => ({ ...prev, [photo.id]: true }))
                    }
                  />
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                    <span className="font-semibold text-brand-dark">{photo.caption}</span>
                    <span className="font-display text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-brand-green">
                      {photo.tag}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
