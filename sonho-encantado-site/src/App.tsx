import { ActivitiesSection } from './components/ActivitiesSection';
import { ComplementaryServicesSection } from './components/ComplementaryServicesSection';
import { EnrollmentCampaign } from './components/EnrollmentCampaign';
import { EnvironmentSection } from './components/EnvironmentSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HistorySection } from './components/HistorySection';
import { ProjectsSection } from './components/ProjectsSection';
import { StagesSection } from './components/StagesSection';
import { TrustStrip } from './components/TrustStrip';
import { UnitsSection } from './components/UnitsSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-paper text-brand-ink">
      <a href="#conteudo-principal" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <Header />

      <main id="conteudo-principal" tabIndex={-1} className="flex-1 outline-none">
        <HeroSection />
        <TrustStrip />
        <HistorySection />
        <StagesSection />
        <ProjectsSection />
        <ActivitiesSection />
        <EnvironmentSection />
        <UnitsSection />
        <ComplementaryServicesSection />
        <GallerySection />
        <FinalCtaSection />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
      <EnrollmentCampaign />
    </div>
  );
}

export default App;
