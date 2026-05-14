import React from 'react';
import { Star, Wrench, ShieldCheck, CheckCircle, Storefront, WhatsappLogo } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <header className="relative w-full min-h-[90vh] mt-[73px] grid grid-cols-1 md:grid-cols-[1.3fr,1fr] bg-white overflow-hidden">
      <div className="polygon-hero relative min-h-[600px] md:min-h-full flex items-center shadow-2xl z-10 overflow-hidden bg-white">
        <div 
          className="absolute inset-0 bg-cover" 
          style={{
            backgroundImage: "url(/imagens/Oficina.png)", 
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-brand-blue w-full md:w-[40%] z-10"></div>
        
        <div className="relative z-20 p-8 md:p-20 text-white max-w-xl" data-aos="fade-right">
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
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold border border-white/10">
                <Wrench size={24} weight="fill" />
              </div>
              <p className="text-[10px] font-black uppercase leading-tight">Suporte Ágil <br/> no Local</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold border border-white/10">
                <ShieldCheck size={24} weight="fill" />
              </div>
              <p className="text-[10px] font-black uppercase leading-tight">Garantia <br/> Certificada</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-8 md:p-20 flex flex-col items-center justify-center relative z-0 text-center" data-aos="fade-left">
        <div className="max-w-xl mx-auto">
          <span className="text-brand-gold font-black uppercase text-[10px] tracking-[4px] mb-4 block mx-auto">Tecnologia e Suporte</span>
          <h2 className="text-brand-blue text-4xl lg:text-6xl font-black tracking-tighter mb-8 leading-tight">
            Precisão que <br /> gera <span className="text-brand-gold italic">resultado.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-12 leading-relaxed mx-auto max-w-md">
            Especialistas em pesagem industrial. Garantimos que sua operação nunca pare por falta de manutenção ou calibração técnica.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 w-full">
            <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4"><Wrench size={28} /></div>
              <h4 className="font-bold text-brand-blue text-sm uppercase mb-1">Reparos</h4>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Multimarcas ágil</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4"><ShieldCheck size={28} /></div>
              <h4 className="font-bold text-brand-blue text-sm uppercase mb-1">Laudos</h4>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Certificação Total</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4"><Storefront size={28} /></div>
              <h4 className="font-bold text-brand-blue text-sm uppercase mb-1">Vendas</h4>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Novos e Seminovo</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4"><CheckCircle size={28} /></div>
              <h4 className="font-bold text-brand-blue text-sm uppercase mb-1">Contratos</h4>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Plano Preventivo</p>
            </div>
          </div>
          <a href="https://wa.me/5517996780438" className="bg-brand-blue text-white w-full py-6 rounded-2xl font-black animate-shimmer shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-3 tracking-[2px] text-sm">
            <WhatsappLogo size={24} weight="fill" className="text-brand-gold" />
            SOLICITAR ORÇAMENTO TÉCNICO
          </a>
        </div>
      </div>
    </header>
  );
}