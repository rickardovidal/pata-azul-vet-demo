import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Página não encontrada - Pata Azul" description="A página que procura não existe." />
      <section className="min-h-[60vh] grid place-items-center px-5 text-center pt-32">
        <div>
          <p className="font-display text-6xl font-extrabold text-navy">404</p>
          <p className="mt-4 text-slate-600">Esta página não existe ou foi movida.</p>
          <Link to="/" className="btn-primary mt-7 inline-flex">Voltar ao início</Link>
        </div>
      </section>
    </>
  );
}
