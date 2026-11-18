import { useEffect, useState } from 'react';
import { SCHOOL_IDENTITY } from '../data/schoolContent';

export function WhatsAppFloatingButton() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setFooterVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={SCHOOL_IDENTITY.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a secretaria no WhatsApp (abre em nova aba)"
      aria-hidden={footerVisible || undefined}
      tabIndex={footerVisible ? -1 : undefined}
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
      className={`fixed right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-[0_10px_25px_-6px_rgba(7,95,54,0.55)] transition-all duration-200 hover:bg-brand-dark active:scale-95 lg:hidden ${
        footerVisible ? 'pointer-events-none translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.79 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.07-1.13.1-1.82-.12-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.18-4.94-4.38-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.51.24.58.82 2.01.89 2.15.07.15.12.32.02.51-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.59.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.15.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.12.07.7-.17 1.38z" />
      </svg>
    </a>
  );
}
