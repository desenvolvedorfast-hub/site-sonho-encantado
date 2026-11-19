import { SCHOOL_UNITS } from '../data/schoolContent';
import { Reveal } from './Reveal';

export function UnitsSection() {
  return (
    <section
      id="unidades"
      aria-labelledby="unidades-heading"
      className="border-t border-brand-dark/10 bg-brand-cream/75 py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow-label">Onde estamos no Guamá</p>
            <h2
              id="unidades-heading"
              className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
            >
              Duas unidades em Belém para receber sua família.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-7 lg:grid-cols-12">
          {SCHOOL_UNITS.map((unit, idx) => (
            <Reveal
              key={unit.id}
              delayMs={idx * 80}
              className={unit.therapeuticNote ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <article
                className={`flex h-full flex-col justify-between rounded-lg border border-brand-dark/15 p-6 sm:p-8 ${
                  unit.therapeuticNote ? 'bg-white' : 'bg-brand-paper'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-brand-dark/12 pb-3.5">
                    <span className="font-display text-sm font-extrabold uppercase tracking-[0.12em] text-brand-dark">
                      {unit.name}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                      {unit.neighborhoodNote}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-extrabold text-brand-dark sm:text-2xl">
                    {unit.address}
                  </h3>
                  <p className="mt-1 text-base font-medium text-brand-muted">
                    {unit.cityState}
                  </p>

                  <p className="text-body-fluid mt-3.5 text-brand-ink">
                    {unit.summary}
                  </p>

                  {unit.therapeuticNote && (
                    <div className="mt-6 border-l-2 border-brand-blue bg-brand-blue-soft/60 p-4 sm:p-5">
                      <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-dark">
                        {unit.therapeuticNote.badge}
                      </p>
                      <h4 className="mt-1.5 font-display text-base font-extrabold text-brand-dark sm:text-lg">
                        {unit.therapeuticNote.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-ink">
                        {unit.therapeuticNote.description}
                      </p>

                      <p className="mt-3 font-display text-sm font-bold text-brand-dark">
                        {unit.therapeuticNote.services.join(' · ')}
                      </p>

                      <p className="mt-2.5 text-xs leading-relaxed text-brand-muted">
                        {unit.therapeuticNote.disclaimer}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-1">
                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-brand-green bg-white px-5 py-2 font-display text-sm font-bold text-brand-green transition-colors duration-150 hover:bg-brand-green hover:text-white active:scale-[0.985]"
                  >
                    <span>Abrir no Google Maps</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-150 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                    <span className="sr-only">
                      {' '}
                      ({unit.name} — abre localização em nova aba)
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
