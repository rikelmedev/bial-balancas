# Bial Balanças — Landing Page

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![Deploy](https://img.shields.io/badge/deploy-vercel-000000?logo=vercel&logoColor=white&style=flat-square)

Landing page de alta performance para a **Bial Balanças**, empresa especialista em pesagem, venda e manutenção de balanças e impressoras térmicas. Construída para transmitir autoridade técnica e converter visitantes em pedidos de orçamento via WhatsApp.

**[→ Ver o projeto no ar](https://bial-balancas.vercel.app/)**

---

## Demonstração

| Desktop | Mobile |
| :---: | :---: |
| ![Preview Desktop](Telas/Desktop2.0.png) | ![Preview Mobile](Telas/mobile2.0.png) |

---

## O Desafio

O objetivo era transformar a presença digital da Bial numa ferramenta de autoridade técnica para clientes B2B (supermercados, padarias, indústrias). O setor industrial exige confiança e precisão — por isso o design foi pensado para transmitir solidez, usando paleta institucional e imagens reais da operação técnica, além de facilitar ao máximo o pedido de orçamentos rápidos em dispositivos móveis, onde a urgência por reparos costuma ser maior.

## A Solução

Landing page construída com **React + Vite**, com foco em três pilares:

- **Conversão** — CTAs estratégicos em cada seção e botão flutuante direcionando direto para o WhatsApp do especialista.
- **UX/UI Premium** — Design sofisticado com *glassmorphism* (efeito de vidro 3D) e paleta institucional (azul-marinho e dourado).
- **Performance** — Bundling e dev server via Vite para carregamento rápido.

## Destaques Técnicos

- **Componentização** — refatoração de um único arquivo para uma arquitetura de componentes independentes por seção (`Navbar`, `Hero`, `Stats`, `Sobre`, `Vitrine`, `Servicos`, `FAQ`, `Footer`), seguindo o princípio da responsabilidade única.
- **Design de autoridade industrial (split-screen)** — layout de tela dividida no Hero com blocos sólidos de cor e cortes poligonais (`clip-path`), garantindo contraste máximo para o texto de conversão sobre a fotografia industrial.
- **Responsividade híbrida mobile-first** — Navbar com estrutura de 3 colunas em CSS Grid no desktop, que se transforma em menu hambúrguer interativo em telas menores, garantindo que o pedido de orçamento esteja sempre a um toque de distância.
- **Gerenciamento de estado** — uso de `useState` para controlar abertura do menu mobile e do acordeão de FAQ de forma reativa.
- **CSS avançado** — cartões com `backdrop-filter: blur`, gradientes radiais complexos e transformações 3D no hover do Hero.
- **Animações no scroll** — integração com a biblioteca AOS (Animate On Scroll) para revelar conteúdo conforme o usuário navega pela página.

## Stack Técnica

| Categoria | Tecnologia |
| --- | --- |
| Biblioteca / Build | React 19, Vite |
| Estilização | Tailwind CSS 4, CSS3 (Grid, Flexbox, variáveis nativas, Keyframes) |
| Ícones | Phosphor Icons |
| Animação | AOS (Animate On Scroll) |
| Qualidade | ESLint |

## Como Rodar o Projeto Localmente

```bash
git clone https://github.com/rikelmedev/bial-balancas.git
cd bial-balancas
npm install
npm run dev
```

## Próximos Passos

- **Catálogo dinâmico** — integração com um CMS ou API para o próprio cliente adicionar/remover produtos da vitrine sem alterar código.
- **Testes automatizados** — testes de componentes para garantir que atualizações futuras não quebrem a interface.
- **Internacionalização** — suporte a múltiplos idiomas, caso a empresa decida expandir fronteiras.
- **SEO local e analytics** — dados estruturados (JSON-LD) e rastreamento de conversão dos cliques em WhatsApp.

---

Feito por [Rikelme](https://github.com/rikelmedev).
