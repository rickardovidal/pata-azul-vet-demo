import Reveal from "./Reveal";

// Abertura leve e centrada, partilhada pelas 3 páginas internas
// (Serviços, Sobre Nós, Contacto) - mantém a identidade clara/arejada
// do v3 em vez do bloco azul-escuro usado nas versões anteriores.
export default function PageHero({ eyebrow = "Clínica Veterinária", title, subtitle }) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden bg-cream">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative text-center">
        <Reveal>
          <p className="text-azure-600 font-bold tracking-wide uppercase text-sm mb-2">{eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">{title}</h1>
          {subtitle && <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
