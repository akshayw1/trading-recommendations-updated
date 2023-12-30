"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const wordlist = ["Open Interest", "Price", "Option Chain", "Futures"];
  const [selectWord, setSelectWord] = useState(0);
  const myElementRef = useRef(null);
  const [width, setWidth] = useState(278);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectWord((prevSelectWord) => {
        if (prevSelectWord >= wordlist.length - 1) {
          return 0;
        } else {
          return prevSelectWord + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [wordlist.length]);

  useEffect(() => {
    // Obtén el ancho del elemento
    const elementWidth = myElementRef.current.clientWidth;
    console.log(elementWidth);
    setWidth(elementWidth);
  }, [selectWord]); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <main className={styles.main}>
      <div className={styles.heroBox}>
        <Image
          className={styles.web30}
          alt="web 3.0"
          width={679}
          height={220}
          src="/images/home/Web3.0.png"
        />
        <Image
          className={styles.colors3}
          alt="3 lines of color green"
          width={92}
          height={210}
          src="/images/home/3 colors.png"
        />
      </div>
      <h2 className={styles.h2}>
        Decode the market with
        <div>
          <span ref={myElementRef} className={styles.trueWord}>
            {" " + wordlist[selectWord] + " "}
          </span>
          <div className={styles.spinBox} style={{ width: 278 }}>
            <div>
              <div className={styles.slotBox} style={{ top: -48 * selectWord }}>
                {wordlist.map((word, i) => (
                  <span key={i} className={styles.gradient}>
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <span className={styles.space} style={{ width }}>
            P
          </span>
        </div>
        Analysis
      </h2>
    </main>
  );
}
