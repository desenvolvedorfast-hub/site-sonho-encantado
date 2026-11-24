import type { ReactNode } from 'react';
import {
  COMPLEMENTARY_SERVICES_CONTENT,
  INSTITUTIONAL_VIDEOS,
  SCHOOL_IDENTITY,
} from '../data/schoolContent';
import { Reveal } from './Reveal';
import { VideoSlot } from './VideoSlot';

interface ServiceBlockConfig {
  number: string;
  id: string;
  title: string;
  description: string;
  highlights: string[];
  note?: string;
  surfaceClass: string;
  topRuleClass: string;
  numberClass: string;
  titleClass: string;
  bodyClass: string;
  highlightBorderClass: string;
  highlightTextClass: string;
  iconColorClass: string;
  noteClass: string;
}

function getEditorialMotif(id: string, colorClass: string): ReactNode {
  const cls = `h-6 w-6 shrink-0 ${colorClass}`;
  switch (id) {
    case 'psicologia':
      // Linhas de acolhimento e escuta
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path strokeLinecap="round" d="M4 13c2.5-4 6-4 8 0s5.5 4 8 0" />
          <path strokeLinecap="round" d="M6.5 8.5c2-2.8 4.8-2.8 5.5 0M12 8.5c1-2.8 3.8-2.8 5.5 0" />
        </svg>
      );
    case 'psicopedagogia':
      // Percurso aberto de leitura e aprendizagem
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 0 1 6.5 4H12v15.5H6.5A2.5 2.5 0 0 0 4 21.5v-15zM20 6.5A2.5 2.5 0 0 0 17.5 4H12v15.5h5.5a2.5 2.5 0 0 1 2.5 2v-15z" />
        </svg>
      );
    case 'musicoterapia':
      // Ondas sonoras e expressão
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path strokeLinecap="round" d="M4 12v0M8 8v8M12 5v14M16 9v6M20 12v0" />
        </svg>
      );
    default:
      // Reforço Escolar (linhas de caderno / escrita)
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14M5 12h10M5 17h7M15.5 18.5l4-4-2-2-4 4v2h2z" />
        </svg>
      );
  }
}

