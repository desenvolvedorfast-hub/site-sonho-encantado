import { NAVIGATION_ITEMS, SCHOOL_IDENTITY, SCHOOL_UNITS } from '../data/schoolContent';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer className="border-t border-brand-dark/15 bg-brand-dark text-brand-paper">
      <div className="container-editorial py-8 sm:py-10">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <BrandLogo tone="light" compact />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#DCE7E1]">
              Há mais de 18 anos acolhendo crianças do Baby Class ao 5º ano no bairro do Guamá, Belém/PA.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-xs font-extrabold uppercase tracking-wider text-brand-yellow">
              Navegação
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm md:grid-cols-1">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[34px] items-center text-[#DCE7E1] transition-colors hover:text-brand-yellow"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-display text-xs font-extrabold uppercase tracking-wider text-brand-yellow">
              Atendimento e Unidades
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={SCHOOL_IDENTITY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-brand-yellow"
              >
                WhatsApp {SCHOOL_IDENTITY.whatsappDisplay}
              </a>
              <a
                href={SCHOOL_IDENTITY.phoneHref}
                className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-brand-yellow"
              >
                Telefone {SCHOOL_IDENTITY.whatsappDisplay}
              </a>
              <a
                href={SCHOOL_IDENTITY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-brand-yellow"
              >
                Instagram {SCHOOL_IDENTITY.instagramHandle}
              </a>
              <a
                href={`mailto:${SCHOOL_IDENTITY.email}`}
                className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-brand-yellow"
              >
                {SCHOOL_IDENTITY.email}
              </a>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#C5D5CD]">
              Duas unidades no Guamá:{' '}
              <a
                href={SCHOOL_UNITS[0].mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-yellow underline underline-offset-4 hover:text-white"
              >
                Unidade I (Mapa)
              </a>{' '}
              ·{' '}
              <a
                href={SCHOOL_UNITS[1].mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-yellow underline underline-offset-4 hover:text-white"
              >
                Unidade II (Mapa)
              </a>
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col justify-between gap-2 border-t border-brand-paper/15 pt-5 text-xs text-[#C5D5CD] sm:flex-row sm:items-center">
          <p>© {SCHOOL_IDENTITY.officialName} — {SCHOOL_IDENTITY.slogan}</p>
          <p>Guamá, Belém/PA</p>
        </div>
      </div>
    </footer>
  );
}
