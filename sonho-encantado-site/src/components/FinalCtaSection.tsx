import { SCHOOL_IDENTITY } from '../data/schoolContent';

export function FinalCtaSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-green px-6 py-12 text-brand-paper shadow-editorial sm:px-10 sm:py-14 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
                Visitas e Matrículas
              </p>
              <h2
                id="contato-heading"
                className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl"
              >
                Agende uma visita e conheça o Sonho Encantado de perto.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#E4EFE8] sm:text-lg">
                Converse diretamente com a nossa secretaria para tirar dúvidas sobre etapas,
                vagas e visitação presencial às unidades no Guamá.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 lg:col-span-5 lg:items-end">
              <a
                href={SCHOOL_IDENTITY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 py-3 font-display text-base font-extrabold text-brand-dark transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
              >
                <span>Fale com a secretaria</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-1"
                >
                  →
                </span>
                <span className="sr-only"> (abre o WhatsApp da escola em nova aba)</span>
              </a>

              <a
                href={`mailto:${SCHOOL_IDENTITY.email}`}
                className="inline-flex min-h-[46px] w-full items-center justify-center rounded-full border border-white/35 bg-brand-dark/30 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:w-auto"
              >
                {SCHOOL_IDENTITY.email}
              </a>

              <a
                href={SCHOOL_IDENTITY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-brand-yellow underline underline-offset-4 hover:text-white"
              >
                Instagram {SCHOOL_IDENTITY.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
