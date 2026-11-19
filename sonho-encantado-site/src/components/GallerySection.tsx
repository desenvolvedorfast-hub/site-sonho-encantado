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

  const gridClass =
    visiblePhotos.length === 1
      ? 'grid-cols-1 max-w-3xl'
      : visiblePhotos.length === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : visiblePhotos.length === 3
          ? 'grid-cols-1 md:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-12';

  const getLayout = (index: number) => {
    if (visiblePhotos.length < 4) {
      return {
        spanClass: '',
        aspectClass: 'aspect-[4/3]',
        width: 1200,
        height: 900,
      };
    }

    if (index === 0) {
      return {
        spanClass: 'md:col-span-5',
        aspectClass: 'aspect-[4/3] md:aspect-[5/4]',
        width: 1000,
        height: 800,
      };
    }
    if (index === 1) {
      return {
        spanClass: 'md:col-span-7',
        aspectClass: 'aspect-[16/10]',
        width: 1280,
        height: 800,
      };
    }
    return {
      spanClass: 'md:col-span-6',
      aspectClass: 'aspect-[4/3]',
      width: 1200,
      height: 900,
    };
  };

  return (
    <section
      aria-labelledby="galeria-heading"
      className="border-t border-brand-dark/10 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow-label">Galeria Institucional</p>
              <h2
                id="galeria-heading"
                className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
              >
                Retratos do nosso cotidiano escolar.
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
          <div className={`mt-8 grid gap-6 ${gridClass}`}>
            {visiblePhotos.map((photo, index) => {
              const { spanClass, aspectClass, width, height } = getLayout(index);

              return (
                <figure key={photo.id} className={`flex flex-col ${spanClass}`}>
                  <PhotoSlot
                    src={photo.src}
                    alt={photo.alt}
                    photoGuide={photo.photoGuide}
                    width={width}
                    height={height}
                    aspectClass={aspectClass}
                    objectPosition="object-[50%_20%]"
                    onMissing={() =>
                      setMissingIds((prev) => ({ ...prev, [photo.id]: true }))
                    }
                  />
                  <figcaption className="mt-2 text-sm font-medium text-brand-muted">
                    {photo.caption}
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
