const DescCuti = ({ kontrak }) => {
	return (
		<div>
			<div className="font-extralight my-5">
				<p>
					Tanggal mulai kontrak :{" "}
					{new Date(kontrak.tanggalMulai).toLocaleDateString("id-Id", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
				<p>
					Tanggal selesai kontrak :
					{new Date(kontrak.tanggalSelesai).toLocaleDateString("id-Id", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
			</div>
			<p className="mt-6 mb-2">Riwayat</p>
			<div className="ms-4 font-extralight">
				<ul className="list-disc">
					{kontrak.cuti.length > 0 ? (
						kontrak.cuti.map((value) => (
							<li key={value}>
								{new Date(value.tanggal).toLocaleDateString("id-Id", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</li>
						))
					) : (
						<li>Tidak ada cuti</li>
					)}
				</ul>
			</div>
			<div className="mt-9 font-extralight">
				<p>
					Cuti Terpakai <span className="mx-3">:</span> {kontrak.cuti?.length}{" "}
					Hari
				</p>
				<p>
					Cuti Tersedia <span className="mx-3">:</span> {kontrak.sisaCuti} Hari{" "}
				</p>
			</div>
		</div>
	);
};

export default DescCuti;
