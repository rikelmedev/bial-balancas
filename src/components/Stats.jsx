import React from 'react';

const stats = [
  { label: 'Anos de Experiência', value: '15+' },
  { label: 'Balanças Instaladas', value: '2.5k' },
  { label: 'Clientes Atendidos', value: '850+' },
  { label: 'Certificações Técnicas', value: '12' },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-blue py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-default">
              <div className="text-4xl md:text-5xl font-black text-brand-gold mb-2 transition-transform group-hover:scale-110">
                {stat.value}
              </div>
              <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}