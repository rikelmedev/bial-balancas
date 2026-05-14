import React from 'react';
import { WhatsappLogo, List, X } from '@phosphor-icons/react';

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-[100] flex justify-between items-center px-6 md:px-16 py-4 border-b border-slate-100 shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/imagens/logo.png" alt="Bial" className="h-10 w-10 object-contain rounded-full shadow-sm" />
        <span className="font-black text-brand-blue text-xl tracking-tighter uppercase">Bial</span>
      </div>
      
      <div className="hidden md:flex gap-10 font-bold text-brand-blue text-xs uppercase tracking-widest">
        <a href="#vitrine" className="hover:text-brand-gold transition-colors">Vendas</a>
        <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
        <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://wa.me/5517996780438" className="hidden md:flex bg-brand-blue text-white px-8 py-2.5 rounded-full text-xs font-black items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-brand-blue/20">
          <div className="flex items-center gap-2"><WhatsappLogo size={18} weight="fill" /> ORÇAMENTO</div>
        </a>
        <button className="md:hidden text-brand-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5 duration-300">
          <a href="#vitrine" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue text-sm uppercase">Vendas</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue text-sm uppercase">Serviços</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="font-bold text-brand-blue text-sm uppercase">Sobre</a>
          <a href="https://wa.me/5517996780438" className="bg-brand-blue text-white p-4 rounded-xl text-center font-bold">Solicitar Orçamento</a>
        </div>
      )}
    </nav>
  );
}