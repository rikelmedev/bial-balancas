import React, { useEffect, useState } from 'react';
import { WhatsappLogo, ShieldCheck, Wrench, Storefront, CheckCircle, Star, CaretDown, List, X, Quotes } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- COMPONENTES AUXILIARES ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <a href="#" className="logo-capsule">
        <img src="/imagens/logo.png" alt="Bial Balanças" />
      </a>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#vitrine" onClick={() => setIsOpen(false)}>Produtos</a>
        <a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a>
        <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>
        <a href="#depoimentos" onClick={() => setIsOpen(false)}>Clientes</a>
        <a href="https://wa.me/5517996780438" className="btn-nav mobile-only-btn" onClick={() => setIsOpen(false)}>
          <WhatsappLogo size={20} weight="fill" style={{marginRight:8}} /> Orçamento
        </a>
      </div>
      <div className="desktop-only-btn">
        <a href="https://wa.me/5517996780438" className="btn-nav">
            <WhatsappLogo size={20} weight="fill" style={{marginRight:8}} /> Orçamento
        </a>
      </div>
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <List />}
      </button>
    </nav>
  );
};

const Hero = () => (
  <header className="hero">
    <div className="bg-glow-1"></div>
    <div className="bg-glow-2"></div>
    <div className="container hero-grid">
      <div className="hero-text" data-aos="fade-right" data-aos-duration="1200">
        <div className="hero-badge">
          <Star weight="fill" size={18} /> Especialista em Pesagem
        </div>
        <h1>A Solução Completa para o seu Negócio.</h1>
        <p>Venda, manutenção e calibração de balanças e impressoras térmicas. Tecnologia que gera lucro e evita paradas na sua operação.</p>
        <a href="https://wa.me/5517996780438" target="_blank" className="btn-primary-gold">
          <WhatsappLogo size={28} weight="fill" /> Falar com Especialista
        </a>
      </div>
      <div className="hero-visual" data-aos="fade-left" data-aos-duration="1400">
        <div className="hero-card">
          <img src="/imagens/anuncio6.jpg" alt="Equipamentos Bial" />
        </div>
      </div>
    </div>
  </header>
);

const ProductShowcase = () => (
  <section id="vitrine" className="showcase">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2>Vitrine de Soluções</h2>
        <p style={{color:'#64748B'}}>Equipamentos novos e seminovos revisados com garantia.</p>
      </div>
      <div className="product-grid">
        <div className="product-card" data-aos="fade-up">
          <img src="/imagens/anuncio1.jpg" className="product-img" alt="Balança Comercial" />
          <div className="product-info">
            <span className="product-cat">Balanças Comerciais</span>
            <h3>Balanças de Balcão</h3>
            <p style={{color:'#64748B', fontSize:'0.95rem'}}>Alta precisão para padarias e açougues.</p>
          </div>
        </div>
        <div className="product-card" data-aos="fade-up" data-aos-delay="100">
          <img src="/imagens/anuncio4.jpg" className="product-img" alt="Balança Industrial" />
          <div className="product-info">
            <span className="product-cat">Indústria</span>
            <h3>Plataformas Industriais</h3>
            <p style={{color:'#64748B', fontSize:'0.95rem'}}>Robustez para pesagens pesadas.</p>
          </div>
        </div>
        <div className="product-card" data-aos="fade-up" data-aos-delay="200">
          <img src="/imagens/anuncio5.jpg" className="product-img" alt="Impressora" />
          <div className="product-info">
            <span className="product-cat">Automação</span>
            <h3>Impressoras Térmicas</h3>
            <p style={{color:'#64748B', fontSize:'0.95rem'}}>Agilidade na emissão de cupons.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- COMPONENTE PRINCIPAL ---
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div style={{overflowX: 'hidden'}}>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <a href="https://wa.me/5517996780438" target="_blank" className="floating-whatsapp">
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}

export default App;