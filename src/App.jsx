import React, { useEffect, useState } from 'react';
import { WhatsappLogo, ShieldCheck, Wrench, Storefront, CheckCircle, Star, List, X } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- COMPONENTE: MARCAS (SOCIAL PROOF) ---
const Brands = () => (
  <div className="bg-slate-50 py-10 border-y border-slate-100">
    <div className="container mx-auto px-6">
      <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Especialista nas principais marcas do mercado</p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
        <span className="font-black text-2xl text-slate-400">TOLEDO</span>
        <span className="font-black text-2xl text-slate-400">FILIZOLA</span>
        <span className="font-black text-2xl text-slate-400">URANO</span>
        <span className="font-black text-2xl text-slate-400">BALMAK</span>
      </div>
    </div>
  </div>
);

// --- COMPONENTE: CTA FINAL ---
const FinalCTA = () => (
  <section className="py-20 bg-brand-blue relative overflow-hidden text-center text-white">
    <div className="container relative z-10 px-6">
      <h2 className="text-4xl font-black mb-6" data-aos="fade-up">Sua produção não pode esperar.</h2>
      <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Receba um orçamento imediato pelo WhatsApp e garanta a precisão dos seus equipamentos hoje mesmo.
      </p>
      <a href="https://wa.me/5517996780438" className="inline-flex bg-gold-gradient text-brand-blue px-12 py-5 rounded-full font-black animate-shimmer shadow-2xl active:scale-95 transition-transform">
        <WhatsappLogo size={28} weight="fill" className="mr-2" /> SOLICITAR AGORA
      </a>
    </div>
  </section>
);

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
          <img src="/imagens/logo.png" alt="Logo Bial" className="h-10 w-10 object-contain" />
          <span className="font-black text-brand-blue text-xl tracking-tighter">BIAL</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-brand-blue text-xs uppercase tracking-widest">
          <a href="#vitrine" className="hover:text-brand-gold transition-colors">Vendas</a>
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

      {/* HERO - FOTO DA OFICINA */}
      <section className="bg-hero-radial pt-48 pb-24 text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-brand-gold/40 rounded-full text-brand-gold text-[10px] font-bold uppercase mb-6">
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
          <div className="relative" data-aos="fade-left">
            <div className="bg-white/5 p-3 rounded-[40px] border border-white/10 shadow-2xl">
              <img src="/imagens/Oficina.jpg" alt="Oficina Bial Balanças" className="rounded-[30px] w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <Brands />

      {/* SOBRE - FOTO DO BIAL */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="zoom-in">
            <img src="/imagens/bial.jpg" alt="Profissional Bial" className="rounded-3xl shadow-2xl w-full object-cover aspect-square" />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl text-center border-4 border-white">
              <span className="text-3xl font-black block">+10</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Anos de Mercado</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-black text-brand-blue mb-6">Autoridade Técnica em Pesagem</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">Não vendemos apenas equipamentos, entregamos continuidade. Na Bial Balanças, entendemos que precisão é lucro e erro é desperdício. Garantimos suporte total em venda, manutenção e calibração.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-brand-blue">
                <CheckCircle size={24} weight="fill" className="text-brand-gold" /> LABORATÓRIO TÉCNICO PRÓPRIO
              </div>
              <div className="flex items-center gap-3 font-bold text-brand-blue">
                <CheckCircle size={24} weight="fill" className="text-brand-gold" /> MANUTENÇÃO ESPECIALIZADA NO LOCAL
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

      <footer className="bg-slate-950 py-10 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Bial Balanças. Todos os direitos reservados.</p>
      </footer>

      <a href="https://wa.me/5517996780438" className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}