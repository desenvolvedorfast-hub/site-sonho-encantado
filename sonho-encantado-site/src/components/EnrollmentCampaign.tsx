import { useCallback, useEffect, useRef, useState } from 'react';
import { ENROLLMENT_CAMPAIGN } from '../data/enrollmentCampaign';

type CampaignPhase = 'idle' | 'banner' | 'modal' | 'dismissed';

const SESSION_KEY = `sonho-encantado-campaign-dismissed-${ENROLLMENT_CAMPAIGN.campaignYear}`;

function readSessionDismissed(): boolean {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function writeSessionDismissed(): void {
  try {
    window.sessionStorage.setItem(SESSION_KEY, '1');
  } catch {
    // Ignora caso o navegador restrinja sessionStorage
  }
}

export function EnrollmentCampaign() {
  const [phase, setPhase] = useState<CampaignPhase>('idle');
  const [entered, setEntered] = useState(false);
  const [imageMissing, setImageMissing] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const triggeredRef = useRef(false);

  const dismissCampaign = useCallback(() => {
    writeSessionDismissed();
    setEntered(false);
    setPhase('dismissed');

    if (previousFocusRef.current) {
      const target = previousFocusRef.current;
      previousFocusRef.current = null;
      window.requestAnimationFrame(() => {
        target.focus();
      });
    }
  }, []);

  const openModal = useCallback((captureFocus = true) => {
    if (captureFocus && document.activeElement instanceof HTMLElement) {
      previousFocusRef.current = document.activeElement;
    }
    setEntered(false);
    setPhase('modal');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setEntered(true);
      });
    });
  }, []);

  const openBanner = useCallback(() => {
    setEntered(false);
    setPhase('banner');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setEntered(true);
      });
    });
  }, []);

  useEffect(() => {
    if (!ENROLLMENT_CAMPAIGN.enabled) return;
    if (readSessionDismissed()) {
      setPhase('dismissed');
      return;
    }

    let cleanupListeners: (() => void) | undefined;
    let fallbackTimer: number | undefined;

    const triggerOnce = () => {
      if (triggeredRef.current || readSessionDismissed()) return;
      triggeredRef.current = true;
      cleanupListeners?.();
      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }

      const mode = ENROLLMENT_CAMPAIGN.displayMode;
      const isMobile = window.innerWidth < 768;

      if (mode === 'banner' || (mode === 'auto' && isMobile)) {
        openBanner();
      } else {
        openModal(true);
      }
    };

    const isMobileOnMount = window.innerWidth < 768;

    const graceTimer = window.setTimeout(() => {
      const onScroll = () => {
        if (window.scrollY >= 40) {
          triggerOnce();
        }
      };
      const onInteract = () => triggerOnce();

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('pointerdown', onInteract, { passive: true });
      window.addEventListener('keydown', onInteract);

      cleanupListeners = () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('pointerdown', onInteract);
        window.removeEventListener('keydown', onInteract);
      };

      fallbackTimer = window.setTimeout(
        triggerOnce,
        isMobileOnMount ? 1400 : 2800,
      );
    }, 800);

    return () => {
      window.clearTimeout(graceTimer);
      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }
      cleanupListeners?.();
    };
  }, [openBanner, openModal]);

  useEffect(() => {
    if (phase !== 'modal') {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const modalNode = modalRef.current;
    const getFocusables = () =>
      modalNode
        ? Array.from(
            modalNode.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          )
        : [];

    const focusables = getFocusables();
    if (focusables.length > 0) {
      focusables[0].focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismissCampaign();
        return;
      }

      if (event.key === 'Tab') {
        const items = getFocusables();
        if (items.length === 0) return;

        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (!active || !items.includes(active)) {
          event.preventDefault();
          first.focus();
          return;
        }

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [phase, dismissCampaign]);

  if (!ENROLLMENT_CAMPAIGN.enabled || phase === 'idle' || phase === 'dismissed') {
    return null;
  }

  const showImage = !imageMissing;

  // Banner compacto mobile: arte preenchendo 100% da esquerda (45%) + conteúdo e CTA à direita (55%)
  if (phase === 'banner') {
    return (
      <aside
        aria-label={ENROLLMENT_CAMPAIGN.title}
        style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
        className={`fixed inset-x-3 z-40 overflow-hidden rounded-lg border border-brand-yellow/45 border-t-[3px] border-t-brand-yellow bg-brand-dark text-brand-paper shadow-editorial transition-all duration-200 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          entered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <div className={`grid ${showImage ? 'grid-cols-[45%_55%]' : 'grid-cols-1'}`}>
          {showImage && (
            <div className="overflow-hidden bg-brand-dark">
              <img
                src={ENROLLMENT_CAMPAIGN.image.src}
                alt={ENROLLMENT_CAMPAIGN.image.alt}
                width={ENROLLMENT_CAMPAIGN.image.width}
                height={ENROLLMENT_CAMPAIGN.image.height}
                loading="lazy"
                decoding="async"
                onError={() => setImageMissing(true)}
                className="block h-full w-full object-cover object-center"
              />
            </div>
          )}

          <div className="relative flex flex-col justify-between p-3">
            <button
              type="button"
              onClick={dismissCampaign}
              aria-label="Fechar aviso de matrículas"
              className="absolute right-1 top-1 inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-paper/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="pr-9">
              <p className="font-display text-[0.6rem] font-extrabold uppercase tracking-[0.12em] text-brand-yellow">
                {ENROLLMENT_CAMPAIGN.brandLabel}
              </p>
              <p className="mt-1 font-display text-[0.98rem] font-extrabold leading-tight text-white">
                {ENROLLMENT_CAMPAIGN.title}
              </p>
              <p className="mt-1.5 text-[0.76rem] leading-snug text-[#DCE7E1]">
                Do Baby Class ao 5º ano. Venha conhecer!
              </p>
            </div>

            <div className="mt-3 flex flex-col gap-1.5">
              <a
                href={ENROLLMENT_CAMPAIGN.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismissCampaign}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-1 rounded-md bg-brand-yellow px-3 py-2 font-display text-[0.8rem] font-extrabold text-brand-dark transition-colors hover:bg-[#e3bc3b] active:scale-[0.985]"
              >
                <span>{ENROLLMENT_CAMPAIGN.ctaLabel}</span>
                <span aria-hidden="true">→</span>
                <span className="sr-only"> (abre o WhatsApp da escola em nova aba)</span>
              </a>

              <button
                type="button"
                onClick={() => openModal(true)}
                className="inline-flex min-h-[36px] w-full items-center justify-center rounded-md border border-white/25 bg-white/10 px-3 py-1.5 font-display text-xs font-bold text-white transition-colors hover:bg-white/20"
              >
                {ENROLLMENT_CAMPAIGN.expandLabel}
              </button>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  // Modal editorial: arte preenchendo 100% da largura no mobile e 100% da metade direita no desktop
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/55 p-4 transition-opacity duration-200 ease-out motion-reduce:transition-none sm:p-6 ${
        entered ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dismissCampaign();
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enrollment-campaign-title"
        aria-describedby="enrollment-campaign-desc"
        className={`relative w-full overflow-hidden rounded-lg border border-brand-dark/15 bg-brand-green text-brand-paper shadow-editorial transition-all duration-200 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          showImage ? 'max-w-[680px] md:max-w-[780px]' : 'max-w-[460px]'
        } max-h-[calc(100dvh-2rem)] overflow-y-auto ${
          entered ? 'translate-y-0 scale-100' : 'translate-y-2.5 scale-[0.99]'
        }`}
      >
        <button
          type="button"
          onClick={dismissCampaign}
          aria-label="Fechar campanha de matrículas"
          className="absolute right-2.5 top-2.5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-dark/20 bg-white/95 text-brand-dark shadow-md transition-colors hover:bg-brand-cream"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className={`grid grid-cols-1 ${showImage ? 'md:grid-cols-12' : ''}`}>
          {showImage && (
            <div className="order-1 overflow-hidden bg-brand-dark md:order-2 md:col-span-6">
              <img
                src={ENROLLMENT_CAMPAIGN.image.src}
                alt={ENROLLMENT_CAMPAIGN.image.alt}
                width={ENROLLMENT_CAMPAIGN.image.width}
                height={ENROLLMENT_CAMPAIGN.image.height}
                loading="lazy"
                decoding="async"
                onError={() => setImageMissing(true)}
                className="block h-auto w-full md:h-full md:max-h-[85dvh] md:min-h-full md:object-cover md:object-center"
              />
            </div>
          )}

          <div
            className={`order-2 flex flex-col justify-between border-t-4 border-brand-yellow p-6 sm:p-7 md:order-1 md:p-8 lg:p-9 ${
              showImage ? 'md:col-span-6 md:border-r md:border-r-white/10' : ''
            }`}
          >
            <div className="pr-8 md:pr-0">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
                {ENROLLMENT_CAMPAIGN.brandLabel}
              </p>

              <h2
                id="enrollment-campaign-title"
                className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-[2rem]"
              >
                {ENROLLMENT_CAMPAIGN.title}
              </h2>

              <p
                id="enrollment-campaign-desc"
                className="mt-4 text-base leading-relaxed text-[#E4EFE8] sm:text-[1.06rem]"
              >
                {ENROLLMENT_CAMPAIGN.description}
              </p>
            </div>

            <div className="mt-7 flex flex-col items-start gap-3">
              <a
                href={ENROLLMENT_CAMPAIGN.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismissCampaign}
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-6 py-3 font-display text-base font-extrabold text-brand-dark transition-colors duration-150 hover:bg-[#e3bc3b] active:scale-[0.985] sm:w-auto"
              >
                <span>{ENROLLMENT_CAMPAIGN.ctaLabel}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-1"
                >
                  →
                </span>
                <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
              </a>

              <button
                type="button"
                onClick={dismissCampaign}
                className="inline-flex min-h-[44px] items-center px-1 text-sm font-semibold text-white/85 underline decoration-white/35 underline-offset-4 transition-colors hover:text-white"
              >
                {ENROLLMENT_CAMPAIGN.secondaryCtaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
