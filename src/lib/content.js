// Todos os dados fictícios do negócio, num único sítio. Mudar um número de
// telefone ou um horário aqui atualiza automaticamente todas as páginas
// (header, rodapé, JSON-LD, WhatsApp, formulário).
// Este projeto é uma peça de portefólio: "Pata Azul" é uma marca inventada,
// sem qualquer ligação a um negócio real - ver GUIA-EDICAO-LEIA-ME.md.

// O telefone usa uma sequência de exemplo (912 345 678) em vez de "X" -
// mais fácil de ler no menu/rodapé, mas continua claramente fictício. A
// morada mantém-se genérica (ver "esta clínica não existe" acima).
export const business = {
  name: "Pata Azul",
  fullName: "Pata Azul - Clínica Veterinária",
  phone: "912 345 678",
  phoneIntl: "+351912345678",
  whatsappUrl: "https://wa.me/351912345678?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta.",
  addressLine1: "Morada de exemplo",
  addressLine2: "Portugal",
  addressLocality: "Portugal",
  postalCode: "XXXX-XXX",
  facebookUrl: "#",
  instagramUrl: "#",
  // O mapa da página de Contacto mostra Aveiro (cidade genérica, à parte da
  // morada de exemplo acima) só para dar contexto visual real ao mapa.
  mapEmbedUrl: "https://www.google.com/maps?q=Aveiro%2C%20Portugal&output=embed",
};

export const hours = [
  { day: "Segunda – Sexta", value: "9h00 – 19h00" },
  { day: "Sábado", value: "9h00 – 13h00" },
  { day: "Domingo", value: "Encerrado" },
];

// Especificação de horário em formato schema.org, usada no JSON-LD (SEO)
export const openingHoursSpecification = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
];

export const services = [
  { title: "Vacinação", text: "Planos de vacinação adaptados à idade e ao estilo de vida de cada animal, para uma proteção duradoura.", image: "vacinacao" },
  { title: "Análises Sanguíneas", text: "Diagnóstico laboratorial rigoroso, essencial para identificar e acompanhar problemas de saúde a tempo.", image: "analises" },
  { title: "Aconselhamento Nutricional", text: "Planos alimentares personalizados, pensados para o peso, a idade e as necessidades de cada animal.", image: "nutricao" },
  { title: "Destartarização", text: "Higiene oral profissional que previne infeções, mau hálito e outros problemas de saúde a longo prazo.", image: "destartarizacao" },
  { title: "Banhos & Tosquias", text: "Cuidados de estética num ambiente calmo, pensado para o conforto do seu animal.", image: "banhos" },
  { title: "Pequenas Cirurgias", text: "Intervenções de rotina realizadas com segurança e acompanhamento próximo em todas as fases.", image: "cirurgias" },
  { title: "Petsitting", text: "Apoio diário quando não pode estar presente: alimentação, passeios e atualizações regulares.", image: "petsitting" },
  { title: "Domicílio", text: "Consultas e cuidados prestados no conforto da casa do seu animal.", image: "domicilio" },
];

export const testimonials = [
  { name: "Marta Oliveira", text: "Levei o meu gato numa emergência e fui atendida de imediato. Explicaram tudo com calma, senti-me em boas mãos." },
  { name: "Hugo Ferreira", text: "Equipa atenciosa e profissional. O meu labrador já não tem medo de ir às consultas, o que diz tudo." },
  { name: "Rita Almeida", text: "Uso o serviço de petsitting sempre que viajo. Recebo atualizações diárias e fico muito mais tranquila." },
  { name: "João Pinto", text: "Recomendo a quem procura um atendimento próximo e sem pressa. Perceberam logo o que se passava com a minha cadela." },
];

export const stats = [
  { target: 8, suffix: "", label: "Serviços especializados" },
  { target: 12, suffix: "", label: "Anos de experiência" },
  { target: 100, suffix: "%", label: "Cuidado personalizado" },
  { target: 6, suffix: "/7", label: "Dias de atendimento" },
];

export const values = [
  { title: "Cuidado atento", text: "Cada consulta é feita com calma, sem pressa, para que o animal se sinta seguro." },
  { title: "Equipa experiente", text: "Profissionais dedicados, atualizados e apaixonados pelo que fazem." },
  { title: "Ao seu ritmo", text: "Serviço ao domicílio para quem prefere o conforto e a familiaridade de casa." },
  { title: "Transparência total", text: "Explicamos diagnósticos e opções de tratamento em linguagem simples e direta." },
];

// Equipa fictícia (nomes e fotos de exemplo) - dá rosto e voz próprios à
// clínica, em vez de só texto genérico sobre "profissionais dedicados".
export const team = [
  { name: "Dra. Inês Coelho", role: "Clínica Geral", quote: "Cada consulta começa por ouvir o dono - ninguém conhece melhor o animal do que quem vive com ele.", image: "equipa-1" },
  { name: "Dra. Beatriz Nogueira", role: "Cirurgia e Urgências", quote: "Gosto de explicar cada passo com calma, para que ninguém saia daqui com mais dúvidas do que trouxe.", image: "equipa-2" },
  { name: "Dr. Tiago Marques", role: "Atendimento ao Domicílio", quote: "Há animais muito mais tranquilos em casa do que numa sala de espera - por isso vou eu até eles.", image: "equipa-3" },
];

// Elemento assinatura do v3: percurso real da primeira consulta,
// explicado em passos para reduzir a ansiedade de quem nunca cá veio.
export const firstVisitSteps = [
  {
    title: "Contacto inicial",
    text: "Ligue-nos ou envie mensagem a indicar o motivo da visita - ajudamo-lo a escolher o horário mais adequado.",
  },
  {
    title: "Ficha clínica",
    text: "No dia da consulta, reunimos o historial do animal: idade, vacinas, hábitos e sintomas recentes.",
  },
  {
    title: "Avaliação e próximos passos",
    text: "Realizamos o exame, explicamos o que encontrámos e definimos juntos o plano de tratamento.",
  },
];

export const faqs = [
  {
    q: "Onde fica a clínica?",
    a: "A morada apresentada neste site é apenas um exemplo - este é um projeto de demonstração, sem clínica real associada.",
  },
  {
    q: "Que vacinas o meu animal precisa?",
    a: "O plano de vacinação depende da espécie, idade e estilo de vida do animal. Na primeira consulta avaliamos o historial e definimos o calendário mais adequado.",
  },
  {
    q: "O meu animal está ansioso, o que posso fazer?",
    a: "Rotinas estáveis, exercício regular e estimulação mental ajudam bastante. Em casos persistentes, marque uma consulta para avaliarmos o caso em conjunto.",
  },
  {
    q: "Preciso de marcação prévia?",
    a: "Recomendamos marcação prévia para garantir o melhor horário, mas em situações de urgência contacte-nos diretamente que faremos os possíveis para o receber o quanto antes.",
  },
];
