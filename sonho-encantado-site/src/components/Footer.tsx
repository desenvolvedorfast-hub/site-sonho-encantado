import { NAVIGATION_ITEMS, SCHOOL_IDENTITY, SCHOOL_UNITS } from '../data/schoolContent';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer className="border-t border-brand-dark/15 bg-brand-dark text-brand-paper">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Identidade */}
          <div className="md:col-span-4">
            <BrandLogo tone="light" compact />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#DCE7E1]">
              {SCHOOL_IDENTITY.officialName} — também presente nas redes como{' '}
              {SCHOOL_IDENTITY.instagramName}. Educação no bairro do {SCHOOL_IDENTITY.neighborhood},{' '}
              {SCHOOL_IDENTITY.cityState}.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p>
                <span className="font-semibold text-brand-yellow">E-mail: </span>
                <a
                  href={`mailto:${SCHOOL_IDENTITY.email}`}
                  className="underline decoration-brand-paper/30 underline-offset-4 hover:text-brand-yellow"
                >
                  {SCHOOL_IDENTITY.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand-yellow">Instagram: </span>
                <a
                  href={SCHOOL_IDENTITY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-brand-paper/30 underline-offset-4 hover:text-brand-yellow"
                >
                  {SCHOOL_IDENTITY.instagramHandle}
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand-yellow">WhatsApp: </span>
                <a
                  href={SCHOOL_IDENTITY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-brand-paper/30 underline-offset-4 hover:text-brand-yellow"
                >
                  Atendimento da secretaria
                </a>
              </p>
            </div>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-brand-yellow">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[36px] items-center text-[#DCE7E1] transition-colors hover:text-brand-yellow"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Endereços */}
          <div className="md:col-span-5">
            <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-brand-yellow">
              Unidades no Guamá
            </h2>
            <div className="mt-4 space-y-5 text-sm text-[#DCE7E1]">
              {SCHOOL_UNITS.map((unit) => (
                <div key={unit.id}>
                  <p className="font-display font-bold text-brand-paper">{unit.name}</p>
                  <p className="mt-0.5">
                    {unit.address} · {unit.cityState}
                  </p>
                  <a
                    href={unit.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs font-semibold text-brand-yellow underline underline-offset-4 hover:text-brand-paper"
                  >
                    Ver localização no mapa →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-brand-paper/15 pt-6 text-xs text-[#C5D5CD] sm:flex-row sm:items-center">
          <p>
            {SCHOOL_IDENTITY.officialName} · {SCHOOL_IDENTITY.slogan}
          </p>
          <p>Guamá, Belém/PA — Site institucional estático.</p>
        </div>
      </div>
    </footer>
  );
}
