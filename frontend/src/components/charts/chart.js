import { memo } from "react";

import { Line } from "react-chartjs-2";

import { useRef, useEffect } from "react";
import zoomPlugin from "chartjs-plugin-zoom";
import annotationPlugin from "chartjs-plugin-annotation";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  annotationPlugin,
  zoomPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const Chart = ({ tableData }) => {
  const options = {
    type: "line",
    maintainAspectRatio: false,
    tension: 0.01,
    scales: {
      x: {
        max: tableData.labels.length - 1,
        min: tableData.labels.length - 24,
      },
      y: {
        max: 10000000,
        min: 0,
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
          drag: { enabled: true },
        },
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y",
            value: 5000000,
            borderColor: "grey",
            borderWidth: 2,
            borderDash: [2, 2],

            capBezierPoints: "capBezierPoints",
            label: {
              enabled: true,
              content: "Línea Central",
              position: "right",
            },
          },
        ],
      },
    },
  };
  useEffect(() => {}, []);

  return (
    <Line
      className="mb-12 mr-24 lg:pl-4"
      options={options}
      datasetIdKey="id"
      data={tableData}
    />
  );
};
export const MemoChart = memo(Chart);
