import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className={`faq-item${open ? " open" : ""}`}>
            <button
              className="faq-question"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {item.q}
              <span className="faq-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              </span>
            </button>
            <div className="faq-answer" style={{ maxHeight: open ? "16rem" : "0" }}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
