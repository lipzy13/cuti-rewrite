import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const BoxCuti = () => {
	const [tersisa, setTersisa] = useState(0);
	const [loading, setLoading] = useState(false);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		const fetchCuti = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					"http://localhost:8080/api/kontrak/user/" + user._id
				);
				setTersisa(res.data[0].sisaCuti);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchCuti();
	}, [user._id]);

	const data = {
		labels: ["Terpakai", "Tersisa"],
		datasets: [
			{
				label: "# Cuti",
				data: [5, tersisa],
				backgroundColor: ["#57BEB5", "#3070F5"],
				borderColor: ["#57BEB5", "#3070F5"],
				borderWidth: 1,
			},
		],
	};
	return (
		<div className="bg-white p-4 col-span-1 rounded-md shadow-xl">
			<div className="w-4/5 m-auto">
				{loading ? (
					<div className="flex justify-center items-center space-x-4 w-ful h-full my-atuo">
						<div
							className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent rounded-full"
							role="status"
							aria-label="loading"
						>
							<span className="sr-only">Loading...</span>
						</div>
						<div>
							<span className="">Loading</span>
						</div>
					</div>
				) : (
					<Doughnut data={data} />
				)}
			</div>
		</div>
	);
};

export default BoxCuti;
