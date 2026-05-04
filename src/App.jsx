import React, { useState } from 'react';

const Button = ({ children, variant = 'primary', className = "" }) => {
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue-light shadow-lg",
    gold: "bg-[--bg-gold-gradient] text-brand-blue font-extrabold shadow-[0_10px_30px_rgba(212,175,55,0.25)]",
  };

  return (
    <button className={`px-8 py-4 rounded-full transition-all duration-300 active:scale-95 cursor-pointer font-bold ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl glass-nav rounded-full px-8 py-3 z-50 flex justify-between items-center shadow-xl">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
          <img src="/logo-bial.png" alt="Bial Balanças Logo" className="object-cover w-full h-full" />
        </div>
        
        <ul className="hidden md:flex gap-10 font-extrabold text-brand-blue tracking-wide uppercase text-sm">
          <li><a href="#produtos" className="hover:text-brand-gold transition-colors">Produtos</a></li>
          <li><a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a></li>
          <li><a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a></li>
        </ul>

        <Button className="hidden md:block !py-2 !px-6 text-sm">Orçamento</Button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="bg-[--bg-hero-radial] pt-48 pb-24 text-white relative overflow-hidden">
        {/* Efeitos de Luz (Glows) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-gold blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1 border border-brand-gold/40 rounded-full text-gold-light text-xs font-bold uppercase tracking-widest mb-6 bg-white/5 backdrop-blur-sm">
              ⭐ Especialista em Pesagem
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tighter">
              A Solução Completa para o seu <span className="text-brand-gold">Negócio.</span>
            </h1>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              Venda, manutenção e calibração de balanças industriais. Tecnologia que gera lucro e evita paradas na sua operação.
            </p>
            <Button variant="gold">Falar com Especialista</Button>
          </div>

          {/* Cartão 3D Visual */}
          <div className="relative group">
            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-[40px] border border-white/20 shadow-2xl transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105 perspective-1000">
              <img src="/hero-image.png" alt="Equipamentos Bial" className="rounded-[30px] w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* --- VITRINE DE PRODUTOS --- */}
      <section id="produtos" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-blue mb-4">Vitrine de Soluções</h2>
          <div className="h-1.5 w-20 bg-brand-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="bg-slate-50 rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden">
                <img src={`/prod-${item}.png`} alt="Produto" className="w-40 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-brand-gold font-bold text-[10px] uppercase tracking-widest">Equipamento Premium</span>
              <h3 className="text-xl font-bold text-brand-blue mt-2 mb-4">Balança de Alta Precisão</h3>
              <a href="#" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Ver detalhes <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}