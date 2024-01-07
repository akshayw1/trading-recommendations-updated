"use client";
import { useState, useEffect } from "react";
import styles from "../bitcoin/styles.module.css";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
import { Line } from "react-chartjs-2";

export default function Ethereum() {
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
  ]);
  const [tableData, setTableData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: ["white"],
        borderColor: "#a33131",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    // Aquí puedes colocar la lógica para generar nuevos datos
    const newData = [...data];
    let currentTime = new Date(2024, 0, 6, 15, 25); // Fecha y hora inicial
    const fiveMinutesInMillis = 5 * 60 * 1000; // 5 minutos en milisegundos

    for (let i = 0; i < 30; i++) {
      newData.push({
        Time: `${currentTime.getHours()}:${currentTime.getMinutes()}-${
          (currentTime.getMinutes() + 5) % 60
        }`,
        CallOI: 31.89,
        IV1: 26.39,
        Delta1: 0.96,
        OIInter1: 0,
        Price1: 0,
        CallOIInterpretation: 0,
        Strike: Math.floor(Math.random() * 100000) + 1,
        PutOiInterpretation: 0,
        Price2: 0,
        OIInter2: 0,
        Delta2: 0.96,
        IV2: 26.39,
        PutOI: "20.55.825",
      });

      currentTime.setTime(currentTime.getTime() + fiveMinutesInMillis);
    }

    setData(newData);

    // Actualizar el estado tableData con los nuevos datos
    setTableData({
      labels: newData.map((item) => item.Time),
      datasets: [
        {
          label: "Users Gained",
          data: newData.map((item) => item.Strike),
          backgroundColor: ["white"],
          borderColor: "#a33131",
          borderWidth: 2,
        },
      ],
    });
  }, []);
  const options = {
    type: "line",
  };

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
            <th>OI Interpretation</th>
            <th>Trend</th>
            <th>High Probabilty Long/Short Entry</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.Time}</td>

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
              <td>{item.Strike}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-[1050px] pl-[50px] bg-[#161a1e]">
        <Line datasetIdKey="id" data={tableData} />
      </div>
    </main>
  );
}
