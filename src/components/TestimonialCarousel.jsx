import { useEffect, useRef, useState } from "react";

// Carrossel de testemunhos em cartões - mesmo comportamento das versões
// anteriores (setas, bolinhas e deslizar/arrastar), só que em React: ao
// arrastar manualmente, sincroniza a bolinha ativa com o cartão mais
// próximo do CENTRO da faixa visível (não do início), com um pequeno
// atraso depois de parar de fazer scroll - evita "saltos" a meio do gesto.
export default function TestimonialCarousel({ items }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    const card = track.children[clamped];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(clamped);
  };

  const go = (delta) => scrollToIndex(active + delta);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeout;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        const cards = Array.from(track.children);
        let closest = 0;
        let closestDist = Infinity;
        cards.forEach((card, i) => {
          const cardCenter = card.offsetLeft - track.offsetLeft + card.clientWidth / 2;
          const dist = Math.abs(cardCenter - trackCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(closest);
      }, 100);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-end gap-3 mb-4">
        <button className="carousel-arrow" aria-label="Testemunho anterior" onClick={() => go(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button className="carousel-arrow" aria-label="Testemunho seguinte" onClick={() => go(1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      <div
        ref={trackRef}
        className="carousel-track flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-5 px-5 sm:mx-0 sm:px-0"
      >
        {items.map((item) => (
          <div key={item.name} className="testimonial-card snap-center shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <p className="star-row" aria-hidden="true">★★★★★</p>
            <span className="quote-mark" aria-hidden="true">"</span>
            <p className="text-slate-600 leading-relaxed relative">{item.text}</p>
            <p className="mt-4 font-extrabold text-navy">- {item.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((item, i) => (
          <button
            key={item.name}
            className={`carousel-dot${i === active ? " active" : ""}`}
            aria-label={`Ir para o testemunho de ${item.name}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
