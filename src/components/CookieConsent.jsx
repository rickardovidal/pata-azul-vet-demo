import { useEffect, useState } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  onOpenCookieModalRequest,
} from "../lib/cookieConsent";

// Modal de consentimento de cookies (RGPD). Aparece na primeira visita e
// sempre que se clica em "Gerir cookies" no rodapé. Este site não usa
// cookies de análise/publicidade próprios - o único elemento que pode
// gravar cookies é o Google Maps, na página de Contacto (ver Contacto.jsx).
export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) setOpen(true);
    return onOpenCookieModalRequest(() => setOpen(true));
  }, []);

  if (!open) return null;

  function escolher(valor) {
    setCookieConsent(valor);
    setOpen(false);
  }

  return (
    <div
      className="cookie-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
    >
      <div className="cookie-modal-card">
        <h2 id="cookie-modal-title" className="font-display text-xl font-extrabold text-navy">Uma nota sobre cookies</h2>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Só usamos o que é essencial para o site funcionar bem. O mapa da nossa localização (Google Maps) só é carregado depois de aceitar, já que nessa altura pode gravar cookies do Google. Pode saber mais na nossa{" "}
          <a href="/politica-cookies" className="text-azure-600 font-semibold hover:underline">Política de Cookies</a>.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button type="button" onClick={() => escolher("accepted")} className="btn-primary flex-1 justify-center">Aceitar todos</button>
          <button type="button" onClick={() => escolher("rejected")} className="btn-secondary flex-1 justify-center">Rejeitar não essenciais</button>
        </div>
      </div>
    </div>
  );
}
