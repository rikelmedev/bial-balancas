import React from 'react';
import { WhatsappLogo, List, X } from '@phosphor-icons/react';
import { whatsappLink } from '../config';

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-bg/95 backdrop-blur-md z-[100] flex justify-between items-center px-6 md:px-16 py-4 border-b border-white/10">
      <div className="flex items-center gap-2">
        <img src="/imagens/logo.png" alt="Bial" className="h-10 w-10 object-contain rounded-full" />
        <span className="font-black text-xl tracking-tighter uppercase">Bial</span>
      </div>

      <div className="hidden md:flex gap-10 font-bold text-xs uppercase tracking-widest">
        <a href="#vitrine" className="hover:text-brand-accent transition-colors">Vendas</a>
        <a href="#servicos" className="hover:text-brand-accent transition-colors">Serviços</a>
        <a href="#sobre" className="hover:text-brand-accent transition-colors">Sobre</a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={whatsappLink('Olá! Gostaria de solicitar um orçamento.')}
          className="hidden md:flex bg-brand-accent text-[#412402] px-8 py-2.5 rounded-full text-xs font-black items-center gap-2 active:scale-95 transition-transform"
        >
          <WhatsappLogo size={18} weight="fill" /> ORÇAMENTO
        </a>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-bg border-b border-white/10 p-8 flex flex-col gap-6 md:hidden">
          <a href="#vitrine" onClick={() => setIsOpen(false)} className="font-bold text-sm uppercase">Vendas</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="font-bold text-sm uppercase">Serviços</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="font-bold text-sm uppercase">Sobre</a>
          <a href={whatsappLink('Olá! Gostaria de solicitar um orçamento.')} className="bg-brand-accent text-[#412402] p-4 rounded-xl text-center font-bold">
            Solicitar Orçamento
          </a>
        </div>
      )}
    </nav>
  );
}
