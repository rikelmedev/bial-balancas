import React from 'react';
import { Phone, MagnifyingGlass, FileText, Wrench, ShieldCheck } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

const steps = [
  { icon: Phone, title: 'Chamado', desc: 'Você entra em contato via WhatsApp.' },
  { icon: MagnifyingGlass, title: 'Diagnóstico', desc: 'Avaliação técnica do equipamento.' },
  { icon: FileText, title: 'Orçamento', desc: 'Valor e prazo fechados, sem surpresas.' },
  { icon: Wrench, title: 'Execução', desc: 'Reparo, calibração ou instalação no local.' },
  { icon: ShieldCheck, title: 'Garantia', desc: 'Serviço e equipamento com garantia.' },
];

function StepNode({ step, index, onEnter }) {
  const [ref, isInView] = useInView({ threshold: 0.6 });
  const Icon = step.icon;

  React.useEffect(() => {
    if (isInView) onEnter(index);
  }, [isInView, index, onEnter]);

  return (
    <div ref={ref} className="flex md:flex-col items-center md:items-center gap-4 md:gap-0 md:text-center md:flex-1">
      <div className="w-14 h-14 shrink-0 rounded-full border border-brand-accent/40 bg-brand-bg-light flex items-center justify-center relative">
        <Icon size={22} className="text-brand-accent" />
      </div>
      <div className="md:mt-4">
        <div className="font-mono text-[10px] text-brand-accent tracking-widest mb-1">0{index + 1}</div>
        <div className="font-black text-sm uppercase mb-1">{step.title}</div>
        <p className="text-white/40 text-xs leading-relaxed max-w-[140px] md:mx-auto">{step.desc}</p>
      </div>
    </div>
  );
}

export default function Processo() {
  const [visible, setVisible] = React.useState([]);
  const onEnter = React.useCallback((index) => {
    setVisible((prev) => (prev.includes(index) ? prev : [...prev, index]));
  }, []);

  return (
    <section className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="font-mono text-brand-accent uppercase text-xs tracking-[4px] mb-4 block">Como Funciona</span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">Do chamado à <span className="text-brand-accent italic">garantia.</span></h2>
        </div>

        <div className="hidden md:flex items-start">
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <StepNode step={step} index={i} onEnter={onEnter} />
              {i < steps.length - 1 && (
                <div className={`connector-line flex-1 h-px bg-brand-accent/40 mt-7 mx-2 ${visible.includes(i) ? 'is-visible' : ''}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-8 border-l border-white/10 pl-6">
          {steps.map((step, i) => (
            <StepNode key={step.title} step={step} index={i} onEnter={onEnter} />
          ))}
        </div>
      </div>
    </section>
  );
}
