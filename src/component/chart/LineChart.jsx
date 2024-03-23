import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
const labels = ["5.0", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5"];

Chart.register(CategoryScale);

const customYLabels = {
  // Custom values for y-axis
  0: "16feb",
  5: "17feb",
  10: "18feb",
  15: "19feb",
  20: "20feb",
  25: "21feb",
  30: "22feb",
};
const data = {
  labels: labels,

  datasets: [
    {
      label: "Current Day",
      fill: false,

      // lineTension: 0.1,
      backgroundColor: "#135BDF",
      borderColor: "#135BDF",
      pointStyle: false,
      pointHoverBackgroundColor: "#135BDF",
      pointHoverBorderColor: "#135BDF",
      tension: 0.4,
      data: [0, 10, 15, 12, 22, 16, 25, 10],
    },
  ],
};

const options = {
  scales: {
    x: {
      display: true,
      // stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "rgb(191, 191, 191)",
      },
      border: {
        display: false,
      },
    },
    y: {
      display: true,
      // stacked: true,
      grid: {
        // display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },

      ticks: {
        color: "rgb(191, 191, 191)",
        stepSize: 5, // Adjust the step size to match the number of custom labels
        min: 0, // Set the minimum value for the y-axis scale
        max: 25, // Set the maximum value for the y-axis scale
        callback: function (value) {
          return customYLabels[value] || ""; // Return custom label if available
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      backgroundColor: "black",
      bodyFontColor: "black", // Setting body text color
      titleFontColor: "black", // Setting title text color
      shadowColor: "rgba(0, 0, 0, 0.5)", // Add shadow color
      shadowBlur: 10, // Add shadow blur
      padding: 20,

      callbacks: {
        label: function (context) {
          const datasetLabel = context.dataset.label;
          const value = context.parsed.y;
          return `${datasetLabel}: $ ${value}k`;
        },
      },
    },
  },
  layout: {
    padding: {
      left: 10, // Adjust left padding as needed
      right: 10, // Adjust right padding as needed
      top: 10, // Adjust top padding as needed
      bottom: 10, // Adjust bottom padding as needed
    },
  },

  indexAxis: "x", // Use y-axis as the index axis
  barPercentage: 0.3, // Adjust bar width percentage (0.8 = 80% of available space)
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
