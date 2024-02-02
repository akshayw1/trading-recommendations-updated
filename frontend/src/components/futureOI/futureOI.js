"use client";
import { useState, useEffect, useRef } from "react";
import styles from "../bitcoin/styles.module.css";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isEqual from "lodash/isEqual";
import { FaCircle } from 'react-icons/fa';

import { MemoChart } from "@/components/charts/chart";

import { useOnboardingContext } from "@/context/MyContext";
import { Line } from "react-chartjs-2";
import LoadingToast from "../usersTable/loading";
export default function FutureOI({ nameoi }) {
  const dataExample = {
    Time: "15:25-15:30",
    CallOI: 31.89,
    IV1: 26.39,
    Delta1: 0.96,
    OIInter1: 0,
    Price1: 0,
    CallOIInterpretation: 0,
    Strike: null,
    PutOiInterpretation: 0,
    Price2: 0,
    OIInter2: 0,
    Delta2: 0.96,
    IV2: 26.39,
    PutOI: "20.55.825",
  };
  const dataFreeText = {
    Time: "15:25-15:30",
    FreeText: "text",
  };
  const chartDataExample = {
    Time: "15:25-15:30",
    Value1: 5000000,
    Value2: 5000000,
  };
  const { session, status } = useOnboardingContext();

  const [data, setData] = useState([]);
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
  const [freeTextTable, setFreeTextTable] = useState([]);
  const [chartData, setChartData] = useState([]);

  const updateData = async (dataSelect = nameoi) => {
    let newData;
    if (dataSelect === nameoi) {
      newData = [...data];
    } else if (dataSelect === "chartData" + nameoi) {
      newData = [...chartData];
    } else {
      newData = [...freeTextTable];
    }
    let toastId;
    try {
      toastId = toast(<LoadingToast text="Updating table..." />, {
        autoClose: false,
      });
      const res = await fetch("/api/ethereum", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newData, dataSelect }),
      });

      if (res.ok) {
        toast.update(toastId, {
          render: "Table update successfully",
          type: "success",
          autoClose: 5000,
        });
        const data = await res.json();
        return data.data;
      } else if (res.status === 404) {
        toast.update(toastId, {
          render: res.error,
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });
        console.warn("API endpoint not found");
        return [];
      } else {
        toast.update(toastId, {
          render: res.error,
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });
        console.error("Error in the request:", res.status);
        return [];
      }
    } catch (error) {
      toast.update(toastId, {
        render: res.error,
        type: toast.TYPE.ERROR,
        autoClose: 5000,
      });
      console.error("Error in the request:", error);
      return [];
    }
  };
  const addItem = (dataSelect = "data") => {
    closeAllDropdown();
    let newDataExample;
    let newData;
    if (dataSelect === "data") {
      newData = [...data];
      newDataExample = { ...dataExample };
    } else if (dataSelect === "chartData" + nameoi) {
      newData = [...chartData];
      newDataExample = { ...chartDataExample };
    } else {
      newData = [...freeTextTable];
      newDataExample = { ...dataFreeText };
    }
    if (newData.length > 0) {
      const lastEntryTime = newData[0].Time;
      const newTime = calculateNewTime(lastEntryTime);
      newDataExample.Time = newTime;
    } else {
      const currentTime = getCurrentTime();
      newDataExample.Time = currentTime;
    }
    newData.unshift(newDataExample);
    if (dataSelect === "data") {
      setData((prevData) => [newDataExample, ...prevData]);
    } else if (dataSelect === "chartData" + nameoi) {
      setChartData((prevData) => [newDataExample, ...prevData]);
    } else {
      setFreeTextTable((prevData) => [newDataExample, ...prevData]);
    }
  };
  const calculateNewTime = (lastEntryTime) => {
    const [start, end] = lastEntryTime.split("-");
    const endTime = new Date(`01/01/2022 ${end}`);
    endTime.setMinutes(endTime.getMinutes() + 5);

    // Obtén el tiempo de inicio en formato hh:mm
    const formattedEndTime = endTime.toTimeString().slice(0, 5);
    return `${end}-${formattedEndTime}`;
  };
  const getCurrentTime = () => {
    const currentTime = new Date();
    const currentMinutes = currentTime.getMinutes();

    const roundedMinutes = Math.floor(currentMinutes / 5) * 5;

    currentTime.setMinutes(roundedMinutes);

    const formattedStartTime = currentTime.toTimeString().slice(0, 5);

    currentTime.setMinutes(roundedMinutes + 5);
    const formattedEndTime = currentTime.toTimeString().slice(0, 5);

    return `${formattedStartTime}-${formattedEndTime}`;
  };
  const deleteItem = (index, dataSelect = nameoi) => {
    closeAllDropdown();
    let newData;
    if (dataSelect === nameoi) {
      newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    } else if (dataSelect === "chartData" + nameoi) {
      newData = [...chartData];
      newData.splice(index, 1);
      setChartData(newData);
    } else {
      newData = [...freeTextTable];
      newData.splice(index, 1);
      setFreeTextTable(newData);
    }
  };
  const getData = async (dataSelect = nameoi) => {
    try {
      const queryParams = new URLSearchParams({ dataSelect });

      const res = await fetch(`/api/ethereum?${queryParams}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      if (res.ok) {
        const data = await res.json();
        return data.data;
      } else if (res.status === 404) {
        console.warn("API endpoint not found");
        return [];
      } else {
        console.error("Error in the request:", res.status);
        return [];
      }
    } catch (error) {
      console.error("Error in the request:", error);
      return [];
    }
  };

  const onChange = (value, property, index, dataSelect = nameoi) => {
    closeAllDropdown();
    let newData;
    if (dataSelect === nameoi) {
      newData = [...data];
      newData[index][property] = value;
      setData(newData);
    } else if (dataSelect === "chartData" + nameoi) {
      newData = [...chartData];
      newData[index][property] = value;
      setChartData(newData);
    } else {
      newData = [...freeTextTable];
      newData[index][property] = value;
      setFreeTextTable(newData);
    }
  };
  const playSound = () => {
    const audio = new Audio("/sounds/Telephone_Ring_-_Sound_Effects_1.mp3");
    audio.play();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFetch = await getData();
        const dataFetch2 = await getData("freeText" + nameoi);
        const dataFetch3 = await getData("chartData" + nameoi);

        let beep = false;
        setData((prevState) => {
          if (JSON.stringify(prevState) !== JSON.stringify(dataFetch))
            beep = true;
          return dataFetch;
        });
        setFreeTextTable((prevState) => {
          /*  console.log({ prevState, dataFetch2 });*/
          if (JSON.stringify(prevState) !== JSON.stringify(dataFetch2))
            beep = true;
          return dataFetch2;
        });
        setChartData((prevState) => {
          if (!isEqual(prevState, dataFetch3)) {
            beep = true;
            return dataFetch3;
          }
          return prevState;
        });

        return beep;
      } catch (error) {
        console.error(error);
        return false;
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFetch = await getData();
        const dataFetch2 = await getData("freeText" + nameoi);
        const dataFetch3 = await getData("chartData" + nameoi);

        setData(dataFetch);
        setFreeTextTable(dataFetch2);

        setChartData((prevState) => {
          if (!isEqual(prevState, dataFetch3)) {
            return dataFetch3;
          }
          return prevState;
        });
        if (JSON.stringify(freeTextTable) !== JSON.stringify(dataFetch2))
          return true;
        return false;
      } catch (error) {
        console.error(error);
        return false;
      }
    };
    const intervalId = setInterval(async () => {
      if (session && session.user && !session.user.admin) {
        const beep = await fetchData();
        if (beep) playSound();
      }
    }, 2000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, data, freeTextTable, chartData]);

  useEffect(() => {
    const reversedData = [...chartData].reverse();

    setTableData({
      labels: reversedData.map((item) => item.Time),
      datasets: [
        {
          label: "Selling Pressure",
          data: reversedData.map((item, i) => item.Value1),
          backgroundColor: ["white"],
          borderColor: "#a33131",
          borderWidth: 6,
          pointBackgroundColor: "white",
          pointRadius: 6,
        },
        {
          label: "Buying Pressure",
          data: reversedData.map((item, i) => item.Value2),
          backgroundColor: ["white"],
          borderColor: "green",
          borderWidth: 6,
          pointRadius: 6,
        },
      ],
    });
  }, [chartData]);

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
    <main className={`${styles.main}`}>
      
      <h1 className={styles.zigZagText}>
      <div className={styles.liveIndicatorBlock}>
  <span className={styles.liveIndicator}>
  <FaCircle className={`${styles.blink} ${styles.customIconStyle}`} aria-hidden="true" />

Live
          </span>
</div>  {freeTextTable.length === 0
          ? "Zig Zag Moves - STAY AWAY"
          : freeTextTable[0].FreeText}
      </h1>
      <div className="w-full flex lg:flex-row flex-col justify-between overflow-hidden">
        <div
          className={`scrollbar1 overflow-auto lg:w-[40vw] w-full  h-[33.5rem] ${styles.table}`}
        >
          <table>
            <thead>
              <tr>
                <th>N</th>
                <th>Time</th>
                <th>OI Interpretation</th>
                <th>Trend</th>

                <th>Entry Idea</th>
              </tr>
            </thead>
            <tbody>
              {session && session.user.admin ? (
                <tr>
                  <td colSpan="5">
                    <div className="flex flex-start">
                      <button
                        onClick={() => addItem()}
                        className="w-48 text-center bg-green-800 h-12 hover:bg-green-700"
                      >
                        +
                      </button>
                      <button
                        onClick={() => updateData()}
                        className="w-48 text-center bg-blue-700 h-12 hover:bg-blue-600"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ) : null}

              {data.map((item, index) => (
                <tr key={item.Time}>
                  <td className="flex flex-row gap-2 justify-center">
                    {session && session.user.admin ? (
                      <div
                        onClick={() => deleteItem(index)}
                        className="cursor-pointer w-6 flex justify-center items-center rounded h-6 bg-red-600"
                      >
                        X
                      </div>
                    ) : null}
                    {index + 1}
                  </td>
                  <td>
                    {session && !session.user.admin ? (
                      item.Time
                    ) : (
                      <input
                        onChange={(e) =>
                          onChange(e.target.value, "Time", index)
                        }
                        defaultValue={item.Time}
                        className={styles.inputTable}
                        type="text"
                      />
                    )}
                  </td>
                  <td className={styles.dropdown}>
                    <label htmlFor={`check${4 + 6 * index}`}>
                      <input
                        disabled={session && !session.user.admin ? true : false}
                        className={styles.input1}
                        type="checkbox"
                        id={`check${4 + 6 * index}`}
                        onChange={() =>
                          closeAllDropdown(`check${4 + 6 * index}`)
                        }
                      />
                      <label className={styles.label1}>
                        <label
                          onClick={() =>
                            onChange(0, "PutOiInterpretation", index)
                          }
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
                          onClick={() =>
                            onChange(2, "PutOiInterpretation", index)
                          }
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
                          onClick={() =>
                            onChange(1, "PutOiInterpretation", index)
                          }
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
                          onClick={() =>
                            onChange(3, "PutOiInterpretation", index)
                          }
                        >
                          <div className={`${styles.yellow} ${styles.wide}`}>
                            Long Unwinding
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
                          : item.PutOiInterpretation === 1
                          ? "Long Build Up"
                          : item.PutOiInterpretation === 3
                          ? "Long Unwinding"
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
                    <label htmlFor={`check${3 + 6 * index}`}>
                      <input
                        disabled={session && !session.user.admin ? true : false}
                        className={styles.input1}
                        type="checkbox"
                        id={`check${3 + 6 * index}`}
                        onChange={() =>
                          closeAllDropdown(`check${3 + 6 * index}`)
                        }
                      />
                      <label className={styles.label1}>
                        <label
                          onClick={() =>
                            onChange(0, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.blue} ${styles.wide}`}>
                            Neutral
                            <Image
                              className={styles.rotate90}
                              alt="arrow horizontal"
                              width={32}
                              height={32}
                              src="/images/table/arrow h.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(2, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.red} ${styles.wide}`}>
                            Bearish
                            <Image
                              alt="arrow down"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(1, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.green} ${styles.wide}`}>
                            Bullish
                            <Image
                              alt="arrow up"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(3, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.red} ${styles.wide}`}>
                            Ext Bearish
                            <Image
                              alt="arrow down"
                              width={32}
                              height={32}
                              src="/images/table/arrow.png"
                            />
                          </div>
                        </label>
                        <label
                          onClick={() =>
                            onChange(4, "CallOIInterpretation", index)
                          }
                        >
                          <div className={`${styles.green} ${styles.wide}`}>
                            Ext Bullish
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
                            : item.CallOIInterpretation === 1 ||
                              item.CallOIInterpretation === 4
                            ? styles.green
                            : styles.red
                        } ${styles.wide}`}
                      >
                        {item.CallOIInterpretation === 0
                          ? "Neutral"
                          : item.CallOIInterpretation === 1
                          ? "Bullish"
                          : item.CallOIInterpretation === 4
                          ? "Ext Bullish"
                          : item.CallOIInterpretation === 2
                          ? "Bearish"
                          : "Ext Bearish"}
                        <Image
                          className={
                            item.CallOIInterpretation === 0
                              ? styles.rotate90
                              : null
                          }
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
                              ? "arrow h.png"
                              : "arrow.png")
                          }
                        />
                      </div>
                    </label>
                  </td>
                  <td>
                    {session && !session.user.admin ? (
                      item.Strike
                    ) : (
                      <input
                        onChange={(e) =>
                          onChange(e.target.value, "Strike", index)
                        }
                        defaultValue={item.Strike}
                        className={styles.inputTable}
                        type="text"
                      />
                    )}
                  </td>
                </tr>
              ))}
              {session && session.user.admin ? (
                <tr>
                  <td colSpan="5">
                    <div className="flex flex-start pb-36">
                      <button
                        onClick={() => setData([])}
                        className="w-48 text-center bg-red-700 h-12 hover:bg-red-600"
                      >
                        Delete All
                      </button>
                    </div>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        <div
          className="select-none lg:w-[60vw] w-full  flex flex-col  order-first lg:order-none 
        h-[33.5rem] bg-[#000000]"
        >
          <div className="flex flex-row w-full justify-center items-center m-2">
            <div className="h-[70%] w-12 bg-[#a33131] mr-2"></div>
            <span className="mr-8">Selling Pressure</span>
            <div className="h-[70%] w-12 bg-green-700 mr-2"></div>Buying
            Pressure
          </div>
          <div className="text-[10px] flex justify-center m-0 p-0">
            Time UTC+5:30 (IST)
          </div>
          <MemoChart tableData={tableData} /> 
        </div>
      </div>

      <div className="flex flex-row mt-6 w-full">
        <div
          className={`scrollbar1 overflow-auto w-full h-[20rem] bg-[#181a1b] ${styles.table}`}
        >
          <table>
            <thead>
              <tr>
                <th className="w-[25px]">N</th>
                <th className="w-[25px]">Time</th>
                <th>Live commentary</th>
              </tr>
            </thead>
            <tbody>
              {session && session.user.admin ? (
                <tr>
                  <td colSpan="5">
                    <div className="flex flex-start">
                      <button
                        onClick={() => addItem("freeText" + nameoi)}
                        className="w-48 text-center bg-green-800 h-12 hover:bg-green-700"
                      >
                        +
                      </button>
                      <button
                        onClick={() => updateData("freeText" + nameoi)}
                        className="w-48 text-center bg-blue-700 h-12 hover:bg-blue-600"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ) : null}

              {freeTextTable.map((item, index) => (
                <tr key={item.Time}>
                  <td className="flex flex-row gap-2 justify-center">
                    {session && session.user.admin ? (
                      <div
                        onClick={() => deleteItem(index, "freeTable" + nameoi)}
                        className="cursor-pointer w-6 flex justify-center items-center rounded h-6 bg-red-600"
                      >
                        X
                      </div>
                    ) : null}
                    {index + 1}
                  </td>
                  <td>
                    {session && !session.user.admin ? (
                      item.Time
                    ) : (
                      <input
                        onChange={(e) =>
                          onChange(
                            e.target.value,
                            "Time",
                            index,
                            "freeText" + nameoi
                          )
                        }
                        defaultValue={item.Time}
                        className={styles.inputTable}
                        type="text"
                      />
                    )}
                  </td>
                  <td className="flex">
                    {session && !session.user.admin ? (
                      item.FreeText
                    ) : (
                      <input
                        onChange={(e) =>
                          onChange(
                            e.target.value,
                            "FreeText",
                            index,
                            "freeText" + nameoi
                          )
                        }
                        defaultValue={item.FreeText}
                        className={`${styles.inputTable} grow`}
                        type="text"
                      />
                    )}
                  </td>
                </tr>
              ))}
              {session && session.user.admin ? (
                <tr>
                  <td colSpan="5">
                    <div className="flex flex-start">
                      <button
                        onClick={() => setFreeTextTable([])}
                        className="w-48 text-center bg-red-700 h-12 hover:bg-red-600"
                      >
                        Delete All
                      </button>
                    </div>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        {session && session.user.admin ? (
          <div
            className={`bg-[#181a1b] scrollbar1 overflow-auto w-full h-[20rem] ${styles.table}`}
          >
            <table>
              <thead>
                <tr>
                  <th className="w-[25px]">N</th>
                  <th>Time</th>
                  <th>Selling Pressure</th> <th>Buying Pressure</th>
                </tr>
              </thead>
              <tbody>
                {session && session.user.admin ? (
                  <tr>
                    <td colSpan="5">
                      <div className="flex flex-start">
                        <button
                          onClick={() => addItem("chartData" + nameoi)}
                          className="w-48 text-center bg-green-800 h-12 hover:bg-green-700"
                        >
                          +
                        </button>
                        <button
                          onClick={() => updateData("chartData" + nameoi)}
                          className="w-48 text-center bg-blue-700 h-12 hover:bg-blue-600"
                        >
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : null}

                {chartData.map((item, index) => (
                  <tr key={item.Time}>
                    <td className="flex flex-row gap-2 justify-center">
                      <div
                        onClick={() => deleteItem(index, "chartData" + nameoi)}
                        className="cursor-pointer w-6 flex justify-center items-center rounded h-6 bg-red-600"
                      >
                        X
                      </div>
                      {index + 1}
                    </td>
                    <td>
                      <input
                        onChange={(e) =>
                          onChange(
                            e.target.value,
                            "Time",
                            index,
                            "chartData" + nameoi
                          )
                        }
                        defaultValue={item.Time}
                        className={styles.inputTable}
                        type="text"
                      />
                    </td>
                    <td>
                      <input
                        onChange={(e) =>
                          onChange(
                            e.target.value,
                            "Value1",
                            index,
                            "chartData" + nameoi
                          )
                        }
                        defaultValue={item.Value1}
                        className={styles.inputTable}
                        type="text"
                      />
                    </td>
                    <td>
                      <input
                        onChange={(e) =>
                          onChange(
                            e.target.value,
                            "Value2",
                            index,
                            "chartData" + nameoi
                          )
                        }
                        defaultValue={item.Value2}
                        className={styles.inputTable}
                        type="text"
                      />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5">
                    <div className="flex flex-start">
                      <button
                        onClick={() => setChartData([])}
                        className="w-48 text-center bg-red-700 h-12 hover:bg-red-600"
                      >
                        Delete All
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </main>
  );
}
