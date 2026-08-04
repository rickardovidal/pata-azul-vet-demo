import SEO from "../components/SEO";
import PageHero from "../components/PageHero";

export default function ResolucaoLitigios() {
  return (
    <>
      <SEO
        title="Resolução Alternativa de Litígios - Pata Azul Clínica Veterinária"
        description="Informação de exemplo sobre Resolução Alternativa de Litígios de Consumo (RAL) e Livro de Reclamações, num projeto fictício de portefólio."
      />

      <PageHero eyebrow="Informação legal" title="Resolução de Litígios" />

      <section className="pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-slate-600 leading-relaxed">

          <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-3">Livro de Reclamações</h2>
          <p className="mb-4">Nos termos da legislação em vigor, a Pata Azul dispõe de Livro de Reclamações. Pode aceder ao Livro de Reclamações Eletrónico através do portal oficial:</p>
          <p className="mb-6">
            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener" className="btn-secondary inline-flex">Livro de Reclamações Eletrónico</a>
          </p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">Resolução Alternativa de Litígios de Consumo (RAL)</h2>
          <p className="mb-4">Nos termos da Lei n.º 144/2015, de 8 de setembro, informamos que, em caso de litígio de consumo que não seja possível resolver diretamente connosco, o consumidor pode recorrer a uma entidade de Resolução Alternativa de Litígios de Consumo:</p>
          <p className="mb-2 font-semibold text-navy">[A PREENCHER: nome do Centro de Arbitragem de Conflitos de Consumo competente para a área da clínica]</p>
          <p className="mb-4">[A PREENCHER: morada, telefone, email e site da entidade RAL competente]</p>
          <p className="mb-4">Para consultar a lista completa de entidades RAL reconhecidas em Portugal, visite o Portal do Consumidor: <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener" className="text-azure-600 font-semibold hover:underline">www.consumidor.gov.pt</a>.</p>

          <h2 className="font-display text-2xl font-bold text-navy mt-8 mb-3">Plataforma Europeia de Resolução de Litígios em Linha</h2>
          <p className="mb-4">Para litígios resultantes de compras online, também pode recorrer à Plataforma Europeia de Resolução de Litígios em Linha (RLL), disponível em <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" className="text-azure-600 font-semibold hover:underline">ec.europa.eu/consumers/odr</a>.</p>

        </div>
      </section>
    </>
  );
}
