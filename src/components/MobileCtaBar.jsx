import { Link } from "react-router-dom";
import { business } from "../lib/content";

export default function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar">
      <a href={`tel:${business.phoneIntl}`} className="btn-secondary">Ligar</a>
      <Link to="/contacto" className="btn-primary">Marcar Consulta</Link>
    </div>
  );
}
