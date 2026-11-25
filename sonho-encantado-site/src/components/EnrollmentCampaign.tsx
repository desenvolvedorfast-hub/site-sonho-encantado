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
    // Ignora caso o navegador restrinja sessionStorage (ex.: modo privado estrito)
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
      setEntered(true);
    });
  }, []);

  const openBanner = useCallback(() => {
    setEntered(false);
    setPhase('banner');
    window.requestAnimationFrame(() => {
      setEntered(true);
    });
  }, []);

  // Dispara apenas uma vez por sessão após breve interação do visitante (não bloqueia carregamento inicial)
  useEffect(() => {
    if (!ENROLLMENT_CAMPAIGN.enabled) return;
    if (readSessionDismissed()) {
      setPhase('dismissed');
      return;
    }

    let cleanupListeners: (() => void) | undefined;

    const triggerOnce = () => {
      if (triggeredRef.current || readSessionDismissed()) return;
      triggeredRef.current = true;
      cleanupListeners?.();

      const mode = ENROLLMENT_CAMPAIGN.displayMode;
      const isMobile = window.innerWidth < 768;

      if (mode === 'banner' || (mode === 'auto' && isMobile)) {
        openBanner();
      } else {
        openModal(true);
      }
    };

    // Pequena janela de 900ms para preservar LCP/INP iniciais antes de escutar interação
    const graceTimer = window.setTimeout(() => {
      const onScroll = () => {
        if (window.scrollY >= 60) {
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
    }, 900);

    return () => {
      window.clearTimeout(graceTimer);
      cleanupListeners?.();
    };
  }, [openBanner, openModal]);

  // Acessibilidade do modal expandido: focus trap, Escape e trava de scroll somente quando modal aberto
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

  // Banner compacto e não intrusivo para mobile (sem atributos de modal)
  if (phase === 'banner') {
    return (
      <aside
        aria-label={ENROLLMENT_CAMPAIGN.title}
        style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
        className={`fixed inset-x-3 z-40 rounded-lg border border-brand-yellow/45 border-t-[3px] border-t-brand-yellow bg-brand-dark p-3.5 text-brand-paper shadow-editorial transition-all duration-200 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          entered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-display text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
              {ENROLLMENT_CAMPAIGN.brandLabel}
            </p>
            <p className="mt-0.5 font-display text-base font-extrabold leading-tight text-white">
              {ENROLLMENT_CAMPAIGN.title}
            </p>
            <p className="mt-1 text-xs leading-snug text-[#DCE7E1]">
              Do Baby Class ao 5º ano. Venha conhecer nossa escola!
            </p>
          </div>

          <button
            type="button"
            onClick={dismissCampaign}
            aria-label="Fechar aviso de matrículas"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-brand-paper/85 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2.5">
          <a
            href={ENROLLMENT_CAMPAIGN.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismissCampaign}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-md bg-brand-yellow px-4 py-2 font-display text-sm font-extrabold text-brand-dark transition-colors hover:bg-[#e3bc3b] active:scale-[0.985]"
          >
            <span>{ENROLLMENT_CAMPAIGN.ctaLabel}</span>
            <span aria-hidden="true">→</span>
            <span className="sr-only"> (abre o WhatsApp da escola em nova aba)</span>
          </a>

          <button
            type="button"
            onClick={() => openModal(true)}
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md border border-white/25 bg-white/10 px-3.5 py-2 font-display text-xs font-bold text-white transition-colors hover:bg-white/20"
          >
            {ENROLLMENT_CAMPAIGN.expandLabel}
          </button>
        </div>
      </aside>
    );
  }

  // Modal editorial compacto (desktop horizontal <= 680px | mobile vertical com rolagem segura)
  const showImage = !imageMissing;

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
        className={`relative w-full overflow-hidden rounded-lg border border-brand-dark/15 bg-brand-green text-brand-paper shadow-editorial transition-all duration-250 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
          showImage ? 'max-w-[680px]' : 'max-w-[460px]'
        } max-h-[calc(100dvh-2rem)] overflow-y-auto ${
          entered ? 'translate-y-0 scale-100' : 'translate-y-2.5 scale-[0.99]'
        }`}
      >
        {/* Botão fechar sempre visível */}
        <button
          type="button"
          onClick={dismissCampaign}
          aria-label="Fechar campanha de matrículas"
          className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-dark/15 bg-white/95 text-brand-dark shadow-sm transition-colors hover:bg-brand-cream"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div
          className={`grid grid-cols-1 ${
            showImage ? 'md:grid-cols-12' : ''
          }`}
        >
          {/* Fotografia real autorizada: topo compacto no mobile, coluna direita no desktop */}
          {showImage && (
            <div className="order-1 bg-brand-cream md:order-2 md:col-span-5">
              <img
                src={ENROLLMENT_CAMPAIGN.image.src}
                alt={ENROLLMENT_CAMPAIGN.image.alt}
                width={ENROLLMENT_CAMPAIGN.image.width}
                height={ENROLLMENT_CAMPAIGN.image.height}
                loading="eager"
                decoding="async"
                onError={() => setImageMissing(true)}
                className="aspect-[16/9] h-full max-h-48 w-full object-cover object-[50%_20%] md:aspect-auto md:max-h-none"
              />
            </div>
          )}

          {/* Conteúdo editorial */}
          <div
            className={`order-2 flex flex-col justify-between border-t-4 border-brand-yellow p-6 sm:p-8 md:order-1 ${
              showImage ? 'md:col-span-7 md:border-r md:border-r-white/10' : ''
            }`}
          >
            <div className="pr-8 md:pr-0">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-brand-yellow">
                {ENROLLMENT_CAMPAIGN.brandLabel}
              </p>

              <h2
                id="enrollment-campaign-title"
                className="mt-2.5 font-display text-2xl font-extrabold leading-tight text-white sm:text-[1.95rem]"
              >
                {ENROLLMENT_CAMPAIGN.title}
              </h2>

              <p
                id="enrollment-campaign-desc"
                className="mt-3 text-base leading-relaxed text-[#E4EFE8] sm:text-[1.03rem]"
              >
                {ENROLLMENT_CAMPAIGN.description}
              </p>
            </div>

            <div className="mt-6 flex flex-col items-start gap-3">
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
