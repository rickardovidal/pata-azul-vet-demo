import { Helmet } from "react-helmet-async";
import { business, openingHoursSpecification } from "../lib/content";

// Título, descrição e dados estruturados (JSON-LD) de cada página.
// Numa SPA React o motor de busca só vê isto depois de correr o
// JavaScript - aceitável numa proposta/demonstração, mas antes de o
// site ir a sério para produção vale a pena gerar as páginas em
// pré-render/SSG (ver GUIA-EDICAO-LEIA-ME.md).
export default function SEO({ title, description }) {
  // Sem telefone, morada, geo ou "sameAs" nos dados estruturados - a Pata
  // Azul é fictícia, e estes campos exigiriam contactos/localização reais
  // para fazer sentido em schema.org (o site já está de resto marcado como
  // noindex, por isso nem chega a ser rastreado a sério).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: business.fullName,
    openingHoursSpecification,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
