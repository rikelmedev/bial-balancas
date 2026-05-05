import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Coluna 1: Marca */}
          <div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden mb-6">
              <img src="/logo.png" alt="Bial Balanças" className="object-contain w-12" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Líder em soluções de pesagem industrial. Excelência técnica em manutenção, 
              instalação e venda de balanças de alta precisão.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#produtos" className="text-slate-300 hover:text-white transition-colors">Nossos Produtos</a></li>
              <li><a href="#servicos" className="text-slate-300 hover:text-white transition-colors">Serviços Técnicos</a></li>
              <li><a href="#sobre" className="text-slate-300 hover:text-white transition-colors">Sobre a Bial</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contacto */}
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Contacto Direto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold">📍</span>
                <span className="text-slate-300">Rua Industrial, 123 - Distrito Industrial<br/>São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-gold">📞</span>
                <a href="tel:+5511999999999" className="text-slate-300 hover:text-white transition-colors">+55 (11) 99999-9999</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-gold">✉️</span>
                <a href="mailto:contato@bialbalancas.com" className="text-slate-300 hover:text-white transition-colors">contato@bialbalancas.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Bial Balanças - Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}