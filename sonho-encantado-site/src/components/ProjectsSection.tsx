import { useState } from 'react';
import { PROJECTS_CONTENT } from '../data/schoolContent';
import { Reveal } from './Reveal';

const ACCENT_BAR_MAP = {
  yellow: 'border-t-brand-yellow',
  green: 'border-t-brand-green',
  blue: 'border-t-brand-blue',
  dark: 'border-t-brand-dark',
};

const ACCENT_NUMERAL_MAP = {
  yellow: 'text-brand-dark',
  green: 'text-brand-green',
  blue: 'text-brand-dark',
  dark: 'text-brand-dark',
};

export function ProjectsSection() {
  const [showAllMonths, setShowAllMonths] = useState(false);

  const featuredProjects = PROJECTS_CONTENT.monthlyProjects.filter((item) => item.featured);

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="bg-white py-14 sm:py-18 lg:py-24"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow-label">
                {PROJECTS_CONTENT.eyebrow} · {PROJECTS_CONTENT.conceptName}
              </p>
              <h2
                id="projetos-heading"
                className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
              >
                {PROJECTS_CONTENT.title}
              </h2>
            </div>

            <p className="text-body-fluid text-brand-muted lg:col-span-5">
              {PROJECTS_CONTENT.description}
            </p>
          </div>
        </Reveal>

        {/* Os 4 projetos em destaque em composição editorial 2x2 com numeração e respiro */}
        <Reveal delayMs={70}>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {featuredProjects.map((item, idx) => (
              <article
                key={item.month}
                className={`flex flex-col justify-between border-t-4 bg-brand-paper p-6 sm:p-7 ${ACCENT_BAR_MAP[item.accentColor]}`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
                      {item.month}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-display text-2xl font-extrabold opacity-25 ${ACCENT_NUMERAL_MAP[item.accentColor]}`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-subsection-title mt-2 font-display font-extrabold text-brand-dark">
                    {item.project}
                  </h3>

                  <p className="mt-1 font-display text-sm font-bold text-brand-green">
                    {item.theme}
                  </p>

                  <p className="text-body-fluid mt-3 text-brand-ink">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Roteiro das sextas-feiras em progressão visual de 6 etapas legíveis */}
        <Reveal delayMs={100}>
          <div className="mt-8 rounded-lg bg-brand-cream/85 p-5 sm:p-7">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
              {PROJECTS_CONTENT.fridayRoutineLabel}
            </p>

            <ol className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {PROJECTS_CONTENT.fridayRoutineSteps.map((step, index) => (
                <li key={step} className="border-t border-brand-dark/15 pt-2.5">
                  <span className="block font-display text-xs font-extrabold text-brand-green">
                    0{index + 1}
                  </span>
                  <span className="mt-0.5 block font-display text-sm font-bold leading-snug text-brand-dark sm:text-[0.95rem]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Botão acessível + calendário completo de 12 meses */}
        <Reveal delayMs={120}>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-brand-dark/12 pt-6">
            <p className="text-sm font-medium text-brand-muted sm:text-[0.95rem]">
              Um tema por mês às sextas-feiras, integrando múltiplas áreas do conhecimento.
            </p>

            <button
              type="button"
              aria-expanded={showAllMonths}
              aria-controls="calendario-projetos-12-meses"
              onClick={() => setShowAllMonths((prev) => !prev)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-brand-green bg-white px-5 py-2.5 font-display text-sm font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-white active:scale-[0.985]"
            >
              {showAllMonths
                ? 'Ocultar planejamento completo'
                : 'Ver planejamento completo (12 meses)'}
            </button>
          </div>

          {showAllMonths && (
            <div
              id="calendario-projetos-12-meses"
              className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-brand-dark/15 pt-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {PROJECTS_CONTENT.monthlyProjects.map((item) => (
                <div
                  key={item.month}
                  className="border-b border-brand-dark/10 pb-3.5"
                >
                  <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
                    {item.month}
                  </p>
                  <p className="mt-1 font-display text-base font-extrabold text-brand-dark">
                    {item.project}
                  </p>
                  <p className="mt-0.5 text-sm text-brand-muted">{item.theme}</p>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
