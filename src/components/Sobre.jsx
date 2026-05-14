import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative" data-aos="zoom-in">
          
          <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] md:aspect-square w-full bg-slate-100">
           <img 
           src="/imagens/bial.png" alt="Profissional Bial" 
           className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            /></div>

            
          <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded-2xl shadow-xl text-center border-4 border-white">
            <span className="text-3xl font-black block">+10</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Anos de Mercado</span>
          </div>
        </div>
        <div data-aos="fade-left">
          <span className="text-brand-gold font-black uppercase text-xs tracking-widest mb-4 block">Parceiro Estratégico</span>
          <h2 className="text-4xl font-black text-brand-blue mb-6">Autoridade Técnica em Pesagem</h2>
          <p className="text-slate-500 mb-8 leading-relaxed text-lg">
            Entendemos que precisão é lucro e erro é desperdício. Por isso, oferecemos um serviço rigoroso que garante a continuidade da sua operação industrial ou comercial.
          </p>
          <div className="space-y-4 font-bold text-brand-blue">
            <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-gold" /> SUPORTE TÉCNICO NO LOCAL</div>
            <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-gold" /> LABORATÓRIO DE MANUTENÇÃO PRÓPRIO</div>
          </div>
        </div>
      </div>
    </section>
  );
}