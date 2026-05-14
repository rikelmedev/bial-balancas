import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-center text-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
           <img src="/imagens/logo.png" alt="Logo" className="object-contain" />
        </div>
        <h3 className="text-2xl font-black mb-8 leading-tight">Precisão e Confiança em <br/> cada Pesagem.</h3>
        <a href="https://wa.me/5517996780438" className="inline-flex bg-gold-gradient text-brand-blue px-12 py-4 rounded-full font-black animate-shimmer uppercase tracking-widest text-xs">
           Iniciar Atendimento
        </a>
        <p className="mt-12 text-slate-600 text-[10px] uppercase tracking-[5px]">© {new Date().getFullYear()} Bial Balanças.</p>
      </div>
    </footer>
  );
}