import React, { useEffect, useState } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importação dos Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/Stats';
import Sobre from './components/Sobre';
import Processo from './components/Processo';
import Portfolio from './components/Portfolio';
import Vitrine from './components/Vitrine';
import Servicos from './components/Servicos';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { whatsappLink } from './config';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  return (
    <div className="overflow-x-hidden selection:bg-brand-accent/30">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main>
        <Hero />
        <StatsSection />
        <Sobre />
        <Processo />
        <Portfolio />
        <Vitrine />
        <Servicos />
        <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      </main>

      <Footer />

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={whatsappLink('Olá! Gostaria de solicitar um orçamento.')}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-[200] hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}
