import { useContext } from "react";
import { CutiContext } from "../../context/cutiContext";
import { AuthContext } from "../../context/authContext";

const Checkout = () => {
	const { kontrak, tanggal } = useContext(CutiContext);
	const { user } = useContext(AuthContext);
	console.log(tanggal);
	return (
		<div className="flex bg-zinc-100 min-h-screen">
			<div className="bg-white p-4 w-full rounded-md col-span-3 shadow-xl m-8">
				<div className="px-4 pb-5 flex justify-between items-center border-b border-gray-200 my-4">
					<h2 className="text-2xl font-semibold text-gray-800 ">Cuti</h2>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<div className="px-4 grid space-y-3">
						<dl className="grid sm:flex gap-x-3 text-sm">
							<dt className="min-w-36 max-w-[200px] text-gray-500">Nama:</dt>
							<dd className="font-medium text-gray-800 ">{user.nama}</dd>
						</dl>
						<dl className="grid sm:flex gap-x-3 text-sm">
							<dt className="min-w-36 max-w-[200px] text-gray-500 ">NIK:</dt>
							<dd className="font-medium text-gray-800 ">{user.nik}</dd>
						</dl>
						<dl className="grid sm:flex gap-x-3 text-sm">
							<dt className="min-w-36 max-w-[200px] text-gray-500 ">
								Jabatan:
							</dt>
							<dd className="font-medium text-gray-800 ">{user.jabatan}</dd>
						</dl>
					</div>
					<div className="px-4 grid space-y-3">
						<dl className="grid sm:flex gap-x-3 text-sm">
							<dt className="min-w-36 max-w-[200px] text-gray-500 ">
								Nomor Kontrak:
							</dt>
							<dd className="font-medium text-gray-800 ">{kontrak}</dd>
						</dl>
						<dl className="grid sm:flex gap-x-3 text-sm">
							<dt className="min-w-36 max-w-[200px] text-gray-500 ">
								Tanggal Masuk:
							</dt>
							<dd className="font-medium text-gray-800">
								{new Date(user.tanggalMasuk).toLocaleDateString("id-Id", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</dd>
						</dl>
						<dl className="grid sm:flex gap-x-3 text-sm">
							<dt className="min-w-36 max-w-[200px] text-gray-500 ">
								Jenis Cuti:
							</dt>
							<dd className="font-medium text-gray-800 ">Cuti Tahunan</dd>
						</dl>
					</div>
				</div>
				<div className="items-center justify-center m-4">
					<div className="hs-accordion-group">
						<div className="flex flex-col">
							<div className="-m-1.5 overflow-x-auto">
								<div className="p-1.5 min-w-full inline-block align-middle">
									<div className="overflow-hidden border rounded-lg">
										<table className="min-w-full divide-y divide-gray-200 ">
											<thead className="bg-gray-50">
												<tr>
													<th
														scope="col"
														className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
													>
														No
													</th>
													<th
														scope="col"
														className="py-3 text-start text-xs font-medium text-gray-500 uppercase"
													>
														Tanggal Cuti
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 ">
												{tanggal.map((tang, index) => (
													<tr key={index}>
														<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
															{index + 1}
														</td>
														<td className="py-4 whitespace-nowrap text-sm text-gray-800 ">
															{new Date(tang).toLocaleDateString("id-Id", {
																year: "numeric",
																month: "long",
																day: "numeric",
															})}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="mt-8 me-4 flex sm:justify-end">
						<div className="w-full max-w-2xl sm:text-end space-y-2">
							<div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
								<dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
									<dt className="col-span-3 text-gray-500">Subotal:</dt>
									<dd className="col-span-2 font-medium text-gray-800">
										$2750.00
									</dd>
								</dl>

								<dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
									<dt className="col-span-3 text-gray-500 ">Total:</dt>
									<dd className="col-span-2 font-medium text-gray-800 ">
										$2750.00
									</dd>
								</dl>

								<dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
									<dt className="col-span-3 text-gray-500 ">Tax:</dt>
									<dd className="col-span-2 font-medium text-gray-800 ">
										$39.00
									</dd>
								</dl>

								<dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
									<dt className="col-span-3 text-gray-500 ">Amount paid:</dt>
									<dd className="col-span-2 font-medium text-gray-800 ">
										$2789.00
									</dd>
								</dl>

								<dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
									<dt className="col-span-3 text-gray-500 ">Due balance:</dt>
									<dd className="col-span-2 font-medium text-gray-800 ">
										$0.00
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
