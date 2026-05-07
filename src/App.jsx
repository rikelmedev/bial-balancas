import React from 'react';
import StatsSection from './components/Stats';
import Workflow from './components/Workflow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const Button = ({ children, variant = 'primary', className = "" }) => {
  const variants = {
    primary: "bg-[--color-brand-blue] text-white hover:opacity-90 shadow-lg",
    gold: "bg-[--bg-gold-gradient] text-[--color-brand-blue] font-extrabold shadow-xl",
  };

  return (
    <button className={`px-8 py-4 rounded-full transition-all duration-300 active:scale-95 cursor-pointer font-bold ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-gold/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/80 backdrop-blur-md rounded-full px-8 py-3 z-50 flex justify-between items-center shadow-2xl border border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[--color-brand-blue] rounded-full flex items-center justify-center text-white font-black">B</div>
          <span className="font-black text-[--color-brand-blue] tracking-tighter text-xl">BIAL</span>
        </div>
        
        <ul className="hidden md:flex gap-10 font-bold text-[--color-brand-blue] text-xs uppercase tracking-widest">
          <li><a href="#inicio" className="hover:text-brand-gold transition-colors">Início</a></li>
          <li><a href="#processo" className="hover:text-brand-gold transition-colors">Como Funciona</a></li>
          <li><a href="#faq" className="hover:text-brand-gold transition-colors">Dúvidas</a></li>
        </ul>

        <Button className="hidden md:block !py-2 !px-6 text-xs uppercase">Contato</Button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="pt-44 pb-24 px-6 bg-[--bg-hero-radial] text-white relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1 border border-brand-gold/40 rounded-full text-brand-gold text-[10px] font-bold uppercase tracking-[2px] mb-8 bg-white/5 backdrop-blur-sm">
              Manutenção • Instalação • Vendas
            </span>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tighter">
              Precisão que impulsiona o seu <span className="text-brand-gold">Sucesso.</span>
            </h1>
            <p className="text-slate-300 text-lg mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Especialista em balanças industriais de todos os portes. Unimos venda de equipamentos modernos a um suporte técnico rigoroso para a sua indústria não parar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gold">Solicitar Orçamento</Button>
              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all font-bold">
                Ver Serviços
              </button>
            </div>
          </div>

          {/* Área Visual do Hero */}
          <div className="relative group">
            <div className="bg-white/5 backdrop-blur-2xl p-4 rounded-[48px] border border-white/10 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <div className="aspect-video bg-slate-800 rounded-[36px] flex items-center justify-center text-slate-500 overflow-hidden shadow-inner">
                <img src="/hero-scale.png" alt="Equipamentos de Pesagem" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPONENTES IMPORTADOS --- */}
      
      <StatsSection />

      <div id="processo">
        <Workflow />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <Footer />

    </div>
  );
}