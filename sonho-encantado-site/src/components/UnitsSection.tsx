import { SCHOOL_UNITS } from '../data/schoolContent';

export function UnitsSection() {
  return (
    <section
      id="unidades"
      aria-labelledby="unidades-heading"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="container-editorial">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
            Onde estamos no Guamá
          </p>
          <h2
            id="unidades-heading"
            className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
          >
            Duas unidades em Belém para receber sua família.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-7 lg:grid-cols-12">
          {SCHOOL_UNITS.map((unit) => (
            <article
              key={unit.id}
              className={`flex flex-col justify-between rounded-xl border border-brand-dark/15 p-6 sm:p-8 ${
                unit.therapeuticNote
                  ? 'bg-white lg:col-span-7'
                  : 'bg-brand-cream lg:col-span-5'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-dark/10 pb-3.5">
                  <span className="font-display text-sm font-extrabold uppercase tracking-wider text-brand-dark">
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
                  <div className="mt-5 rounded-xl border border-brand-blue/50 bg-brand-blue-soft p-4 sm:p-5">
                    <span className="inline-block font-display text-xs font-extrabold uppercase tracking-wider text-brand-dark">
                      {unit.therapeuticNote.badge}
                    </span>
                    <h4 className="mt-1 font-display text-base font-extrabold text-brand-dark sm:text-lg">
                      {unit.therapeuticNote.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-ink">
                      {unit.therapeuticNote.description}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2">
                      {unit.therapeuticNote.services.map((service) => (
                        <li
                          key={service}
                          className="rounded-md border border-brand-dark/15 bg-white px-3 py-1 text-xs font-bold text-brand-dark"
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

              <div className="mt-6 pt-1">
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2 font-display text-sm font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-white active:scale-[0.98]"
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
