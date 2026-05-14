import React from 'react';

export default function StatsSection() {
  const stats = [
    ["+10", "Anos de Mercado"],
    ["+2k", "Atendimentos"],
    ["100%", "Garantia"],
    ["24h", "Suporte Ágil"]
  ];

  return (
    <div className="bg-brand-blue py-12 border-y border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(([val, label], i) => (
          <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
            <div className="text-brand-gold text-4xl font-black">{val}</div>
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}