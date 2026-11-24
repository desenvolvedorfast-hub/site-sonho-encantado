export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  highlight: string;
  description: string;
}

export interface PhotoGuide {
  section: string;
  recommendedType: string;
  idealRatio: string;
  filePath: string;
}

export interface VideoGuide {
  id: string;
  title: string;
  description: string;
  src: string;
  posterSrc: string;
  orientation: 'horizontal' | 'vertical';
  authorized: boolean;
  pendingNote: string;
}

export interface TeachingStage {
  id: string;
  number: string;
  tag: string;
  title: string;
  summary: string;
  highlights: string[];
  accentColor: 'yellow' | 'blue' | 'green';
  imageSrc: string;
  imageAlt: string;
  photoGuide: PhotoGuide;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  focusPoints: string[];
}

export interface MonthlyProject {
  month: string;
  project: string;
  theme: string;
  featured?: boolean;
}

export interface ComplementaryService {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  note?: string;
}

export interface SchoolUnit {
  id: string;
  name: string;
  neighborhoodNote: string;
  address: string;
  cityState: string;
  mapsUrl: string;
  summary: string;
  complementaryAnchor?: {
    badge: string;
    summary: string;
    ctaLabel: string;
    href: string;
  };
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  photoGuide: PhotoGuide;
}

const WHATSAPP_BASE_URL = 'https://wa.me/5591998248944';
const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site e gostaria de informações sobre matrícula e visitas.';

