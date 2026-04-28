import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ModulesSection from '@/components/ModulesSection';
import PricingSection from '@/components/PricingSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import TermsSection from '@/components/TermsSection';
import RelatedProjects from '@/components/RelatedProjects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ModulesSection />
      <PricingSection />
      <RelatedProjects />
      <ClientsSection />
      <ContactSection />
      <TermsSection />
      <Footer />
    </main>
  );
}
