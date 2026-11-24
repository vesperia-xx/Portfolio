import { useEffect } from 'react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useTranslation } from '@/lib/i18n';

export default function Home() {
  const { locale, t } = useTranslation();

  // Next no actualiza <html lang> en las transiciones de locale: lo sincronizamos.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="min-h-screen">
      <Seo />

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>

      <Navbar />

      <main id="content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
