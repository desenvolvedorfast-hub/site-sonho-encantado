import { SCHOOL_UNITS } from '../data/schoolContent';

export function UnitsSection() {
  return (
    <section
      id="unidades"
      aria-labelledby="unidades-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
            Onde estamos no Guamá
          </p>
          <h2
            id="unidades-heading"
            className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl"
          >
            Duas unidades em Belém para receber sua família com proximidade.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {SCHOOL_UNITS.map((unit) => (
            <article
              key={unit.id}
              className={`flex flex-col justify-between rounded-editorial border border-brand-dark/15 p-6 shadow-card sm:p-8 ${
                unit.therapeuticNote
                  ? 'bg-brand-paper lg:col-span-7'
                  : 'bg-brand-cream lg:col-span-5'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-brand-dark px-3.5 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-brand-paper">
                    {unit.name}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                    {unit.neighborhoodNote}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-extrabold text-brand-dark">
                  {unit.address}
                </h3>
                <p className="mt-1 text-base font-medium text-brand-muted">
                  {unit.cityState}
                </p>

                <p className="mt-4 text-base leading-relaxed text-brand-ink">
                  {unit.summary}
                </p>

                {/* Separação explícita e transparente entre ensino regular e serviços terapêuticos */}
                {unit.therapeuticNote && (
                  <div className="mt-6 rounded-2xl border border-brand-blue/60 bg-brand-blue-soft p-5">
                    <span className="inline-block rounded-full bg-brand-blue px-3 py-0.5 font-display text-xs font-extrabold text-brand-dark">
                      {unit.therapeuticNote.badge}
                    </span>
                    <h4 className="mt-3 font-display text-lg font-extrabold text-brand-dark">
                      {unit.therapeuticNote.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-ink">
                      {unit.therapeuticNote.description}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2">
                      {unit.therapeuticNote.services.map((service) => (
                        <li
                          key={service}
                          className="rounded-lg border border-brand-dark/15 bg-brand-paper px-3 py-1.5 text-xs font-bold text-brand-dark"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-3 text-xs leading-relaxed text-brand-muted">
                      {unit.therapeuticNote.disclaimer}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-7 pt-2">
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border-2 border-brand-green bg-brand-paper px-5 py-2.5 font-display text-sm font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-brand-paper"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"
                    />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  Abrir no Google Maps
                  <span className="sr-only">
                    {' '}
                    ({unit.name} — abre localização em nova aba)
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
