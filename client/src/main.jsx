import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import "./index.css";

import "preline/preline";
import { AuthContextProvider } from "./context/authContext.js";
import { CutiContextProvider } from "./context/cutiContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<CutiContextProvider>
				<App />
			</CutiContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
