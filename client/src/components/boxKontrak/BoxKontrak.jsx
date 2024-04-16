import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import { MdInfoOutline } from "react-icons/md";

const BoxKontrak = () => {
	const [loading, setLoading] = useState(false);
	const [kontrak, setKontrak] = useState([]);

	const { user } = useContext(AuthContext);

	useEffect(() => {
		const fetchKontrak = async () => {
			setLoading(true);
			try {
				const res = await axios.get(
					"http://localhost:8080/api/kontrak/user/" + user._id
				);
				setKontrak(res.data);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchKontrak();
	}, [user._id]);

	return (
		<div className="bg-white p-4 rounded-md col-start-1 col-end-5 shadow-xl my-4">
			<div className="items-center justify-center w-full">
				<div className="hs-accordion-group">
					<div className="flex flex-col">
						<div className="-m-1.5 overflow-x-auto">
							<div className="p-1.5 min-w-full inline-block align-middle">
								<div className="overflow-hidden border rounded-lg shadow">
									<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
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
										<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
											{loading ? (
												<tr className="">
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"></td>
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
														<div className="flex justify-center items-center space-x-4 w-full">
															<div
																className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent rounded-full"
																role="status"
																aria-label="loading"
															>
																<span className="sr-only">Loading...</span>
															</div>
															<div>
																<span className="">Loading</span>
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"></td>
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"></td>
												</tr>
											) : kontrak.length > 0 ? (
												kontrak.map((k, index) => (
													<tr key={k._id}>
														<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
															{index + 1}
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
															{k.nomorKontrak}
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"></td>
														<td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
															<Link
																to={`/${user._id}/${k._id}`}
																className="text-xl font-bold text-blue-600"
															>
																<MdInfoOutline />
															</Link>
														</td>
													</tr>
												))
											) : (
												<tr>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"></td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
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
