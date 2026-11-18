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
   GUIA DE FOTOGRAFIAS — INSERÇÃO E SUBSTITUIÇÃO EM public/images/
   1. Hero Principal: /images/hero-escola.jpg (5:4 ou 4:3 — ambiente acolhedor ou atividade autorizada)
   2. Nossa História: /images/historia-escola.jpg (proporção original sem tarjas pretas)
   3. Etapas de Ensino:
      - /images/etapa-baby-class.jpg (16:10 — vivência Baby Class)
      - /images/etapa-infantil.jpg (16:10 — Educação Infantil)
      - /images/etapa-fundamental.jpg (16:10 — Ensino Fundamental até o 5º ano)
   4. Experiências (Música): /images/atividade-musica.jpg (16:9 — atividade musical)
   5. Ambiente:
      - /images/ambiente-sala.jpg (4:4.2 — sala de aula iluminada)
      - /images/ambiente-fachada.jpg (4:4.6 — fachada ou espaço de convivência no Guamá)
   6. Galeria Institucional: /images/galeria-01.jpg até /images/galeria-04.jpg
   ========================================================================== */

export const HERO_CONTENT = {
  eyebrow: 'Guamá · Belém, Pará',
  headline: 'O começo de grandes descobertas.',
  description:
    'Há mais de 18 anos acolhendo famílias no Guamá, do Baby Class ao 5º ano do Ensino Fundamental, com cuidado próximo e compromisso com a infância.',
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
    highlight: 'Mais de 18 anos',
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
    'O Centro Educacional Sonho Encantado — conhecido nas redes sociais como Colégio Sonho Encantado — construiu ao longo de mais de 18 anos uma trajetória dedicada à infância no bairro do Guamá, em Belém.',
    'Acreditamos em uma escola que conhece cada criança pelo nome, respeita seu tempo de desenvolvimento e mantém diálogo transparente com pais e responsáveis, do Baby Class ao 5º ano do Ensino Fundamental.',
  ],
  quote: 'Educando para o Futuro com acolhimento, proximidade e respeito à infância.',
  ctaLabel: 'Saiba mais sobre matrículas',
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
      'Transição tranquila entre a casa e a escola, com atenção cuidadosa à rotina, aos estímulos sensoriais e ao acolhimento afetivo.',
    highlights: [
      'Adaptação acompanhada de perto com os responsáveis',
      'Vivências lúdicas respeitando o ritmo de cada criança',
      'Estímulo gradual à convivência e descoberta do espaço',
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
      'O brincar, a imaginação e a convivência orientam o desenvolvimento da linguagem, da autonomia e da curiosidade sobre o mundo.',
    highlights: [
      'Aprendizagem integrada a brincadeiras e projetos da infância',
      'Desenvolvimento socioemocional, motor e expressivo',
      'Comunicação frequente sobre a rotina escolar',
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
      'Nos anos iniciais até o 5º ano, consolidamos a leitura, a escrita, o raciocínio e o gosto pelo aprender em um ambiente organizado e acolhedor.',
    highlights: [
      'Base sólida em leitura, escrita e raciocínio lógico',
      'Estímulo à criatividade, responsabilidade e trabalho em grupo',
      'Acompanhamento pedagógico próximo em cada série',
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
    photoGuide: {
      section: 'Experiências: Música',
      recommendedType: 'Turma em momento musical, canto ou instrumentos',
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
      photoGuide: {
        section: 'Ambiente: Sala de Aula',
        recommendedType: 'Sala organizada e bem iluminada da escola',
        idealRatio: '4:4.2',
        filePath: '/images/ambiente-sala.jpg',
      } satisfies PhotoGuide,
    },
    {
      src: '/images/ambiente-fachada.jpg',
      alt: 'Fachada ou espaço de convivência da escola no Guamá',
      caption: 'Presença tradicional no bairro do Guamá',
      photoGuide: {
        section: 'Ambiente: Fachada ou Convivência',
        recommendedType: 'Fachada da unidade ou pátio interno de convivência',
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
