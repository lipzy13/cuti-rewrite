import { createSlice } from "@reduxjs/toolkit";

const cutiSlice = createSlice({
	name: "cuti",
	initialState: {
		tanggal: [],
		kontrak: "",
	},
	reducers: {
		inputData: (state, action) => {
			state.tanggal = action.payload.tanggal;
			state.kontrak = action.payload.nomorKontrak;
		},
	},
});

export const { inputData } = cutiSlice.actions;
export default cutiSlice.reducer;
