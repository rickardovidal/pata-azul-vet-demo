import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { business, hours } from "../lib/content";
import { getCookieConsent, setCookieConsent, onCookieConsentChange } from "../lib/cookieConsent";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ESCRITORIO,
  EMAILJS_TEMPLATE_CLIENTE,
  emailjsConfigurado,
} from "../lib/emailConfig";

// Envia para o Netlify Forms (o <form> escondido com os mesmos campos, em
// index.html, é o que permite ao Netlify detetar isto no build - ver
// GUIA-EDICAO-LEIA-ME.md, ponto 3) e, se configurado, também via EmailJS
// (email personalizado ao escritório + resposta automática ao cliente).
// Localmente (npm run dev) o fetch falha sempre, por isso mostra a mensagem
// de recurso ao telefone - é esperado.
const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export default function Contacto() {
  // Aviso fixo (toast) que confirma o envio do formulário - fica sempre
  // visível no topo do ecrã (ver .form-toast em index.css), em vez de uma
  // mensagem que ficava escondida mais abaixo na página, depois do botão de
  // enviar. Fica fora de qualquer <Reveal>, porque o GSAP aplica um
  // "transform" ao elemento animado, o que faria o "position: fixed" do
  // toast passar a ser relativo a esse elemento em vez de à janela.
  const [toast, setToast] = useState(null);
  const [mapaPermitido, setMapaPermitido] = useState(() => getCookieConsent() === "accepted");
  // Armadilha de tempo anti-bot: guarda a hora em que a página carregou. Um
  // bot que preenche e submete o formulário instantaneamente (sem esperar
  // como uma pessoa real) é bloqueado - não substitui uma verificação real
  // no servidor, mas trava a maioria dos bots genéricos de spam sem pedir
  // nada extra a quem preenche o formulário a sério.
  const horaCarregamento = useRef(Date.now());

  useEffect(() => onCookieConsentChange((valor) => setMapaPermitido(valor === "accepted")), []);

  useEffect(() => {
    if (!toast) return;
    const temporizador = setTimeout(() => setToast(null), 7000);
    return () => clearTimeout(temporizador);
  }, [toast]);

  function handleSubmit(e) {
    e.preventDefault();
    const dados = Object.fromEntries(new FormData(e.target).entries());

    // Isco anti-bot: o campo "bot-field" está escondido de utilizadores reais
    // (só um bot que preenche todos os campos o vê). Se vier preenchido,
    // ignora o pedido silenciosamente - sem isto, o EmailJS enviava sempre os
    // dois emails mesmo para submissões de bots, já que só o Netlify Forms
    // (o fetch abaixo) verifica este campo.
    if (dados["bot-field"]) return;
    if (Date.now() - horaCarregamento.current < 3000) return;

    if (emailjsConfigurado) {
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ESCRITORIO, dados, { publicKey: EMAILJS_PUBLIC_KEY }).catch((erro) => console.error("EmailJS (escritório):", erro));
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CLIENTE, dados, { publicKey: EMAILJS_PUBLIC_KEY }).catch((erro) => console.error("EmailJS (cliente):", erro));
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contacto", ...dados }),
    })
      .then(() => {
        setToast({ tipo: "success", texto: `Obrigado, ${dados.nome}! Recebemos o seu pedido e entraremos em contacto brevemente.` });
        e.target.reset();
      })
      .catch(() => {
        setToast({ tipo: "error", texto: `Não foi possível enviar agora. Ligue-nos para ${business.phone} ou tente novamente.` });
      });
  }

  return (
    <>
      <SEO
        title="Contacto - Pata Azul Clínica Veterinária"
        description="Página de contacto fictícia da Pata Azul. Morada, telefone, horário de funcionamento e formulário de demonstração."
      />

      {toast && (
        <div className={`form-toast visible ${toast.tipo}`} role="status" aria-live="polite">
          <div className="form-toast-card">
            <span className="form-toast-icon">{toast.tipo === "success" ? "✓" : "!"}</span>
            <p className="form-toast-text">{toast.texto}</p>
          </div>
        </div>
      )}

      <PageHero
        title="Contacto"
        subtitle="Não hesite em contactar-nos para marcar uma consulta ou esclarecer qualquer dúvida sobre a saúde do seu animal."
      />

      <section className="pt-4 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <Reveal>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-navy text-white grid place-items-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p className="font-extrabold text-navy">Morada</p>
                    <p className="text-slate-600 text-sm mt-0.5">{business.addressLine1}<br />{business.addressLine2}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-navy text-white grid place-items-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <p className="font-extrabold text-navy">Telefone</p>
                    <a href={`tel:${business.phoneIntl}`} className="text-slate-600 text-sm mt-0.5 hover:text-azure-600 transition-colors">{business.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-navy text-white grid place-items-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
                  </div>
                  <div>
                    <p className="font-extrabold text-navy">Horário</p>
                    <ul className="text-slate-600 text-sm mt-1 space-y-1">
                      {hours.map((h) => (
                        <li key={h.day} className="flex gap-2"><span className="w-20 shrink-0 font-semibold text-navy/80">{h.day}</span> {h.value}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* O mapa só carrega (e só aí pode gravar cookies do Google) depois de aceitar
                  o consentimento de cookies - ver CookieConsent.jsx e lib/cookieConsent.js. */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-navy/10 shadow-lg shadow-navy/5 aspect-video relative">
                {mapaPermitido ? (
                  <iframe
                    title="Mapa de exemplo (projeto de demonstração)"
                    src={business.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="absolute inset-0 bg-teal-50 flex flex-col items-center justify-center text-center px-6 gap-3">
                    <p className="text-sm text-slate-600">O mapa só carrega depois de aceitar os cookies do Google Maps.</p>
                    <button type="button" onClick={() => setCookieConsent("accepted")} className="btn-secondary text-xs">Aceitar e ver mapa</button>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {/* "Pata Azul" é uma marca inventada, sem clínica real por trás - este aviso deixa
                  claro que é apenas uma peça de portefólio. */}
              <p className="mb-4 text-xs font-bold text-azure-600 text-center">
                Projeto de demonstração para portefólio: os dados submetidos aqui não são processados por nenhuma clínica real.
              </p>
              <form name="contacto" onSubmit={handleSubmit} className="bg-white border border-navy/10 rounded-[1.75rem] p-7 sm:p-9 shadow-xl shadow-navy/5">
                <p className="hidden">
                  <label>Não preencher: <input name="bot-field" /></label>
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-1">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" id="nome" name="nome" required className="form-input" placeholder="O seu nome" />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" required className="form-input" placeholder="9xx xxx xxx" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" required className="form-input" placeholder="oseu@email.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="assunto" className="form-label">Tipo de serviço</label>
                    <select id="assunto" name="assunto" className="form-input">
                      <option>Consulta Geral</option>
                      <option>Vacinação / Desparasitação</option>
                      <option>Cirurgia / Urgência</option>
                      <option>Banho &amp; Tosquia</option>
                      <option>Atendimento ao Domicílio</option>
                      <option>Outro assunto</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="mensagem" className="form-label">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" rows={4} className="form-input resize-none" placeholder="Conte-nos um pouco sobre o seu animal..." />
                  </div>
                  <div className="sm:col-span-2 flex items-start gap-3">
                    <input type="checkbox" id="consentimento" name="consentimento" required className="mt-1 h-4 w-4 shrink-0 rounded border-navy/30 text-azure-600 focus:ring-azure-500" />
                    <label htmlFor="consentimento" className="text-sm text-slate-600">Li e aceito a <Link to="/politica-privacidade" target="_blank" rel="noopener" className="text-azure-600 font-semibold hover:underline">Política de Privacidade</Link>.</label>
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full mt-7 justify-center">Enviar Pedido</button>
                <p className="text-xs text-slate-500 mt-4 text-center">Ao submeter, entraremos em contacto o mais brevemente possível.</p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
