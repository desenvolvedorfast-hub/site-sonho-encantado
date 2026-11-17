import { HERO_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-10 pt-6 sm:pb-14 sm:pt-10 lg:pb-20 lg:pt-14"
    >
      <div className="container-editorial grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:gap-y-5">
        {/* Bloco 1: Eyebrow + Título principal (sempre primeiro) */}
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
            {HERO_CONTENT.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="text-hero-title mt-3 font-display font-extrabold text-brand-dark"
          >
            {HERO_CONTENT.headline}
          </h1>
        </div>

        {/* Bloco 2: Fotografia — no mobile aparece logo após o título; no desktop ocupa a coluna direita */}
        <figure className="lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
          <div className="border-l-4 border-brand-yellow pl-3 sm:pl-4">
            <PhotoSlot
              src={HERO_CONTENT.imageSrc}
              alt={HERO_CONTENT.imageAlt}
              photoGuide={HERO_CONTENT.photoGuide}
              aspectClass="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.6]"
              objectPosition="object-[50%_20%]"
              className="shadow-editorial"
              priority
            />
          </div>
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 pl-4 text-xs font-semibold uppercase tracking-wider text-brand-muted">
            <span>Baby Class · Educação Infantil · Fundamental até o 5º ano</span>
            <span className="text-brand-green">{SCHOOL_IDENTITY.neighborhood}</span>
          </figcaption>
        </figure>

        {/* Bloco 3: Texto de apoio + CTAs + links */}
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="text-body-fluid max-w-xl text-brand-muted">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#nossa-historia"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3 font-display text-base font-bold text-white shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:bg-brand-dark active:scale-[0.98]"
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
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-brand-dark/30 bg-white px-7 py-3 font-display text-base font-bold text-brand-dark transition-colors hover:border-brand-dark hover:bg-brand-cream active:scale-[0.98]"
            >
              {HERO_CONTENT.secondaryCta}
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-brand-dark/10 pt-4 text-sm text-brand-muted">
            <span className="font-semibold text-brand-dark">{SCHOOL_IDENTITY.slogan}</span>
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
