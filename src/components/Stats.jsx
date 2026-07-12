import React from 'react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  ['+10', 'ANOS DE MERCADO'],
  ['+2k', 'SERVIÇOS EXECUTADOS'],
  ['100%', 'GARANTIA'],
  ['24h', 'SUPORTE ÁGIL'],
];

function StatItem({ value, label, isInView }) {
  const display = useCountUp(value, isInView);
  return (
    <div>
      <div className="font-mono text-3xl md:text-4xl text-brand-accent">{display}</div>
      <div className="font-mono text-[10px] text-white/40 tracking-widest mt-1">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className="relative bg-brand-bg-light py-12 border-y border-white/5">
      <div className={`connector-line absolute top-1/2 left-6 right-6 h-px bg-brand-accent/30 ${isInView ? 'is-visible' : ''}`} />
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
        {stats.map(([val, label]) => (
          <StatItem key={label} value={val} label={label} isInView={isInView} />
        ))}
      </div>
    </div>
  );
}
