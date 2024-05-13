import { configureStore } from "@reduxjs/toolkit";
import CutiSlice from "../slice/CutiSlice";

const store = configureStore({
	reducer: {
		CutiSlice,
	},
});

export default store;