export function ComplementaryServicesSection() {
  const hasAuthorizedVideo = INSTITUTIONAL_VIDEOS.some((video) => video.authorized);
  const { therapeuticServices, tutoringService } = COMPLEMENTARY_SERVICES_CONTENT;

  const findService = (id: string) =>
    therapeuticServices.find((item) => item.id === id) ?? therapeuticServices[0];

  const psicologia = findService('psicologia');
  const psicopedagogia = findService('psicopedagogia');
  const musicoterapia = findService('musicoterapia');

  const editorialBlocks: ServiceBlockConfig[] = [
    {
      number: '01',
      id: 'psicologia',
      title: psicologia.title,
      description: psicologia.description,
      highlights: ['Acompanhamento emocional', 'Acolhimento e relações interpessoais'],
      surfaceClass: 'bg-white border border-brand-dark/12',
      topRuleClass: 'border-t-4 border-t-brand-blue',
      numberClass: 'text-brand-green',
      titleClass: 'text-brand-dark',
      bodyClass: 'text-brand-ink',
      highlightBorderClass: 'border-l-brand-blue',
      highlightTextClass: 'text-brand-dark',
      iconColorClass: 'text-brand-green',
      noteClass: 'text-brand-muted',
    },
    {
      number: '02',
      id: 'psicopedagogia',
      title: psicopedagogia.title,
      description: psicopedagogia.description,
      highlights: ['Processos de aprendizagem', 'Apoio às dificuldades escolares'],
      surfaceClass: 'bg-brand-cream/85 border border-brand-dark/12',
      topRuleClass: 'border-t-4 border-t-brand-green',
      numberClass: 'text-brand-green',
      titleClass: 'text-brand-dark',
      bodyClass: 'text-brand-ink',
      highlightBorderClass: 'border-l-brand-green',
      highlightTextClass: 'text-brand-dark',
      iconColorClass: 'text-brand-green',
      noteClass: 'text-brand-muted',
    },
    {
      number: '03',
      id: 'musicoterapia',
      title: musicoterapia.title,
      description: musicoterapia.description,
      highlights: [
        'Comunicação e expressão',
        'Acompanhamento terapêutico por recursos musicais',
      ],
      note: musicoterapia.note,
      surfaceClass: 'bg-brand-dark border border-brand-dark text-brand-paper',
      topRuleClass: 'border-t-4 border-t-brand-yellow',
      numberClass: 'text-brand-yellow',
      titleClass: 'text-white',
      bodyClass: 'text-[#E1ECE6]',
      highlightBorderClass: 'border-l-brand-yellow',
      highlightTextClass: 'text-brand-paper',
      iconColorClass: 'text-brand-yellow',
      noteClass: 'text-[#C8D8D0] border-brand-paper/15',
    },
    {
      number: '04',
      id: 'reforco-escolar',
      title: tutoringService.title,
      description: tutoringService.description,
      highlights: [
        'Leitura, escrita e raciocínio',
        'Apoio pedagógico complementar (presencial ou online, sujeito à confirmação)',
      ],
      surfaceClass: 'bg-[#FAF6E6] border border-brand-dark/14',
      topRuleClass: 'border-t-4 border-t-brand-yellow',
      numberClass: 'text-brand-dark',
      titleClass: 'text-brand-dark',
      bodyClass: 'text-brand-ink',
      highlightBorderClass: 'border-l-brand-yellow',
      highlightTextClass: 'text-brand-dark',
      iconColorClass: 'text-brand-dark',
      noteClass: 'text-brand-muted',
    },
  ];

  return (
    <section
      id="servicos-unidade-2"
      aria-labelledby="servicos-unidade-2-heading"
      className="border-t border-brand-dark/10 bg-brand-paper py-12 sm:py-16 lg:py-24"
    >
      <div className="container-editorial">
        {/* Cabeçalho editorial */}
        <Reveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="eyebrow-label">{COMPLEMENTARY_SERVICES_CONTENT.eyebrow}</p>
              <h2
                id="servicos-unidade-2-heading"
                className="text-section-title mt-3 font-display font-extrabold text-brand-dark"
              >
                {COMPLEMENTARY_SERVICES_CONTENT.title}
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="text-body-fluid text-brand-muted">
                {COMPLEMENTARY_SERVICES_CONTENT.intro}
              </p>
              <p className="mt-3 border-l-2 border-brand-blue pl-3.5 text-sm font-medium text-brand-dark">
                Atendimentos realizados na Unidade II de forma independente, sem substituir o ensino regular.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Nova composição editorial em grade 2x2 no desktop (1 coluna no mobile) */}
        <Reveal delayMs={70}>
          <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-11 lg:gap-7">
            {editorialBlocks.map((block) => (
              <article
                key={block.id}
                className={`flex h-full flex-col justify-between rounded-sm p-6 transition-transform duration-200 motion-reduce:transition-none lg:p-8 lg:hover:-translate-y-0.5 ${block.surfaceClass} ${block.topRuleClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-display text-2xl font-extrabold tracking-tight sm:text-[1.75rem] ${block.numberClass}`}
                    >
                      {block.number}
                    </span>

                    {getEditorialMotif(block.id, block.iconColorClass)}
                  </div>

                  <h3
                    className={`mt-4 font-display text-2xl font-extrabold sm:text-[1.8rem] ${block.titleClass}`}
                  >
                    {block.title}
                  </h3>

                  <p className={`text-body-fluid mt-3 max-w-[46ch] ${block.bodyClass}`}>
                    {block.description}
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <ul className="space-y-2">
                    {block.highlights.map((item) => (
                      <li
                        key={item}
                        className={`border-l-2 pl-3 text-[0.95rem] font-semibold leading-snug ${block.highlightBorderClass} ${block.highlightTextClass}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {block.note && (
                    <p
                      className={`border-t pt-3 text-xs font-medium leading-relaxed ${block.noteClass}`}
                    >
                      {block.note}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Faixa integrada de confirmação e contato da Unidade II */}
        <Reveal delayMs={110}>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-brand-dark/15 pt-6 md:flex-row md:items-center">
            <p className="max-w-2xl text-sm leading-relaxed text-brand-muted">
              {COMPLEMENTARY_SERVICES_CONTENT.disclaimer}
            </p>

            <a
              href={SCHOOL_IDENTITY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 font-display text-sm font-bold text-white transition-colors duration-150 hover:bg-brand-dark active:scale-[0.985] md:w-auto"
            >
              <span>{COMPLEMENTARY_SERVICES_CONTENT.ctaLabel}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="sr-only"> (abre o WhatsApp da secretaria em nova aba)</span>
            </a>
          </div>
        </Reveal>

        {(import.meta.env.DEV || hasAuthorizedVideo) && (
          <div className="mt-10 flex flex-wrap gap-6 border-t border-brand-dark/10 pt-8">
            {INSTITUTIONAL_VIDEOS.map((video) => (
              <VideoSlot key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
