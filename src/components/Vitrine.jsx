import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { whatsappLink } from '../config';

const produtos = [
  { t: 'Balança Comercial', d: 'Tecnologia de ponta para o varejo moderno.', img: '/imagens/anuncio1.webp', cat: 'COMÉRCIO' },
  { t: 'Plataforma Industrial', d: 'Resistência extrema para fluxos pesados.', img: '/imagens/anuncio4.webp', cat: 'INDÚSTRIA' },
  { t: 'Sistema Térmico', d: 'Automação ágil com impressão de alta definição.', img: '/imagens/anuncio5.webp', cat: 'AUTOMAÇÃO' },
];

export default function Vitrine() {
  return (
    <section id="vitrine" className="py-32 bg-brand-bg relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8" data-aos="fade-up">
          <div className="max-w-2xl">
            <span className="font-mono text-brand-accent uppercase text-xs tracking-[4px] mb-4 block">Equipamentos</span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Vitrine de <span className="text-brand-accent italic">Precisão.</span></h2>
          </div>
          <a
            href={whatsappLink('Olá! Gostaria de ver o catálogo completo de equipamentos.')}
            className="font-bold border-b-2 border-brand-accent pb-2 hover:text-brand-accent transition-colors"
          >
            Ver Catálogo Completo
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {produtos.map((p) => (
            <div key={p.t} className="card-hover bg-brand-bg-light border border-white/10 rounded-2xl overflow-hidden group" data-aos="fade-up">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute top-4 left-4 font-mono text-[10px] bg-brand-bg/80 text-brand-accent px-3 py-1.5 rounded uppercase tracking-widest">
                  {p.cat}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black mb-2 group-hover:text-brand-accent transition-colors">{p.t}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{p.d}</p>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Sob Orçamento</span>
                  <a
                    href={whatsappLink(`Olá! Tenho interesse no equipamento: ${p.t}.`)}
                    className="bg-brand-accent text-[#412402] w-11 h-11 rounded-full flex items-center justify-center hover:brightness-110 transition-all"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
