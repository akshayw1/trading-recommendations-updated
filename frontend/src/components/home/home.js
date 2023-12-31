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
    }, 1500);
    return () => {
      clearInterval(intervalId);
    };
  }, [wordlist.length]);

  useEffect(() => {
    // Obtén el ancho del elemento
    const elementWidth = myElementRef.current.clientWidth;
    setWidth(elementWidth);
  }, [selectWord]); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <main>
      <section className={styles.heroBox}>
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
      </section>
      <section>
        <h2 className={styles.h2}>
          Decode the market with
          <div>
            <span ref={myElementRef} className={styles.trueWord}>
              {" " + wordlist[selectWord] + " "}
            </span>
            <div className={styles.spinBox} style={{ width: 278 }}>
              <div>
                <div
                  className={styles.slotBox}
                  style={{ top: -48 * selectWord }}
                >
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
        <div className={styles.mainPBox}>
          <p>
            Our Proprietary Intelligent algorithm demystify Open Interest data
            in Futures and Options market.
          </p>
          <p>
            &quot;Simplified OI data in real time to understand the trend of
            price movement.&quot;
          </p>
        </div>
      </section>
      <section className={styles.zigZagBox}>
        <h1 className={styles.zigZagText}> Zig Zag Moves - STAY AWAY</h1>
        <Image
          src="/images/home/table.png"
          alt="data table"
          width={1416}
          height={348}
        />
        <Image
          className={styles.bubbles}
          src="/images/home/bubbles.png"
          alt="bubbles"
          width={254}
          height={279}
        />
        <Image
          className={styles.bubbles}
          src="/images/home/bubbles.png"
          alt="bubbles"
          width={254}
          height={279}
        />
      </section>
      <section className={styles.lastSection}>
        <div>
          <h3>Objective</h3>
          <p>
            • Our objective is to find what smart money does. We follow smart
            money.
          </p>
          <p>
            • Smart money initiates the price movement and set the trend in
            market.
          </p>
          <p>
            • This AI powered tool will decode complex data for crypto traders.
          </p>
          <p>• To provide edge to trader with key Information at real time.</p>
        </div>
        <div>
          <h3>Risk</h3>
          <p>
            • Trading crypto is highly risky. Whales do manipulate the market
            with sudden algo pump and dump.
          </p>
          <p>
            • Its normal in Crypto to see huge price swings of +30% and or -30%.
          </p>
          <p>• 90% traders lose money in Options trading. </p>
          <p>
            • We don&apos;t provide signals, buy or sell recommendation. You
            trade on your own risk.
          </p>
        </div>
        <div>
          <h3>Community</h3>
          <p>• Empowering the trading community with simplified tool.</p>
          <p>
            • We share our experience here with live commentary on real time
            market feed.
          </p>
          <p>
            • Once our cost is recovered, we pledge to make this tool free to
            all by 2026.
          </p>
          <p>
            • We welcome any suggestion, partnership, sponsorship & Donation.
          </p>
        </div>
      </section>
      <section className={styles.infiniteScroll}>
        <p>
          Sit Quiet * No Random Trades * Control your Mind & Avoid Making
          Mistake * Wait for one high Probability Trade Setup *
        </p>
        <p>
          Sit Quiet * No Random Trades * Control your Mind & Avoid Making
          Mistake * Wait for one high Probability Trade Setup *
        </p>
      </section>
    </main>
  );
}
