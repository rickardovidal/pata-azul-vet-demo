import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { requestOpenCookieModal } from "../lib/cookieConsent";

export default function PoliticaCookies() {
  return (
    <>
      <SEO
        title="Política de Cookies - Pata Azul Clínica Veterinária"
        description="Página de exemplo sobre política de cookies, num projeto fictício de portefólio da Pata Azul."
      />

      <PageHero eyebrow="Informação legal" title="Política de Cookies" />

      <section className="pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-slate-600 leading-relaxed">

          <p className="text-sm text-slate-400 mb-8">Última atualização: [A PREENCHER: data]</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-3">1. O que são cookies</h2>
          <p className="mb-4">Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um site, usados para o site funcionar corretamente ou para recolher informação sobre a sua visita.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">2. Cookies que este site usa</h2>
          <p className="mb-2">Este site não usa cookies próprios de análise ou publicidade. O único elemento que pode gravar cookies é de terceiros:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Google Maps</strong> - na página de Contacto, para mostrar um mapa de exemplo (este projeto é fictício, o mapa não assinala uma morada real). Este mapa só carrega depois de aceitar no aviso de cookies, e pode gravar cookies do Google (regidos pela própria política de privacidade da Google).</li>
          </ul>
          <p className="mb-4">[A PREENCHER: se no futuro instalar Google Analytics, Meta Pixel ou outra ferramenta de estatísticas/marketing, deve atualizar esta secção e o modal de consentimento em conformidade.]</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">3. Como gerir o seu consentimento</h2>
          <p className="mb-4">
            Pode mudar de ideias a qualquer momento, clicando em{" "}
            <button type="button" onClick={requestOpenCookieModal} className="text-azure-600 font-semibold hover:underline">"Gerir cookies"</button>{" "}
            no rodapé de qualquer página deste site, o que volta a mostrar o aviso de consentimento.
          </p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">4. Como desativar cookies no seu browser</h2>
          <p className="mb-4">Também pode gerir ou bloquear cookies diretamente nas definições do seu browser (Chrome, Firefox, Safari, Edge). Note que bloquear todos os cookies pode impedir o carregamento correto de alguns conteúdos incorporados, como mapas.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">5. Mais informação</h2>
          <p className="mb-4">Para saber como tratamos os seus dados pessoais em geral, consulte a nossa <a href="/politica-privacidade" className="text-azure-600 font-semibold hover:underline">Política de Privacidade</a>.</p>

        </div>
      </section>
    </>
  );
}
