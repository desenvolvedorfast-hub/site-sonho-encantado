import { useState } from 'react';
import { GALLERY_PHOTOS, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function GallerySection() {
  const [missingIds, setMissingIds] = useState<Record<string, boolean>>({});

  const visiblePhotos = GALLERY_PHOTOS.filter((photo) => !missingIds[photo.id]);

  // Se ainda não houver fotos autorizadas da galeria, oculta a seção sem mostrar placeholders
  if (visiblePhotos.length === 0) {
    return null;
  }

  const gridClass =
    visiblePhotos.length === 1
      ? 'grid-cols-1 max-w-3xl'
      : visiblePhotos.length === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-12';

  const getSpanClass = (index: number) => {
    if (visiblePhotos.length <= 2) return '';
    if (visiblePhotos.length === 3) {
      return index === 0 ? 'md:col-span-6' : 'md:col-span-3';
    }
    return index === 0
      ? 'md:col-span-5'
      : index === 1
        ? 'md:col-span-7'
        : 'md:col-span-6';
  };

  return (
    <section
      aria-labelledby="galeria-heading"
      className="border-t border-brand-dark/10 bg-brand-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              Galeria Institucional
            </p>
            <h2
              id="galeria-heading"
              className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
            >
              Retratos do nosso cotidiano escolar.
            </h2>
          </div>

          <a
            href={SCHOOL_IDENTITY.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] shrink-0 items-center font-display text-sm font-bold text-brand-green underline decoration-brand-green/40 underline-offset-4 hover:text-brand-dark"
          >
            Acompanhar {SCHOOL_IDENTITY.instagramHandle} →
          </a>
        </div>

        <div className={`mt-10 grid gap-6 ${gridClass}`}>
          {visiblePhotos.map((photo, index) => (
            <figure key={photo.id} className={`flex flex-col ${getSpanClass(index)}`}>
              <PhotoSlot
                src={photo.src}
                alt={photo.alt}
                objectPosition="object-[50%_20%]"
                className="shadow-card"
                onMissing={() =>
                  setMissingIds((prev) => ({ ...prev, [photo.id]: true }))
                }
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
