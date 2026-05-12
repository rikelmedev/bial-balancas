import React, { useEffect, useState } from 'react';
import { WhatsappLogo, ShieldCheck, Wrench, Storefront, CheckCircle, Star, List, X, CaretDown } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => { 
    AOS.init({ duration: 1200, once: true, offset: 100 }); 
  }, []);

  return (
    <div className="overflow-x-hidden selection:bg-brand-gold/30">
      
      {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-[100] flex justify-between items-center px-6 md:px-16 py-4 border-b border-slate-100 shadow-sm">
  <div className="flex items-center gap-2">
    <img src="/imagens/logo.png" alt="Bial" className="h-10 w-10 object-contain rounded-full shadow-sm" />
    <span className="font-black text-brand-blue text-xl tracking-tighter uppercase">Bial</span>
  </div>
  
  <div className="hidden md:flex gap-10 font-bold text-brand-blue text-xs uppercase tracking-widest">
    <a href="#vitrine" className="hover:text-brand-gold transition-colors">Vendas</a>
    <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
    <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
  </div>

  <div className="flex items-center gap-4">
    <a href="https://wa.me/5517996780438" className="hidden md:flex bg-brand-blue text-white px-8 py-2.5 rounded-full text-xs font-black items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-brand-blue/20">
      <WhatsappLogo size={18} weight="fill" /> ORÇAMENTO
    </a>
    
    <button className="md:hidden text-brand-blue" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={28} /> : <List size={28} />}
    </button>
  </div>

  {/* MENU MOBILE */}
  {isOpen && (
    <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5 duration-300">
      <a href="#vitrine" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue text-sm uppercase">Vendas</a>
      <a href="#servicos" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue text-sm uppercase">Serviços</a>
      <a href="#sobre" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue text-sm uppercase">Sobre</a>
      <a href="https://wa.me/5517996780438" className="bg-brand-blue text-white p-4 rounded-xl text-center font-bold">Solicitar Orçamento</a>
    </div>
  )}
</nav>

{/* Hero */}
    <header className="relative w-full min-h-[90vh] mt-[73px] grid grid-cols-1 md:grid-cols-[1.3fr,1fr] bg-white overflow-hidden">
  <div className="polygon-hero relative min-h-[600px] md:min-h-full flex items-end p-8 md:p-20 shadow-2xl z-10 bg-brand-blue">
    
    <div 
      className="absolute inset-0 bg-cover opacity-30 mix-blend-overlay" 
      style={{
        backgroundImage: "url(/imagens/Oficina.png)", 
        backgroundPosition: 'center 30%', 
        backgroundRepeat: 'no-repeat'
      }}
    ></div>

    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue via-transparent to-white/5"></div>
    
    <div className="relative z-20 text-white max-w-xl" data-aos="fade-right">
      <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
        <Star weight="fill" className="text-brand-gold" />
        <span className="text-[10px] font-black uppercase tracking-[3px]">Tecnologia em Pesagem</span>
      </div>
      
      <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
        Sua Produção <br />
        <span className="text-brand-gold italic">Não Pode Parar.</span>
      </h1>
      
      <div className="flex gap-6 mt-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold border border-white/10 backdrop-blur-sm">
            <Wrench size={24} weight="fill" />
          </div>
          <p className="text-[10px] font-black uppercase leading-tight">Suporte Ágil <br/> no Local</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold border border-white/10 backdrop-blur-sm">
            <ShieldCheck size={24} weight="fill" />
          </div>
          <p className="text-[10px] font-black uppercase leading-tight">Garantia <br/> Certificada</p>
        </div>
      </div>
    </div>
  </div>

  {/* LADO DIREITO: INFO E DESTAQUES CENTRALIZADOS */}
<div className="bg-slate-50 p-8 md:p-20 flex flex-col items-center justify-center relative z-0 text-center" data-aos="fade-left">
  <div className="max-w-xl mx-auto">
    {/* Títulos Centralizados */}
    <span className="text-brand-gold font-black uppercase text-[10px] tracking-[4px] mb-4 block mx-auto">
      Tecnologia e Suporte
    </span>
    <h2 className="text-brand-blue text-4xl lg:text-6xl font-black tracking-tighter mb-8 leading-tight">
      Precisão que <br /> gera <span className="text-brand-gold italic">resultado.</span>
    </h2>
    
    <p className="text-slate-500 text-lg mb-12 leading-relaxed mx-auto max-w-md">
      Especialistas em pesagem industrial. Garantimos que sua operação nunca pare por falta de manutenção ou calibração técnica.
    </p>

    {/* GRADE DE DESTAQUES CENTRALIZADA */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 w-full">
      <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-hover">
        <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4">
          <Wrench size={28} />
        </div>
        <h4 className="font-bold text-brand-blue text-sm uppercase mb-1">Reparos</h4>
        <p className="text-slate-400 text-[10px] font-bold uppercase">Multimarcas ágil</p>
      </div>

      <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-hover">
        <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4">
          <ShieldCheck size={28} />
        </div>
        <h4 className="font-bold text-brand-blue text-sm uppercase mb-1">Laudos</h4>
        <p className="text-slate-400 text-[10px] font-bold uppercase">Certificação Total</p>
      </div>

      <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-hover">
        <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4">
          <Storefront size={28} />
        </div>
        <h4 className="font-bold text-brand-blue text-sm uppercase mb-1">Vendas</h4>
        <p className="text-slate-400 text-[10px] font-bold uppercase">Novos e Seminovo</p>
      </div>

      <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-hover">
        <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4">
          <CheckCircle size={28} />
        </div>
        <h4 className="font-bold text-brand-blue text-sm uppercase mb-1">Contratos</h4>
        <p className="text-slate-400 text-[10px] font-bold uppercase">Plano Preventivo</p>
      </div>
    </div>

    {/* Botão de Ação Centralizado */}
    <a 
      href="https://wa.me/5517996780438" 
      className="bg-brand-blue text-white w-full py-6 rounded-2xl font-black animate-shimmer shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-3 tracking-[2px] text-sm"
    >
      <WhatsappLogo size={24} weight="fill" className="text-brand-gold" />
      SOLICITAR ORÇAMENTO TÉCNICO
    </a>
  </div>
</div>
</header>

      {/* BARRA DE ESTATÍSTICAS */}
      <div className="bg-brand-blue py-12 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["+10", "Anos de Mercado"], ["+2k", "Atendimentos"], ["100%", "Garantia"], ["24h", "Suporte Ágil"]].map(([val, label], i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100}>
              <div className="text-brand-gold text-4xl font-black">{val}</div>
              <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SOBRE */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="zoom-in">
            <div className="bg-brand-gold/10 absolute inset-0 rounded-full blur-3xl scale-150 -z-10"></div>
            <img src="/imagens/bial.png" alt="Profissional Bial" className="rounded-3xl shadow-2xl w-full object-cover aspect-square" />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl text-center border-4 border-white">
              <span className="text-3xl font-black block">+10</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Anos de Mercado</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <span className="text-brand-gold font-black uppercase text-xs tracking-widest mb-4 block">Parceiro Estratégico</span>
            <h2 className="text-4xl font-black text-brand-blue mb-6">Autoridade Técnica em Pesagem</h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-lg">Entendemos que precisão é lucro e erro é desperdício. Por isso, oferecemos um serviço rigoroso que garante a continuidade da sua operação industrial ou comercial.</p>
            <div className="space-y-4 font-bold text-brand-blue">
              <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-gold" /> SUPORTE TÉCNICO NO LOCAL</div>
              <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-gold" /> LABORATÓRIO DE MANUTENÇÃO PRÓPRIO</div>
            </div>
          </div>
        </div>
      </section>

      {/* VITRINE DE PRODUTOS */}
      <section id="vitrine" className="py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8" data-aos="fade-up">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-black uppercase text-xs tracking-[4px] mb-4 block">Equipamentos Premium</span>
              <h2 className="text-4xl lg:text-6xl font-black text-brand-blue tracking-tighter">Vitrine de <span className="text-brand-gold italic">Precisão.</span></h2>
            </div>
            <a href="https://wa.me/5517996780438" className="text-brand-blue font-bold border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">Ver Catálogo Completo</a>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {t: "Balança Comercial", d: "Tecnologia de ponta para o varejo moderno.", img: "/imagens/anuncio1.jpg", cat: "Comércio"},
              {t: "Plataforma Industrial", d: "Resistência extrema para fluxos pesados.", img: "/imagens/anuncio4.jpg", cat: "Indústria"},
              {t: "Sistema Térmico", d: "Automação ágil com impressão de alta definição.", img: "/imagens/anuncio5.jpg", cat: "Automação"}
            ].map((p, i) => (
              <div key={i} className="product-card-luxury group" data-aos="fade-up" data-aos-delay={i*100}>
                <div className="product-img-container">
                  <img src={p.img} alt={p.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-brand-blue text-[10px] font-black px-4 py-2 rounded-full shadow-sm uppercase tracking-widest">
                      {p.cat}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-black text-brand-blue mb-3 group-hover:text-brand-gold transition-colors">{p.t}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{p.d}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sob Orçamento</span>
                    <a href="https://wa.me/5517996780438" className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:bg-brand-gold transition-colors">
                      <WhatsappLogo size={24} weight="fill" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-32 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20" data-aos="fade-down">
            <span className="text-brand-gold font-black uppercase text-xs tracking-[4px] mb-4 block">Excelência Técnica</span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Soluções que Geram <span className="text-brand-gold italic">Continuidade.</span></h2>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
              Mais do que reparos, entregamos a segurança de que a sua linha de produção ou comércio operará com precisão máxima.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-[40px] group transition-all duration-300 hover:-translate-y-2" data-aos="fade-up">
              <div className="bg-brand-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Wrench size={48} weight="fill" className="text-brand-gold" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Manutenção Preventiva</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">Intervenções técnicas rigorosas para evitar paradas inesperadas. Análise de células de carga e limpeza de circuitos.</p>
              <a href="https://wa.me/5517996780438" className="inline-block text-brand-gold font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">Agendar Agora →</a>
            </div>

            <div className="glass-card p-10 rounded-[40px] border-brand-gold/20 group transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-brand-gold w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <ShieldCheck size={48} weight="fill" className="text-brand-blue" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Calibração Técnica</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">Garantia de conformidade com normas técnicas e pesos padrão certificados para precisão absoluta em cada grama.</p>
              <a href="https://wa.me/5517996780438" className="inline-block text-brand-gold font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">Saber Mais →</a>
            </div>

            <div className="glass-card p-10 rounded-[40px] group transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-brand-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Storefront size={48} weight="fill" className="text-brand-gold" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Venda & Consultoria</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">Equipamentos novos e seminovos totalmente revisados. Consultoria para escolher a balança ideal para o seu fluxo.</p>
              <a href="https://wa.me/5517996780438" className="inline-block text-brand-gold font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">Ver Estoque →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-black text-brand-blue text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              {q: "Atendem balanças rodoviárias?", a: "Sim! Somos especialistas em balanças industriais de todos os portes."},
              {q: "Os equipamentos têm garantia?", a: "Sim, todos os equipamentos vendidos possuem garantia integral."},
              {q: "Vocês atendem no local?", a: "Sim, realizamos visitas técnicas imediatas em toda a região."}
            ].map((f, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left flex justify-between font-bold text-brand-blue uppercase text-sm">
                  {f.q} <CaretDown size={20} className={openFaq === i ? 'rotate-180' : ''} />
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-16 text-center text-white relative">
        <div className="container mx-auto px-6">
          <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
             <img src="/imagens/logo.png" alt="Logo" className="object-contain" />
          </div>
          <h3 className="text-2xl font-black mb-8 leading-tight">Precisão e Confiança em <br/> cada Pesagem.</h3>
          <a href="https://wa.me/5517996780438" className="inline-flex bg-gold-gradient text-brand-blue px-12 py-4 rounded-full font-black animate-shimmer uppercase tracking-widest text-xs">
             Iniciar Atendimento
          </a>
          <p className="mt-12 text-slate-600 text-[10px] uppercase tracking-[5px]">© {new Date().getFullYear()} Bial Balanças.</p>
        </div>
      </footer>

      {/* WPP FLOATING */}
      <a href="https://wa.me/5517996780438" className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-[200] hover:scale-110 transition-transform">
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}