import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Sem isto, ao mudar de página o React Router mantém a posição de scroll
// da página anterior - o visitante "aterraria" a meio da página nova.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
