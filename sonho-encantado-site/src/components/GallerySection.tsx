import { GALLERY_PHOTOS, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function GallerySection() {
  return (
    <section
      aria-labelledby="galeria-heading"
      className="border-t border-brand-dark/10 bg-brand-cream py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              Galeria Institucional
            </p>
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
            className="inline-flex min-h-[44px] shrink-0 items-center font-display text-sm font-bold text-brand-green underline decoration-brand-green/40 underline-offset-4 hover:text-brand-dark"
          >
            Acompanhar {SCHOOL_IDENTITY.instagramHandle} →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          {GALLERY_PHOTOS.map((photo, index) => {
            const spanClass =
              index === 0
                ? 'md:col-span-5'
                : index === 1
                  ? 'md:col-span-7'
                  : 'md:col-span-6';
            const aspectClass =
              index === 0
                ? 'aspect-[4/3] md:aspect-[5/4]'
                : index === 1
                  ? 'aspect-[16/10]'
                  : 'aspect-[4/3]';

            return (
              <figure key={photo.id} className={`flex flex-col ${spanClass}`}>
                <PhotoSlot
                  src={photo.src}
                  alt={photo.alt}
                  photoGuide={photo.photoGuide}
                  aspectClass={aspectClass}
                  objectPosition="object-[50%_20%]"
                  className="shadow-card"
                />
                <figcaption className="mt-2 text-sm font-medium text-brand-muted">
                  {photo.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
