import React, { useEffect, useState } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importação dos Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/Stats';
import Sobre from './components/Sobre';
import Vitrine from './components/Vitrine';
import Servicos from './components/Servicos';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => { 
    AOS.init({ duration: 1200, once: true, offset: 100 }); 
  }, []);

  return (
    <div className="overflow-x-hidden selection:bg-brand-gold/30">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <main>
        <Hero />
        <StatsSection />
        <Sobre />
        <Vitrine />
        <Servicos />
        <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      </main>

      <Footer />

      {/* WHATSAPP FLUTUANTE */}
      <a 
        href="https://wa.me/5517996780438" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-[200] hover:scale-110 transition-transform"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}