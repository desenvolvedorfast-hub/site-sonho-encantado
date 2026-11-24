import { FINAL_CTA_CONTENT, SCHOOL_IDENTITY, VISIT_JOURNEY_STEPS } from '../data/schoolContent';
import { Reveal } from './Reveal';

export function FinalCtaSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="bg-brand-paper py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
            {/* Linha do tempo vertical: jornada de visita e matrícula */}
            <div className="rounded-lg border border-brand-dark/12 bg-white p-6 shadow-card sm:p-8 lg:col-span-5">
              <p className="eyebrow-label">Como funciona sua visita</p>
              <h3 className="text-subsection-title mt-2 font-display font-extrabold text-brand-dark">
                Do primeiro contato ao acolhimento da família.
              </h3>

              <ol className="relative mt-6 space-y-5 border-l-2 border-brand-green/25 pl-6">
                {VISIT_JOURNEY_STEPS.map((step) => (
                  <li key={step.number} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[33px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-green font-display text-[0.7rem] font-extrabold text-white"
                    >
                      {step.number}
                    </span>
                    <p className="font-display text-base font-extrabold text-brand-dark">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-brand-muted">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Bloco principal de contato com a secretaria */}
            <div className="flex flex-col justify-between rounded-lg bg-brand-green px-6 py-8 text-brand-paper shadow-editorial sm:px-9 sm:py-10 lg:col-span-7 lg:px-11">
              <div>
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
                  {FINAL_CTA_CONTENT.eyebrow}
                </p>
                <h2
                  id="contato-heading"
                  className="text-section-title mt-3 font-display font-extrabold text-white"
                >
                  {FINAL_CTA_CONTENT.title}
                </h2>
                <p className="text-body-fluid mt-4 max-w-xl text-[#E4EFE8]">
                  {FINAL_CTA_CONTENT.description}
                </p>
              </div>

              <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
                <a
                  href={SCHOOL_IDENTITY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-7 py-3 font-display text-base font-extrabold text-brand-dark transition-colors duration-150 hover:bg-[#e3bc3b] active:scale-[0.985] sm:w-auto"
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

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
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
