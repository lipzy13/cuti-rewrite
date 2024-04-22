import { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { AuthContext } from "../../context/authContext";

const Profil = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      <div className="bg-zinc-100 ms-60 w-full h-screen ">
        <div className="bg-white p-4 rounded-md  shadow-xl m-4">
          <div className="text-center my-8">
            <h1 className="font-bold text-2xl">Profil</h1>
          </div>
          <form>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="nama"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Nama
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="nama"
                    type="text"
                    disabled
                    className="py-2 border px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0 text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none"
                    placeholder={user.nama}
                  ></input>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="nik"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  NIK
                </label>
              </div>

              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="nik"
                    type="text"
                    disabled
                    className="py-2 border px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0 text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-399 dark:focus:ring-gray-600"
                    placeholder={user.nik}
                  ></input>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="jabatan"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Jabatan
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="jabatan"
                    disabled
                    type="text"
                    className="py-2 border px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0 text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder={user.jabatan}
                  ></input>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="tanggalMasuk"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Tanggal Masuk
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="tanggalMasuk"
                    disabled
                    type="text"
                    className="py-2 border px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0 text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder={new Date(user.tanggalMasuk).toLocaleDateString(
                      "id-Id",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  ></input>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Password
                </label>
              </div>

              <div className="sm:col-span-9">
                <div className="space-y-2">
                  <input
                    id="passwordLama"
                    name="passwordLama"
                    type="password"
                    className="py-2 border px-3 pe-11 block w-full {{$errors->has('old_password') ? 'border-red-500' : 'border-gray-200' }}  shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Masukkan password lama"
                    aria-describedby="passwordLama"
                  ></input>
                  <input
                    id="passwordBaru"
                    name="passwordBaru"
                    type="password"
                    className="py-2 border px-3 pe-11 block w-full {{$errors->has('old_password') ? 'border-red-500' : 'border-gray-200' }}  shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Masukkan password baru"
                    aria-describedby="passwordBaru"
                  ></input>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profil;
