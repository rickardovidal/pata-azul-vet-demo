import { business } from "../lib/content";

export default function WhatsappFab() {
  return (
    <a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener"
      className="whatsapp-fab"
      aria-label="Contactar via WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.6 14.3c-.2.6-1.3 1.2-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .7.5.3.6.9 2 1 2.1.1.2.1.4 0 .6-.3.6-.6.9-.9 1.3-.1.2-.3.3-.1.6.7 1.3 1.5 2 2.6 2.7.6.4.9.5 1.1.4.2-.1.6-.6.9-1 .2-.3.5-.3.8-.2.3.1 2 1 2.3 1.1.3.2.5.2.6.4.1.2.1.9-.1 1.5z" /></svg>
    </a>
  );
}
