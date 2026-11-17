import { useState } from 'react';
import { HISTORY_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HistorySection() {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section
      id="nossa-historia"
      aria-labelledby="historia-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Imagem em proporção natural (sem faixas pretas e sem cortar rostos) */}
          {!photoMissing ? (
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <PhotoSlot
                  src={HISTORY_CONTENT.imageSrc}
                  alt={HISTORY_CONTENT.imageAlt}
                  naturalAspect
                  objectPosition="object-[50%_20%]"
                  className="shadow-editorial"
                  onMissing={() => setPhotoMissing(true)}
                />
                <blockquote className="mt-5 border-l-2 border-brand-yellow pl-4 text-sm italic leading-relaxed text-brand-muted sm:text-base">
                  “{HISTORY_CONTENT.quote}”
                </blockquote>
              </div>
            </div>
          ) : (
            <div className="order-2 border-t-2 border-brand-yellow pt-5 lg:order-1 lg:col-span-4">
              <blockquote className="font-display text-xl font-bold leading-snug text-brand-dark">
                “{HISTORY_CONTENT.quote}”
              </blockquote>
            </div>
          )}

          {/* Narrativa enxuta e focada nos responsáveis */}
          <div className={`order-1 lg:order-2 ${photoMissing ? 'lg:col-span-8' : 'lg:col-span-7'}`}>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              {HISTORY_CONTENT.eyebrow}
            </p>
            <h2
              id="historia-heading"
              className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
            >
              {HISTORY_CONTENT.title}
            </h2>

            <div className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-brand-ink sm:text-[1.08rem]">
              {HISTORY_CONTENT.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-dark/12 pt-6">
              <a
                href={SCHOOL_IDENTITY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-2.5 font-display text-sm font-extrabold text-brand-dark transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.98]"
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
              <span className="text-sm font-medium text-brand-muted">
                Atendimento direto pela secretaria no WhatsApp oficial.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
