import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import CornerMarks from './CornerMarks';
import { whatsappLink } from '../config';

export default function Hero() {
  return (
    <header className="relative w-full min-h-[90vh] mt-[73px] grid grid-cols-1 md:grid-cols-[1.2fr,1fr] bg-brand-bg overflow-hidden">
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 border border-brand-accent/40 rounded px-3 py-1.5 mb-6 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          <span className="font-mono text-[10px] text-brand-accent tracking-[3px]">TECNOLOGIA EM PESAGEM</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tighter mb-6">
          Sua Produção <br />
          <span className="text-brand-accent">Não Pode Parar.</span>
        </h1>

        <p className="font-mono text-sm text-white/50 leading-relaxed max-w-md mb-10">
          Manutenção, calibração e venda de balanças industriais. Suporte técnico no local, sem intermediários.
        </p>

        <div className="flex gap-8 mb-10">
          <div>
            <div className="font-mono text-2xl">±0.01g</div>
            <div className="font-mono text-[9px] text-white/40 tracking-widest">TOLERÂNCIA</div>
          </div>
          <div className="border-l border-white/10 pl-8">
            <div className="font-mono text-2xl">+10</div>
            <div className="font-mono text-[9px] text-white/40 tracking-widest">ANOS DE MERCADO</div>
          </div>
        </div>

        <a
          href={whatsappLink('Olá! Gostaria de solicitar um orçamento técnico.')}
          className="bg-brand-accent text-[#412402] w-fit px-8 py-4 rounded-lg font-black text-xs tracking-[2px] flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all"
        >
          <WhatsappLogo size={20} weight="fill" />
          SOLICITAR ORÇAMENTO TÉCNICO
        </a>
      </div>

      <div className="relative m-6 md:m-8 rounded-xl overflow-hidden border border-white/10 bg-brand-bg-light">
        <img
          src="/imagens/oficina.webp"
          alt="Técnico da Bial Balanças em oficina, realizando manutenção de balança industrial"
          className="w-full h-full object-cover object-right"
        />
        <CornerMarks />
      </div>
    </header>
  );
}
