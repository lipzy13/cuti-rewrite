import { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profil = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      await axios.post(
        `http://localhost:8080/api/auth/changepass/${user._id}`,
        e,
      );
      alert("Password berhasil diubah");
      navigate(0);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      <div className="bg-zinc-100 ms-60 w-full h-screen ">
        <div className="bg-white p-4 rounded-md  shadow-xl m-4">
          <div className="text-center my-8">
            <h1 className="font-bold text-2xl">Profil</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="nama"
                  className="inline-block text-sm text-gray-800 mt-2.5 "
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
                  className="inline-block text-sm text-gray-800 mt-2.5 "
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
                    className="py-2 border px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0 text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none "
                    placeholder={user.nik}
                  ></input>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="jabatan"
                  className="inline-block text-sm text-gray-800 mt-2.5 "
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
                    className="py-2 border px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0 text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none"
                    placeholder={user.jabatan}
                  ></input>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="tanggalMasuk"
                  className="inline-block text-sm text-gray-800 mt-2.5"
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
                    className="py-2 border px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0 text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none "
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
                <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                  Password
                </label>
              </div>
              <div className="sm:col-span-9">
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      id="passwordLama"
                      name="passwordLama"
                      type="password"
                      className={`py-2 border ${
                        errors.passwordLama && "border-red-500"
                      } px-3 pe-11 block w-full shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none`}
                      placeholder="Masukkan password lama"
                      aria-describedby="passwordLama"
                      {...register("passwordLama", { required: true })}
                    ></input>
                    {errors.passwordLama && (
                      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="flex-shrink-0 size-4 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" x2="12" y1="8" y2="12"></line>
                          <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      id="passwordBaru"
                      name="passwordBaru"
                      type="password"
                      className={`py-2 border ${
                        errors.passwordBaru && "border-red-500"
                      } px-3 pe-11 block w-full shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none`}
                      placeholder="Masukkan password baru"
                      aria-describedby="passwordBaru"
                      {...register("passwordBaru", {
                        required: true,
                        minLength: 4,
                      })}
                    ></input>
                    {errors.passwordBaru && (
                      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="flex-shrink-0 size-4 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" x2="12" y1="8" y2="12"></line>
                          <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
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
