import React from 'react';
import { Wrench, ShieldCheck, Storefront } from '@phosphor-icons/react';
import { whatsappLink } from '../config';

const servicos = [
  {
    icon: Wrench,
    title: 'Manutenção Preventiva',
    desc: 'Análise de células de carga, limpeza de circuitos e ajuste de sensibilidade — antes que a parada aconteça.',
    cta: 'Agendar visita técnica',
    message: 'Olá! Gostaria de agendar uma visita técnica de manutenção preventiva.',
  },
  {
    icon: ShieldCheck,
    title: 'Calibração Técnica',
    desc: 'Conformidade com normas técnicas e pesos padrão certificados para precisão absoluta em cada grama.',
    cta: 'Solicitar calibração',
    message: 'Olá! Gostaria de solicitar uma calibração técnica.',
  },
  {
    icon: Storefront,
    title: 'Venda & Consultoria',
    desc: 'Equipamentos novos e seminovos revisados, com consultoria para escolher a balança ideal para o seu fluxo.',
    cta: 'Consultar disponibilidade',
    message: 'Olá! Gostaria de consultar a disponibilidade de equipamentos.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-32 bg-brand-bg-light overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-down">
          <span className="font-mono text-brand-accent uppercase text-xs tracking-[4px] mb-4 block">Excelência Técnica</span>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Soluções que Geram <span className="text-brand-accent italic">Continuidade.</span></h2>
          <p className="text-white/40 mt-6 max-w-2xl mx-auto text-lg">
            Mais do que reparos, entregamos a segurança de que a sua linha de produção ou comércio operará com precisão máxima.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((s) => (
            <div key={s.title} className="card-hover bg-brand-bg border border-white/10 p-10 rounded-2xl group" data-aos="fade-up">
              <div className="bg-brand-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <s.icon size={32} weight="fill" className="text-brand-accent" />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-white/40 leading-relaxed mb-8 text-sm">{s.desc}</p>
              <a href={whatsappLink(s.message)} className="inline-block text-brand-accent font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
