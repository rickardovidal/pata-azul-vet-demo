import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { business, hours } from "../lib/content";
import { requestOpenCookieModal } from "../lib/cookieConsent";

export default function Footer() {
  return (
    <footer className="bg-navy text-teal-100 pt-20 pb-24 lg:pb-8 relative overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="Pata Azul" className="h-14 w-auto mb-4 bg-white/95 rounded-xl p-2" />
            <p className="text-teal-200 text-sm leading-relaxed">
              Clínica veterinária dedicada ao bem-estar dos seus animais.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={business.facebookUrl} target="_blank" rel="noopener" aria-label="Facebook da Pata Azul" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" /></svg>
              </a>
              <a href={business.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram da Pata Azul" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></svg>
              </a>
              <a href={`tel:${business.phoneIntl}`} aria-label="Ligar para a Pata Azul" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-teal-200">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/sobre-nos" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Horário</h4>
            <ul className="space-y-2 text-sm text-teal-200">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4"><span>{h.day}</span><span>{h.value}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contacto</h4>
            <ul className="space-y-3 text-sm text-teal-200">
              <li>{business.addressLine1}<br />{business.addressLine2}</li>
              <li><a href={`tel:${business.phoneIntl}`} className="hover:text-white transition-colors font-semibold">{business.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-teal-300">
          <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener" className="hover:text-white transition-colors">Livro de Reclamações</a>
          <Link to="/politica-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
          <Link to="/politica-cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
          <Link to="/resolucao-litigios" className="hover:text-white transition-colors">Resolução de Litígios</Link>
          <button type="button" onClick={requestOpenCookieModal} className="hover:text-white transition-colors underline decoration-dotted">Gerir cookies</button>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-300">
          <p>© 2026 Pata Azul - Clínica Veterinária. Todos os direitos reservados.</p>
          <p>
            Site desenvolvido por{" "}
            <a href="https://byrvidal.digital/" target="_blank" rel="noopener" className="text-azure-300 hover:text-azure-200 font-semibold transition-colors">Ricardo Vidal · Multimedia &amp; Web Developer</a>
            {" · "}
            <a href="https://www.linkedin.com/in/vidal-ricardo" target="_blank" rel="noopener" className="text-azure-300 hover:text-azure-200 font-semibold transition-colors">LinkedIn</a>
          </p>
        </div>
        {/* Selo discreto: "Pata Azul" é uma marca inventada, sem negócio real por trás - avisa
             quem vir o site num contexto de portefólio de que é apenas uma demonstração. */}
        <p className="mt-4 text-center text-[11px] text-teal-400/60 italic">Protótipo de portefólio · marca e conteúdos fictícios, criados para fins de demonstração</p>
      </div>
    </footer>
  );
}
