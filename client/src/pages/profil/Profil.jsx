import Sidebar from "../../components/sidebar/Sidebar";

const Profil = () => {
  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      <div className="bg-zinc-100 ms-60 w-full h-screen ">
        <div className="bg-white p-4 rounded-md  shadow-xl m-4">Profil</div>
      </div>
    </div>
  );
};

export default Profil;
