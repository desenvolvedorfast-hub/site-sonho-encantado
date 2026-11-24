import { FINAL_CTA_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { Reveal } from './Reveal';

export function FinalCtaSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="bg-brand-paper py-10 sm:py-14 lg:py-16"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="rounded-lg bg-brand-green px-5 py-7 text-brand-paper sm:px-8 sm:py-10 lg:px-12 lg:py-11">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
                  {FINAL_CTA_CONTENT.eyebrow}
                </p>
                <h2
                  id="contato-heading"
                  className="text-section-title mt-2 font-display font-extrabold text-white"
                >
                  {FINAL_CTA_CONTENT.title}
                </h2>
                <p className="text-body-fluid mt-2.5 max-w-xl text-[#E4EFE8]">
                  {FINAL_CTA_CONTENT.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
                <a
                  href={SCHOOL_IDENTITY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-7 py-3 font-display text-base font-extrabold text-brand-dark transition-colors duration-150 hover:bg-[#e3bc3b] active:scale-[0.985] sm:w-auto"
                >
                  <span>{FINAL_CTA_CONTENT.primaryCta}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:translate-x-1"
                  >
                    →
                  </span>
                  <span className="sr-only"> (abre o WhatsApp da escola em nova aba)</span>
                </a>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm lg:justify-end">
                  <a
                    href={SCHOOL_IDENTITY.phoneHref}
                    className="inline-flex min-h-[36px] items-center font-semibold text-white/95 underline decoration-white/35 underline-offset-4 hover:text-brand-yellow"
                  >
                    Ligar: {SCHOOL_IDENTITY.whatsappDisplay}
                  </a>
                  <a
                    href={`mailto:${SCHOOL_IDENTITY.email}`}
                    className="inline-flex min-h-[36px] items-center font-semibold text-white/95 underline decoration-white/35 underline-offset-4 hover:text-brand-yellow"
                  >
                    {SCHOOL_IDENTITY.email}
                  </a>
                  <a
                    href={SCHOOL_IDENTITY.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[36px] items-center font-semibold text-brand-yellow underline underline-offset-4 hover:text-white"
                  >
                    {SCHOOL_IDENTITY.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
