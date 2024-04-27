import mongoose from "mongoose";
const cutiSchema = new mongoose.Schema(
	{
		jenis: {
			type: String,
			required: true,
		},
		tanggal: {
			type: [Date],
			require: true,
		},
	},
	{ timestamps: true }
);
export default mongoose.model("Cuti", cutiSchema);
