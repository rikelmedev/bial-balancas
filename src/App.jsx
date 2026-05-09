import React, { useEffect, useState } from 'react';
import { WhatsappLogo, ShieldCheck, Wrench, Storefront, CheckCircle, Star, List, X, CaretDown } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => { 
    AOS.init({ duration: 1000, once: true, offset: 100 }); 
  }, []);

  return (
    <div className="overflow-x-hidden selection:bg-brand-gold/30">
      
      {/* NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-full px-8 py-3 z-50 flex justify-between items-center shadow-xl border border-white/20">
        <div className="flex items-center gap-2">
          <img src="/imagens/logo.png" alt="Bial" className="h-10 w-10 object-contain rounded-full bg-white shadow-sm" />
          <span className="font-black text-brand-blue text-xl tracking-tighter uppercase">Bial</span>
        </div>
        <div className="hidden md:flex gap-10 font-bold text-brand-blue text-xs uppercase tracking-widest">
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

      {/* HERO SECTION */}
      <section className="bg-hero-radial pt-48 pb-24 text-white relative overflow-hidden">
  {/* Glows de ambiente para profundidade */}
  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.05)_0%,transparent_50%)]"></div>
  
  <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
    <div data-aos="fade-right">
      <div className="inline-flex items-center gap-2 px-4 py-1 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] font-bold uppercase mb-8 bg-brand-gold/5 backdrop-blur-sm">
        <Star weight="fill" /> Especialista em Pesagem Industrial
      </div>
      
      <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
        Sua Produção <span className="text-gradient-gold">Não Pode Parar.</span>
      </h1>
      
      <p className="text-slate-300 text-xl mb-12 max-w-lg leading-relaxed">
        Manutenção ágil e venda de balanças industriais com suporte técnico especializado para garantir o lucro da sua operação.
      </p>
      
      <a href="https://wa.me/5517996780438" className="inline-flex animate-shimmer text-brand-blue px-12 py-5 rounded-full font-black shadow-[0_20px_50px_rgba(212,175,55,0.3)] active:scale-95 transition-transform uppercase tracking-wider text-sm">
        <WhatsappLogo size={24} weight="fill" className="mr-2" /> Falar com Especialista
      </a>
    </div>

    <div className="relative" data-aos="fade-left">
      <div className="bg-glow-hero animate-pulse"></div>
      
      <div className="bg-white/5 p-4 rounded-[48px] border border-white/10 shadow-2xl backdrop-blur-md relative z-10 animate-float">
        <img src="/imagens/Oficina.jpg" alt="Oficina Bial" className="rounded-[36px] w-full shadow-2xl" />
        
        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
           <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center text-brand-blue">
              <ShieldCheck size={32} weight="fill" />
           </div>
           <div>
              <p className="text-brand-blue font-black text-xs uppercase">Qualidade</p>
              <p className="text-slate-500 text-[10px] font-bold uppercase">Garantida</p>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* BARRA DE ESTATÍSTICAS  */}
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
      <section id="vitrine" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-black text-brand-blue">Vitrine de Soluções</h2>
            <p className="text-slate-500 mt-2">Equipamentos de alta performance para o seu negócio.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {t: "Balanças Comerciais", d: "Precisão absoluta para varejo.", img: "/imagens/anuncio1.jpg"},
              {t: "Indústria Pesada", d: "Robustez para grandes cargas.", img: "/imagens/anuncio4.jpg"},
              {t: "Automação Térmica", d: "Agilidade na emissão de cupons.", img: "/imagens/anuncio5.jpg"}
            ].map((p, i) => (
              <div key={i} className="bg-white p-4 rounded-[32px] shadow-lg border border-white hover:border-brand-gold/30 transition-all card-hover" data-aos="fade-up" data-aos-delay={i*100}>
                <div className="bg-slate-100 rounded-2xl overflow-hidden mb-6 h-56 flex items-center justify-center">
                    <img src={p.img} alt={p.t} className="w-full h-full object-cover" />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-xl font-bold text-brand-blue mb-2">{p.t}</h3>
                  <p className="text-slate-500 text-sm mb-6">{p.d}</p>
                  <a href="https://wa.me/5517996780438" className="text-brand-gold font-bold text-sm uppercase tracking-widest hover:underline">Ver Orçamento →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="bg-glow-2 opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-4xl font-black">Nossos Serviços</h2>
            <p className="text-slate-400 mt-2">Tecnologia que garante lucro e evita desperdício.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 card-hover" data-aos="flip-right">
              <div className="bg-brand-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shadow-lg shadow-brand-gold/10">
                <Wrench size={42} weight="fill" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Manutenção</h3>
              <p className="text-slate-400 text-sm">Reparo ágil em placas, sensores e mecânica de todas as marcas.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 card-hover" data-aos="flip-right" data-aos-delay="100">
              <div className="bg-brand-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shadow-lg shadow-brand-gold/10">
                <ShieldCheck size={42} weight="fill" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Calibração</h3>
              <p className="text-slate-400 text-sm">Aferição técnica certificada para conformidade e precisão total.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 card-hover" data-aos="flip-right" data-aos-delay="200">
              <div className="bg-brand-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shadow-lg shadow-brand-gold/10">
                <Storefront size={42} weight="fill" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Vendas</h3>
              <p className="text-slate-400 text-sm">Equipamentos novos e usados revisados com garantia real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-black text-brand-blue text-center mb-12" data-aos="fade-up">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
                {q: "Atendem balanças rodoviárias?", a: "Sim! Somos especialistas em balanças industriais de todos os portes, incluindo as de alta capacidade."},
                {q: "Os equipamentos têm garantia?", a: "Todos os equipamentos novos e usados revisados possuem garantia integral de peças e mão de obra."},
                {q: "Vocês atendem no local?", a: "Sim, realizamos visitas técnicas imediatas em toda a região para reparos urgentes."}
            ].map((f, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay={i*100}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left flex justify-between font-bold text-brand-blue uppercase text-sm">
                  {f.q} <CaretDown size={20} className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4 animate-in fade-in slide-in-from-top-2">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-16 text-center text-white relative">
        <div className="container mx-auto px-6">
          <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-white/5">
             <img src="/imagens/logo.png" alt="Logo" className="object-contain" />
          </div>
          <h3 className="text-2xl font-black mb-8">Precisão e Confiança em cada Pesagem.</h3>
          <a href="https://wa.me/5517996780438" className="inline-flex bg-gold-gradient text-brand-blue px-12 py-4 rounded-full font-black animate-shimmer">
             INICIAR ATENDIMENTO
          </a>
          <p className="mt-12 text-slate-600 text-[10px] uppercase tracking-[5px]">© {new Date().getFullYear()} Bial Balanças. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WHATSAPP FIXO */}
      <a href="https://wa.me/5517996780438" className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}