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
  number: string;
  tag: string;
  title: string;
  summary: string;
  highlights: string[];
  accentColor: 'yellow' | 'blue' | 'green';
  imageSrc: string;
  imageAlt: string;
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
    'Há aproximadamente 20 anos acolhendo famílias no Guamá, do Baby Class ao 5º ano do Ensino Fundamental, com cuidado próximo e compromisso com a infância.',
  primaryCta: 'Conheça nossa escola',
  secondaryCta: 'Fale com a secretaria',
  imageSrc: '/images/hero-escola.jpg',
  imageAlt: 'Estudantes e ambiente escolar do Centro Educacional Sonho Encantado no Guamá',
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
    'O Centro Educacional Sonho Encantado — conhecido nas redes sociais como Colégio Sonho Encantado — construiu ao longo de aproximadamente 20 anos uma trajetória dedicada à infância no bairro do Guamá, em Belém.',
    'Acreditamos em uma escola que conhece cada criança pelo nome, respeita seu tempo de desenvolvimento e mantém diálogo transparente com pais e responsáveis, do Baby Class ao 5º ano do Ensino Fundamental.',
  ],
  quote: 'Educando para o Futuro com acolhimento, proximidade e respeito à infância.',
  ctaLabel: 'Saiba mais sobre matrículas',
  imageSrc: '/images/historia-escola.jpg',
  imageAlt: 'Registro institucional do Centro Educacional Sonho Encantado',
};

export const TEACHING_STAGES: TeachingStage[] = [
  {
    id: 'baby-class',
    number: '01',
    tag: 'Primeiros vínculos',
    title: 'Baby Class',
    summary:
      'Transição tranquila entre a casa e a escola, com atenção cuidadosa à rotina, aos estímulos sensoriais e ao acolhimento afetivo.',
    highlights: [
      'Adaptação acompanhada de perto com os responsáveis',
      'Vivências lúdicas respeitando o ritmo de cada criança',
      'Estímulo gradual à convivência e descoberta do espaço',
    ],
    accentColor: 'yellow',
    imageSrc: '/images/etapa-baby-class.jpg',
    imageAlt: 'Atividades e espaço do Baby Class no Centro Educacional Sonho Encantado',
  },
  {
    id: 'educacao-infantil',
    number: '02',
    tag: 'Descoberta e ludicidade',
    title: 'Educação Infantil',
    summary:
      'O brincar, a imaginação e a convivência orientam o desenvolvimento da linguagem, da autonomia e da curiosidade sobre o mundo.',
    highlights: [
      'Aprendizagem integrada a brincadeiras e projetos da infância',
      'Desenvolvimento socioemocional, motor e expressivo',
      'Comunicação frequente sobre a rotina escolar',
    ],
    accentColor: 'blue',
    imageSrc: '/images/etapa-infantil.jpg',
    imageAlt: 'Vivências da Educação Infantil no Centro Educacional Sonho Encantado',
  },
  {
    id: 'ensino-fundamental',
    number: '03',
    tag: 'Anos iniciais · até o 5º ano',
    title: 'Ensino Fundamental',
    summary:
      'Nos anos iniciais até o 5º ano, consolidamos a leitura, a escrita, o raciocínio e o gosto pelo aprender em um ambiente organizado e acolhedor.',
    highlights: [
      'Base sólida em leitura, escrita e raciocínio lógico',
      'Estímulo à criatividade, responsabilidade e trabalho em grupo',
      'Acompanhamento pedagógico próximo em cada série',
    ],
    accentColor: 'green',
    imageSrc: '/images/etapa-fundamental.jpg',
    imageAlt: 'Estudantes dos anos iniciais do Ensino Fundamental até o 5º ano',
  },
];

