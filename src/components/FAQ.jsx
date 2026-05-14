import React from 'react';
import { CaretDown } from '@phosphor-icons/react';

export default function FAQ({ openFaq, setOpenFaq }) {
  const faqs = [
    { q: "Atendem balanças rodoviárias?", a: "Sim! Somos especialistas em balanças industriais de todos os portes." },
    { q: "Os equipamentos têm garantia?", a: "Sim, todos os equipamentos vendidos possuem garantia integral." },
    { q: "Vocês atendem no local?", a: "Sim, realizamos visitas técnicas imediatas em toda a região." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-black text-brand-blue text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left flex justify-between font-bold text-brand-blue uppercase text-sm">
                {f.q} <CaretDown size={20} className={openFaq === i ? 'rotate-180' : ''} />
              </button>
              {openFaq === i && <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}