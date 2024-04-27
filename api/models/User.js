import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new mongoose.Schema(
	{
		nama: {
			type: String,
			required: true,
		},
		nik: {
			type: Number,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		tanggalMasuk: {
			type: Date,
			required: true,
		},
		jabatan: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
		},
		kontrak: {
			type: [{ type: Schema.Types.ObjectId, ref: "Kontrak" }],
		},
	},
	{ timestamps: true }
);
export default mongoose.model("User", userSchema);
