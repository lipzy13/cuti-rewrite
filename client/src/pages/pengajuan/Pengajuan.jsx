import { useContext, useEffect, useState } from "react";
import DescCuti from "../../components/descCuti/DescCuti";
import FormCuti from "../../components/formCuti/FormCuti";
import Sidebar from "../../components/sidebar/Sidebar";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Pengajuan = () => {
	const { user } = useContext(AuthContext);
	const [kontrak, setKontrak] = useState([]);

	useEffect(() => {
		const fetchKontrak = async () => {
			try {
				const res = await axios.get(
					`http://localhost:8080/api/user/${user._id}/kontrak`
				);
				setKontrak(res.data[0]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchKontrak();
	}, [user._id]);
	return (
		<div className="flex w-screen min-h-screen">
			<Sidebar />
			<div className="bg-zinc-100 ms-60 w-full h-screen ">
				<div className="bg-white p-4 rounded-md col-span-3 shadow-xl m-8">
					<div className="my-5 mx-10 grid grid-cols-2">
						<div>
							<h1 className="font-bold text-5xl mb-3">Pengajuan Cuti</h1>
							{kontrak.cuti && <DescCuti kontrak={kontrak} />}
						</div>
						<div>
							<FormCuti />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pengajuan;
