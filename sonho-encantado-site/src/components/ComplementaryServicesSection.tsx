import type { ReactNode } from 'react';
import {
  COMPLEMENTARY_SERVICES_CONTENT,
  INSTITUTIONAL_VIDEOS,
  SCHOOL_IDENTITY,
} from '../data/schoolContent';
import { Reveal } from './Reveal';
import { VideoSlot } from './VideoSlot';

const SERVICE_STYLE_MAP: Record<
  string,
  {
    cardSurface: string;
    leftBorder: string;
    badge: string;
    iconBox: string;
  }
> = {
  psicologia: {
    cardSurface: 'bg-white',
    leftBorder: 'border-l-brand-blue',
    badge: 'bg-brand-blue-soft text-brand-dark',
    iconBox: 'bg-brand-blue-soft/80 text-brand-dark',
  },
  psicopedagogia: {
    cardSurface: 'bg-white',
    leftBorder: 'border-l-brand-green',
    badge: 'bg-brand-green/10 text-brand-green',
    iconBox: 'bg-brand-green/10 text-brand-green',
  },
  musicoterapia: {
    cardSurface: 'bg-white',
    leftBorder: 'border-l-brand-dark',
    badge: 'bg-brand-paper text-brand-dark border border-brand-dark/15',
    iconBox: 'bg-brand-paper text-brand-dark',
  },
  'reforco-escolar': {
    cardSurface: 'bg-[#FFFDF6]',
    leftBorder: 'border-l-brand-yellow',
    badge: 'bg-brand-yellow/40 text-brand-dark',
    iconBox: 'bg-brand-yellow/35 text-brand-dark',
  },
};

function getServiceIcon(id: string): ReactNode {
  const cls = 'h-5 w-5 shrink-0';
  switch (id) {
    case 'psicologia':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7-4.4-7-9.6A4.2 4.2 0 0 1 12 7.5a4.2 4.2 0 0 1 7 2.9C19 15.6 12 20 12 20z" />
        </svg>
      );
    case 'psicopedagogia':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 0 1 6.5 4H12v16H6.5A2.5 2.5 0 0 0 4 22V6.5zM20 6.5A2.5 2.5 0 0 0 17.5 4H12v16h5.5A2.5 2.5 0 0 1 20 22V6.5z" />
        </svg>
      );
    case 'musicoterapia':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.5V7l9-2v10.5" />
          <circle cx="7" cy="18" r="2.5" />
          <circle cx="16" cy="16" r="2.5" />
        </svg>
      );
    default:
      // Reforço Escolar
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4l6 6-9.5 9.5H4.5v-6L14 4zM11.5 6.5l6 6" />
        </svg>
      );
  }
}

export function ComplementaryServicesSection() {
  const hasAuthorizedVideo = INSTITUTIONAL_VIDEOS.some((video) => video.authorized);
  const allServices = [
    ...COMPLEMENTARY_SERVICES_CONTENT.therapeuticServices,
    COMPLEMENTARY_SERVICES_CONTENT.tutoringService,
  ];

  return (
    <section
      id="servicos-unidade-2"
      aria-labelledby="servicos-unidade-2-heading"
      className="border-t border-brand-dark/10 bg-brand-paper py-14 sm:py-18 lg:py-24"
    >
      <div className="container-editorial">
        {/* Cabeçalho com hierarquia clara */}
        <Reveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="eyebrow-label">{COMPLEMENTARY_SERVICES_CONTENT.eyebrow}</p>
              <h2
                id="servicos-unidade-2-heading"
                className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
              >
                {COMPLEMENTARY_SERVICES_CONTENT.title}
              </h2>
            </div>

            <p className="text-body-fluid text-brand-muted lg:col-span-6">
              {COMPLEMENTARY_SERVICES_CONTENT.intro}
            </p>
          </div>
        </Reveal>

        {/* Bloco informativo destacando o caráter complementar e independente do ensino regular */}
        <Reveal delayMs={50}>
          <div className="mt-8 flex items-start gap-3.5 rounded-lg border border-brand-blue/40 border-l-4 border-l-brand-blue bg-brand-blue-soft/60 p-4 sm:p-5">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9.5" />
              <path strokeLinecap="round" d="M12 10.5v5.5M12 7.5h.01" />
            </svg>
            <p className="text-sm leading-relaxed text-brand-ink sm:text-[0.96rem]">
              <strong className="font-display font-bold text-brand-dark">
                Atendimento complementar na Unidade II:
              </strong>{' '}
              estes serviços funcionam de modo independente do ensino regular, não substituem a escolarização e têm formato, vagas e horários confirmados diretamente pela secretaria da unidade.
            </p>
          </div>
        </Reveal>

        {/* Grade modular 2x2 no desktop/tablet, 1 por linha no mobile */}
        <Reveal delayMs={80}>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
            {allServices.map((service) => {
              const style = SERVICE_STYLE_MAP[service.id] ?? SERVICE_STYLE_MAP.psicologia;

              return (
                <article
                  key={service.id}
                  className={`flex h-full flex-col justify-between rounded-lg border border-brand-dark/12 border-l-4 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-dark/25 hover:shadow-card sm:p-7 ${style.cardSurface} ${style.leftBorder}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`inline-block rounded-md px-2.5 py-1 font-display text-[0.72rem] font-extrabold uppercase tracking-[0.12em] ${style.badge}`}
                      >
                        {service.category}
                      </span>

                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${style.iconBox}`}
                      >
                        {getServiceIcon(service.id)}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-extrabold text-brand-dark sm:text-[1.7rem]">
                      {service.title}
                    </h3>

                    <p className="text-body-fluid mt-2.5 text-brand-ink">
                      {service.description}
                    </p>

                    {service.note && (
                      <p className="mt-3 border-l-2 border-brand-blue/70 pl-3 text-xs font-semibold leading-relaxed text-brand-dark sm:text-[0.82rem]">
                        {service.note}
                      </p>
                    )}
                  </div>

                  {/* Palavras-chave / diferenciais práticos */}
                  <ul className="mt-5 flex flex-wrap gap-2 border-t border-brand-dark/10 pt-4">
                    {service.details.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-brand-dark/12 bg-brand-paper/85 px-2.5 py-1 text-xs font-semibold text-brand-dark"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Reveal>

        {/* Faixa final integrada com observação de disponibilidade + CTA destacado */}
        <Reveal delayMs={120}>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-lg border border-brand-dark/12 bg-white p-5 sm:p-6 md:flex-row md:items-center">
            <p className="max-w-2xl text-sm leading-relaxed text-brand-muted">
              {COMPLEMENTARY_SERVICES_CONTENT.disclaimer}
            </p>

            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 font-display text-sm font-bold text-white shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:bg-brand-dark active:scale-[0.985] md:w-auto"
            >
              <span>{COMPLEMENTARY_SERVICES_CONTENT.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>
          </div>
        </Reveal>

        {(import.meta.env.DEV || hasAuthorizedVideo) && (
          <div className="mt-10 flex flex-wrap gap-6 border-t border-brand-dark/10 pt-8">
            {INSTITUTIONAL_VIDEOS.map((video) => (
              <VideoSlot key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
