export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  highlight: string;
  description: string;
}

export interface TeachingStage {
  id: string;
  tag: string;
  title: string;
  summary: string;
  highlights: string[];
  accentColor: 'yellow' | 'blue' | 'green';
  imageSrc: string;
  imageAlt: string;
  imageSlotLabel: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  focusPoints: string[];
}

export interface SchoolUnit {
  id: string;
  name: string;
  neighborhoodNote: string;
  address: string;
  cityState: string;
  mapsUrl: string;
  summary: string;
  therapeuticNote?: {
    badge: string;
    title: string;
    description: string;
    services: string[];
    disclaimer: string;
  };
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  slotLabel: string;
  aspectClass: string;
  spanClass: string;
}

export const SCHOOL_IDENTITY = {
  officialName: 'Centro Educacional Sonho Encantado',
  instagramName: 'Colégio Sonho Encantado',
  slogan: 'Educando para o Futuro!',
  neighborhood: 'Guamá',
  cityState: 'Belém, Pará',
  logoSrc: '/images/logo-sonho-encantado.png',
  email: 'sonhoencantado81@gmail.com',
  instagramUrl: 'https://www.instagram.com/oficialsonhoencantado/',
  instagramHandle: '@oficialsonhoencantado',
  whatsappUrl: 'https://whats.link/colegiosonhoencantado',
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Nossa Escola', href: '#nossa-historia' },
  { label: 'Ensino', href: '#etapas-de-ensino' },
  { label: 'Atividades', href: '#experiencias' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Contato', href: '#contato' },
];

export const HERO_CONTENT = {
  eyebrow: 'Guamá · Belém, Pará',
  headline: 'O começo de grandes descobertas.',
  description:
    'Há aproximadamente 20 anos, o Centro Educacional Sonho Encantado caminha ao lado das famílias do Guamá unindo acolhimento, criatividade e aprendizagem do Baby Class até o 5º ano do Ensino Fundamental.',
  primaryCta: 'Conheça nossa escola',
  secondaryCta: 'Fale com a secretaria',
  imageSrc: '/images/hero-escola.jpg',
  imageAlt:
    'Espaço reservado para fotografia institucional autorizada do Centro Educacional Sonho Encantado',
  imageSlotLabel: 'Fotografia principal autorizada (/images/hero-escola.jpg)',
};

export const TRUST_STRIP_ITEMS: TrustItem[] = [
  {
    highlight: 'Aproximadamente 20 anos',
    description: 'de presença educacional e vínculo próximo com a comunidade do Guamá.',
  },
  {
    highlight: 'Do Baby Class ao 5º ano',
    description: 'acompanhando a infância na Educação Infantil e nos anos iniciais do Fundamental.',
  },
  {
    highlight: 'Duas unidades no Guamá',
    description: 'endereços acessíveis no bairro para atender diferentes etapas e famílias.',
  },
];

export const HISTORY_CONTENT = {
  eyebrow: 'Nossa História',
  title: 'Quase duas décadas educando com proximidade, cuidado e confiança.',
  paragraphs: [
    'O Centro Educacional Sonho Encantado — também conhecido pelas famílias nas redes sociais como Colégio Sonho Encantado — construiu ao longo de aproximadamente 20 anos uma trajetória enraizada no bairro do Guamá, em Belém.',
    'Acreditamos que a escola cumpre melhor o seu papel quando conhece cada criança pelo nome, respeita seu ritmo e mantém diálogo aberto e respeitoso com pais e responsáveis.',
    'Do primeiro contato no Baby Class até a consolidação das aprendizagens no 5º ano do Ensino Fundamental, nossa atuação prioriza um ambiente seguro, afetivo e propício para aprender, brincar e crescer.',
  ],
  quote:
    'Educando para o Futuro com a serenidade de quem caminha junto às famílias do bairro.',
  ctaLabel: 'Saiba mais sobre matrículas',
  imageSrc: '/images/historia-escola.jpg',
  imageAlt:
    'Espaço reservado para fotografia histórica ou cotidiana autorizada da escola',
  imageSlotLabel: 'Fotografia institucional Nossa História (/images/historia-escola.jpg)',
};

export const TEACHING_STAGES: TeachingStage[] = [
  {
    id: 'baby-class',
    tag: 'Primeiros vínculos',
    title: 'Baby Class',
    summary:
      'Um espaço de transição tranquila entre a casa e a escola, com atenção cuidadosa à rotina, aos estímulos sensoriais e ao acolhimento afetivo.',
    highlights: [
      'Acolhimento próximo na adaptação das famílias',
      'Vivências lúdicas respeitando o tempo de cada criança',
      'Estímulo à convivência, expressão e descoberta do ambiente',
    ],
    accentColor: 'yellow',
    imageSrc: '/images/etapa-baby-class.jpg',
    imageAlt: 'Espaço reservado para foto do Baby Class',
    imageSlotLabel: 'Foto Baby Class (/images/etapa-baby-class.jpg)',
  },
  {
    id: 'educacao-infantil',
    tag: 'Descoberta e ludicidade',
    title: 'Educação Infantil',
    summary:
      'Nesta etapa, o brincar, a imaginação e a convivência orientam o desenvolvimento da linguagem, da autonomia e da curiosidade sobre o mundo.',
    highlights: [
      'Aprendizagem integrada às brincadeiras e projetos da infância',
      'Desenvolvimento socioemocional, motor e expressivo',
      'Comunicação constante com os responsáveis sobre a rotina escolar',
    ],
    accentColor: 'blue',
    imageSrc: '/images/etapa-infantil.jpg',
    imageAlt: 'Espaço reservado para foto da Educação Infantil',
    imageSlotLabel: 'Foto Educação Infantil (/images/etapa-infantil.jpg)',
  },
  {
    id: 'ensino-fundamental',
    tag: 'Anos iniciais · até o 5º ano',
    title: 'Ensino Fundamental',
    summary:
      'Nos anos iniciais até o 5º ano, consolidamos a leitura, a escrita, o raciocínio e o gosto pelo conhecimento em um ambiente acolhedor e organizado.',
    highlights: [
      'Construção sólida da leitura, interpretação e raciocínio lógico',
      'Incentivo à criatividade, responsabilidade e trabalho em grupo',
      'Acompanhamento próximo da equipe pedagógica ao longo de cada série',
    ],
    accentColor: 'green',
    imageSrc: '/images/etapa-fundamental.jpg',
    imageAlt: 'Espaço reservado para foto do Ensino Fundamental até o 5º ano',
    imageSlotLabel: 'Foto Ensino Fundamental (/images/etapa-fundamental.jpg)',
  },
];

export const ACTIVITIES_CONTENT = {
  eyebrow: 'Experiências de Aprendizagem',
  title: 'Vivências que ampliam a expressão, a curiosidade e a linguagem.',
  intro:
    'Além da base curricular de cada etapa, o Centro Educacional Sonho Encantado integra atividades que despertam novas formas de comunicação e criatividade no cotidiano escolar.',
  featuredMusic: {
    id: 'musica',
    category: 'Expressão e sensibilidade',
    title: 'Música',
    description:
      'A vivência musical favorece a escuta atenta, o ritmo, a coordenação e o prazer pela expressão artística desde a primeira infância.',
    focusPoints: ['Percepção sonora e rítmica', 'Expressão em grupo', 'Sensibilidade artística'],
    imageSrc: '/images/atividade-musica.jpg',
    imageAlt: 'Espaço reservado para fotografia autorizada de atividade musical',
    imageSlotLabel: 'Foto atividade de Música (/images/atividade-musica.jpg)',
  },
  secondaryActivities: [
    {
      id: 'computacao',
      category: 'Lógica e mundo digital',
      title: 'Computação',
      description:
        'Contato orientado com recursos digitais como apoio ao raciocínio lógico, à pesquisa e à familiaridade responsável com a tecnologia.',
      focusPoints: ['Raciocínio e curiosidade', 'Uso educativo orientado'],
    },
    {
      id: 'ingles',
      category: 'Comunicação e repertório',
      title: 'Inglês',
      description:
        'Introdução natural a um novo idioma por meio de vocabulário cotidiano, escuta e atividades contextualizadas à idade dos estudantes.',
      focusPoints: ['Ampliação cultural', 'Familiaridade com o idioma'],
    },
  ] as ActivityItem[],
};

export const ENVIRONMENT_CONTENT = {
  eyebrow: 'Diferenciais e Ambiente',
  title: 'Um ambiente pensado para que a criança se sinta segura para aprender.',
  description:
    'Mais do que transmitir conteúdos, cuidamos da qualidade das relações dentro da escola. Nossa proposta valoriza o equilíbrio entre organização pedagógica e calor humano.',
  pillars: [
    {
      title: 'Acolhimento verdadeiro',
      text: 'Recepção atenta às famílias e acompanhamento próximo na adaptação e na rotina diária.',
    },
    {
      title: 'Criatividade valorizada',
      text: 'Atividades lúdicas, música e projetos que estimulam a expressão própria de cada criança.',
    },
    {
      title: 'Desenvolvimento contínuo',
      text: 'Olhar atento ao progresso cognitivo, social e emocional em cada fase da infância.',
    },
    {
      title: 'Parceria com os responsáveis',
      text: 'Diálogo acessível e transparente para construir confiança ao longo do ano letivo.',
    },
  ],
  photos: [
    {
      src: '/images/ambiente-sala.jpg',
      alt: 'Espaço reservado para fotografia de sala de aula do Sonho Encantado',
      slotLabel: 'Sala de aula (/images/ambiente-sala.jpg)',
      caption: 'Salas preparadas para a rotina de cada faixa etária',
    },
    {
      src: '/images/ambiente-fachada.jpg',
      alt: 'Espaço reservado para fotografia da fachada ou pátio da escola no Guamá',
      slotLabel: 'Fachada / convivência (/images/ambiente-fachada.jpg)',
      caption: 'Espaço escolar no coração do bairro do Guamá',
    },
  ],
};

export const SCHOOL_UNITS: SchoolUnit[] = [
  {
    id: 'unidade-1',
    name: 'Unidade I',
    neighborhoodNote: 'Bairro do Guamá · Belém/PA',
    address: 'Travessa Guerra Passos, nº 54',
    cityState: 'Guamá, Belém — Pará',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Travessa+Guerra+Passos+54+Guama+Belem+PA',
    summary:
      'Sede localizada na Travessa Guerra Passos, preparada para receber as famílias da região com atendimento escolar acolhedor.',
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
      'Unidade situada no Conjunto Alacid Nunes, ampliando a presença da escola no Guamá.',
    therapeuticNote: {
      badge: 'Serviços anunciados pela Unidade II',
      title: 'Atendimento e apoio terapêutico divulgado na Unidade II',
      description:
        'Além do atendimento escolar regular, a Unidade II divulga serviços voltados ao suporte do desenvolvimento infantil.',
      services: ['Acompanhamento terapêutico', 'Psicologia', 'Psicopedagogia', 'Musicoterapia'],
      disclaimer:
        'Serviços apresentados separadamente do ensino regular. Disponibilidade, formatos de atendimento e critérios de agendamento devem ser consultados diretamente com a secretaria da unidade.',
    },
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: '/images/galeria-01.jpg',
    alt: 'Espaço reservado para foto da rotina pedagógica autorizada',
    caption: 'Vivências cotidianas na Educação Infantil',
    slotLabel: 'Galeria 01 (/images/galeria-01.jpg)',
    aspectClass: 'aspect-[4/5]',
    spanClass: 'md:col-span-5 md:row-span-2',
  },
  {
    id: 'gal-2',
    src: '/images/galeria-02.jpg',
    alt: 'Espaço reservado para foto de atividade em sala nos anos iniciais',
    caption: 'Aprendizagem e descobertas nos anos iniciais',
    slotLabel: 'Galeria 02 (/images/galeria-02.jpg)',
    aspectClass: 'aspect-[16/10]',
    spanClass: 'md:col-span-7',
  },
  {
    id: 'gal-3',
    src: '/images/galeria-03.jpg',
    alt: 'Espaço reservado para foto de atividades lúdicas ou musicais',
    caption: 'Música, criatividade e convivência em grupo',
    slotLabel: 'Galeria 03 (/images/galeria-03.jpg)',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'md:col-span-4',
  },
  {
    id: 'gal-4',
    src: '/images/galeria-04.jpg',
    alt: 'Espaço reservado para foto da equipe ou fachada escolar',
    caption: 'Acolhimento às famílias no bairro do Guamá',
    slotLabel: 'Galeria 04 (/images/galeria-04.jpg)',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'md:col-span-3',
  },
];
