import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BoxCuti = ({ kontrak }) => {
  const data = {
    labels: ["Terpakai", "Tersisa"],
    datasets: [
      {
        label: "# Cuti",
        data: [kontrak.cuti.length, kontrak.sisaCuti],
        backgroundColor: ["#57BEB5", "#3070F5"],
        borderColor: ["#57BEB5", "#3070F5"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-white p-4 col-span-1 rounded-md shadow-xl">
      <div className="w-4/5 m-auto">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default BoxCuti;
