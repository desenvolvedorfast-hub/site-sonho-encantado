import {
  COMPLEMENTARY_SERVICES_CONTENT,
  INSTITUTIONAL_VIDEOS,
  SCHOOL_IDENTITY,
} from '../data/schoolContent';
import { Reveal } from './Reveal';
import { VideoSlot } from './VideoSlot';

export function ComplementaryServicesSection() {
  const hasAuthorizedVideo = INSTITUTIONAL_VIDEOS.some((video) => video.authorized);

  return (
    <section
      id="servicos-unidade-2"
      aria-labelledby="servicos-unidade-2-heading"
      className="border-t border-brand-dark/10 bg-brand-paper py-14 sm:py-18 lg:py-22"
    >
      <div className="container-editorial">
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

        {/* Grade editorial aberta sem excesso de cartões repetitivos */}
        <Reveal delayMs={70}>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 border-y border-brand-dark/15 py-9 md:grid-cols-2">
            {COMPLEMENTARY_SERVICES_CONTENT.services.map((service) => (
              <article
                key={service.id}
                className="border-l-2 border-brand-blue pl-5"
              >
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
                  {service.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-extrabold text-brand-dark sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-body-fluid mt-2.5 text-brand-ink">
                  {service.description}
                </p>

                <p className="mt-3 text-sm font-semibold text-brand-muted">
                  {service.details.join(' · ')}
                </p>

                {service.note && (
                  <p className="mt-2.5 text-xs font-medium leading-relaxed text-brand-dark">
                    {service.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={110}>
          <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs leading-relaxed text-brand-muted sm:text-sm">
              {COMPLEMENTARY_SERVICES_CONTENT.disclaimer}
            </p>

            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-md border border-brand-green bg-white px-5 py-2.5 font-display text-sm font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-white active:scale-[0.985]"
            >
              <span>{COMPLEMENTARY_SERVICES_CONTENT.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              >
                →
              </span>
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>
          </div>
        </Reveal>

        {/* Espaço reservado para vídeos institucionais apenas quando autorizados (oculto em produção por padrão) */}
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
