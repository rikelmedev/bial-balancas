import React, { useEffect, useState } from 'react';
import { WhatsappLogo, ShieldCheck, Wrench, Storefront, CheckCircle, Star, CaretDown, List, X, Quotes } from '@phosphor-icons/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* 1. LOGO */}
      <a href="#" className="logo-capsule">
        <img src="/imagens/logo.png" alt="Bial Balanças" />
      </a>

      {/* 2. MENU */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#vitrine" onClick={() => setIsOpen(false)}>Produtos</a>
        <a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a>
        <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>
        <a href="#depoimentos" onClick={() => setIsOpen(false)}>Clientes</a>
        
        {/* BOTÃO MOBILE */}
        <a href="#contato" className="btn-nav mobile-only-btn" onClick={() => setIsOpen(false)}>
          <WhatsappLogo size={20} weight="fill" style={{marginRight:8}} /> Orçamento
        </a>
      </div>

      {/* 3. BOTÃO DESKTOP */}
      <div className="desktop-only-btn">
        <a href="#contato" className="btn-nav">
            <WhatsappLogo size={20} weight="fill" style={{marginRight:8}} /> Orçamento
        </a>
      </div>

      {/* 4. HAMBÚRGUER */}
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
      
      {/* Texto */}
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
          <img src="/imagens/anuncio6.jpg" alt="Equipamentos Bial - Balanças e Automação" />
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
        <div className="product-card" data-aos="fade-up" data-aos-delay="0">
          <img src="/imagens/anuncio1.jpg" className="product-img" alt="Balança Comercial" />
          <div className="product-info">
            <span className="product-cat">Balanças Comerciais</span>
            <h3>Balanças de Balcão</h3>
            <p style={{color:'#64748B', fontSize:'0.95rem'}}>Ideais para padarias, mercados e açougues. Alta precisão com bateria interna.</p>
          </div>
        </div>
        <div className="product-card" data-aos="fade-up" data-aos-delay="100">
          <img src="/imagens/anuncio4.jpg" className="product-img" alt="Balança Industrial" />
          <div className="product-info">
            <span className="product-cat">Indústria</span>
            <h3>Plataformas Industriais</h3>
            <p style={{color:'#64748B', fontSize:'0.95rem'}}>Robustez para pesagens pesadas. Estrutura reforçada para chão de fábrica.</p>
          </div>
        </div>
        <div className="product-card" data-aos="fade-up" data-aos-delay="200">
          <img src="/imagens/anuncio5.jpg" className="product-img" alt="Impressora Térmica" />
          <div className="product-info">
            <span className="product-cat">Automação</span>
            <h3>Impressoras Térmicas</h3>
            <p style={{color:'#64748B', fontSize:'0.95rem'}}>Agilidade na emissão de cupons e etiquetas. Compatível com os principais sistemas.</p>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center', marginTop:'40px'}} data-aos="fade-in">
        <a href="https://wa.me/5517996780438" style={{color:'#091E3A', fontWeight:'700', textDecoration:'underline'}}>Ver catálogo completo no WhatsApp</a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="about-section">
    <div className="container about-grid">
      <div className="about-img-wrapper" data-aos="zoom-in-right">
        <img src="/imagens/anuncio3.jpg" className="about-img" alt="Oficina Bial" />
        <div className="exp-badge" data-aos="bounce-in" data-aos-delay="500">
          <strong style={{fontSize:'2rem', display:'block'}}>+10</strong>
          <span style={{fontSize:'0.9rem'}}>Anos de<br/>Experiência</span>
        </div>
      </div>
      <div className="about-text" data-aos="fade-left">
        <span style={{color:'#D4AF37', fontWeight:'800', textTransform:'uppercase', fontSize:'0.9rem'}}>Sobre a Bial Balanças</span>
        <h2 style={{fontSize:'2.5rem', color:'#091E3A', marginBottom:'20px', lineHeight:'1.2'}}>Parceiro Estratégico do Seu Negócio</h2>
        <p style={{color:'#64748B', marginBottom:'30px'}}>
          Não somos apenas vendedores de equipamentos. A Bial Balanças nasceu para garantir que o seu negócio nunca pare. Entendemos que uma balança descalibrada ou uma impressora quebrada significa prejuízo.
        </p>
        <ul className="check-list" style={{listStyle:'none'}}>
          <li><CheckCircle size={24} weight="fill" color="#D4AF37" /> Atendimento Técnico Especializado</li>
          <li><CheckCircle size={24} weight="fill" color="#D4AF37" /> Laboratório Próprio de Manutenção</li>
          <li><CheckCircle size={24} weight="fill" color="#D4AF37" /> Garantia Real em todos os serviços</li>
        </ul>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="servicos" className="pro-services-section">
    <div className="container">
      <div className="section-header" data-aos="fade-down">
        <h2>Serviços Profissionais</h2>
        <p style={{color:'#64748B'}}>Soluções completas para manter sua operação ativa.</p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'30px'}}>
        <div className="pro-card" data-aos="flip-up" data-aos-delay="0">
          <div className="pro-card-header">
            <div className="header-icon-circle"><Wrench size={38} weight="fill" /></div>
            <h3>Manutenção Técnica</h3>
          </div>
          <div className="pro-card-body">
            <ul className="pro-list">
              <li>Reparo de placas e sensores</li>
              <li>Ajustes mecânicos</li>
              <li>Limpeza técnica interna</li>
              <li>Atendimento no local</li>
            </ul>
            <a href="https://wa.me/5517996780438" className="btn-card">Agendar Visita</a>
          </div>
        </div>
        <div className="pro-card" data-aos="flip-up" data-aos-delay="100">
          <div className="pro-card-header">
            <div className="header-icon-circle"><ShieldCheck size={38} weight="fill" /></div>
            <h3>Calibração</h3>
          </div>
          <div className="pro-card-body">
            <ul className="pro-list">
              <li>Pesos padrão certificados</li>
              <li>Emissão de laudo técnico</li>
              <li>Ajuste fino de precisão</li>
              <li>Conformidade com normas</li>
            </ul>
            <a href="https://wa.me/5517996780438" className="btn-card">Solicitar Laudo</a>
          </div>
        </div>
        <div className="pro-card" data-aos="flip-up" data-aos-delay="200">
          <div className="pro-card-header">
            <div className="header-icon-circle"><Storefront size={38} weight="fill" /></div>
            <h3>Venda e Troca</h3>
          </div>
          <div className="pro-card-body">
            <ul className="pro-list">
              <li>Equipamentos Novos</li>
              <li>Seminovos Revisados</li>
              <li>Aceitamos seu usado</li>
              <li>Entrega e Instalação</li>
            </ul>
            <a href="https://wa.me/5517996780438" className="btn-card">Ver Estoque</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- DEPOIMENTOS ---
