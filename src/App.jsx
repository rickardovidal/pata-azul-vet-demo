import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappFab from "./components/WhatsappFab";
import BackToTop from "./components/BackToTop";
import MobileCtaBar from "./components/MobileCtaBar";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";

// As páginas internas só carregam quando o visitante lá navega - o
// pacote inicial (o que interessa na primeira visita, a Home) fica mais
// pequeno. Isto não é possível nas versões HTML soltas (v1/v2).
const Servicos = lazy(() => import("./pages/Servicos"));
const SobreNos = lazy(() => import("./pages/SobreNos"));
const Contacto = lazy(() => import("./pages/Contacto"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));
const ResolucaoLitigios = lazy(() => import("./pages/ResolucaoLitigios"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a href="#conteudo" className="skip-link">Saltar para o conteúdo principal</a>

      <Header />

      <main id="conteudo">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="/resolucao-litigios" element={<ResolucaoLitigios />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
      <WhatsappFab />
      <MobileCtaBar />
      <CookieConsent />
    </>
  );
}
