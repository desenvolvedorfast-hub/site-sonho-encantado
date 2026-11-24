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
  imageSrc: string;
  imageAlt: string;
  photoGuide: PhotoGuide;
}

export interface MonthlyProject {
  month: string;
  project: string;
  theme: string;
  summary: string;
  accentColor: 'yellow' | 'green' | 'blue' | 'dark';
  featured?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  photoGuide?: PhotoGuide;
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
  instagramUrl: 'https://www.instagram.com/colegiosonhoencantado/',
  instagramHandle: '@colegiosonhoencantado',
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

export const HERO_CONTENT = {
  eyebrow: 'Guamá · Belém, Pará',
  headline: 'O começo de grandes descobertas.',
  description:
    'Há mais de 18 anos acolhendo famílias no Guamá, do Baby Class ao 5º ano do Ensino Fundamental, com rotina acolhedora e aprendizagem ativa.',
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
  title: 'Mais de 18 anos de história e vínculo próximo com as famílias do Guamá.',
  paragraphs: [
    'O Centro Educacional Sonho Encantado — conhecido na comunidade como Colégio Sonho Encantado — atua há mais de 18 anos no bairro do Guamá, em Belém, com compromisso com o desenvolvimento integral de cada criança.',
    'Somos uma escola cristã que acredita na educação como um caminho de conhecimento, valores e formação humana. Unimos aprendizagem, acolhimento e princípios como amor ao próximo, respeito, solidariedade, responsabilidade e valorização da família.',
  ],
  quote: 'Educando para o Futuro com fé, acolhimento, parceria com as famílias e respeito à infância.',
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
  eyebrow: 'Projetos que Encantam',
  conceptName: 'Aprender, Criar e Encantar',
  title: 'Um projeto temático por mês para aprender criando.',
  description:
    'Às sextas-feiras, em cerca de quatro a cinco encontros mensais, as turmas vivenciam temas que integram linguagem, matemática, natureza e sociedade, inglês, arte, valores e socialização.',
  fridayRoutineLabel: 'Como funciona cada sexta-feira',
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
      summary: 'Acolhimento inicial, reconhecimento dos espaços escolares e criação de novos vínculos.',
      accentColor: 'yellow',
      featured: true,
    },
    {
      month: 'Fevereiro',
      project: 'A Árvore',
      theme: 'Cuidar da Natureza é Cuidar da Vida',
      summary: 'Observação da natureza, cuidado com o meio ambiente e expressões artísticas.',
      accentColor: 'green',
      featured: true,
    },
    {
      month: 'Março',
      project: 'Minha Família',
      theme: 'Família é Amor',
      summary: 'Valorização dos laços familiares, histórias afetivas e convivência.',
      accentColor: 'yellow',
    },
    {
      month: 'Abril',
      project: 'Eu Sou Assim',
      theme: 'Identidade e Emoções',
      summary: 'Reconhecimento de si, escuta dos sentimentos, empatia e respeito às diferenças.',
      accentColor: 'blue',
      featured: true,
    },
    {
      month: 'Maio',
      project: 'Meu Mundo',
      theme: 'O Lugar Onde Vivo',
      summary: 'Descobertas sobre o bairro, a comunidade e o cuidado com os espaços coletivos.',
      accentColor: 'green',
    },
    {
      month: 'Junho',
      project: 'Trânsito',
      theme: 'Segurança no Dia a Dia',
      summary: 'Noções práticas de atenção, sinais, cuidado e cidadania no cotidiano.',
      accentColor: 'yellow',
    },
    {
      month: 'Julho',
      project: 'Cultura e Tradições',
      theme: 'Nossa Cultura',
      summary: 'Saberes regionais, histórias, música e manifestações culturais da nossa terra.',
      accentColor: 'blue',
    },
    {
      month: 'Agosto',
      project: 'Amizade e Respeito',
      theme: 'Conviver é Amar',
      summary: 'Partilha, solidariedade e construção diária de boas relações entre colegas.',
      accentColor: 'green',
    },
    {
      month: 'Setembro',
      project: 'Mundo das Letras',
      theme: 'Ler, Escrever e Imaginar',
      summary: 'Contação de histórias, ampliação do vocabulário e prazer pela leitura e escrita.',
      accentColor: 'dark',
      featured: true,
    },
    {
      month: 'Outubro',
      project: 'Ser Criança',
      theme: 'Brincar Também é Aprender',
      summary: 'Ludicidade, movimento, imaginação e alegria compartilhada na infância.',
      accentColor: 'yellow',
    },
    {
      month: 'Novembro',
      project: 'Saúde e Alimentação',
      theme: 'Cuidar do Corpo',
      summary: 'Hábitos saudáveis, cuidado pessoal e curiosidade sobre alimentos.',
      accentColor: 'green',
    },
    {
      month: 'Dezembro',
      project: 'Gratidão e Natal',
      theme: 'Amor, Paz e Esperança',
      summary: 'Reflexões sobre gratidão, solidariedade, partilha e encerramento do ano.',
      accentColor: 'blue',
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
      focusPoints: ['Raciocínio lógico', 'Familiaridade digital orientada'],
      imageSrc: '/images/atividade-computacao.jpg',
      imageAlt: 'Atividade orientada de computação com estudantes da escola',
      photoGuide: {
        section: 'Experiências: Computação',
        recommendedType: 'Estudantes em atividade orientada de computação (opcional)',
        idealRatio: '16:10',
        filePath: '/images/atividade-computacao.jpg',
      },
    },
    {
      id: 'ingles',
      category: 'Comunicação e repertório',
      title: 'Inglês',
      description:
        'Aproximação natural a um novo idioma por meio de vocabulário cotidiano, escuta e atividades integradas aos projetos.',
      focusPoints: ['Vocabulário cotidiano', 'Ampliação cultural'],
      imageSrc: '/images/atividade-ingles.jpg',
      imageAlt: 'Vivência da língua inglesa integrada à rotina escolar',
      photoGuide: {
        section: 'Experiências: Inglês',
        recommendedType: 'Turma em atividade de inglês ou projeto bilíngue lúdico (opcional)',
        idealRatio: '16:10',
        filePath: '/images/atividade-ingles.jpg',
      },
    },
  ] satisfies ActivityItem[],
};

