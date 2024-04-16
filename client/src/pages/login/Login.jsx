import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/gambar.svg";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Login = () => {
	const [credentials, setCredentials] = useState({
		nik: undefined,
		password: undefined,
	});

	const navigate = useNavigate();
	const { loading, error, dispatch } = useContext(AuthContext);

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post(
				"http://localhost:8080/api/auth/login",
				credentials
			);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			navigate("/");
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-50">
			<div className="flex-1 max-w-[1024px] mx-auto bg-white rounded-lg shadow-xl">
				<div className="flex flex-col md:flex-row">
					<div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
						<div className="w-full">
							<h1 className="mb-8 text-6xl font-semibold text-gray-700">
								Form Cuti
							</h1>
							<div className="mb-4">
								<label
									className="block text-sm mb-2 text-gray-500"
									htmlFor="nik"
								>
									NIK
								</label>
								<input
									type="text"
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-teal-400
								focus:outline-none focus:ring-1 focus:ring-teal-600"
									id="nik"
									name="nik"
									required
									onChange={handleChange}
									placeholder="Masukkan NIK"
								/>
							</div>
							<div className="mb-6">
								<label className="block mt-4 text-sm mb-2 text-gray-500">
									Password
								</label>
								<input
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-teal-400
								focus:outline-none focus:ring-1 focus:ring-teal-600"
									placeholder="Masukkan Password"
									name="password"
									onChange={handleChange}
									required
									id="password"
									type="password"
								/>
							</div>
							<button
								className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center
							text-white transition-colors duration-150 bg-teal-400
							border border-transparent rounded-lg active:bg-teal-500 hover:bg-teal-500
							focus:outline-none
							focus:shadow-outline-blue shadow-lge"
								onClick={handleClick}
								disabled={loading}
							>
								{loading ? (
									<div className="flex justify-center items-center space-x-4">
										<div
											className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-slate-200 rounded-full"
											role="status"
											aria-label="loading"
										>
											<span className="sr-only">Loading...</span>
										</div>
										<div>
											<span className="text-slate-200">Loading</span>
										</div>
									</div>
								) : (
									"Masuk"
								)}
							</button>
							{error && (
								<div
									className="mt-2 bg-red-600 text-sm text-white rounded-lg p-4"
									role="alert"
								>
									<span className="font-bold me-2">Danger</span>
									{error.message}
								</div>
							)}
						</div>
					</div>
					<div className="h-1/2  md:h-auto md:w-1/2 my-auto bg-teal-400 py-[200px] rounded-r-lg">
						<img
							className="w-[320px] h-1/2 mx-auto"
							src={loginImage}
							alt="img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
