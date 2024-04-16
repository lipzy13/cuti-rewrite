import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const UserInfo = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className="bg-white p-4 pl-8 rounded-md shadow-xl col-span-3">
			<h2 className="mt-4 text-5xl font-bold pb-4">{user.nama}</h2>
			<h2 className="text-3xl font-light pb-10">{user.nik}</h2>
		</div>
	);
};

export default UserInfo;
