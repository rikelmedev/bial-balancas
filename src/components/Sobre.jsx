import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-brand-bg overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative" data-aos="zoom-in">
          <div className="overflow-hidden rounded-3xl aspect-[4/5] md:aspect-square w-full bg-brand-bg-light border border-white/10">
            <img
              src="/imagens/bial.webp"
              alt="Profissional técnico da Bial Balanças"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-brand-bg-light border-2 border-dashed border-brand-accent flex flex-col items-center justify-center text-center">
            <span className="font-mono text-2xl text-brand-accent">+10</span>
            <span className="font-mono text-[8px] tracking-widest text-white/50">ANOS</span>
          </div>
        </div>

        <div data-aos="fade-left">
          <span className="font-mono text-brand-accent uppercase text-xs tracking-widest mb-4 block">Parceiro Estratégico</span>
          <h2 className="text-4xl font-black mb-6">Autoridade Técnica em Pesagem</h2>
          <p className="text-white/50 mb-8 leading-relaxed text-lg">
            Entendemos que precisão é lucro e erro é desperdício. Por isso, garantimos a continuidade da sua operação industrial ou comercial com suporte técnico direto, sem intermediários.
          </p>
          <div className="space-y-4 font-bold">
            <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-accent" /> SUPORTE TÉCNICO NO LOCAL</div>
            <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-accent" /> LABORATÓRIO DE MANUTENÇÃO PRÓPRIO</div>
            <div className="flex items-center gap-3"><CheckCircle size={24} weight="fill" className="text-brand-accent" /> ASSISTÊNCIA TÉCNICA AUTORIZADA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