export const SCHOOL_IDENTITY = {
  officialName: 'Centro Educacional Sonho Encantado',
  shortName: 'Sonho Encantado',
  instagramName: 'Colégio Sonho Encantado',
  slogan: 'Educando para o Futuro!',
  neighborhood: 'Guamá',
  cityState: 'Belém, Pará',
  logoSrc: '/images/logo-sonho-encantado.png',
  email: 'sonhoencantado81@gmail.com',
  instagramUrl: 'https://www.instagram.com/oficialsonhoencantado/',
  instagramHandle: '@oficialsonhoencantado',
  whatsappDisplay: '(91) 99824-8944',
  phoneHref: 'tel:+5591998248944',
  whatsappMessage: WHATSAPP_MESSAGE,
  whatsappUrl: `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Nossa Escola', href: '#nossa-historia' },
  { label: 'Ensino', href: '#etapas-de-ensino' },
  { label: 'Atividades', href: '#experiencias' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Contato', href: '#contato' },
];

/* ==========================================================================
   GUIA DE FOTOGRAFIAS E VÍDEOS — INSERÇÃO E SUBSTITUIÇÃO EM public/
   1. Hero Principal: /images/hero-escola.jpg (5:4 ou 4:3 — ambiente acolhedor ou atividade autorizada)
   2. Nossa História: /images/historia-escola.jpg (proporção original sem tarjas pretas)
   3. Etapas de Ensino:
      - /images/etapa-baby-class.jpg (16:10 — vivência Baby Class)
      - /images/etapa-infantil.jpg (16:10 — Educação Infantil)
      - /images/etapa-fundamental.jpg (16:10 — Ensino Fundamental até o 5º ano)
   4. Experiências (Música): /images/atividade-musica.jpg (16:9 — aula curricular de música)
   5. Proposta Pedagógica e Ambiente:
      - /images/ambiente-sala.jpg (4:4.2 — sala de aula iluminada)
      - /images/ambiente-fachada.jpg (4:4.6 — fachada ou espaço de convivência no Guamá)
   6. Galeria Institucional: /images/galeria-01.jpg até /images/galeria-04.jpg
   7. Vídeos institucionais (somente após autorização de imagem e revisão de ano):
      - /videos/01-apresentacao-pedagogica.mp4 (capa: /images/capa-video-pedagogico.jpg)
      - /videos/02-equipe-e-acolhimento-vertical.mp4 (capa: /images/capa-video-equipe.jpg)
   ========================================================================== */

export const HERO_CONTENT = {
  eyebrow: 'Guamá · Belém, Pará',
  headline: 'O começo de grandes descobertas.',
  description:
    'Há aproximadamente 20 anos acolhendo famílias no Guamá, do Baby Class ao 5º ano do Ensino Fundamental, com rotina acolhedora e aprendizagem ativa.',
  primaryCta: 'Fale com a secretaria',
  secondaryCta: 'Conheça nossa escola',
  imageSrc: '/images/hero-escola.jpg',
  imageAlt: 'Estudantes e ambiente acolhedor do Centro Educacional Sonho Encantado no Guamá',
  photoGuide: {
    section: 'Hero Principal',
    recommendedType: 'Cena acolhedora da escola, estudantes em atividade ou fachada iluminada (autorizada)',
    idealRatio: '5:4 ou 4:3 (sem tarjas)',
    filePath: '/images/hero-escola.jpg',
  } satisfies PhotoGuide,
};

export const TRUST_STRIP_ITEMS: TrustItem[] = [
  {
    highlight: 'Aproximadamente 20 anos',
    description: 'de atuação educacional junto às famílias do Guamá.',
  },
  {
    highlight: 'Do Baby Class ao 5º ano',
    description: 'acompanhando a Educação Infantil e os anos iniciais do Fundamental.',
  },
  {
    highlight: 'Duas unidades no bairro',
    description: 'endereços acessíveis no Guamá para receber cada família.',
  },
];

export const HISTORY_CONTENT = {
  eyebrow: 'Nossa História',
  title: 'Quase duas décadas de vínculo próximo com as famílias do Guamá.',
  paragraphs: [
    'O Centro Educacional Sonho Encantado — conhecido na comunidade como Colégio Sonho Encantado — atua há aproximadamente 20 anos no bairro do Guamá, em Belém, com foco no desenvolvimento integral das crianças.',
    'Trabalhamos em parceria próxima com pais e responsáveis para oferecer uma rotina organizada e acolhedora, unindo experiências práticas, escuta atenta e acompanhamento contínuo do Baby Class ao 5º ano do Ensino Fundamental.',
  ],
  quote: 'Educando para o Futuro com acolhimento, parceria com as famílias e respeito à infância.',
  ctaLabel: 'Conversar sobre matrículas',
  imageSrc: '/images/historia-escola.jpg',
  imageAlt: 'Registro institucional do Centro Educacional Sonho Encantado',
  photoGuide: {
    section: 'Nossa História',
    recommendedType: 'Fotografia cotidiana ou registro institucional da escola com boa luz',
    idealRatio: 'Proporção original (4:5 ou 4:3, sem bordas pretas)',
    filePath: '/images/historia-escola.jpg',
  } satisfies PhotoGuide,
};

export const TEACHING_STAGES: TeachingStage[] = [
  {
    id: 'baby-class',
    number: '01',
    tag: 'Primeiros vínculos',
    title: 'Baby Class',
    summary:
      'Acolhimento cuidadoso na transição entre a casa e a escola, com rotina tranquila, movimento, música e estímulos adequados aos primeiros anos.',
    highlights: [
      'Adaptação próxima e dialogada com os responsáveis',
      'Brincadeiras sensoriais e motoras no ritmo de cada criança',
      'Construção gradual de vínculos e segurança no ambiente',
    ],
    accentColor: 'yellow',
    imageSrc: '/images/etapa-baby-class.jpg',
    imageAlt: 'Atividades e espaço do Baby Class no Centro Educacional Sonho Encantado',
    photoGuide: {
      section: 'Etapa: Baby Class',
      recommendedType: 'Ambiente acolhedor do Baby Class ou atividade sensorial supervisionada',
      idealRatio: '16:10',
      filePath: '/images/etapa-baby-class.jpg',
    },
  },
  {
    id: 'educacao-infantil',
    number: '02',
    tag: 'Descoberta e ludicidade',
    title: 'Educação Infantil',
    summary:
      'O brincar, a leitura, as artes e os projetos temáticos integram o cotidiano para desenvolver linguagem, autonomia, imaginação e convivência.',
    highlights: [
      'Experiências práticas com leitura, arte, música e movimento',
      'Estímulo à expressão de sentimentos, respeito e partilha',
      'Observação contínua dos avanços na rotina escolar',
    ],
    accentColor: 'blue',
    imageSrc: '/images/etapa-infantil.jpg',
    imageAlt: 'Vivências da Educação Infantil no Centro Educacional Sonho Encantado',
    photoGuide: {
      section: 'Etapa: Educação Infantil',
      recommendedType: 'Crianças em atividade lúdica, leitura ou arte em sala',
      idealRatio: '16:10',
      filePath: '/images/etapa-infantil.jpg',
    },
  },
  {
    id: 'ensino-fundamental',
    number: '03',
    tag: 'Anos iniciais · até o 5º ano',
    title: 'Ensino Fundamental',
    summary:
      'Nos anos iniciais até o 5º ano, consolidamos a leitura, a escrita, o raciocínio e a investigação por projetos em um ambiente acolhedor e organizado.',
    highlights: [
      'Integração entre linguagem, matemática, natureza e sociedade',
      'Projetos que incentivam autonomia, escuta e trabalho em grupo',
      'Acompanhamento contínuo da aprendizagem em cada série',
    ],
    accentColor: 'green',
    imageSrc: '/images/etapa-fundamental.jpg',
    imageAlt: 'Estudantes dos anos iniciais do Ensino Fundamental até o 5º ano',
    photoGuide: {
      section: 'Etapa: Ensino Fundamental',
      recommendedType: 'Estudantes dos anos iniciais em sala ou projeto pedagógico',
      idealRatio: '16:10',
      filePath: '/images/etapa-fundamental.jpg',
    },
  },
];

export const PROJECTS_CONTENT = {
  eyebrow: 'Projetos que encantam',
  title: 'Aprender, Criar e Encantar ao longo de todo o ano.',
  description:
    'O planejamento anual organiza um projeto temático por mês, desenvolvido às sextas-feiras em cerca de quatro a cinco encontros. Cada tema integra linguagem, matemática, natureza e sociedade, inglês, arte, valores e socialização.',
  fridayRoutineLabel: 'Roteiro das sextas-feiras',
  fridayRoutineSteps: [
    'Roda de conversa',
    'Atividade principal',
    'Inglês',
    'Produção artística',
    'Socialização',
    'Encerramento',
  ],
  monthlyProjects: [
    {
      month: 'Janeiro',
      project: 'Volta às aulas',
      theme: 'Minha Escola, Meu Lugar Feliz',
      featured: true,
    },
    {
      month: 'Fevereiro',
      project: 'A Árvore',
      theme: 'Cuidar da Natureza é Cuidar da Vida',
      featured: true,
    },
    {
      month: 'Março',
      project: 'Minha Família',
      theme: 'Família é Amor',
    },
    {
      month: 'Abril',
      project: 'Eu Sou Assim',
      theme: 'Identidade e Emoções',
      featured: true,
    },
    {
      month: 'Maio',
      project: 'Meu Mundo',
      theme: 'O Lugar Onde Vivo',
    },
    {
      month: 'Junho',
      project: 'Trânsito',
      theme: 'Segurança no Dia a Dia',
    },
    {
      month: 'Julho',
      project: 'Cultura e Tradições',
      theme: 'Nossa Cultura',
    },
    {
      month: 'Agosto',
      project: 'Amizade e Respeito',
      theme: 'Conviver é Amar',
    },
    {
      month: 'Setembro',
      project: 'Mundo das Letras',
      theme: 'Ler, Escrever e Imaginar',
      featured: true,
    },
    {
      month: 'Outubro',
      project: 'Ser Criança',
      theme: 'Brincar Também é Aprender',
    },
    {
      month: 'Novembro',
      project: 'Saúde e Alimentação',
      theme: 'Cuidar do Corpo',
    },
    {
      month: 'Dezembro',
      project: 'Gratidão e Natal',
      theme: 'Amor, Paz e Esperança',
    },
  ] satisfies MonthlyProject[],
};

export const ACTIVITIES_CONTENT = {
  eyebrow: 'Atividades do Currículo',
  title: 'Vivências que ampliam a expressão, a linguagem e a curiosidade.',
  intro:
    'No cotidiano das turmas, o Centro Educacional Sonho Encantado integra atividades regulares que enriquecem a escuta, a comunicação e a criatividade.',
  featuredMusic: {
    id: 'musica',
    category: 'Educação musical escolar',
    title: 'Música',
    description:
      'As aulas de música integram a rotina escolar para desenvolver percepção sonora, ritmo, coordenação e expressão artística em grupo.',
    curriculumDistinction:
      'Atividade pedagógica do currículo escolar — distinta dos atendimentos terapêuticos de musicoterapia oferecidos de forma complementar na Unidade II.',
    focusPoints: ['Percepção sonora', 'Ritmo e escuta', 'Expressão coletiva'],
    imageSrc: '/images/atividade-musica.jpg',
    imageAlt: 'Atividade musical com estudantes do Centro Educacional Sonho Encantado',
    photoGuide: {
      section: 'Experiências: Música',
      recommendedType: 'Turma em aula de música escolar (não confundir com musicoterapia)',
      idealRatio: '16:9',
      filePath: '/images/atividade-musica.jpg',
    } satisfies PhotoGuide,
  },
  secondaryActivities: [
    {
      id: 'computacao',
      category: 'Lógica e mundo digital',
      title: 'Computação',
      description:
        'Contato orientado com recursos digitais para apoiar o raciocínio lógico, a pesquisa e o uso responsável da tecnologia.',
      focusPoints: ['Raciocínio e curiosidade', 'Uso educativo orientado'],
    },
    {
      id: 'ingles',
      category: 'Comunicação e repertório',
      title: 'Inglês',
      description:
        'Aproximação natural a um novo idioma por meio de vocabulário cotidiano, escuta e atividades integradas aos projetos.',
      focusPoints: ['Ampliação cultural', 'Familiaridade com o idioma'],
    },
  ] as ActivityItem[],
};

export const ENVIRONMENT_CONTENT = {
  eyebrow: 'Proposta Pedagógica e Diferenciais',
  title: 'Aprender, criar e descobrir: uma educação que acompanha cada criança.',
  description:
    'Nossa prática valoriza o brincar como parte essencial do desenvolvimento infantil — fortalecendo criatividade, imaginação, linguagem, coordenação motora, autonomia, convivência e expressão de sentimentos.',
  pillars: [
    {
      title: 'Aprendizagem ativa',
      text: 'Participação das crianças em experiências práticas, descobertas e construção gradual do conhecimento.',
    },
    {
      title: 'Ensino por projetos',
      text: 'Integração planejada de diferentes áreas por meio de temas significativos ao longo do ano.',
    },
    {
      title: 'Rotina organizada e acolhedora',
      text: 'Equilíbrio diário entre leitura, brincadeiras, artes, música, movimento e atividades orientadas.',
    },
    {
      title: 'Desenvolvimento socioemocional',
      text: 'Atenção à convivência, ao respeito, ao compartilhamento, à expressão emocional e à resolução de conflitos.',
    },
    {
      title: 'Avaliação contínua',
      text: 'Observação atenta do desenvolvimento e acompanhamento próximo da aprendizagem na rotina escolar.',
    },
  ],
  photos: [
    {
      src: '/images/ambiente-sala.jpg',
      alt: 'Sala de aula do Centro Educacional Sonho Encantado',
      caption: 'Ambientes preparados para leitura, artes e convivência',
      photoGuide: {
        section: 'Proposta e Ambiente: Sala de Aula',
        recommendedType: 'Sala organizada com materiais lúdicos ou atividade orientada',
        idealRatio: '4:4.2',
        filePath: '/images/ambiente-sala.jpg',
      } satisfies PhotoGuide,
    },
    {
      src: '/images/ambiente-fachada.jpg',
      alt: 'Fachada ou espaço de convivência da escola no Guamá',
      caption: 'Espaço acolhedor no bairro do Guamá',
      photoGuide: {
        section: 'Proposta e Ambiente: Fachada ou Convivência',
        recommendedType: 'Fachada da unidade ou área de convivência das crianças',
        idealRatio: '4:4.6',
        filePath: '/images/ambiente-fachada.jpg',
      } satisfies PhotoGuide,
    },
  ],
};

export const SCHOOL_UNITS: SchoolUnit[] = [
  {
    id: 'unidade-1',
    name: 'Unidade I',
    neighborhoodNote: 'Guamá · Belém/PA',
    address: 'Travessa Guerra Passos, nº 54',
    cityState: 'Guamá, Belém — Pará',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Travessa+Guerra+Passos+54+Guama+Belem+PA',
    summary:
      'Localizada na Travessa Guerra Passos, atendendo famílias da região com acolhimento e organização escolar.',
  },
  {
    id: 'unidade-2',
    name: 'Unidade II',
    neighborhoodNote: 'Conjunto Alacid Nunes · Guamá, Belém/PA',
    address: 'Conjunto Alacid Nunes, Rua Doutor Virgílio de Mendonça, nº 20A',
    cityState: 'Guamá, Belém — Pará',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Virgilio+de+Mendonca+20A+Conjunto+Alacid+Nunes+Guama+Belem+PA',
    summary:
      'Unidade no Conjunto Alacid Nunes, ampliando a presença do Sonho Encantado no Guamá e oferecendo espaço para serviços complementares.',
    complementaryAnchor: {
      badge: 'Serviços complementares na Unidade II',
      summary:
        'A Unidade II também divulga atendimentos de Psicologia, Psicopedagogia, Musicoterapia e Reforço Escolar em caráter complementar ao ensino regular.',
      ctaLabel: 'Ver serviços complementares da Unidade II ↓',
      href: '#servicos-unidade-2',
    },
  },
];

export const COMPLEMENTARY_SERVICES_CONTENT = {
  eyebrow: 'Unidade II · Serviços Complementares',
  title: 'Acompanhamento terapêutico e reforço escolar.',
  intro:
    'Além do ensino regular, a Unidade II divulga serviços complementares voltados ao acolhimento individual e ao apoio pedagógico. Eles não substituem a escolarização regular e têm modalidades, horários e disponibilidade sujeitos à confirmação com a secretaria.',
  services: [
    {
      id: 'psicologia',
      category: 'Desenvolvimento emocional',
      title: 'Psicologia',
      description:
        'Serviço de apoio ao desenvolvimento emocional, às relações interpessoais e ao acolhimento das necessidades individuais.',
      details: ['Escuta acolhedora', 'Apoio às relações e à rotina'],
    },
    {
      id: 'psicopedagogia',
      category: 'Processos de aprendizagem',
      title: 'Psicopedagogia',
      description:
        'Acompanhamento voltado aos processos de aprendizagem e às dificuldades que possam surgir ao longo do percurso escolar.',
      details: ['Atenção aos processos de aprender', 'Suporte pedagógico individualizado'],
    },
    {
      id: 'musicoterapia',
      category: 'Acompanhamento terapêutico',
      title: 'Musicoterapia',
      description:
        'Utiliza recursos musicais em processos de acompanhamento terapêutico, considerando comunicação, expressão, interação e desenvolvimento.',
      details: ['Comunicação e expressão', 'Interação por recursos musicais'],
      note: 'Atividade terapêutica de natureza distinta das aulas regulares de Música do currículo escolar.',
    },
    {
      id: 'reforco-escolar',
      category: 'Apoio pedagógico complementar',
      title: 'Reforço Escolar',
      description:
        'Acompanhamento complementar com foco em leitura, escrita, raciocínio e conteúdos escolares, auxiliando na consolidação da rotina de estudos.',
      details: [
        'Acompanhamento individual',
        'Reforço de matérias específicas',
        'Esclarecimento de dúvidas',
        'Possibilidade de aulas presenciais ou online (sujeito à confirmação)',
      ],
    },
  ] satisfies ComplementaryService[],
  ctaLabel: 'Consultar disponibilidade na Unidade II',
  disclaimer:
    'Disponibilidade de profissionais, formatos presenciais ou online e critérios de atendimento devem ser confirmados diretamente com a secretaria antes da contratação.',
};

export const INSTITUTIONAL_VIDEOS: VideoGuide[] = [
  {
    id: 'video-pedagogico',
    title: 'Apresentação pedagógica da escola',
    description: 'Vídeo institucional horizontal apresentando a proposta educativa.',
    src: '/videos/01-apresentacao-pedagogica.mp4',
    posterSrc: '/images/capa-video-pedagogico.jpg',
    orientation: 'horizontal',
    authorized: false,
    pendingNote:
      'Pendente de validação: vídeo contém menção ao ano de 2026 e aguarda confirmação de uso de imagem.',
  },
  {
    id: 'video-equipe',
    title: 'Equipe e acolhimento',
    description: 'Registro vertical curto destacando a equipe e o acolhimento escolar.',
    src: '/videos/02-equipe-e-acolhimento-vertical.mp4',
    posterSrc: '/images/capa-video-equipe.jpg',
    orientation: 'vertical',
    authorized: false,
    pendingNote:
      'Pendente de autorização formal de uso de imagem da equipe e eventuais crianças presentes.',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: '/images/galeria-01.jpg',
    alt: 'Vivência pedagógica no Centro Educacional Sonho Encantado',
    caption: 'Vivências cotidianas na Educação Infantil',
    photoGuide: {
      section: 'Galeria Institucional (01)',
      recommendedType: 'Momento de rotina pedagógica ou brincadeira orientada',
      idealRatio: '5:4',
      filePath: '/images/galeria-01.jpg',
    },
  },
  {
    id: 'gal-2',
    src: '/images/galeria-02.jpg',
    alt: 'Estudantes em atividade nos anos iniciais do Ensino Fundamental',
    caption: 'Descobertas nos anos iniciais do Fundamental',
    photoGuide: {
      section: 'Galeria Institucional (02)',
      recommendedType: 'Atividade em sala nos anos iniciais até o 5º ano',
      idealRatio: '16:10',
      filePath: '/images/galeria-02.jpg',
    },
  },
  {
    id: 'gal-3',
    src: '/images/galeria-03.jpg',
    alt: 'Momento de música e convivência escolar',
    caption: 'Música, criatividade e convivência',
    photoGuide: {
      section: 'Galeria Institucional (03)',
      recommendedType: 'Vivência musical, artes ou atividade coletiva',
      idealRatio: '4:3',
      filePath: '/images/galeria-03.jpg',
    },
  },
  {
    id: 'gal-4',
    src: '/images/galeria-04.jpg',
    alt: 'Ambiente escolar do Centro Educacional Sonho Encantado no Guamá',
    caption: 'Espaços da escola no bairro do Guamá',
    photoGuide: {
      section: 'Galeria Institucional (04)',
      recommendedType: 'Equipe escolar, recepção às famílias ou área interna',
      idealRatio: '4:3',
      filePath: '/images/galeria-04.jpg',
    },
  },
];

export const FINAL_CTA_CONTENT = {
  eyebrow: 'Visitas e Matrículas',
  title: 'Conheça nossas etapas de ensino e converse com a secretaria sobre matrículas.',
  description:
    'Nossa equipe está disponível para esclarecer dúvidas sobre atendimento escolar, visitas presenciais e serviços da Unidade II no Guamá.',
  primaryCta: 'Fale com a secretaria',
};
