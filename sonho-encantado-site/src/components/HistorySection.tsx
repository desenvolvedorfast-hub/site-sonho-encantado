import { useState } from 'react';
import { HISTORY_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './Reveal';

export function HistorySection() {
  const [photoMissing, setPhotoMissing] = useState(false);
  const hidePhotoFrame = import.meta.env.PROD && photoMissing;

  return (
    <section
      id="nossa-historia"
      aria-labelledby="historia-heading"
      className="bg-brand-paper py-14 sm:py-18 lg:py-24"
    >
      <div className="container-editorial grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal
          className={`order-2 lg:order-1 ${hidePhotoFrame ? 'lg:col-span-4' : 'lg:col-span-5'}`}
        >
          {!hidePhotoFrame && (
            <div className="border-t-2 border-brand-green pt-3">
              <PhotoSlot
                src={HISTORY_CONTENT.imageSrc}
                alt={HISTORY_CONTENT.imageAlt}
                photoGuide={HISTORY_CONTENT.photoGuide}
                width={1000}
                height={1250}
                naturalAspect
                objectPosition="object-[50%_20%]"
                className="shadow-[0_16px_36px_-22px_rgba(18,59,43,0.22)]"
                onMissing={() => setPhotoMissing(true)}
              />
            </div>
          )}

          <blockquote
            className={`border-l-2 border-brand-yellow pl-5 font-display text-base font-bold leading-snug text-brand-dark sm:text-lg ${
              hidePhotoFrame ? '' : 'mt-6'
            }`}
          >
            “{HISTORY_CONTENT.quote}”
          </blockquote>
        </Reveal>

        <Reveal
          delayMs={80}
          className={`order-1 lg:order-2 ${hidePhotoFrame ? 'lg:col-span-8' : 'lg:col-span-7'}`}
        >
          <p className="eyebrow-label">{HISTORY_CONTENT.eyebrow}</p>

          <h2
            id="historia-heading"
            className="text-section-title mt-3 max-w-2xl font-display font-extrabold text-brand-dark"
          >
            {HISTORY_CONTENT.title}
          </h2>

          <div className="text-body-fluid mt-6 max-w-[60ch] space-y-5 text-brand-ink">
            {HISTORY_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-dark/12 pt-6">
            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-brand-yellow px-6 py-2.5 font-display text-[0.95rem] font-extrabold text-brand-dark transition-colors duration-150 hover:bg-[#e3bc3b] active:scale-[0.985]"
            >
              <span>{HISTORY_CONTENT.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>

            <span className="text-sm font-medium text-brand-muted sm:text-[0.95rem]">
              Atendimento direto pela secretaria no WhatsApp oficial.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
