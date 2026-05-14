import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';

export default function Vitrine() {
  const produtos = [
    { t: "Balança Comercial", d: "Tecnologia de ponta para o varejo moderno.", img: "/imagens/anuncio1.jpg", cat: "Comércio" },
    { t: "Plataforma Industrial", d: "Resistência extrema para fluxos pesados.", img: "/imagens/anuncio4.jpg", cat: "Indústria" },
    { t: "Sistema Térmico", d: "Automação ágil com impressão de alta definição.", img: "/imagens/anuncio5.jpg", cat: "Automação" }
  ];

  return (
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
          {produtos.map((p, i) => (
            <div key={i} className="product-card-luxury group" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="product-img-container">
                <img src={p.img} alt={p.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-brand-blue text-[10px] font-black px-4 py-2 rounded-full shadow-sm uppercase tracking-widest">{p.cat}</span>
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
  );
}