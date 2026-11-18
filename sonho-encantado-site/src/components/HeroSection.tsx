import { HERO_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-12 pt-5 sm:pb-16 sm:pt-9 lg:pb-20 lg:pt-12"
    >
      {/* Plano arquitetônico sutil apenas no desktop para ancorar a fotografia sem poluição visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] bg-brand-cream/75 lg:block"
      />

      <div className="container-editorial relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:gap-y-6">
        {/* Bloco 1: Rótulo de localização + Título principal */}
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white px-3.5 py-1">
            <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden="true" />
            <span className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-dark">
              {HERO_CONTENT.eyebrow}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-hero-title mt-3.5 font-display font-extrabold text-brand-dark"
          >
            {HERO_CONTENT.headline}
          </h1>
        </div>

        {/* Bloco 2: Fotografia principal — no mobile entra imediatamente após o título; no desktop ocupa o plano direito */}
        <figure className="lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-2.5 -left-2.5 right-6 top-6 rounded-xl border-2 border-brand-yellow sm:-bottom-3.5 sm:-left-3.5"
            />
            <PhotoSlot
              src={HERO_CONTENT.imageSrc}
              alt={HERO_CONTENT.imageAlt}
              photoGuide={HERO_CONTENT.photoGuide}
              aspectClass="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4]"
              objectPosition="object-[50%_20%]"
              className="relative z-10 shadow-editorial"
              priority
            />
          </div>

          <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted sm:text-[0.8rem]">
            <span>Baby Class · Educação Infantil · Ensino Fundamental até o 5º ano</span>
            <span className="font-bold text-brand-green">{SCHOOL_IDENTITY.neighborhood}</span>
          </figcaption>
        </figure>

        {/* Bloco 3: Proposta institucional + CTAs hierarquizados */}
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="text-lead-fluid max-w-[54ch] text-brand-muted">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#nossa-historia"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-brand-green px-7 py-3 font-display text-base font-bold text-white shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:bg-brand-dark active:scale-[0.98]"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border-2 border-brand-dark/25 bg-white px-7 py-3 font-display text-base font-bold text-brand-dark transition-colors hover:border-brand-dark hover:bg-brand-cream active:scale-[0.98]"
            >
              {HERO_CONTENT.secondaryCta}
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-brand-dark/12 pt-4 text-sm sm:text-[0.95rem]">
            <span className="font-display font-bold text-brand-dark">
              {SCHOOL_IDENTITY.slogan}
            </span>
            <span aria-hidden="true" className="text-brand-dark/30">·</span>
            <a
              href={SCHOOL_IDENTITY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-green underline decoration-brand-green/35 underline-offset-4 hover:text-brand-dark"
            >
              Instagram {SCHOOL_IDENTITY.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
