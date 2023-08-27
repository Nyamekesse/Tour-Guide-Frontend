import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sentiment Analysis Chart Display",
    },
  },
};

const ChartDisplay = ({ labels, sentimentsCount }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Reviews Dataset",
        data: sentimentsCount,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex justify-center items-center w-[75%]  mx-auto my-12">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default ChartDisplay;