export const ENVIRONMENT_CONTENT = {
  eyebrow: 'Proposta Pedagógica e Diferenciais',
  title: 'Aprender juntos, crescer em cada descoberta.',
  christianHighlight: {
    eyebrow: 'Identidade Cristã',
    title: 'Valores que cuidam da formação humana',
    text: 'Somos uma escola cristã que acredita na educação como um caminho de conhecimento, valores e formação humana. Unimos aprendizagem, acolhimento e princípios cristãos para acompanhar cada criança em seu desenvolvimento.',
    values: [
      'Amor ao próximo',
      'Respeito',
      'Solidariedade',
      'Fé',
      'Responsabilidade',
      'Valorização da família',
    ],
  },
  vygotskyHighlight: {
    eyebrow: 'Inspiração Pedagógica · Lev Vygotsky',
    title: 'Construção compartilhada do conhecimento',
    text: 'Nossa proposta pedagógica é inspirada nos princípios de Lev Vygotsky, que valorizam as interações sociais, a mediação do professor e a construção do conhecimento por meio das experiências compartilhadas. Assim, cada criança é incentivada a explorar, participar e desenvolver novas habilidades com acompanhamento pedagógico.',
    zdpSummary:
      'Com a mediação atenta do professor (zona de desenvolvimento proximal), respeitamos o ritmo de cada aluno, fortalecendo a linguagem, a colaboração e a conquista gradual da autonomia.',
    steps: [
      { label: '01 · Interação social', detail: 'Aprender com colegas e no grupo' },
      { label: '02 · Mediação docente', detail: 'Apoio intencional do professor' },
      { label: '03 · Nova conquista', detail: 'Autonomia, linguagem e confiança' },
    ],
  },
  practiceEyebrow: 'Na prática cotidiana',
  practiceLead:
    'Valorizamos o brincar como parte viva do aprendizado — estimulando imaginação, coordenação motora, linguagem, autonomia, socialização e expressão de sentimentos.',
  pillars: [
    {
      title: 'Aprendizagem ativa',
      text: 'Participação das crianças em experiências práticas e descobertas.',
    },
    {
      title: 'Ensino por projetos',
      text: 'Integração planejada de áreas por meio de temas mensais.',
    },
    {
      title: 'Rotina acolhedora',
      text: 'Leitura, brincadeiras, artes, música, movimento e orientação diária.',
    },
    {
      title: 'Socioemocional',
      text: 'Convivência, respeito, partilha, expressão e diálogo nos conflitos.',
    },
    {
      title: 'Avaliação contínua',
      text: 'Observação atenta e acompanhamento próximo durante a rotina escolar.',
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
        idealRatio: '4:3',
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
        idealRatio: '16:10',
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
    mapsUrl: 'https://maps.app.goo.gl/EFt3Ct5VW7SJPUAz7',
    summary:
      'Localizada na Travessa Guerra Passos, atendendo famílias da região com acolhimento e organização escolar.',
  },
  {
    id: 'unidade-2',
    name: 'Unidade II',
    neighborhoodNote: 'Conjunto Alacid Nunes · Guamá, Belém/PA',
    address: 'Conjunto Alacid Nunes, Rua Doutor Virgílio de Mendonça, nº 20A',
    cityState: 'Guamá, Belém — Pará',
    mapsUrl: 'https://maps.app.goo.gl/QFXNew6wpEM15Msj7',
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
  eyebrow: 'Unidade II · Atendimento Complementar',
  title: 'Acompanhamento terapêutico e reforço escolar.',
  intro:
    'Oferecidos na Unidade II de forma independente e complementar — sem substituir o ensino regular —, voltados ao acolhimento emocional e ao apoio nos estudos.',
  therapeuticGroupTitle: 'Apoio Terapêutico e Emocional',
  therapeuticServices: [
    {
      id: 'psicologia',
      category: '01 · Desenvolvimento emocional',
      title: 'Psicologia',
      description:
        'Apoio ao desenvolvimento emocional, às relações interpessoais e ao acolhimento das necessidades individuais.',
      details: ['Escuta acolhedora', 'Relações interpessoais'],
    },
    {
      id: 'psicopedagogia',
      category: '02 · Processos de aprender',
      title: 'Psicopedagogia',
      description:
        'Acompanhamento voltado aos processos de aprendizagem e às dificuldades que possam surgir no percurso escolar.',
      details: ['Processos de aprendizagem', 'Apoio no percurso escolar'],
    },
    {
      id: 'musicoterapia',
      category: '03 · Expressão e vínculo',
      title: 'Musicoterapia',
      description:
        'Uso de recursos musicais em acompanhamento terapêutico, considerando comunicação, expressão, interação e desenvolvimento.',
      details: ['Comunicação e expressão', 'Interação terapêutica'],
      note: 'Natureza distinta das aulas regulares de Música do currículo escolar.',
    },
  ] satisfies ComplementaryService[],
  tutoringService: {
    id: 'reforco-escolar',
    category: '04 · Apoio pedagógico complementar',
    title: 'Reforço Escolar',
    description:
      'Acompanhamento pedagógico complementar com foco em leitura, escrita, raciocínio e conteúdos escolares.',
    details: [
      'Acompanhamento individual',
      'Reforço de matérias específicas',
      'Esclarecimento de dúvidas',
      'Possibilidade presencial ou online (sujeita à confirmação)',
    ],
  } satisfies ComplementaryService,
  ctaLabel: 'Consultar disponibilidade na Unidade II',
  disclaimer:
    'Modalidades, horários, profissionais responsáveis e disponibilidade de vagas estão sujeitos à confirmação junto à secretaria da Unidade II.',
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
