import React from 'react';

const steps = [
  {
    id: "01",
    title: "Solicitação e Diagnóstico",
    desc: "Analisamos o problema da sua balança via WhatsApp ou visita técnica local.",
    icon: "🔍"
  },
  {
    id: "02",
    title: "Orçamento Transparente",
    desc: "Enviamos uma proposta detalhada com peças originais e mão de obra especializada.",
    icon: "📄"
  },
  {
    id: "03",
    title: "Execução e Calibração",
    desc: "Realizamos o conserto e a aferição técnica para garantir precisão absoluta.",
    icon: "⚙️"
  },
  {
    id: "04",
    title: "Entrega e Garantia",
    desc: "Equipamento testado, selado e pronto para voltar à linha de produção.",
    icon: "✅"
  }
];

export default function Workflow() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-brand-blue mb-4 tracking-tighter">
            Nosso Processo de <span className="text-brand-gold">Trabalho</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Eficiência e rigor técnico em cada etapa para garantir que a sua operação nunca pare.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="relative group cursor-default">
              <span className="absolute -top-10 -left-4 text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                {step.id}
              </span>
              
              <div className="text-4xl mb-6 transform transition-transform group-hover:scale-125 duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-brand-blue mb-3">
                {step.id}. {step.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.desc}
              </p>

              <div className="mt-6 h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-brand-gold transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}