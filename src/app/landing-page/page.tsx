import Header from '@/components/Landing-Page/Header';
import Hero from '@/components/Landing-Page/Hero';
import Partners from '@/components/Landing-Page/PartnerSection';
import Features from '@/components/Landing-Page/Features';
import PricingSection from '@/components/Landing-Page/PricingSection'
import Testimonials from '@/components/Landing-Page/Testimonials'
import CtaSection from '@/components/Landing-Page/CtaSection';
import Footer from '@/components/Landing-Page/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Partners />
      <Features />
      <PricingSection />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}