import React, { useEffect, useState } from 'react';
import { WhatsappLogo, ShieldCheck, Wrench, Storefront, CheckCircle, Star, List, X, CaretDown } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  useEffect(() => { 
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* NAVBAR RESPONSIVA */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-full px-8 py-3 z-50 flex justify-between items-center shadow-xl border border-slate-100">
        <div className="flex items-center gap-2">
          <img src="/imagens/logo.png" alt="Bial" className="h-10 w-10 object-contain" />
          <span className="font-black text-brand-blue text-xl tracking-tighter uppercase">Bial</span>
        </div>
        
        {/* Links Desktop */}
        <div className="hidden md:flex gap-8 font-bold text-brand-blue text-xs uppercase tracking-widest">
          <a href="#vitrine" className="hover:text-brand-gold transition-colors">Vendas</a>
          <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
        </div>

        <a href="https://wa.me/5517996780438" className="hidden md:flex bg-brand-blue text-white px-6 py-2 rounded-full text-xs font-bold items-center gap-2 active:scale-95 transition-transform">
          <WhatsappLogo size={18} weight="fill" /> ORÇAMENTO
        </a>

        {/* Menu Mobile Toggle */}
        <button className="md:hidden text-brand-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>

        {/* Overlay Mobile */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 md:hidden border border-slate-100 animate-in fade-in zoom-in duration-300">
            <a href="#vitrine" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue p-2">Vendas</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue p-2">Serviços</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue p-2">Sobre</a>
            <a href="https://wa.me/5517996780438" className="bg-brand-blue text-white p-4 rounded-2xl text-center font-bold">Solicitar Orçamento</a>
          </div>
        )}
      </nav>

      {/* HERO - FOTO DA OFICINA CORRIGIDA (.jpg) */}
      <section className="bg-hero-radial pt-48 pb-24 text-white relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-brand-gold/40 rounded-full text-brand-gold text-[10px] font-bold uppercase mb-6 bg-white/5">
              <Star weight="fill" /> Precisão Industrial
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Sua Produção <span className="text-brand-gold">Não Pode Parar.</span>
            </h1>
            <p className="text-slate-300 text-lg mb-10 max-w-lg">Manutenção ágil e venda de balanças com garantia real. O suporte técnico que o seu negócio precisa.</p>
            <a href="https://wa.me/5517996780438" className="inline-flex bg-gold-gradient text-brand-blue px-10 py-4 rounded-full font-black animate-shimmer shadow-2xl active:scale-95 transition-transform uppercase tracking-wider">
              Falar com Especialista
            </a>
          </div>
          <div className="relative animate-float" data-aos="fade-left">
            <div className="bg-white/5 p-3 rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-sm">
              <img src="/imagens/Oficina.png" alt="Oficina Bial" className="rounded-[30px] w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS (AUTORIDADE) */}
      <div className="bg-slate-50 py-10 border-y border-slate-100">
        <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
          <span className="font-black text-2xl text-slate-400">TOLEDO</span>
          <span className="font-black text-2xl text-slate-400">FILIZOLA</span>
          <span className="font-black text-2xl text-slate-400">URANO</span>
          <span className="font-black text-2xl text-slate-400">BALMAK</span>
        </div>
      </div>

      {/* SOBRE - FOTO BIAL */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="zoom-in">
            <img src="/imagens/bial.png" alt="Profissional Bial" className="rounded-3xl shadow-2xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl text-center border-4 border-white">
              <span className="text-3xl font-black block">+10</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Anos de Mercado</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-black text-brand-blue mb-6">Autoridade em Pesagem</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">Não vendemos apenas máquinas, entregamos continuidade operacional. Com laboratório próprio e atendimento ágil.</p>
            <div className="space-y-4 font-bold text-brand-blue text-sm">
              <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-gold" /> SUPORTE TÉCNICO NO LOCAL</div>
              <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-gold" /> LABORATÓRIO DE MANUTENÇÃO</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER FINAL */}
      <footer className="bg-slate-950 py-16 text-center text-white">
        <img src="/imagens/logo.png" alt="Logo" className="h-16 mx-auto mb-6 grayscale brightness-200 opacity-20" />
        <p className="text-slate-500 text-xs uppercase tracking-widest">© {new Date().getFullYear()} Bial Balanças. Todos os direitos reservados.</p>
      </footer>

      {/* WHATSAPP FIXO */}
      <a href="https://wa.me/5517996780438" className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}