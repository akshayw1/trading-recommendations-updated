"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function Bitcoin() {
  const [oi, setOi] = useState(0);
  const onChange = (value) => {
    console.log(value);
    setOi(value);
    const Checkbox = document.getElementById("check1");

    // Desmarcar la casilla de verificación
    Checkbox.checked = false;
  };
  return (
    <main className={styles.main}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Time</th> <th>Call OI</th>
            <th>IV</th> <th>Delta</th>
            <th>OI Inter.</th>
            <th>Price</th> <th>Call OI Interpretation</th>
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
          <tr>
            <td>1</td>
            <td>15:25-15:30</td>
            <td>31.89</td>
            <td>26.39</td>
            <td>0.96</td>
            <td>
              <label htmlFor="check1">
                <input className={styles.input1} type="checkbox" id="check1" />
                <label className={styles.label1}>
                  <input
                    type="radio"
                    id="option1"
                    name="radio1"
                    defaultChecked
                  />
                  <label onClick={() => onChange(0)} htmlFor="option1">
                    <div className={styles.blue}>
                      <Image
                        alt="arrow horizontal"
                        width={32}
                        height={32}
                        src="/images/table/arrow h.png"
                      />
                    </div>
                  </label>
                  <input type="radio" id="option2" name="radio1" />
                  <label onClick={() => onChange(2)} htmlFor="option2">
                    <div className={styles.red}>
                      <Image
                        alt="arrow down"
                        width={32}
                        height={32}
                        src="/images/table/arrow.png"
                      />
                    </div>
                  </label>
                  <input type="radio" id="option3" name="radio1" />
                  <label onClick={() => onChange(1)} htmlFor="option3">
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
                    oi === 0
                      ? styles.blue
                      : oi === 1
                      ? styles.green
                      : styles.red
                  }`}
                >
                  <Image
                    alt={
                      oi === 0
                        ? "arrow horizontal"
                        : oi === 1
                        ? "arrow up"
                        : "arrow down"
                    }
                    width={32}
                    height={32}
                    src={
                      "/images/table/" +
                      (oi === 0 ? "arrow h.png" : "arrow.png")
                    }
                  />
                </div>
              </label>
            </td>
            <td>
              <label htmlFor="check2">
                <input className={styles.input1} type="checkbox" id="check2" />
                <label className={styles.label1}>
                  <input
                    type="radio"
                    id="option1"
                    name="radio1"
                    defaultChecked
                  />
                  <label onClick={() => onChange(0)} htmlFor="option1">
                    <div className={styles.blue}>
                      <Image
                        alt="arrow horizontal"
                        width={32}
                        height={32}
                        src="/images/table/arrow h.png"
                      />
                    </div>
                  </label>
                  <input type="radio" id="option2" name="radio1" />
                  <label onClick={() => onChange(2)} htmlFor="option2">
                    <div className={styles.red}>
                      <Image
                        alt="arrow down"
                        width={32}
                        height={32}
                        src="/images/table/arrow.png"
                      />
                    </div>
                  </label>
                  <input type="radio" id="option3" name="radio1" />
                  <label onClick={() => onChange(1)} htmlFor="option3">
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
                    oi === 0
                      ? styles.blue
                      : oi === 1
                      ? styles.green
                      : styles.red
                  }`}
                >
                  <Image
                    alt={
                      oi === 0
                        ? "arrow horizontal"
                        : oi === 1
                        ? "arrow up"
                        : "arrow down"
                    }
                    width={32}
                    height={32}
                    src={
                      "/images/table/" +
                      (oi === 0 ? "arrow h.png" : "arrow.png")
                    }
                  />
                </div>
              </label>
            </td>
            <td>
              <label htmlFor="check3">
                <input className={styles.input1} type="checkbox" id="check3" />
                <label className={styles.label1}>
                  <input
                    type="radio"
                    id="option1"
                    name="radio1"
                    defaultChecked
                  />
                  <label onClick={() => onChange(0)} htmlFor="option1">
                    <div className={styles.blue}>
                      <Image
                        alt="arrow horizontal"
                        width={32}
                        height={32}
                        src="/images/table/arrow h.png"
                      />
                    </div>
                  </label>
                  <input type="radio" id="option2" name="radio1" />
                  <label onClick={() => onChange(2)} htmlFor="option2">
                    <div className={styles.red}>
                      <Image
                        alt="arrow down"
                        width={32}
                        height={32}
                        src="/images/table/arrow.png"
                      />
                    </div>
                  </label>
                  <input type="radio" id="option3" name="radio1" />
                  <label onClick={() => onChange(1)} htmlFor="option3">
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
                    oi === 0
                      ? styles.blue
                      : oi === 1
                      ? styles.green
                      : styles.red
                  }`}
                >
                  Shorts Covering
                  <Image
                    alt={
                      oi === 0
                        ? "arrow horizontal"
                        : oi === 1
                        ? "arrow up"
                        : "arrow down"
                    }
                    width={32}
                    height={32}
                    src={
                      "/images/table/" +
                      (oi === 0 ? "arrow h.png" : "arrow.png")
                    }
                  />
                </div>
              </label>
            </td>
            <td>47700</td>
            <td>
              <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </td>{" "}
            <td>
              <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </td>{" "}
            <td>
              <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </td>
            <td>0.95</td>
            <td>18.62</td>
            <td>20.55.825</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
