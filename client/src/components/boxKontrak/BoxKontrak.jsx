import { Link } from "react-router-dom";
import { MdInfoOutline } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const BoxKontrak = ({ kontrak }) => {
	const { user } = useContext(AuthContext);
	return (
		<div className="bg-white p-4 rounded-md col-start-1 col-end-5 shadow-xl my-4">
			<div className="items-center justify-center w-full">
				<div className="hs-accordion-group">
					<div className="flex flex-col">
						<div className="-m-1.5 overflow-x-auto">
							<div className="p-1.5 min-w-full inline-block align-middle">
								<div className="overflow-hidden border rounded-lg shadow">
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
													className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
												>
													Nomor Kontrak
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
												></th>
												<th
													scope="col"
													className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
												></th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200 ">
											{kontrak.length > 0 ? (
												kontrak.map((k, index) => (
													<tr key={k._id}>
														<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
															{index + 1}
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
															{k.nomorKontrak}
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 "></td>
														<td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
															<Link
																to={`/${k._id}`}
																className="text-xl font-bold text-blue-600"
															>
																<MdInfoOutline />
															</Link>
														</td>
													</tr>
												))
											) : (
												<tr>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 "></td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
														Kontrak tidak ada
													</td>
												</tr>
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxKontrak;
