// Configuração do EmailJS (emailjs.com) - para personalizar o email que o
// escritório recebe e enviar uma resposta automática ao cliente. Ver
// GUIA-EDICAO-LEIA-ME.md, ponto 3, para os passos de criação de conta e
// templates. A Public Key não é secreta - é normal ficar exposta no código
// do lado do cliente, é assim que o EmailJS é desenhado para funcionar.
// Este projeto é fictício (peça de portefólio) - por isso as chaves ficam
// como placeholder, sem ligação a nenhuma conta real do EmailJS.
export const EMAILJS_PUBLIC_KEY = "COLOCAR_AQUI_A_PUBLIC_KEY";
export const EMAILJS_SERVICE_ID = "COLOCAR_AQUI_O_SERVICE_ID";
export const EMAILJS_TEMPLATE_ESCRITORIO = "COLOCAR_AQUI_O_TEMPLATE_ID_ESCRITORIO";
export const EMAILJS_TEMPLATE_CLIENTE = "COLOCAR_AQUI_O_TEMPLATE_ID_CLIENTE";

export const emailjsConfigurado = !EMAILJS_PUBLIC_KEY.startsWith("COLOCAR_AQUI");
