# Redesign v2 — Landing Page Bial Balanças

## Objetivo

Reformular completamente o visual, o copy e as animações da landing page atual (React 19 + Vite + Tailwind), migrando da estética "premium glassmorphism" (azul-marinho/dourado sobre fundo claro) para uma identidade **industrial-técnica**: fundo escuro, grade de fundo tipo blueprint, tipografia mono para dados técnicos, e acento em laranja técnico. O objetivo de negócio permanece o mesmo do projeto original — maximizar conversão de pedidos de orçamento via WhatsApp — mas a identidade visual passa a comunicar precisão de engenharia de forma mais literal.

## Escopo

**Dentro do escopo desta spec:**
- Redesign visual completo (paleta, tipografia, motivos gráficos)
- Reestruturação da ordem das seções + 2 novas seções (Processo, Portfólio/Galeria)
- Reescrita de copy em todas as seções
- Plano de animação (3 momentos de destaque customizados + AOS mantido para o resto)
- Correções técnicas que a própria redesign já toca diretamente:
  - Compressão/redimensionamento das imagens usadas (Hero, Sobre, Vitrine, nova galeria)
  - Correção do bug de Open Graph (`og:image`/`twitter:image` apontando para arquivo inexistente)
  - Centralização do link/número do WhatsApp numa única constante, com mensagem pré-preenchida
  - Remoção da dependência `swiper` (não utilizada em nenhum componente)

**Fora do escopo (fast-follow separado):**
- Schema JSON-LD (LocalBusiness) para SEO local
- `robots.txt` / `sitemap.xml`
- Analytics (GA4/Meta Pixel)
- Auditoria de acessibilidade (aria-labels, aria-expanded no FAQ e no menu mobile)

Esses itens são independentes do visual e não dependem desta redesign — ficam registrados aqui para não se perderem, mas não bloqueiam esta entrega.

## Sistema visual

**Paleta**
| Papel | Cor | Uso |
|---|---|---|
| Fundo base | `#0B0F14` (quase preto) | Substitui o branco como cor dominante |
| Estrutura | Azul-marinho atual (`brand-blue`) | Cards, painéis — deixa de ser cor dominante, vira estrutural |
| Acento | Laranja técnico `#EF9F27` | CTAs, destaques, badges — substitui o dourado |
| Confirmação | Teal `#1D9E75` | Selos de garantia/certificação |
| Grade de fundo | Branco a 4% de opacidade | Linhas finas tipo papel de engenharia, sutil |

**Tipografia**
- Títulos/display: mantém **Plus Jakarta Sans**, peso 800, tracking apertado (já funciona bem)
- Dados técnicos (stats, specs, badges, tags): nova fonte monoespaçada, **JetBrains Mono** (via Google Fonts, mesmo carregamento que a Plus Jakarta Sans já usa)

**Motivos recorrentes**
- Cantos tipo "mira de medição" (corner brackets) sobre fotos de produto/instalação, substituindo bordas simples
- Tags mono ancoradas nas imagens (ex: "PLATAFORMA INDUSTRIAL — 2024")
- Linhas tracejadas/traços finos conectando elementos relacionados (stats, passos do processo)
- Badges de spec com formato "carimbo técnico" (ex: "±0.01g tolerância")

## Estrutura da página

Ordem final (funil hook → confiança → autoridade → como funciona → prova → produto → objeções → CTA):

1. Navbar (restilizada para tema escuro)
2. Hero
3. Stats (contador animado)
4. Sobre
5. **Processo — "Como funciona"** *(nova)*
6. **Portfólio/Galeria** *(nova)*
7. Vitrine
8. Serviços
9. FAQ
10. Footer + CTA final + WhatsApp flutuante

## Seções — detalhamento

### Hero
- Layout de duas colunas mantido, mas painel azul sólido é substituído pela foto da oficina com cantos de mira e tag mono ("FOTO: OFICINA")
- Badge superior mono com indicador de status (ponto laranja + "TECNOLOGIA EM PESAGEM")
- Título mantém a headline vencedora: "Sua Produção Não Pode Parar." (pilar de marca, não muda)
- Dois indicadores mono no lugar dos cards de ícone genéricos: tolerância técnica (±0.01g) e anos de mercado (+10)
- CTA em laranja técnico sólido, sem efeito "shimmer"

### Stats
- Mesmos 4 números, fonte trocada para mono
- Rótulos mais específicos (ex: "+2K SERVIÇOS EXECUTADOS" em vez de "ATENDIMENTOS")
- **Animação:** contador sobe de 0 até o valor ao entrar na viewport; traço horizontal conectando os 4 números se desenha da esquerda para a direita

