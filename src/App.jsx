import React, { useEffect, useState } from 'react';
import { WhatsappLogo, ShieldCheck, Wrench, Storefront, CheckCircle, Star, List, X, Quotes, CaretDown } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- COMPONENTES AUXILIARES ---

const Navbar = ({ setIsOpen, isOpen }) => (
  <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-full px-8 py-3 z-50 flex justify-between items-center shadow-xl border border-slate-100">
    <div className="flex items-center gap-2">
      <img src="/imagens/logo.png" alt="Logo Bial" className="h-10 w-10 object-contain" />
      <span className="font-black text-brand-blue text-xl tracking-tighter uppercase">Bial</span>
    </div>
    <div className="hidden md:flex gap-8 font-bold text-brand-blue text-xs uppercase tracking-widest">
      <a href="#vitrine" className="hover:text-brand-gold transition-colors">Vendas</a>
      <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
      <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
    </div>
    <a href="https://wa.me/5517996780438" className="hidden md:flex bg-brand-blue text-white px-6 py-2 rounded-full text-xs font-bold items-center gap-2 active:scale-95 transition-transform">
      <WhatsappLogo size={18} weight="fill" /> ORÇAMENTO
    </a>
    <button className="md:hidden text-brand-blue" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={28} /> : <List size={28} />}
    </button>
  </nav>
);

const Hero = () => (
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
          <img src="/imagens/Oficina.png" alt="Oficina Bial" className="rounded-[30px] w-full shadow-lg" />
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <div className="bg-brand-blue py-12 border-y border-white/5">
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[["+10", "Anos de Mercado"], ["+2k", "Atendimentos"], ["100%", "Garantia"], ["24h", "Suporte Ágil"]].map(([val, label], i) => (
        <div key={i}>
          <div className="text-brand-gold text-3xl font-black">{val}</div>
          <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{label}</div>
        </div>
      ))}
    </div>
  </div>
);

const ProductShowcase = () => (
  <section id="vitrine" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-brand-blue">Venda de Equipamentos</h2>
        <p className="text-slate-400 mt-2">Novos e seminovos com revisão completa.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {t: "Balanças Comerciais", d: "Precisão para padarias e mercados.", img: "/imagens/anuncio1.jpg"},
          {t: "Plataformas Industriais", d: "Robustez para pesagem pesada.", img: "/imagens/anuncio4.jpg"},
          {t: "Impressoras Térmicas", d: "Automação rápida para etiquetas.", img: "/imagens/anuncio5.jpg"}
        ].map((p, i) => (
          <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 card-hover">
            <img src={p.img} alt={p.t} className="rounded-2xl mb-6 h-48 w-full object-cover" />
            <h3 className="text-xl font-bold text-brand-blue mb-2">{p.t}</h3>
            <p className="text-slate-500 text-sm mb-4">{p.d}</p>
            <a href="https://wa.me/5517996780438" className="text-brand-gold font-bold text-sm uppercase tracking-wider">Ver Preços →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    {q: "Atendem balanças rodoviárias?", a: "Sim! Somos especialistas em balanças industriais de todos os portes."},
    {q: "O suporte é no local?", a: "Sim, realizamos visitas técnicas em toda a região para manutenção e calibração."},
    {q: "Os produtos têm garantia?", a: "Tanto os novos como os seminovos revisados possuem garantia integral."}
  ];
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-black text-brand-blue text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-6 text-left flex justify-between font-bold text-brand-blue uppercase text-sm tracking-wide">
                {f.q} <CaretDown className={open === i ? "rotate-180" : ""} />
              </button>
              {open === i && <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE MESTRE ---

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Stats />
      
      {/* SOBRE */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="zoom-in">
            <img src="/imagens/bial.png" alt="Profissional Bial" className="rounded-3xl shadow-2xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl text-center border-4 border-white">
              <span className="text-3xl font-black block">+10</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Anos de Mercado</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-black text-brand-blue mb-6">Autoridade em Pesagem</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">Não vendemos apenas máquinas, entregamos continuidade operacional. Com laboratório próprio e atendimento ágil, garantimos que sua balança nunca seja um problema.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-brand-blue">
                <CheckCircle size={24} weight="fill" className="text-brand-gold" /> SUPORTE TÉCNICO NO LOCAL
              </div>
              <div className="flex items-center gap-3 font-bold text-brand-blue">
                <CheckCircle size={24} weight="fill" className="text-brand-gold" /> LABORATÓRIO DE MANUTENÇÃO
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductShowcase />
      
      {/* SERVIÇOS  */}
      <section id="servicos" className="py-24 bg-brand-blue text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <Wrench size={48} className="text-brand-gold mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Manutenção</h3>
              <p className="text-slate-400 text-sm">Reparo especializado em placas e sensores de todas as marcas.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <ShieldCheck size={48} className="text-brand-gold mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Calibração</h3>
              <p className="text-slate-400 text-sm">Aferição técnica para garantir conformidade e precisão absoluta.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <Storefront size={48} className="text-brand-gold mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Venda</h3>
              <p className="text-slate-400 text-sm">Equipamentos novos e usados com o melhor custo-benefício.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* FOOTER */}
      <footer className="bg-slate-950 py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <img src="/imagens/logo.png" alt="Logo" className="h-20 mx-auto mb-8 grayscale brightness-200" />
          <h3 className="text-2xl font-black mb-8">Precisão e Confiança em cada Pesagem.</h3>
          <a href="https://wa.me/5517996780438" className="inline-flex bg-gold-gradient text-brand-blue px-10 py-4 rounded-full font-black animate-shimmer">
             FALAR NO WHATSAPP
          </a>
          <p className="mt-12 text-slate-600 text-xs uppercase tracking-[3px]">© {new Date().getFullYear()} Bial Balanças.</p>
        </div>
      </footer>

      {/* WPP FLOATING */}
      <a href="https://wa.me/5517996780438" className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}