import { useContext } from "react";
import { MdHome, MdDateRange } from "react-icons/md";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
	const { dispatch } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGOUT" });
		localStorage.removeItem("user");
		navigate("/login");
	};
	return (
		<div>
			<div
				id="sideNav"
				className=" bg-[#FAFAFA] pe-16 rounded-none border-none fixed h-screen "
			>
				<h1 className="text-4xl font-bold ps-7 pt-20">
					Dash
					<br />
					board
				</h1>
				<div className="p-4 mt-4">
					<Link
						to="/"
						className={`relative px-4 py-3 flex items-center space-x-4 ${
							location.pathname === "/" ? "text-gray-950" : "text-gray-500"
						}`}
					>
						<MdHome size="24px" />
						<span className={`-mr-1 font-medium`}>Beranda</span>
					</Link>
					<Link
						to="/pengajuan"
						className={`px-4 py-0.5 my-4 flex items-center space-x-4 group ${
							location.pathname === "/pengajuan"
								? "text-gray-950"
								: "text-gray-500"
						}`}
					>
						<MdDateRange size="24px" />
						<span>Pengajuan</span>
					</Link>
					<div className="mt-64">
						<Link
							to="/profil"
							className={`relative px-4 py-3 flex items-center space-x-4 ${
								location.pathname === "/profil"
									? "text-gray-950"
									: "text-gray-500"
							}`}
						>
							<span className="-mr-1 font-medium">Profil</span>
						</Link>
					</div>
					<button
						type="submit"
						onClick={handleClick}
						className="px-4 py-0.5 flex items-center space-x-4  text-gray-500 group"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
