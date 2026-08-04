// Consentimento de cookies (RGPD), partilhado entre o modal, o rodapé (botão
// "Gerir cookies") e a página de Contacto (que só carrega o Google Maps
// depois de aceitar). Usa localStorage + eventos simples do browser, para
// não precisar de Context/Provider só para isto.
const STORAGE_KEY = "pataazul_cookie_consent";
const CHANGE_EVENT = "pataazul:cookie-consent-changed";
const OPEN_MODAL_EVENT = "pataazul:open-cookie-modal";

export function getCookieConsent() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

export function setCookieConsent(value) {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }));
}

export function onCookieConsentChange(callback) {
  const handler = (e) => callback(e.detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

export function requestOpenCookieModal() {
  window.dispatchEvent(new Event(OPEN_MODAL_EVENT));
}

export function onOpenCookieModalRequest(callback) {
  window.addEventListener(OPEN_MODAL_EVENT, callback);
  return () => window.removeEventListener(OPEN_MODAL_EVENT, callback);
}
