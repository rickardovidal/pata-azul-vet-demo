import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

// Anima um elemento para dentro quando entra no ecrã ao fazer scroll.
// Substitui o IntersectionObserver manual das versões v1/v2 por GSAP +
// ScrollTrigger - mesma sensação (aparecer e subir), mais suave.
export default function Reveal({ children, delay = 0, y = 24, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
