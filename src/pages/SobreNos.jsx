import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { business, values, team } from "../lib/content";

const valueIcons = [
  <path key="1" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />,
  <path key="2" d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />,
  <path key="3" d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />,
  <path key="4" d="M12 20V10M12 10c0-3 2-6 6-6 0 4-1 6-6 6zm0 0C12 7 10 4 6 4c0 4 1 6 6 6z" />,
];

export default function SobreNos() {
  return (
    <>
      <SEO
        title="Sobre Nós - Pata Azul Clínica Veterinária"
        description="Conheça a Pata Azul, clínica veterinária fictícia de proximidade, criada como peça de portefólio."
      />

      <PageHero
        title="Sobre Nós"
        subtitle="Bem-vindo à Pata Azul, uma clínica veterinária dedicada ao bem-estar dos seus animais."
      />

      <section className="pt-4 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="text-azure-600 font-extrabold tracking-wide uppercase text-sm mb-2">A nossa clínica</p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">Um consultório com a proximidade de quem conhece a região</h2>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                Na nossa clínica dedicamo-nos a prestar cuidados veterinários de confiança, com uma abordagem próxima e atenta a cada caso. Com uma equipa experiente e dedicada, oferecemos uma gama alargada de serviços: consultas de rotina, vacinação, cirurgia, análises sanguíneas, petsitting e atendimento ao domicílio.
              </p>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Damos valor à singularidade de cada animal e procuramos cuidados personalizados que garantam uma vida longa, saudável e feliz aos nossos pacientes - sejam cães, gatos, coelhos, aves ou outros animais de estimação.
              </p>
              <blockquote className="mt-8 border-l-4 border-azure-400 pl-5">
                <p className="script-accent text-3xl leading-tight">"Saúde e bem-estar para os seus companheiros de sempre."</p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="about-photo-card aspect-[4/5] max-w-md mx-auto shadow-xl">
                <picture>
                  <source srcSet="/assets/sobre-nos-foto.webp" type="image/webp" />
                  <img src="/assets/sobre-nos-foto.jpg" alt="Mão a segurar com carinho a pata de um cão" loading="lazy" />
                </picture>
                <div className="about-photo-scrim" aria-hidden="true"></div>
                <div className="about-photo-quote">
                  <p className="script-accent text-white text-3xl leading-snug">"Obrigado pela confiança em entregar-nos o cuidado do seu melhor amigo."</p>
                  <p className="mt-4 text-teal-200 text-xs font-bold uppercase tracking-[0.2em]">Pata Azul</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-teal-50/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-azure-600 font-extrabold tracking-wide uppercase text-sm mb-2">O que nos guia</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">Os valores por trás de cada consulta</h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-navy text-white grid place-items-center mb-5">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{valueIcons[i]}</svg>
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{v.title}</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-azure-600 font-extrabold tracking-wide uppercase text-sm mb-2">Quem cuida de si</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">A equipa por trás da Pata Azul</h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-3 gap-10">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                  <picture>
                    <source srcSet={`/assets/equipa/${t.image}.webp`} type="image/webp" />
                    <img src={`/assets/equipa/${t.image}.jpg`} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                  </picture>
                </div>
                <h3 className="font-display text-lg font-bold text-navy mt-5">{t.name}</h3>
                <p className="text-azure-600 text-xs font-bold uppercase tracking-[0.15em] mt-1">{t.role}</p>
                <p className="text-slate-600 text-sm mt-3 italic leading-relaxed">"{t.quote}"</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="cta-gradient text-white rounded-[2.5rem] px-8 py-12 sm:px-16 text-center relative overflow-hidden grain">
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Venha conhecer-nos</h2>
              <p className="mt-4 text-white/85 max-w-lg mx-auto">Estamos prontos para cuidar do seu animal, sempre que precisar.</p>
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
