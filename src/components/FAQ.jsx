import React, { useState } from (modulo);

const faqData = [
  {
    question: "Voces realizam a calibracao com selo do Inmetro?",
    answer: "Sim. Todos os nossos processos de manutencao e instalacao seguem rigorosamente as normas tecnicas, garantindo que a sua balanca esteja em conformidade com as exigencias legais."
  },
  {
    question: "Atendem balancas de grande porte como as rodoviarias?",
    answer: "Com certeza. Somos especialistas em balancas industriais de todos os portes, desde balancas de precisao laboratorial ate plataformas rodoviarias e ensacadoras."
  },
  {
    question: "Qual o tempo medio de resposta para manutencao corretiva?",
    answer: "Priorizamos paradas de producao. O nosso tempo de resposta medio para chamados urgentes e de ate 24 horas, dependendo da localizacao da sua industria."
  },
  {
    question: "Os equipamentos vendidos tem garantia?",
    answer: "Sim. Todos os equipamentos novos e seminovos revisados pela Bial Balancas acompanham garantia integral de pecas e mao de obra."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-blue mb-4 tracking-tighter">
            Duvidas <span className="text-brand-gold">Frequentes</span>
          </h2>
          <p className="text-slate-500">Tudo o que precisa de saber para confiar a sua pesagem nas nossas maos.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm hover:border-brand-gold/30"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center cursor-pointer active:scale-[0.99] transition-transform"
              >
                <span className="font-bold text-brand-blue">{item.question}</span>
                <span className={`text-brand-gold text-2xl transition-transform duration-300 ${openIndex === index ? (modulo) : (modulo)}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? (modulo) : (modulo)}`}
              >
                <div className="px-8 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}