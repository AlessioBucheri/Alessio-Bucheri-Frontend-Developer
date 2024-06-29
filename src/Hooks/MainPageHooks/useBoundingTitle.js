import { useRef, useState, useEffect } from "react";

export default function useBoundingTitle() {
  const titleRef = useRef(null);
  const [rect, setRect] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (titleRef.current) {
        setRect(titleRef.current.getBoundingClientRect());
      }
    };

    handleResize(); // Calcola inizialmente le dimensioni
    window.addEventListener("resize", handleResize); // Aggiorna al resize della finestra

    return () => {
      window.removeEventListener("resize", handleResize); // Pulisci l'event listener
    };
  }, []);

  const handleMouseMove = (event) => {
    if (!rect) return;

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    // Imposta le variabili CSS per le animazioni
    titleRef.current.style.setProperty("--mouse-x", `${x / 5}px`);
    titleRef.current.style.setProperty("--mouse-y", `${y / 5}px`);
  };

  return { titleRef, handleMouseMove };
}
