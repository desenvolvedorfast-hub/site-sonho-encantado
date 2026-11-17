import { useEffect, useRef, useState } from 'react';
import { NAVIGATION_ITEMS, SCHOOL_IDENTITY } from '../data/schoolContent';
import { BrandLogo } from './BrandLogo';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      id="topo"
      className={`sticky top-0 z-40 w-full border-b transition-shadow duration-200 ${
        scrolled
          ? 'border-brand-dark/12 bg-white/95 shadow-card backdrop-blur-sm'
          : 'border-brand-dark/8 bg-white'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <BrandLogo />

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex xl:gap-8">
          <ul className="flex items-center gap-5 xl:gap-7">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center whitespace-nowrap border-b-2 border-transparent text-[0.95rem] font-semibold text-brand-dark transition-colors hover:border-brand-green hover:text-brand-green"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={SCHOOL_IDENTITY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-brand-green px-5 py-2 font-display text-sm font-bold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-brand-dark active:scale-[0.98]"
          >
            Agende uma visita
            <span className="sr-only"> (abre o WhatsApp da escola em nova aba)</span>
          </a>
        </nav>

        <button
          ref={toggleButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-movel"
          aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg border border-brand-dark/15 bg-brand-paper text-brand-dark transition-colors hover:bg-brand-cream lg:hidden"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="menu-movel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação móvel"
          className="fixed inset-x-0 bottom-0 top-[69px] z-50 flex flex-col justify-between overflow-y-auto border-t border-brand-dark/10 bg-brand-paper px-5 py-6 lg:hidden"
        >
          <nav aria-label="Links móveis">
            <ul className="divide-y divide-brand-dark/10">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-[52px] items-center justify-between font-display text-lg font-bold text-brand-dark transition-colors hover:text-brand-green"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-brand-green">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-3 border-t border-brand-dark/15 pt-6">
            <p className="text-sm font-medium text-brand-muted">
              Atendimento direto às famílias para visitas e informações sobre matrículas.
            </p>
            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand-green px-5 py-3 font-display text-base font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Agende uma visita
            </a>
            <a
              href={`mailto:${SCHOOL_IDENTITY.email}`}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center rounded-full border border-brand-dark/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark"
            >
              {SCHOOL_IDENTITY.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
