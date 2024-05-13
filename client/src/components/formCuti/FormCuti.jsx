import { useFieldArray, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FormCuti = ({ kontrak }) => {
	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	const { fields, append, remove } = useFieldArray({
		control,
		name: "tanggal",
		defaultValue: [{ tanggal: undefined }],
	});

	console.log(watch("example"));
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label
				htmlFor="nomorKontrak"
				className="text-gray-500 font-medium"
			>
				Nomor Kontrak
			</label>
			<input
				type="text"
				name="nomorKontrak"
				id="nomorKontrak"
				className="
         mt-2 mb-5 block w-full border-0 py-1.5  pl-5 pr-20 text-gray-500 bg-gray-300 focus:outline-transparent"
				readOnly={true}
				autoFocus={true}
				defaultValue={kontrak.nomorKontrak}
				{...register("nomorKontrak")}
			></input>

			<div className="relative">
				{fields.map((tanggal, index) => (
					<div
						className="my-2"
						key={tanggal.id}
					>
						<label>Tanggal Cuti {index + 1}</label>
						<div className="flex rounded-lg shadow-sm">
							<input
								type="date"
								className="
        py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border"
								{...register(`tanggal[${index}]`, {
									required: "Masukkan tanggal",
									min: {
										value: new Date(kontrak.tanggalMulai)
											.toISOString()
											.split("T")[0],
										message: "Tanggal diluar kontrak",
									},
									max: {
										value: new Date(kontrak.tanggalSelesai)
											.toISOString()
											.split("T")[0],
										message: "Tanggal diluar kontrak",
									},
								})}
							></input>
							<button
								className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
								onClick={() => remove(index)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
									/>
								</svg>
							</button>
						</div>
						{errors?.tanggal?.[index]?.message}
					</div>
				))}
				<button
					className="my-3 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none "
					onClick={() => append()}
				>
					Tambah Tanggal Cuti
				</button>
			</div>

			<div>
				<label
					htmlFor="file_path"
					className="text-gray-500 font-medium"
				>
					Upload Surat Cuti,
					<span>
						<Link
							to="/docs/surat.docx"
							className="text-sky-700"
							download
							target="_blank"
						>
							Download surat
						</Link>
					</span>
				</label>
				<input
					type="file"
					name="file_path"
					id="file_path"
					className="
         mt-2 mb-5 block w-full rounded-md pr-10 text-gray-500 bg-white border border-gray-300
         file:bg-[#EBEDEF] file:p-1.5 file:border-0 file:text-[#374254]"
					{...register("suratCuti")}
				></input>
			</div>
			<button
				type="submit"
				className="bg-[#d9d9d9] py-3 w-full justify-center font-bold rounded-xl inline-flex items-center gap-x-2"
			>
				SUBMIT
			</button>
		</form>
	);
};

export default FormCuti;
