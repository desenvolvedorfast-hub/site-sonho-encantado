import { useState } from 'react';
import { HERO_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HeroSection() {
  const [photoMissing, setPhotoMissing] = useState(false);
  const hidePhotoBlock = import.meta.env.PROD && photoMissing;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-brand-paper pb-12 pt-6 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-14"
    >
      <div className="container-editorial grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-x-14 lg:gap-y-5">
        {/* Bloco 1: Localização tipográfica discreta (sem cápsula nem bolinha) + Título principal */}
        <div
          className={`hero-settle ${
            hidePhotoBlock
              ? 'lg:col-span-9'
              : 'lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end'
          }`}
        >
          <p className="inline-flex items-center gap-3 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-brand-green">
            <span className="h-px w-6 bg-brand-green" aria-hidden="true" />
            <span>{HERO_CONTENT.eyebrow}</span>
          </p>

          <h1
            id="hero-heading"
            className="text-hero-title mt-3.5 font-display font-extrabold text-brand-dark"
          >
            {HERO_CONTENT.headline}
          </h1>
        </div>

        {/* Bloco 2: Fotografia limpa e protagonista, sem camadas de brilho nem caixas deslocadas */}
        {!hidePhotoBlock && (
          <figure
            className="hero-settle lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1"
            style={{ animationDelay: '70ms' }}
          >
            <PhotoSlot
              src={HERO_CONTENT.imageSrc}
              alt={HERO_CONTENT.imageAlt}
              photoGuide={HERO_CONTENT.photoGuide}
              width={1200}
              height={960}
              aspectClass="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4]"
              objectPosition="object-[50%_20%]"
              className="border-b-4 border-brand-yellow shadow-[0_18px_40px_-24px_rgba(18,59,43,0.28)]"
              priority
              onMissing={() => setPhotoMissing(true)}
            />

            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold tracking-wide text-brand-muted sm:text-[0.82rem]">
              <span>Baby Class · Educação Infantil · Ensino Fundamental até o 5º ano</span>
              <span className="font-bold text-brand-green">{SCHOOL_IDENTITY.neighborhood}</span>
            </figcaption>
          </figure>
        )}

        {/* Bloco 3: Proposta institucional + CTAs limpos */}
        <div
          className={`hero-settle ${
            hidePhotoBlock
              ? 'lg:col-span-9'
              : 'lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:self-start'
          }`}
          style={{ animationDelay: '120ms' }}
        >
          <p className="text-lead-fluid max-w-[52ch] text-brand-muted">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 font-display text-base font-bold text-white transition-colors duration-150 hover:bg-brand-dark active:scale-[0.985]"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>

            <a
              href="#nossa-historia"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-brand-dark/25 bg-white px-6 py-3 font-display text-base font-bold text-brand-dark transition-colors duration-150 hover:border-brand-dark hover:bg-brand-cream active:scale-[0.985]"
            >
              {HERO_CONTENT.secondaryCta}
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
