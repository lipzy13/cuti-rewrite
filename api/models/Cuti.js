import mongoose from "mongoose";
const cutiSchema = new mongoose.Schema(
  {
    jenis: {
      type: String,
      required: true,
    },
    kontrakId: {
      type: String,
      require: true,
    },
    tanggal: {
      type: [Date],
      require: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Cuti", cutiSchema);
