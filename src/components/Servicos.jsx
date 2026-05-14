import React from 'react';
import { Wrench, ShieldCheck, Storefront } from '@phosphor-icons/react';

export default function Servicos() {
  return (
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
  );
}