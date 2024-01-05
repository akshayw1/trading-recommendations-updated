"use client";
import { useRef, useEffect } from "react";

export default function MainContainerShadow({ children }) {
  const shadowMainRef = useRef(null);
  useEffect(() => {
    const updateBlurCircleBoxHeight = () => {
      const shadowMainHeight = shadowMainRef.current.offsetHeight;
      const blurCircleBox = document.querySelector(".blurCircleBox");
      blurCircleBox.style.height = `${shadowMainHeight}px`;
    };

    // Llama a la función para establecer la altura inicial
    updateBlurCircleBoxHeight();

    // Agrega un event listener para el cambio de tamaño de la ventana
    const handleResize = () => {
      updateBlurCircleBoxHeight();
    };

    // Agrega un event listener para el cambio de altura de shadow-main
    const shadowMainElement = shadowMainRef.current;
    const observer = new ResizeObserver(handleResize);
    observer.observe(shadowMainElement);

    // Limpia los event listeners al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={shadowMainRef} className="shadow-main">
        {children}
      </div>
      <div className="blurCircleBox">
        <div className="blurCircle"></div>
        <div className="blurCircle"></div>
        <div className="blurCircle"></div>
      </div>
    </>
  );
}