const Testimonials = () => (
  <section id="depoimentos" className="testimonials-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2>O que dizem nossos clientes</h2>
        <p style={{color:'#64748B'}}>A confiança de quem já transformou o seu negócio com a Bial.</p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'30px'}}>
        {/* Cliente 1 */}
        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="0">
          <div className="quote-icon"><Quotes /></div>
          <div className="testimonial-header">
            <div className="client-avatar">RM</div>
            <div className="client-info">
              <h4>Roberto Mendes</h4>
              <span>Supermercado Mendes</span>
            </div>
          </div>
          <div className="stars">
            <Star weight="fill"/><Star weight="fill"/><Star weight="fill"/><Star weight="fill"/><Star weight="fill"/>
          </div>
          <p className="testimonial-text">"A Bial Balanças salvou a nossa operação num sábado à tarde. O atendimento técnico foi extremamente rápido e a balança ficou melhor do que nova. Recomendo!"</p>
        </div>
        {/* Cliente 2 */}
        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
          <div className="quote-icon"><Quotes /></div>
          <div className="testimonial-header">
            <div className="client-avatar">CP</div>
            <div className="client-info">
              <h4>Carla Pereira</h4>
              <span>Padaria Doce Pão</span>
            </div>
          </div>
          <div className="stars">
            <Star weight="fill"/><Star weight="fill"/><Star weight="fill"/><Star weight="fill"/><Star weight="fill"/>
          </div>
          <p className="testimonial-text">"Compramos todas as balanças e impressoras com eles. O equipamento é de primeira e o preço foi o melhor da região. O suporte pós-venda faz toda a diferença."</p>
        </div>
        {/* Cliente 3 */}
        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
          <div className="quote-icon"><Quotes /></div>
          <div className="testimonial-header">
            <div className="client-avatar">FA</div>
            <div className="client-info">
              <h4>Fábio Almeida</h4>
              <span>Indústria Alimentícia</span>
            </div>
          </div>
          <div className="stars">
            <Star weight="fill"/><Star weight="fill"/><Star weight="fill"/><Star weight="fill"/><Star weight="fill"/>
          </div>
          <p className="testimonial-text">"Precisávamos de calibração certificada urgente para uma auditoria. A equipe da Bial Balanças foi super profissional e entregou os laudos no prazo exato."</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="faq-section">
    <div className="container">
      <div className="section-header" data-aos="fade-up">
        <h2>Perguntas Frequentes</h2>
      </div>
      <div className="faq-grid" data-aos="fade-up">
        <details className="faq-item">
          <summary>Vocês vendem balanças novas ou usadas? <CaretDown size={20} /></summary>
          <p>Trabalhamos com ambas! Temos equipamentos novos das melhores marcas e também seminovos, totalmente revisados e com garantia.</p>
        </details>
        <details className="faq-item">
          <summary>Como funciona a garantia? <CaretDown size={20} /></summary>
          <p>Todos os nossos equipamentos (novos e usados) e serviços de manutenção possuem garantia balcão. Você compra com total segurança.</p>
        </details>
        <details className="faq-item">
          <summary>Vocês fazem visita técnica no local? <CaretDown size={20} /></summary>
          <p>Sim! Dependendo da região e do tipo de equipamento, enviamos um técnico até o seu estabelecimento. Entre em contato para consultar a disponibilidade.</p>
        </details>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contato">
    <div className="container">
      <div style={{display:'inline-flex', justifyContent: 'center', alignItems: 'center', background:'white', width: '90px', height: '90px', borderRadius:'50%', marginBottom:'30px', boxShadow:'0 10px 25px rgba(0,0,0,0.2)', padding: '5px'}}>
          <img src="/imagens/logo.png" alt="Bial Logo" style={{width:'100%', height:'100%', objectFit:'contain', borderRadius:'50%'}} />
      </div>
      <h3 style={{color:'white', marginBottom:'20px'}}>Pronto para modernizar seu negócio?</h3>
      <a href="https://wa.me/5517996780438" className="btn-primary-gold" style={{display:'inline-flex', marginBottom:'40px'}}>
        <WhatsappLogo size={24} weight="fill" /> Iniciar Atendimento
      </a>
      <p style={{opacity:0.6, fontSize:'0.9rem'}}>&copy; {new Date().getFullYear()} Bial Balanças. Todos os direitos reservados.</p>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div style={{overflowX: 'hidden'}}>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <About />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
      <a href="https://wa.me/5517996780438" target="_blank" className="floating-whatsapp" title="Falar no WhatsApp" data-aos="zoom-in" data-aos-delay="1000">
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}

export default App;