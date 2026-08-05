import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { firstVisitSteps } from "../lib/content";

// Elemento assinatura do v3 (não existe nas versões anteriores): a linha
// que liga os 3 passos "desenha-se" à medida que se faz scroll pela secção
// (GSAP + ScrollTrigger com scrub). Em ecrãs pequenos a linha base já
// aparece visível e estática - o desenho progressivo só acontece a partir
// do breakpoint lg, onde os passos ficam lado a lado.
export default function StepsPrimeiraConsulta() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path || prefersReducedMotion()) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative mt-14">
      <svg
        className="hidden lg:block absolute left-0 right-0 top-[2.6rem] w-full h-10"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 100 20 L 600 20 L 1100 20" fill="none" stroke="#0b3b4d" strokeOpacity="0.12" strokeWidth="3" strokeLinecap="round" />
        <path ref={pathRef} d="M 100 20 L 600 20 L 1100 20" fill="none" stroke="#2f5170" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div className="grid lg:grid-cols-3 gap-8 relative">
        {firstVisitSteps.map((step, i) => (
          <div key={step.title} className="step-node">
            <div className="step-number">{i + 1}</div>
            <h3 className="font-display text-lg font-bold text-navy">{step.title}</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
