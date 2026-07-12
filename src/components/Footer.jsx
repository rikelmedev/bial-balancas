import React from 'react';
import { whatsappLink } from '../config';

export default function Footer() {
  return (
    <footer className="bg-brand-bg py-16 text-center border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
          <img src="/imagens/logo.png" alt="Logo" className="object-contain" />
        </div>
        <h3 className="text-2xl font-black mb-8 leading-tight">Precisão e Confiança em <br /> cada Pesagem.</h3>
        <a
          href={whatsappLink('Olá! Gostaria de solicitar um orçamento técnico.')}
          className="inline-flex bg-brand-accent text-[#412402] px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all"
        >
          Solicitar Orçamento Técnico
        </a>
        <p className="mt-12 text-white/30 text-[10px] uppercase tracking-[5px]">© {new Date().getFullYear()} Bial Balanças.</p>
      </div>
    </footer>
  );
}
