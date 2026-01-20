import { useEffect, useState } from "react";

export default function Carousel({
  phrases,
  interval = 3000,
  duration = 500,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("exit"); 
  // enter → entrando desde la izquierda
  // exit → saliendo hacia la derecha

  useEffect(() => {
    const id = setInterval(() => {
      // Fase de salida
      setPhase("exit");

      const timeout = setTimeout(() => {
        // Cambia el texto
        setIndex((prev) => (prev + 1) % phrases.length);
        // Fase de entrada
        setPhase("enter");
      }, duration);

      return () => clearTimeout(timeout);
    }, interval);

    return () => clearInterval(id);
  }, [phrases, interval, duration]);

  const animationClasses =
    phase === "enter"
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-10"; // sale hacia la derecha

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <p
        className={`
          transform transition-all ease-in-out
          ${animationClasses}
          ${className}
          font-carousel
        `}
        style={{ transitionDuration: `${duration}ms` }}
      >
        -- <span className="font-carousel2"> {phrases[index]} </span> --
      </p>
    </div>
  );
}
