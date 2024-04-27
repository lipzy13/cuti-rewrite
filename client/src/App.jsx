import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pengajuan from "./pages/pengajuan/Pengajuan";
import Profil from "./pages/profil/Profil";
import Kontrak from "./pages/kontrak/Kontrak";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/pengajuan"
					element={<Pengajuan />}
				/>
				<Route
					path="/profil"
					element={<Profil />}
				/>
				<Route
					path="/:kontrakId"
					element={<Kontrak />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
