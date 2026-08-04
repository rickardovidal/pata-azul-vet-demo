import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import ServiceTile from "../components/ServiceTile";
import StepsPrimeiraConsulta from "../components/StepsPrimeiraConsulta";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { business, services, stats, testimonials } from "../lib/content";

export default function Home() {
  return (
    <>
      <SEO
        title="Pata Azul - Clínica Veterinária (projeto fictício)"
        description="Pata Azul é uma clínica veterinária fictícia, criada como peça de portefólio. Consultas, vacinação, cirurgia, banhos e atendimento ao domicílio."
      />

      {/* ===================== ABERTURA (HERO) ===================== */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-cream">
        <div className="hero-blob absolute -top-24 -right-32 w-[32rem] h-[32rem] bg-teal-100/80 blur-[2px]" aria-hidden="true" />
        <div className="hero-blob absolute -bottom-32 -left-24 w-72 h-72 bg-azure-100/60" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
            <Reveal>
              <div className="flex items-center gap-2 text-teal-600 text-sm font-bold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" /></svg>
                Cuidado de confiança
              </div>

              <h1 className="font-display mt-4 text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">
                Saúde e bem‑estar para os seus <span className="script-accent text-5xl sm:text-6xl lg:text-7xl">companheiros de sempre</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                Clínica veterinária dedicada a oferecer cuidados de qualidade, com uma abordagem próxima e atenta a cada animal. Consultas de rotina, vacinação, cirurgia, análises e cuidados ao domicílio para cães, gatos e outros animais de estimação.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link to="/contacto" className="btn-primary">Marcar Consulta</Link>
                <a href={`tel:${business.phoneIntl}`} className="btn-ghost-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Ligar Agora
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                <div className="trust-item text-navy/80">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f63c4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Atendimento ao domicílio
                </div>
                <div className="trust-item text-navy/80">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f63c4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Petsitting disponível
                </div>
                <div className="trust-item text-navy/80">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f63c4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Resposta rápida por WhatsApp
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-10 lg:mt-0 max-w-[400px] sm:max-w-md lg:max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <picture>
                <source srcSet="/assets/hero/hero-bulldog-cat.webp" type="image/webp" />
                <img src="/assets/hero/hero-bulldog-cat.png" alt="Bulldog francês e gato tabby, amigos, lado a lado" className="w-full h-auto" />
              </picture>
            </Reveal>
          </div>

          {/* Estatísticas integradas no hero, em vez de secção separada */}
          <Reveal delay={0.15} className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-navy/10">
            {stats.map((s) => (
              <StatCounter key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===================== PRÉVIA DE SERVIÇOS ===================== */}
      <section id="servicos" className="pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-azure-600 font-extrabold tracking-wide uppercase text-sm mb-2">O que fazemos</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">Uma gama completa de cuidados veterinários</h2>
            </div>
            <Link to="/servicos" className="btn-secondary shrink-0">Ver todos os serviços</Link>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <ServiceTile index={i + 1} title={s.title} text={s.text} image={s.image} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PERCURSO DA PRIMEIRA CONSULTA ===================== */}
      <section className="py-16 lg:py-20 bg-teal-50/60">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-azure-600 font-extrabold tracking-wide uppercase text-sm mb-2">Como funciona</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">A sua primeira consulta, passo a passo</h2>
          </Reveal>
          <StepsPrimeiraConsulta />
        </div>
      </section>

      {/* ===================== PRÉVIA "SOBRE NÓS" ===================== */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal className="relative order-2 lg:order-1">
              <div className="about-photo-card aspect-[4/5] max-w-md mx-auto shadow-xl">
                <picture>
                  <source srcSet="/assets/sobre-nos-foto.webp" type="image/webp" />
                  <img src="/assets/sobre-nos-foto.jpg" alt="Mão a segurar com carinho a pata de um cão" loading="lazy" />
                </picture>
                <div className="about-photo-scrim" aria-hidden="true"></div>
                <div className="about-photo-quote">
                  <p className="script-accent text-white text-3xl leading-snug">"Tratamos cada animal como se fosse nosso."</p>
                  <p className="mt-4 text-teal-200 text-xs font-bold uppercase tracking-[0.2em]">Pata Azul</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="order-1 lg:order-2">
              <p className="text-azure-600 font-extrabold tracking-wide uppercase text-sm mb-2">Sobre nós</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">Perto de si, atentos ao seu animal</h2>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                Na nossa clínica dedicamo-nos a prestar cuidados veterinários de confiança, com uma abordagem próxima e atenta a cada caso. Uma equipa experiente que acompanha o seu animal em cada fase da vida.
              </p>
              <Link to="/sobre-nos" className="btn-secondary mt-7">Conhecer a nossa história</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== TESTEMUNHOS ===================== */}
      <section className="py-16 lg:py-20 bg-teal-50/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="text-center sm:text-left max-w-xl mx-auto sm:mx-0">
              <p className="text-azure-600 font-extrabold tracking-wide uppercase text-sm mb-2">Quem confia em nós</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">O que dizem os nossos clientes</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <TestimonialCarousel items={testimonials} />
          </Reveal>
        </div>
      </section>

      {/* ===================== FAIXA DE APELO À AÇÃO ===================== */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="cta-gradient text-white rounded-[2.5rem] px-8 py-12 sm:px-16 text-center relative overflow-hidden grain">
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Não hesite em contactar-nos</h2>
              <p className="mt-4 text-white/85 max-w-lg mx-auto">Para marcar uma consulta ou esclarecer qualquer dúvida sobre a saúde do seu animal.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto" className="btn-secondary">Marcar Consulta</Link>
                <a href={`tel:${business.phoneIntl}`} className="btn-ghost-light on-dark">Ligar Agora</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
