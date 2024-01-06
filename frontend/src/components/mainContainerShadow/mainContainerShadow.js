"use client";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MainContainerShadow({ children }) {
  const pathname = usePathname();
  const pagesWithTable = ["/bitcoin", "/admin/allusers"];
  const hideAside = pagesWithTable.includes(pathname) ? true : false;
  const shadowMainRef = useRef(null);
  useEffect(() => {
    const updateBlurCircleBoxHeight = () => {
      const shadowMainHeight = shadowMainRef.current.offsetHeight;
      const blurCircleBox = document.querySelector(".blurCircleBox");
      blurCircleBox.style.height = `${shadowMainHeight}px`;
    };

    updateBlurCircleBoxHeight();

    const handleResize = () => {
      updateBlurCircleBoxHeight();
    };

    const shadowMainElement = shadowMainRef.current;
    const observer = new ResizeObserver(handleResize);
    observer.observe(shadowMainElement);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={shadowMainRef}
        className={`${hideAside ? "onTable" : ""} shadowMain`}
      >
        {children}
      </div>
      <div className={`${hideAside ? "onTable" : ""} blurCircleBox`}>
        <div className="blurCircle"></div>
        <div className="blurCircle"></div>
        <div className="blurCircle"></div>
      </div>
    </>
  );
}
