import Navbar from './components/Navbar';  
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import MenuSection from './components/MenuSection';
import LunchOffers from './components/LunchOffers';
import BanquetSection from './components/BanquetSection';
import {
  ServiceOptions,
  ParkingSection,
  GallerySection,
  ReviewsSection,
} from './components/SupportSections';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <MenuSection />
        <LunchOffers />
        <BanquetSection />
        <ServiceOptions />
        <ParkingSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hi%20Floris%2C%20I%27d%20like%20to%20make%20a%20reservation"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          boxShadow: '0 8px 24px rgba(37,211,102,0.5)',
          zIndex: 999,
          transition: 'all 0.25s ease',
          animation: 'pulse-gold 2.5s ease-in-out infinite',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = 'scale(1.12)';
          el.style.boxShadow = '0 12px 32px rgba(37,211,102,0.6)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = 'scale(1)';
          el.style.boxShadow = '0 8px 24px rgba(37,211,102,0.5)';
        }}
      >
        💬
      </a>

      {/* Floating Call Button */}
      <a
        href="tel:+91XXXXXXXXXX"
        aria-label="Call Floris Restaurant"
        style={{
          position: 'fixed',
          bottom: 96,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: '#7D1A2B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          boxShadow: '0 8px 24px rgba(125,26,43,0.4)',
          zIndex: 999,
          transition: 'all 0.25s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = 'scale(1.12)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = 'scale(1)';
        }}
      >
        📞
      </a>
    </>
  );
}