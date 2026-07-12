import React from 'react';
import CornerMarks from './CornerMarks';

export default function Portfolio() {
  return (
    <section className="py-24 bg-brand-bg-light">
      <div className="container mx-auto px-6">
        <div className="mb-12" data-aos="fade-up">
          <span className="font-mono text-brand-accent uppercase text-xs tracking-[4px] mb-4 block">Nossa Estrutura</span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter max-w-2xl">Laboratório próprio, <span className="text-brand-accent italic">equipe técnica dedicada.</span></h2>
        </div>

        <div className="grid md:grid-cols-[1.4fr,1fr] gap-6">
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3]" data-aos="fade-up">
            <img
              src="/imagens/oficina.webp"
              alt="Oficina técnica da Bial Balanças, com bancadas e equipamentos de calibração"
              className="w-full h-full object-cover object-right"
            />
            <CornerMarks />
            <span className="absolute top-4 left-9 font-mono text-[10px] bg-brand-bg/80 text-brand-success px-2 py-1 rounded">
              OFICINA TÉCNICA
            </span>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3]" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/imagens/bial.webp"
              alt="Técnico responsável da Bial Balanças"
              className="w-full h-full object-cover object-top"
            />
            <CornerMarks />
            <span className="absolute top-4 left-9 font-mono text-[10px] bg-brand-bg/80 text-brand-success px-2 py-1 rounded">
              EQUIPE BIAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
