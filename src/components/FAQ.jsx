import React from 'react';
import { CaretDown } from '@phosphor-icons/react';

export default function FAQ({ openFaq, setOpenFaq }) {
  const faqs = [
    { q: 'Atendem balanças rodoviárias?', a: 'Sim! Somos especialistas em balanças industriais de todos os portes.' },
    { q: 'Os equipamentos têm garantia?', a: 'Sim, todos os equipamentos vendidos possuem garantia integral.' },
    { q: 'Vocês atendem no local?', a: 'Sim, realizamos visitas técnicas imediatas em toda a região.' },
  ];

  return (
    <section className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-black text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={f.q} className="border border-white/10 rounded-2xl overflow-hidden bg-brand-bg-light">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 text-left flex justify-between font-bold uppercase text-sm"
              >
                {f.q}
                <CaretDown size={20} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-white/40 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
