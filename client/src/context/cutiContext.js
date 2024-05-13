import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
	tanggal: JSON.parse(localStorage.getItem("cuti")).tanggal || [],
	kontrak: JSON.parse(localStorage.getItem("cuti")).kontrak || "",
};

export const CutiContext = createContext(INITIAL_STATE);

const CutiReducer = (state, action) => {
	switch (action.type) {
		case "ADD_CUTI":
			return {
				tanggal: action.payload.tanggal,
				kontrak: action.payload.nomorKontrak,
			};
		default:
			return state;
	}
};

export const CutiContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CutiReducer, INITIAL_STATE);
	useEffect(() => {
		localStorage.setItem(
			"cuti",
			JSON.stringify({ tanggal: state.tanggal, kontrak: state.kontrak })
		);
	}, [state.tanggal, state.kontrak]);
	return (
		<CutiContext.Provider
			value={{
				tanggal: state.tanggal,
				kontrak: state.kontrak,
				dispatch,
			}}
		>
			{children}
		</CutiContext.Provider>
	);
};
