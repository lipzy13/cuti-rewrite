import mongoose from "mongoose";

const kontrakSchema = new mongoose.Schema(
	{
		nomorKontrak: {
			type: String,
			required: true,
		},
		tanggalMulai: {
			type: Date,
			require: true,
		},
		tanggalSelesai: {
			type: Date,
			require: true,
		},
		aktif: {
			type: Boolean,
			require: true,
		},
		sisaCuti: {
			type: Number,
			require: true,
		},
		userId: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);
export default mongoose.model("Kontrak", kontrakSchema);
