import mongoose from "mongoose";
const { Schema } = mongoose;
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
		cuti: {
			type: [{ type: Schema.Types.ObjectId, ref: "Cuti" }],
		},
	},
	{ timestamps: true }
);
export default mongoose.model("Kontrak", kontrakSchema);
