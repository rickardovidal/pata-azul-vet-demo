import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { business } from "../lib/content";

export default function PoliticaPrivacidade() {
  return (
    <>
      <SEO
        title="Política de Privacidade - Pata Azul Clínica Veterinária"
        description="Página de exemplo sobre política de privacidade, num projeto fictício de portefólio da Pata Azul."
      />

      <PageHero eyebrow="Informação legal" title="Política de Privacidade" />

      <section className="pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-slate-600 leading-relaxed">

          <p className="text-sm text-slate-400 mb-8">Última atualização: [A PREENCHER: data]</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-3">1. Quem é o responsável pelo tratamento de dados</h2>
          <p className="mb-4">{business.fullName}, com sede na {business.addressLine1}, {business.addressLine2}, NIF [A PREENCHER: NIF da empresa], é a entidade responsável pelo tratamento dos dados pessoais recolhidos através deste site.</p>
          <p className="mb-4">Para qualquer questão sobre privacidade, pode contactar-nos através de [A PREENCHER: email de contacto para assuntos de privacidade] ou do telefone <a href={`tel:${business.phoneIntl}`} className="text-azure-600 font-semibold hover:underline">{business.phone}</a>.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">2. Que dados pessoais recolhemos</h2>
          <p className="mb-2">Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de contacto:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Nome</li>
            <li>Telefone</li>
            <li>Email</li>
            <li>Tipo de serviço pretendido</li>
            <li>Mensagem / informação sobre o animal</li>
          </ul>
          <p className="mb-4">Não recolhemos dados de pagamento, nem dados sensíveis de saúde do titular (apenas informação sobre o animal, indicada por si).</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">3. Para que finalidade usamos os seus dados</h2>
          <p className="mb-4">Os dados submetidos através do formulário são usados exclusivamente para responder ao seu pedido de marcação ou esclarecimento, e para vos contactar de volta pelos meios indicados.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">4. Fundamento legal</h2>
          <p className="mb-4">O tratamento assenta no seu consentimento, dado ao submeter voluntariamente o formulário, e no interesse legítimo em responder a pedidos de contacto dirigidos à clínica.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">5. Durante quanto tempo guardamos os seus dados</h2>
          <p className="mb-4">Conservamos os dados do formulário de contacto durante [A PREENCHER: prazo de conservação, ex. "12 meses após o último contacto"], findo o qual são eliminados de forma segura.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">6. Com quem partilhamos os seus dados</h2>
          <p className="mb-4">Os dados submetidos são processados tecnicamente pela [A PREENCHER: nome do fornecedor de alojamento/formulários, ex. "Netlify"], que atua apenas como subcontratante técnico responsável por armazenar e encaminhar os pedidos recebidos. Não vendemos nem partilhamos os seus dados com terceiros para fins de marketing.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">7. Os seus direitos</h2>
          <p className="mb-2">Nos termos do Regulamento Geral de Proteção de Dados (RGPD), tem direito a:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Aceder aos dados que temos sobre si</li>
            <li>Solicitar a retificação de dados incorretos</li>
            <li>Solicitar o apagamento dos seus dados</li>
            <li>Limitar ou opor-se ao tratamento</li>
            <li>Solicitar a portabilidade dos dados</li>
          </ul>
          <p className="mb-4">Para exercer qualquer um destes direitos, contacte-nos através de [A PREENCHER: email de contacto para assuntos de privacidade].</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">8. Reclamações</h2>
          <p className="mb-4">Caso considere que o tratamento dos seus dados não cumpre a lei, pode apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) - <a href="https://www.cnpd.pt" target="_blank" rel="noopener" className="text-azure-600 font-semibold hover:underline">www.cnpd.pt</a>.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">9. Cookies</h2>
          <p className="mb-4">Para informação sobre os cookies usados neste site, consulte a nossa <a href="/politica-cookies" className="text-azure-600 font-semibold hover:underline">Política de Cookies</a>.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">10. Alterações a esta política</h2>
          <p className="mb-4">Esta política pode ser atualizada periodicamente. A data da última atualização está indicada no topo desta página.</p>

        </div>
      </section>
    </>
  );
}
