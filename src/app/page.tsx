import HeroOne from './hero-one/page'
import HeroTwo from './hero-two/page'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPageContent />
    </main>
  );
}

function LandingPageContent() {
  return (
    <div className="space-y-24">
      {/* Hero One - Video Creation Section */}
      <section id="hero-one" className="py-12 md:py-20">
        <HeroOne />
      </section>

      {/* Hero Two - Plant Section */}
      <section id="hero-two" className="py-12 md:py-20 bg-gray-50">
        <HeroTwo />
      </section>

    </div>
  );
}