export const ACTIVITIES_CONTENT = {
  eyebrow: 'Experiências de Aprendizagem',
  title: 'Atividades que ampliam a expressão e a curiosidade.',
  intro:
    'No cotidiano escolar, o Centro Educacional Sonho Encantado integra vivências que fortalecem a comunicação, a sensibilidade artística e a familiaridade com novas linguagens.',
  featuredMusic: {
    id: 'musica',
    category: 'Expressão e sensibilidade',
    title: 'Música',
    description:
      'A vivência musical estimula a escuta atenta, o ritmo, a coordenação e a expressão em grupo desde os primeiros anos.',
    focusPoints: ['Percepção sonora', 'Ritmo e escuta', 'Expressão coletiva'],
    imageSrc: '/images/atividade-musica.jpg',
    imageAlt: 'Atividade musical com estudantes do Centro Educacional Sonho Encantado',
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
        'Aproximação natural a um novo idioma por meio de vocabulário cotidiano, escuta e atividades adequadas a cada faixa etária.',
      focusPoints: ['Ampliação cultural', 'Familiaridade com o idioma'],
    },
  ] as ActivityItem[],
};

export const ENVIRONMENT_CONTENT = {
  eyebrow: 'Diferenciais e Ambiente',
  title: 'Acolhimento e seriedade para que a criança aprenda com segurança.',
  description:
    'Cuidamos da qualidade das relações dentro da escola, equilibrando organização pedagógica, criatividade e proximidade com cada família.',
  pillars: [
    {
      title: 'Acolhimento próximo',
      text: 'Recepção atenta às famílias e cuidado especial na adaptação e na rotina diária.',
    },
    {
      title: 'Criatividade no dia a dia',
      text: 'Brincadeiras, música e projetos que valorizam a expressão própria da infância.',
    },
    {
      title: 'Desenvolvimento contínuo',
      text: 'Olhar cuidadoso para os avanços cognitivos, sociais e emocionais em cada etapa.',
    },
    {
      title: 'Diálogo com os responsáveis',
      text: 'Comunicação acessível e respeitosa entre secretaria, equipe e famílias.',
    },
  ],
  photos: [
    {
      src: '/images/ambiente-sala.jpg',
      alt: 'Sala de aula do Centro Educacional Sonho Encantado',
      caption: 'Espaços preparados para a rotina escolar',
    },
    {
      src: '/images/ambiente-fachada.jpg',
      alt: 'Fachada ou espaço de convivência da escola no Guamá',
      caption: 'Presença tradicional no bairro do Guamá',
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
      'Unidade no Conjunto Alacid Nunes, ampliando o acesso ao ensino do Sonho Encantado no Guamá.',
    therapeuticNote: {
      badge: 'Serviços divulgados pela Unidade II',
      title: 'Acompanhamento terapêutico anunciado na unidade',
      description:
        'Em caráter complementar e separado do ensino regular, a Unidade II divulga atendimentos voltados ao suporte ao desenvolvimento infantil:',
      services: ['Acompanhamento terapêutico', 'Psicologia', 'Psicopedagogia', 'Musicoterapia'],
      disclaimer:
        'Disponibilidade, formatos e critérios de atendimento devem ser consultados diretamente com a secretaria da unidade.',
    },
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: '/images/galeria-01.jpg',
    alt: 'Vivência pedagógica no Centro Educacional Sonho Encantado',
    caption: 'Vivências cotidianas na Educação Infantil',
  },
  {
    id: 'gal-2',
    src: '/images/galeria-02.jpg',
    alt: 'Estudantes em atividade nos anos iniciais do Ensino Fundamental',
    caption: 'Descobertas nos anos iniciais do Fundamental',
  },
  {
    id: 'gal-3',
    src: '/images/galeria-03.jpg',
    alt: 'Momento de música e convivência escolar',
    caption: 'Música, criatividade e convivência',
  },
  {
    id: 'gal-4',
    src: '/images/galeria-04.jpg',
    alt: 'Ambiente escolar do Centro Educacional Sonho Encantado no Guamá',
    caption: 'Espaços da escola no bairro do Guamá',
  },
];