### Sobre
- Mantém foto + selo "+10 anos", selo ganha contorno tipo carimbo técnico
- Copy revisado: remove adjetivos vagos ("rigoroso", "premium"), mantém afirmações verificáveis ("laboratório de manutenção próprio")

### Processo — "Como funciona" (nova seção)
- 5 passos: Chamado → Diagnóstico → Orçamento → Execução → Garantia
- Layout horizontal no desktop, vertical no mobile
- Cada passo: número mono (01–05) + ícone + frase curta
- **Animação:** traço horizontal tipo "esteira" conectando os passos avança conforme cada um entra na viewport (por `IntersectionObserver`, não scroll-jacking contínuo)

### Portfólio/Galeria (nova seção)
- Grid reaproveitando as imagens já existentes no projeto (`anuncio1-6.jpg`, `bial.png`, `oficina.png`), redimensionadas/comprimidas
- Mesma linguagem visual do Hero: cantos de mira + tag mono por imagem

### Vitrine e Serviços
- Mantêm a estrutura de cards atual, re-skinados: fundo escuro, bordas finas em vez de sombra, tag mono de categoria
- CTAs variam por contexto em vez de repetir o mesmo texto (ex: "Agendar visita técnica", "Solicitar calibração", "Consultar disponibilidade")

### FAQ e Footer
- Mantêm função e conteúdo, aplicam o tema escuro
- CTA final do footer troca "Iniciar Atendimento" (vago) por uma chamada mais específica ao serviço

## Copy — diretriz de voz

Cortar adjetivos vagos de marketing ("premium", "rigoroso", "excelência técnica", "solução") em favor de afirmações concretas e específicas — consistente com a estética "ficha técnica". Exemplos de reescrita já validados:

- Subhead do Hero: *"Precisão que gera resultado"* → *"Manutenção, calibração e venda de balanças industriais. Suporte técnico no local, sem intermediários."*
- Card de Manutenção Preventiva: *"Intervenções técnicas rigorosas para evitar paradas inesperadas"* → *"Análise de células de carga, limpeza de circuitos e ajuste de sensibilidade — antes que a parada aconteça."*

## Plano de animação

Nível: **equilibrado** (escolhido deliberadamente em vez de "expressivo" — o site já sofre com imagens pesadas afetando performance mobile, que é a prioridade declarada do negócio; animação pesada agravaria isso).

- **AOS é mantido** para todos os reveals genéricos (fade/slide-up ao entrar na viewport) — já está no projeto e cobre bem esse caso, não há motivo para substituir.
- **3 momentos de destaque customizados** (CSS `@keyframes` + `IntersectionObserver`/`requestAnimationFrame`, sem biblioteca nova):
  1. Hero: grade de fundo com fade curto (~400ms) + cantos de mira da foto "encaixando" com stagger (~80ms entre cada canto), dispara uma vez no load
  2. Stats: contador numérico + traço horizontal se desenhando, disparado por `IntersectionObserver`
  3. Processo: linha "esteira" conectando os 5 passos avança conforme cada passo entra na viewport

## Correções técnicas incluídas nesta entrega

- **Imagens:** todas as imagens usadas nas seções tocadas (Hero, Sobre, Vitrine, Portfólio) são redimensionadas e comprimidas (hoje variam de 1,2 MB a 11 MB); formato WebP com fallback quando aplicável; `loading="lazy"` nas imagens abaixo da dobra
- **Open Graph:** `index.html` referencia `/imagens/Oficina.jpg`, que não existe (só existe `.png`) — corrigir para apontar ao arquivo real, confirmado via teste ao vivo (404)
- **WhatsApp:** número/link hoje hardcoded em 10 lugares em 6 arquivos — extrair para uma constante única (ex: `src/config.js`), incluindo mensagem pré-preenchida por contexto (`?text=...`)
- **Dependências:** remover `swiper` do `package.json` (não importado em nenhum componente)

## Fora de escopo (registrado para fast-follow)

- Schema JSON-LD (LocalBusiness) para SEO local
- `robots.txt` / `sitemap.xml`
- Analytics (GA4 ou Meta Pixel) para medir conversão de cliques no WhatsApp
- Acessibilidade: `aria-label` no botão hambúrguer e no WhatsApp flutuante, `aria-expanded`/`aria-controls` no acordeão do FAQ
- Seção de depoimentos/prova social (mencionada no README mas não implementada) — descartada nesta rodada a pedido do usuário, que priorizou Processo e Portfólio no lugar
