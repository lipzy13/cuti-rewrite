import DescCuti from "../../components/descCuti/DescCuti";
import FormCuti from "../../components/formCuti/FormCuti";
import Sidebar from "../../components/sidebar/Sidebar";

const Pengajuan = () => {
	return (
		<div className="flex w-screen min-h-screen">
			<Sidebar />
			<div className="bg-zinc-100 ms-60 w-full h-screen ">
				<div className="bg-white p-4 rounded-md col-span-3 shadow-xl m-8">
					<div className="my-5 mx-10 grid grid-cols-2">
						<div>
							<h1 className="font-bold text-5xl mb-3">Pengajuan Cuti</h1>
							<DescCuti />
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
