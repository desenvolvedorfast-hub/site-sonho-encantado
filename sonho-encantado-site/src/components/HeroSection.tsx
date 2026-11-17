import { HERO_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-14 pt-8 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14"
    >
      {/* Elemento gráfico sutil de descoberta/crescimento ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-yellow/20 blur-2xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Coluna Editorial Esquerda */}
        <div className="lg:col-span-6 lg:pr-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-cream px-3.5 py-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden="true" />
            <span className="font-display text-xs font-bold uppercase tracking-wider text-brand-dark">
              {HERO_CONTENT.eyebrow}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-brand-dark sm:text-5xl lg:text-[3.5rem]"
          >
            {HERO_CONTENT.headline}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-muted sm:text-xl">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#nossa-historia"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-green px-7 py-3 font-display text-base font-bold text-brand-paper shadow-card transition-transform duration-150 hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              {HERO_CONTENT.primaryCta}
            </a>

            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-brand-dark/25 bg-brand-paper px-7 py-3 font-display text-base font-bold text-brand-dark transition-colors hover:border-brand-dark hover:bg-brand-cream"
            >
              {HERO_CONTENT.secondaryCta}
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-brand-muted">
            Também no Instagram como{' '}
            <a
              href={SCHOOL_IDENTITY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-green underline decoration-brand-green/40 underline-offset-4 hover:text-brand-dark"
            >
              {SCHOOL_IDENTITY.instagramHandle}
            </a>
          </p>
        </div>

        {/* Coluna Visual Assimétrica Direita */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-lg lg:ml-auto lg:mr-0">
            {/* Moldura decorativa deslocada */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 right-8 top-6 rounded-editorial border-2 border-brand-yellow bg-brand-yellow/25 sm:-bottom-5 sm:-left-6"
            />

            <PhotoSlot
              src={HERO_CONTENT.imageSrc}
              alt={HERO_CONTENT.imageAlt}
              slotLabel={HERO_CONTENT.imageSlotLabel}
              aspectClass="aspect-[4/4.5]"
              className="relative z-10 shadow-editorial"
              priority
            />

            {/* Selo editorial discreto sobreposto */}
            <div className="relative z-20 -mt-8 ml-4 mr-4 rounded-2xl border border-brand-dark/10 bg-brand-paper p-4 shadow-card sm:ml-8 sm:mr-0 sm:max-w-xs sm:p-5">
              <p className="font-display text-xs font-extrabold uppercase tracking-wider text-brand-green">
                {SCHOOL_IDENTITY.slogan}
              </p>
              <p className="mt-1 text-sm leading-snug text-brand-ink">
                Baby Class, Educação Infantil e Ensino Fundamental até o 5º ano no Guamá.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
