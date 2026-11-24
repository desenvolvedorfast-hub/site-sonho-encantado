import type { ReactNode } from 'react';
import {
  COMPLEMENTARY_SERVICES_CONTENT,
  INSTITUTIONAL_VIDEOS,
  SCHOOL_IDENTITY,
} from '../data/schoolContent';
import { Reveal } from './Reveal';
import { VideoSlot } from './VideoSlot';

const CARD_STYLES: Record<
  string,
  {
    surface: string;
    topRule: string;
    numeral: string;
    title: string;
    body: string;
    bulletBorder: string;
    bulletText: string;
    iconBox: string;
    noteClass: string;
  }
> = {
  psicologia: {
    surface: 'bg-white border border-brand-dark/12',
    topRule: 'border-t-4 border-t-brand-blue',
    numeral: 'text-brand-green',
    title: 'text-brand-dark',
    body: 'text-brand-ink',
    bulletBorder: 'border-l-brand-blue',
    bulletText: 'text-brand-dark',
    iconBox: 'bg-brand-blue-soft text-brand-dark',
    noteClass: 'text-brand-muted',
  },
  psicopedagogia: {
    surface: 'bg-brand-cream/85 border border-brand-dark/12',
    topRule: 'border-t-4 border-t-brand-green',
    numeral: 'text-brand-green',
    title: 'text-brand-dark',
    body: 'text-brand-ink',
    bulletBorder: 'border-l-brand-green',
    bulletText: 'text-brand-dark',
    iconBox: 'bg-white text-brand-green',
    noteClass: 'text-brand-muted',
  },
  musicoterapia: {
    surface: 'bg-brand-dark border border-brand-dark text-brand-paper',
    topRule: 'border-t-4 border-t-brand-yellow',
    numeral: 'text-brand-yellow',
    title: 'text-white',
    body: 'text-[#E1ECE6]',
    bulletBorder: 'border-l-brand-yellow',
    bulletText: 'text-brand-paper',
    iconBox: 'bg-brand-paper/10 text-brand-yellow',
    noteClass: 'text-[#C8D8D0] border-brand-paper/15',
  },
  'reforco-escolar': {
    surface: 'bg-[#FAF6E6] border border-brand-dark/14',
    topRule: 'border-t-4 border-t-brand-yellow',
    numeral: 'text-brand-dark',
    title: 'text-brand-dark',
    body: 'text-brand-ink',
    bulletBorder: 'border-l-brand-yellow',
    bulletText: 'text-brand-dark',
    iconBox: 'bg-white text-brand-dark',
    noteClass: 'text-brand-muted',
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 0 1 6.5 4H12v15.5H6.5A2.5 2.5 0 0 0 4 21.5v-15zM20 6.5A2.5 2.5 0 0 0 17.5 4H12v15.5h5.5a2.5 2.5 0 0 1 2.5 2v-15z" />
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
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4l6 6-9.5 9.5H4.5v-6L14 4zM11.5 6.5l6 6" />
        </svg>
      );
  }
}

export function ComplementaryServicesSection() {
  const hasAuthorizedVideo = INSTITUTIONAL_VIDEOS.some((video) => video.authorized);

  return (
    <section
      id="servicos-unidade-2"
      aria-labelledby="servicos-unidade-2-heading"
      className="border-t border-brand-dark/10 bg-brand-paper py-14 sm:py-18 lg:py-24"
    >
      <div className="container-editorial">
        {/* Bloco principal: título + introdução + aviso claro da Unidade II */}
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
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

          <div className="mt-7 flex items-start gap-3.5 rounded-lg border border-brand-blue/40 border-l-4 border-l-brand-blue bg-brand-blue-soft/65 p-4 sm:p-5">
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
            <p className="text-sm font-medium leading-relaxed text-brand-ink sm:text-[0.96rem]">
              {COMPLEMENTARY_SERVICES_CONTENT.separationNotice}
            </p>
          </div>
        </Reveal>

        {/* Grade 2x2 diferenciada com os 4 serviços */}
        <Reveal delayMs={70}>
          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
            {COMPLEMENTARY_SERVICES_CONTENT.services.map((service) => {
              const style = CARD_STYLES[service.id] ?? CARD_STYLES.psicologia;

              return (
                <article
                  key={service.id}
                  className={`flex h-full flex-col justify-between rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card sm:p-8 ${style.surface} ${style.topRule}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`font-display text-xs font-extrabold uppercase tracking-[0.14em] ${style.numeral}`}
                      >
                        {service.category}
                      </span>

                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${style.iconBox}`}
                      >
                        {getServiceIcon(service.id)}
                      </span>
                    </div>

                    <h3
                      className={`mt-3 font-display text-2xl font-extrabold sm:text-[1.8rem] ${style.title}`}
                    >
                      {service.title}
                    </h3>

                    <p className={`text-body-fluid mt-3 max-w-[46ch] ${style.body}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <ul className="space-y-2">
                      {service.details.map((item) => (
                        <li
                          key={item}
                          className={`border-l-2 pl-3 text-[0.95rem] font-semibold leading-snug ${style.bulletBorder} ${style.bulletText}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    {service.note && (
                      <p
                        className={`border-t pt-3 text-xs font-medium leading-relaxed ${style.noteClass}`}
                      >
                        {service.note}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        {/* Rodapé informativo da seção + CTA integrado */}
        <Reveal delayMs={110}>
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
