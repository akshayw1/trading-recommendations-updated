"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function Bitcoin() {
  const [data, setData] = useState([
    {
      Time: "15:25-15:30",
      CallOI: 31.89,
      IV1: 26.39,
      Delta1: 0.96,
      OIInter1: 0,
      Price1: 0,
      CallOIInterpretation: 0,
      Strike: 47700,
      PutOiInterpretation: 0,
      Price2: 0,
      OIInter2: 0,
      Delta2: 0.96,
      IV2: 26.39,
      PutOI: "20.55.825",
    },
    {
      Time: "15:35-15:40",
      CallOI: 32.5,
      IV1: 27.12,
      Delta1: 0.97,
      OIInter1: 1,
      Price1: 1,
      CallOIInterpretation: 1,
      Strike: 47800,
      PutOiInterpretation: 1,
      Price2: 1,
      OIInter2: 1,
      Delta2: 0.97,
      IV2: 27.12,
      PutOI: "21.55.825",
    },
    {
      Time: "15:45-15:50",
      CallOI: 30.75,
      IV1: 25.86,
      Delta1: 0.95,
      OIInter1: 2,
      Price1: 2,
      CallOIInterpretation: 2,
      Strike: 47600,
      PutOiInterpretation: 2,
      Price2: 2,
      OIInter2: 2,
      Delta2: 0.95,
      IV2: 25.86,
      PutOI: "19.55.825",
    },
    {
      Time: "15:55-16:00",
      CallOI: 28.41,
      IV1: 24.75,
      Delta1: 0.94,
      OIInter1: 0,
      Price1: 0,
      CallOIInterpretation: 1,
      Strike: 47500,
      PutOiInterpretation: 1,
      Price2: 0,
      OIInter2: 1,
      Delta2: 0.94,
      IV2: 24.75,
      PutOI: "18.55.825",
    },
    {
      Time: "16:05-16:10",
      CallOI: 33.12,
      IV1: 28.04,
      Delta1: 0.98,
      OIInter1: 2,
      Price1: 2,
      CallOIInterpretation: 2,
      Strike: 48000,
      PutOiInterpretation: 2,
      Price2: 2,
      OIInter2: 2,
      Delta2: 0.98,
      IV2: 28.04,
      PutOI: "22.55.825",
    },
  ]);

  const onChange = (value, property, index) => {
    closeAllDropdown();
    let newData = [...data];
    data[index][property] = value;
    setData(newData);
  };
  const closeAllDropdown = (id = "") => {
    for (let i = 1; i <= 6 * data.length; i++) {
      if (id !== `check${i}`) {
        const checkbox = document.getElementById(`check${i}`);
        if (checkbox) {
          checkbox.checked = false;
        }
      }
    }
  };
  return (
    <main className={styles.main}>
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Time</th>
            <th>Call OI</th>
            <th>IV</th>
            <th>Delta</th>
            <th>OI Inter.</th>
            <th>Price</th>
            <th>Call OI Interpretation</th>
            <th>Strike</th>
            <th>Put Oi Interpretation</th>
            <th>Price</th>
            <th>OI Inter.</th>
            <th>Delta</th>
            <th>IV</th>
            <th>Put OI</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.Time}</td>
              <td>{item.CallOI}</td>
              <td>{item.IV1}</td>
              <td>{item.Delta1}</td>
              <td className={styles.dropdown}>
                <label htmlFor={`check${1 + 6 * index}`}>
                  <input
                    className={styles.input1}
                    type="checkbox"
                    id={`check${1 + 6 * index}`}
                    onChange={() => closeAllDropdown(`check${1 + 6 * index}`)}
                  />
                  <label className={styles.label1}>
                    <label onClick={() => onChange(0, "OIInter1", index)}>
                      <div className={styles.blue}>
                        <Image
                          alt="arrow horizontal"
                          width={32}
                          height={32}
                          src="/images/table/arrow h.png"
                        />
                      </div>
                    </label>
                    <label onClick={() => onChange(2, "OIInter1", index)}>
                      <div className={styles.red}>
                        <Image
                          alt="arrow down"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label onClick={() => onChange(1, "OIInter1", index)}>
                      <div className={styles.green}>
                        <Image
                          alt="arrow up"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                  </label>
                  <div
                    className={`${
                      item.OIInter1 === 0
                        ? styles.blue
                        : item.OIInter1 === 1
                        ? styles.green
                        : styles.red
                    }`}
                  >
                    <Image
                      alt={
                        item.OIInter1 === 0
                          ? "arrow horizontal"
                          : item.OIInter1 === 1
                          ? "arrow up"
                          : "arrow down"
                      }
                      width={32}
                      height={32}
                      src={
                        "/images/table/" +
                        (item.OIInter1 === 0 ? "arrow h.png" : "arrow.png")
                      }
                    />
                  </div>
                </label>
              </td>
              <td className={styles.dropdown}>
                <label htmlFor={`check${2 + 6 * index}`}>
                  <input
                    className={styles.input1}
                    type="checkbox"
                    id={`check${2 + 6 * index}`}
                    onChange={() => closeAllDropdown(`check${2 + 6 * index}`)}
                  />
                  <label className={styles.label1}>
                    <label onClick={() => onChange(0, "Price1", index)}>
                      <div className={styles.blue}>
                        <Image
                          alt="arrow horizontal"
                          width={32}
                          height={32}
                          src="/images/table/arrow h.png"
                        />
                      </div>
                    </label>
                    <label onClick={() => onChange(2, "Price1", index)}>
                      <div className={styles.red}>
                        <Image
                          alt="arrow down"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label onClick={() => onChange(1, "Price1", index)}>
                      <div className={styles.green}>
                        <Image
                          alt="arrow up"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                  </label>
                  <div
                    className={`${
                      item.Price1 === 0
                        ? styles.blue
                        : item.Price1 === 1
                        ? styles.green
                        : styles.red
                    }`}
                  >
                    <Image
                      alt={
                        item.Price1 === 0
                          ? "arrow horizontal"
                          : item.Price1 === 1
                          ? "arrow up"
                          : "arrow down"
                      }
                      width={32}
                      height={32}
                      src={
                        "/images/table/" +
                        (item.Price1 === 0 ? "arrow h.png" : "arrow.png")
                      }
                    />
                  </div>
                </label>
              </td>
              <td className={styles.dropdown}>
                <label htmlFor={`check${3 + 6 * index}`}>
                  <input
                    className={styles.input1}
                    type="checkbox"
                    id={`check${3 + 6 * index}`}
                    onChange={() => closeAllDropdown(`check${3 + 6 * index}`)}
                  />
                  <label className={styles.label1}>
                    <label
                      onClick={() => onChange(0, "CallOIInterpretation", index)}
                    >
                      <div className={`${styles.blue} ${styles.wide}`}>
                        Shorts Covering
                        <Image
                          alt="arrow horizontal"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label
                      onClick={() => onChange(2, "CallOIInterpretation", index)}
                    >
                      <div className={`${styles.red} ${styles.wide}`}>
                        Short Build Up
                        <Image
                          alt="arrow down"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label
                      onClick={() => onChange(1, "CallOIInterpretation", index)}
                    >
                      <div className={`${styles.green} ${styles.wide}`}>
                        Long Build Up
                        <Image
                          alt="arrow up"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label
                      onClick={() => onChange(3, "CallOIInterpretation", index)}
                    >
                      <div className={`${styles.yellow} ${styles.wide}`}>
                        Long Build Up
                        <Image
                          alt="arrow up"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                  </label>
                  <div
                    className={`${
                      item.CallOIInterpretation === 0
                        ? styles.blue
                        : item.CallOIInterpretation === 1
                        ? styles.green
                        : item.CallOIInterpretation === 2
                        ? styles.red
                        : styles.yellow
                    } ${styles.wide}`}
                  >
                    {item.CallOIInterpretation === 0
                      ? "Shorts Covering"
                      : item.CallOIInterpretation === 1 ||
                        item.CallOIInterpretation === 3
                      ? "Long Build Up"
                      : "Short Build Up"}
                    <Image
                      alt={
                        item.CallOIInterpretation === 0
                          ? "arrow horizontal"
                          : item.CallOIInterpretation === 1
                          ? "arrow up"
                          : "arrow down"
                      }
                      width={32}
                      height={32}
                      src={
                        "/images/table/" +
                        (item.CallOIInterpretation === 0
                          ? "arrow.png"
                          : "arrow.png")
                      }
                    />
                  </div>
                </label>
              </td>
              <td>{item.Strike}</td>
              <td className={styles.dropdown}>
                <label htmlFor={`check${4 + 6 * index}`}>
                  <input
                    className={styles.input1}
                    type="checkbox"
                    id={`check${4 + 6 * index}`}
                    onChange={() => closeAllDropdown(`check${4 + 6 * index}`)}
                  />
                  <label className={styles.label1}>
                    <label
                      onClick={() => onChange(0, "PutOiInterpretation", index)}
                    >
                      <div className={`${styles.blue} ${styles.wide}`}>
                        Shorts Covering
                        <Image
                          alt="arrow horizontal"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label
                      onClick={() => onChange(2, "PutOiInterpretation", index)}
                    >
                      <div className={`${styles.red} ${styles.wide}`}>
                        Short Build Up
                        <Image
                          alt="arrow down"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label
                      onClick={() => onChange(1, "PutOiInterpretation", index)}
                    >
                      <div className={`${styles.green} ${styles.wide}`}>
                        Long Build Up
                        <Image
                          alt="arrow up"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label
                      onClick={() => onChange(3, "PutOiInterpretation", index)}
                    >
                      <div className={`${styles.yellow} ${styles.wide}`}>
                        Long Build Up
                        <Image
                          alt="arrow up"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                  </label>
                  <div
                    className={`${
                      item.PutOiInterpretation === 0
                        ? styles.blue
                        : item.PutOiInterpretation === 1
                        ? styles.green
                        : item.PutOiInterpretation === 2
                        ? styles.red
                        : styles.yellow
                    } ${styles.wide}`}
                  >
                    {item.PutOiInterpretation === 0
                      ? "Shorts Covering"
                      : item.PutOiInterpretation === 1 ||
                        item.PutOiInterpretation === 3
                      ? "Long Build Up"
                      : "Short Build Up"}
                    <Image
                      alt={
                        item.PutOiInterpretation === 0
                          ? "arrow horizontal"
                          : item.PutOiInterpretation === 1
                          ? "arrow up"
                          : "arrow down"
                      }
                      width={32}
                      height={32}
                      src={
                        "/images/table/" +
                        (item.PutOiInterpretation === 0
                          ? "arrow.png"
                          : "arrow.png")
                      }
                    />
                  </div>
                </label>
              </td>
              <td className={styles.dropdown}>
                <label htmlFor={`check${5 + 6 * index}`}>
                  <input
                    className={styles.input1}
                    type="checkbox"
                    id={`check${5 + 6 * index}`}
                    onChange={() => closeAllDropdown(`check${5 + 6 * index}`)}
                  />
                  <label className={styles.label1}>
                    <label onClick={() => onChange(0, "Price2", index)}>
                      <div className={styles.blue}>
                        <Image
                          alt="arrow horizontal"
                          width={32}
                          height={32}
                          src="/images/table/arrow h.png"
                        />
                      </div>
                    </label>
                    <label onClick={() => onChange(2, "Price2", index)}>
                      <div className={styles.red}>
                        <Image
                          alt="arrow down"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label onClick={() => onChange(1, "Price2", index)}>
                      <div className={styles.green}>
                        <Image
                          alt="arrow up"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                  </label>
                  <div
                    className={`${
                      item.Price2 === 0
                        ? styles.blue
                        : item.Price2 === 1
                        ? styles.green
                        : styles.red
                    }`}
                  >
                    <Image
                      alt={
                        item.Price2 === 0
                          ? "arrow horizontal"
                          : item.Price2 === 1
                          ? "arrow up"
                          : "arrow down"
                      }
                      width={32}
                      height={32}
                      src={
                        "/images/table/" +
                        (item.Price2 === 0 ? "arrow h.png" : "arrow.png")
                      }
                    />
                  </div>
                </label>
              </td>
              <td className={styles.dropdown}>
                <label htmlFor={`check${6 + 6 * index}`}>
                  <input
                    className={styles.input1}
                    type="checkbox"
                    id={`check${6 + 6 * index}`}
                    onChange={() => closeAllDropdown(`check${6 + 6 * index}`)}
                  />
                  <label className={styles.label1}>
                    <label onClick={() => onChange(0, "OIInter2", index)}>
                      <div className={styles.blue}>
                        <Image
                          alt="arrow horizontal"
                          width={32}
                          height={32}
                          src="/images/table/arrow h.png"
                        />
                      </div>
                    </label>
                    <label onClick={() => onChange(2, "OIInter2", index)}>
                      <div className={styles.red}>
                        <Image
                          alt="arrow down"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                    <label onClick={() => onChange(1, "OIInter2", index)}>
                      <div className={styles.green}>
                        <Image
                          alt="arrow up"
                          width={32}
                          height={32}
                          src="/images/table/arrow.png"
                        />
                      </div>
                    </label>
                  </label>
                  <div
                    className={`${
                      item.OIInter2 === 0
                        ? styles.blue
                        : item.OIInter2 === 1
                        ? styles.green
                        : styles.red
                    }`}
                  >
                    <Image
                      alt={
                        item.OIInter2 === 0
                          ? "arrow horizontal"
                          : item.OIInter2 === 1
                          ? "arrow up"
                          : "arrow down"
                      }
                      width={32}
                      height={32}
                      src={
                        "/images/table/" +
                        (item.OIInter2 === 0 ? "arrow h.png" : "arrow.png")
                      }
                    />
                  </div>
                </label>
              </td>
              <td>{item.Delta2}</td>
              <td>{item.IV2}</td>
              <td>{item.PutOI}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
