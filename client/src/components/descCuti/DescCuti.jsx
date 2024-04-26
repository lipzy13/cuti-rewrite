const DescCuti = () => {
	return (
		<div>
			<div className="font-extralight my-5">
				<p>Tanggal mulai kontrak : 1 Januari 1900</p>
				<p>Tanggal selesai kontrak :1 Januari 1900</p>
			</div>
			<p className="mt-6 mb-2">Riwayat</p>
			<div className="ms-4 font-extralight">
				<ul className="list-disc">
					<li>1 Januari 1900</li>
					<li>1 Januari 1900</li>
					<li>1 Januari 1900</li>
				</ul>
			</div>
			<div className="mt-9 font-extralight">
				<p>
					Cuti Terpakai <span className="mx-3">:</span> 0 Hari{" "}
				</p>
				<p>
					Cuti Tersedia <span className="mx-3">:</span> 0 Hari{" "}
				</p>
			</div>
		</div>
	);
};

export default DescCuti;
