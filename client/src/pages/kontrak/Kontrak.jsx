import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import TabelCuti from "../../components/tabelCuti/TabelCuti";
const Kontrak = () => {
  const { kontrakId } = useParams();
  const [kontrak, setKontrak] = useState([]);
  useEffect(() => {
    const fetchKontrak = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/kontrak/${kontrakId}/cuti`,
        );
        setKontrak(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchKontrak();
  }, [kontrakId]);

  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      <div className="bg-zinc-100 ms-60 w-full h-screen ">
        <div className="bg-white p-4 rounded-md shadow-xl m-8">
          <h1 className="font-bold text-center text-2xl m-2">Kontrak</h1>
          <div className="max-w-[85rem] p-8 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Nomor Kontrak
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                      {kontrak.nomorKontrak}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Tanggal Mulai
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                      {new Date(kontrak.tanggalMulai).toLocaleDateString(
                        "id-Id",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Tanggal Selesai
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                      {new Date(kontrak.tanggalSelesai).toLocaleDateString(
                        "id-Id",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white border shadow-sm rounded-xl">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Sisa Cuti
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                      {kontrak.sisaCuti}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {kontrak.cuti && <TabelCuti cuti={kontrak.cuti} />}
        </div>
      </div>
    </div>
  );
};

export default Kontrak;
