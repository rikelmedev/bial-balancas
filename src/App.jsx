import React, { useEffect, useState } from 'react';
import { WhatsappLogo, ShieldCheck, Wrench, Storefront, CheckCircle, Star, List, X } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-full px-8 py-3 z-50 flex justify-between items-center shadow-xl border border-slate-100">
        <div className="flex items-center gap-2">
          <img src="/imagens/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <span className="font-black text-brand-blue text-xl">BIAL</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-bold text-brand-blue text-xs uppercase tracking-widest">
          <a href="#vitrine" className="hover:text-brand-gold transition-colors">Produtos</a>
          <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
        </div>

        <a href="https://wa.me/5517996780438" className="hidden md:flex bg-brand-blue text-white px-6 py-2 rounded-full text-xs font-bold items-center gap-2">
          <WhatsappLogo size={18} weight="fill" /> ORÇAMENTO
        </a>

        <button className="md:hidden text-brand-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-hero-radial pt-48 pb-24 text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-brand-gold/40 rounded-full text-brand-gold text-[10px] font-bold uppercase mb-6">
              <Star weight="fill" /> Especialista em Pesagem
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              A Solução Completa para o seu <span className="text-brand-gold">Negócio.</span>
            </h1>
            <p className="text-slate-300 text-lg mb-10 max-w-lg">Venda, manutenção e calibração de balanças industriais. Tecnologia que evita paradas na sua operação.</p>
            <a href="https://wa.me/5517996780438" className="inline-flex bg-gold-gradient text-brand-blue px-10 py-4 rounded-full font-black shadow-2xl active:scale-95 transition-transform">
              FALAR COM ESPECIALISTA
            </a>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="bg-white/5 p-3 rounded-[40px] border border-white/10 shadow-2xl">
              <img src="/imagens/oficina.png" alt="Oficina" className="rounded-[30px] w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="zoom-in">
            <img src="/imagens/bial.png" alt="Bial" className="rounded-3xl shadow-2xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl text-center">
              <span className="text-3xl font-black block">+10</span>
              <span className="text-xs font-bold uppercase tracking-widest">Anos de Experiência</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-black text-brand-blue mb-6">Parceiro Estratégico do Seu Negócio</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">Não somos apenas vendedores. A Bial Balanças garante que o seu negócio nunca pare. Entendemos que balança parada significa prejuízo.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-brand-blue">
                <CheckCircle size={24} weight="fill" className="text-brand-gold" /> ATENDIMENTO TÉCNICO ESPECIALIZADO
              </div>
              <div className="flex items-center gap-3 font-bold text-brand-blue">
                <CheckCircle size={24} weight="fill" className="text-brand-gold" /> LABORATÓRIO PRÓPRIO
              </div>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/5517996780438" className="floating-whatsapp">
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}