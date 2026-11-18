import { HERO_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF7] via-brand-paper to-[#F2EFE1] pb-12 pt-5 sm:pb-16 sm:pt-9 lg:pb-22 lg:pt-12"
    >
      {/* Luz atmosférica sutil e lenta (sem neon nem ruído visual) */}
      <div
        aria-hidden="true"
        className="ambient-drift-slow pointer-events-none absolute -right-28 -top-24 h-[420px] w-[420px] rounded-full opacity-75"
        style={{
          background:
            'radial-gradient(circle, rgba(237, 200, 75, 0.24) 0%, rgba(237, 200, 75, 0.06) 45%, transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="ambient-breathe-slow pointer-events-none absolute -bottom-28 -left-24 h-[380px] w-[380px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(98, 185, 213, 0.14) 0%, rgba(7, 95, 54, 0.05) 48%, transparent 74%)',
        }}
      />

      {/* Arco orgânico discreto simbolizando descoberta e crescimento */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 hidden h-[440px] w-[440px] text-brand-green/[0.06] lg:block"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M40 360C110 220 220 120 385 55"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        <circle cx="320" cy="110" r="145" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="container-editorial relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:gap-y-5">
        {/* Bloco 1: Rótulo + Título principal */}
        <div className="hero-settle lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white/90 px-3.5 py-1 shadow-sm">
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

        {/* Bloco 2: Fotografia principal com halo luminoso suave atrás e moldura editorial */}
        <figure
          className="hero-settle relative lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1"
          style={{ animationDelay: '90ms' }}
        >
          <div
            aria-hidden="true"
            className="ambient-breathe-slow pointer-events-none absolute -inset-4 rounded-2xl"
            style={{
              background:
                'radial-gradient(circle at 60% 45%, rgba(237, 200, 75, 0.22), rgba(98, 185, 213, 0.08) 55%, transparent 78%)',
            }}
          />

          <div className="relative rounded-xl border border-brand-dark/10 bg-white/80 p-2 shadow-editorial sm:p-2.5">
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -right-2 left-10 top-10 -z-10 rounded-xl border border-brand-yellow/80 bg-brand-yellow/20"
            />
            <PhotoSlot
              src={HERO_CONTENT.imageSrc}
              alt={HERO_CONTENT.imageAlt}
              photoGuide={HERO_CONTENT.photoGuide}
              aspectClass="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4]"
              objectPosition="object-[50%_20%]"
              priority
            />
          </div>

          <figcaption className="mt-3.5 flex flex-wrap items-center justify-between gap-2 px-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted sm:text-[0.8rem]">
            <span>Baby Class · Educação Infantil · Ensino Fundamental até o 5º ano</span>
            <span className="font-bold text-brand-green">{SCHOOL_IDENTITY.neighborhood}</span>
          </figcaption>
        </figure>

        {/* Bloco 3: Proposta institucional + CTAs com microinterações táteis */}
        <div
          className="hero-settle lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start"
          style={{ animationDelay: '150ms' }}
        >
          <p className="text-lead-fluid max-w-[54ch] text-brand-muted">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#nossa-historia"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-brand-green px-7 py-3 font-display text-base font-bold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_14px_28px_-10px_rgba(7,95,54,0.38)] active:scale-[0.985]"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border-2 border-brand-dark/25 bg-white/95 px-7 py-3 font-display text-base font-bold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-dark hover:bg-brand-cream active:scale-[0.985]"
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
              className="font-semibold text-brand-green underline decoration-brand-green/35 underline-offset-4 transition-colors hover:text-brand-dark"
            >
              Instagram {SCHOOL_IDENTITY.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
