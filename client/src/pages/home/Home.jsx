import { useContext, useEffect, useState } from "react";
import BoxCuti from "../../components/boxCuti/BoxCuti";
import BoxKontrak from "../../components/boxKontrak/BoxKontrak";
import Sidebar from "../../components/sidebar/Sidebar";
import UserInfo from "../../components/userInfo/UserInfo";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Home = () => {
	const { user } = useContext(AuthContext);
	const [kontrak, setKontrak] = useState([]);
	useEffect(() => {
		const fetchKontrak = async () => {
			try {
				const res = await axios.get(
					`http://localhost:8080/api/user/${user._id}/kontrak`
				);
				setKontrak(res.data);
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
				<div className="grid grid-cols-4 mx-8 -mt-2 gap-4 p-4">
					<div className={kontrak.length > 0 ? "col-span-3" : "col-span-4"}>
						<UserInfo user={user} />
					</div>
					{kontrak.length > 0 ? <BoxCuti kontrak={kontrak[0]} /> : null}
					<BoxKontrak kontrak={kontrak} />
				</div>
			</div>
		</div>
	);
};

export default Home;
