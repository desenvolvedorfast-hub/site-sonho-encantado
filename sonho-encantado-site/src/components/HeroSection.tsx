import { useState } from 'react';
import { HERO_CONTENT, SCHOOL_IDENTITY } from '../data/schoolContent';
import { PhotoSlot } from './PhotoSlot';

export function HeroSection() {
  const [heroPhotoMissing, setHeroPhotoMissing] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Coluna Editorial Esquerda */}
        <div className="lg:col-span-6">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
            {HERO_CONTENT.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-4 font-display text-4xl font-extrabold leading-[1.06] text-brand-dark sm:text-5xl lg:text-[3.5rem]"
          >
            {HERO_CONTENT.headline}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-muted sm:text-[1.15rem]">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
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

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-brand-dark/10 pt-5 text-sm text-brand-muted">
            <span className="font-semibold text-brand-dark">{SCHOOL_IDENTITY.slogan}</span>
            <span aria-hidden="true" className="hidden text-brand-dark/30 sm:inline">
              ·
            </span>
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

        {/* Coluna Direita: Fotografia real limpa ou Painel Institucional se ausente */}
        <div className="lg:col-span-6">
          {!heroPhotoMissing ? (
            <figure className="relative mx-auto max-w-xl lg:ml-auto lg:mr-0">
              <div className="relative border-l-4 border-brand-yellow pl-3 sm:pl-4">
                <PhotoSlot
                  src={HERO_CONTENT.imageSrc}
                  alt={HERO_CONTENT.imageAlt}
                  aspectClass="aspect-[4/4.2]"
                  objectPosition="object-[50%_20%]"
                  className="shadow-editorial"
                  priority
                  onMissing={() => setHeroPhotoMissing(true)}
                />
              </div>
              <figcaption className="mt-3.5 flex flex-wrap items-center justify-between gap-2 pl-4 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                <span>Baby Class · Educação Infantil · Ensino Fundamental até o 5º ano</span>
                <span className="text-brand-green">{SCHOOL_IDENTITY.neighborhood}</span>
              </figcaption>
            </figure>
          ) : (
            <aside
              aria-label="Resumo institucional"
              className="relative overflow-hidden rounded-2xl border border-brand-dark/12 bg-brand-dark p-8 text-brand-paper shadow-editorial sm:p-10"
            >
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 text-brand-yellow/15"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M40 160C40 85 90 40 170 40C170 115 125 160 50 160H40Z" />
              </svg>

              <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
                {SCHOOL_IDENTITY.officialName}
              </p>
              <p className="mt-4 font-display text-2xl font-extrabold leading-snug sm:text-3xl">
                {SCHOOL_IDENTITY.slogan}
              </p>
              <ul className="mt-6 space-y-3 border-t border-brand-paper/15 pt-6 text-sm text-[#DCE7E1] sm:text-base">
                <li>• Baby Class, Educação Infantil e até o 5º ano</li>
                <li>• Aproximadamente 20 anos junto às famílias do Guamá</li>
                <li>• Música, Computação e Inglês na rotina escolar</li>
                <li>• Duas unidades no bairro do Guamá, Belém/PA</li>
              </ul>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
