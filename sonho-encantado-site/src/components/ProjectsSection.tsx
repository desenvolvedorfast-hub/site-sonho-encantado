import { useState } from 'react';
import { PROJECTS_CONTENT } from '../data/schoolContent';
import { Reveal } from './Reveal';

export function ProjectsSection() {
  const [showAllMonths, setShowAllMonths] = useState(false);

  const visibleProjects = showAllMonths
    ? PROJECTS_CONTENT.monthlyProjects
    : PROJECTS_CONTENT.monthlyProjects.filter((item) => item.featured);

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="bg-white py-14 sm:py-18 lg:py-22"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow-label">{PROJECTS_CONTENT.eyebrow}</p>
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

        {/* Roteiro editorial das sextas-feiras */}
        <Reveal delayMs={60}>
          <div className="mt-8 border-y border-brand-dark/12 bg-brand-paper/70 px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-brand-green">
                {PROJECTS_CONTENT.fridayRoutineLabel}
              </p>
              <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-brand-dark">
                {PROJECTS_CONTENT.fridayRoutineSteps.map((step, index) => (
                  <li key={step} className="inline-flex items-center gap-2">
                    <span>
                      {index + 1}. {step}
                    </span>
                    {index < PROJECTS_CONTENT.fridayRoutineSteps.length - 1 && (
                      <span aria-hidden="true" className="text-brand-dark/30">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        {/* Seleção compacta em destaque + expansão acessível para os 12 meses */}
        <Reveal delayMs={100}>
          <div
            id="lista-projetos-mensais"
            className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {visibleProjects.map((item) => (
              <article
                key={item.month}
                className="border-t-2 border-brand-yellow pt-4"
              >
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
                  {item.month}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-extrabold text-brand-dark">
                  {item.project}
                </h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-brand-muted">
                  {item.theme}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand-dark/12 pt-5">
            <p className="text-sm text-brand-muted">
              {showAllMonths
                ? 'Exibindo os 12 projetos temáticos mensais.'
                : 'Destaques do planejamento mensal (1 projeto por mês às sextas-feiras).'}
            </p>

            <button
              type="button"
              aria-expanded={showAllMonths}
              aria-controls="lista-projetos-mensais"
              onClick={() => setShowAllMonths((prev) => !prev)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-brand-green bg-white px-5 py-2 font-display text-sm font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-white active:scale-[0.985]"
            >
              {showAllMonths
                ? 'Recolher calendário mensal'
                : 'Ver planejamento completo (12 meses)'}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
