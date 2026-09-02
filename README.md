# Pata Azul — site de clínica veterinária

Site institucional de uma clínica veterinária **fictícia**, criado como peça de
portefólio. Demonstra a construção de um site montra completo para um pequeno
negócio: identidade própria, várias páginas, formulário de contacto,
conformidade legal e animação.

**Demo:** https://pataazul.netlify.app

![Pata Azul](public/logo.png)

## O que inclui

- **Páginas:** Início, Serviços, Sobre Nós, Contacto, 404, e as páginas legais
  (Política de Privacidade, Política de Cookies, Resolução de Litígios).
- **Formulário de contacto** funcional via EmailJS (chaves como *placeholder* —
  o projeto é fictício).
- **Consentimento de cookies** com preferências e bloqueio de scripts até aceitação.
- **SEO** por página (título, descrição e Open Graph) com `react-helmet-async`.
- **Acessibilidade:** *skip link*, `lang="pt-PT"`, foco visível, contraste e
  navegação por teclado.
- **Animação de scroll** com GSAP (componente `Reveal`) e contadores animados.
- **Rotas com *code splitting*** — só a Home entra no *bundle* inicial; as
  restantes páginas carregam quando o visitante lá navega.
- Barra de CTA fixa em telemóvel e botão de WhatsApp.

## Stack

| Área | Tecnologias |
|---|---|
| Frontend | React 19, React Router 7, Vite |
| Estilo | Tailwind CSS 4 |
| Animação | GSAP |
| Email | EmailJS |
| SEO | react-helmet-async |
| Lint | Oxlint |

## Correr localmente

```bash
npm install
npm run dev       # arranca em http://localhost:5173
npm run build     # build de produção para dist/
npm run preview   # pré-visualizar o build
```

Para ativar o envio de emails, preencher as chaves em
`src/lib/emailConfig.js` com uma conta EmailJS.

## Nota

A Pata Azul não é um negócio real. Todo o conteúdo, marca e imagens servem
apenas para demonstrar o trabalho.

---

Ricardo Vidal · [byrvidal.digital](https://byrvidal.digital) ·
[linkedin.com/in/vidal-ricardo](https://www.linkedin.com/in/vidal-ricardo)
