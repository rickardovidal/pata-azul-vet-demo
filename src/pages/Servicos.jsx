import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ServiceTile from "../components/ServiceTile";
import FaqAccordion from "../components/FaqAccordion";
import { business, services, faqs } from "../lib/content";

export default function Servicos() {
  return (
    <>
      <SEO
        title="Serviços - Pata Azul Clínica Veterinária"
        description="Vacinação, análises sanguíneas, aconselhamento nutricional, banhos e tosquias, pequenas cirurgias, petsitting e atendimento ao domicílio. Conheça os serviços fictícios da Pata Azul."
      />

      <PageHero
        title="Serviços"
        subtitle="Desde consultas de rotina e vacinações a cirurgias, análises e cuidados ao domicílio - uma gama completa de serviços para cães, gatos e outros animais de estimação."
      />

      <section className="pt-4 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.06}>
                <ServiceTile index={i + 1} title={s.title} text={s.text} image={s.image} />
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center text-slate-500 text-sm mt-10">
            Não encontrou o que procura? <Link to="/contacto" className="text-azure-600 font-bold hover:underline">Fale connosco</Link> - teremos todo o gosto em ajudar.
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-teal-50/60">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="text-azure-600 font-extrabold tracking-wide uppercase text-sm mb-2">Dúvidas frequentes</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">Perguntas que nos fazem muitas vezes</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="cta-gradient text-white rounded-[2.5rem] px-8 py-12 sm:px-16 text-center relative overflow-hidden grain">
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">Marque a sua consulta</h2>
              <p className="mt-4 text-white/85 max-w-lg mx-auto">Não hesite em contactar-nos para esclarecer qualquer dúvida sobre a saúde do seu animal.</p>
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
