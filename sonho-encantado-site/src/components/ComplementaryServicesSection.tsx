import {
  COMPLEMENTARY_SERVICES_CONTENT,
  INSTITUTIONAL_VIDEOS,
  SCHOOL_IDENTITY,
} from '../data/schoolContent';
import { Reveal } from './Reveal';
import { VideoSlot } from './VideoSlot';

export function ComplementaryServicesSection() {
  const hasAuthorizedVideo = INSTITUTIONAL_VIDEOS.some((video) => video.authorized);
  const { therapeuticServices, tutoringService } = COMPLEMENTARY_SERVICES_CONTENT;

  return (
    <section
      id="servicos-unidade-2"
      aria-labelledby="servicos-unidade-2-heading"
      className="border-t border-brand-dark/10 bg-brand-paper py-14 sm:py-18 lg:py-24"
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

        {/* Grupo 1: Acompanhamento Terapêutico (Psicologia, Psicopedagogia e Musicoterapia) */}
        <Reveal delayMs={70}>
          <div className="mt-10 border border-brand-dark/12 bg-white p-6 sm:p-8 lg:p-10">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              {COMPLEMENTARY_SERVICES_CONTENT.therapeuticGroupTitle}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-8 divide-y divide-brand-dark/12 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {therapeuticServices.map((service, idx) => (
                <article
                  key={service.id}
                  className={idx > 0 ? 'pt-7 lg:pl-8 lg:pt-0' : ''}
                >
                  <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-muted">
                    {service.category}
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-extrabold text-brand-dark sm:text-[1.75rem]">
                    {service.title}
                  </h3>

                  <p className="text-body-fluid mt-3 text-brand-ink">
                    {service.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-brand-green">
                    {service.details.join(' · ')}
                  </p>

                  {service.note && (
                    <p className="mt-3 border-l-2 border-brand-blue pl-3 text-xs font-medium leading-relaxed text-brand-dark">
                      {service.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grupo 2: Reforço Escolar em destaque pedagógico próprio */}
        <Reveal delayMs={110}>
          <article className="mt-6 grid grid-cols-1 items-center gap-6 border-l-4 border-brand-yellow bg-brand-cream/85 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.15em] text-brand-green">
                {tutoringService.category}
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-brand-dark sm:text-[1.75rem]">
                {tutoringService.title}
              </h3>
              <p className="text-body-fluid mt-3 text-brand-ink">
                {tutoringService.description}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 border-t border-brand-dark/12 pt-5 sm:grid-cols-2 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {tutoringService.details.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[0.95rem] font-semibold leading-snug text-brand-dark sm:text-base"
                >
                  <span aria-hidden="true" className="text-brand-green">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delayMs={130}>
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
