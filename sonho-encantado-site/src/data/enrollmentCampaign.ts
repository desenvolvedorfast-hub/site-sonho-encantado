export type CampaignDisplayMode = 'auto' | 'modal' | 'banner';

export interface EnrollmentCampaignConfig {
  enabled: boolean;
  campaignYear: number;
  brandLabel: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  ctaLabel: string;
  secondaryCtaLabel: string;
  expandLabel: string;
  ctaUrl: string;
  displayMode: CampaignDisplayMode;
}

const CAMPAIGN_YEAR = 2027;
const WHATSAPP_BASE_URL = 'https://wa.me/5591998248944';
const CAMPAIGN_WHATSAPP_MESSAGE = `Olá! Gostaria de agendar uma visita e saber mais sobre as matrículas ${CAMPAIGN_YEAR} no Colégio Sonho Encantado.`;

export const ENROLLMENT_CAMPAIGN: EnrollmentCampaignConfig = {
  // Altere para false para desativar a campanha sem remover o componente
  enabled: true,
  campaignYear: CAMPAIGN_YEAR,
  brandLabel: 'COLÉGIO SONHO ENCANTADO',
  title: `Matrículas Abertas ${CAMPAIGN_YEAR}`,
  description:
    'Do Baby Class ao 5º ano do Ensino Fundamental. Venha conhecer nossa escola!',
  image: {
    src: '/images/matriculas-abertas.jpg',
    alt: 'Matrículas abertas no Colégio Sonho Encantado no Guamá, Belém/PA',
    width: 800,
    height: 640,
  },
  ctaLabel: 'Agende uma visita',
  secondaryCtaLabel: 'Continuar navegando',
  expandLabel: 'Ver detalhes',
  ctaUrl: `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(CAMPAIGN_WHATSAPP_MESSAGE)}`,
  // 'auto': modal compacto no desktop (>= 768px) e banner compacto com foto no mobile (< 768px)
  displayMode: 'auto',
};
