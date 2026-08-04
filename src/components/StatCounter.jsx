import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

// Contador animado (0 até ao valor real) quando a secção entra no ecrã.
export default function StatCounter({ target, suffix = "", label }) {
  const numRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const numEl = numRef.current;
    const wrapEl = wrapRef.current;
    if (!numEl || !wrapEl) return;

    if (prefersReducedMotion()) {
      numEl.textContent = target;
      return;
    }

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: wrapEl, start: "top 90%", once: true },
        onUpdate: () => {
          numEl.textContent = Math.round(counter.value);
        },
      });
    }, wrapEl);

    return () => ctx.revert();
  }, [target]);

  return (
    <div ref={wrapRef} className="text-center">
      <p className="counter-value font-display text-4xl sm:text-5xl font-extrabold text-navy">
        <span ref={numRef}>0</span>{suffix}
      </p>
      <p className="mt-1.5 text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wide">{label}</p>
    </div>
  );
}
