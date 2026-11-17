import { GALLERY_PHOTOS, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function GallerySection() {
  return (
    <section
      aria-labelledby="galeria-heading"
      className="border-t border-brand-dark/10 bg-brand-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
              Galeria Institucional
            </p>
            <h2
              id="galeria-heading"
              className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
            >
              Retratos do cotidiano escolar e dos espaços da nossa comunidade.
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

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
          {GALLERY_PHOTOS.map((photo) => (
            <figure key={photo.id} className={`flex flex-col ${photo.spanClass}`}>
              <PhotoSlot
                src={photo.src}
                alt={photo.alt}
                slotLabel={photo.slotLabel}
                aspectClass={photo.aspectClass}
                className="flex-1 shadow-card"
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
