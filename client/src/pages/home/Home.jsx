import BoxCuti from "../../components/boxCuti/BoxCuti";
import BoxKontrak from "../../components/boxKontrak/BoxKontrak";
import Sidebar from "../../components/sidebar/Sidebar";
import UserInfo from "../../components/userInfo/UserInfo";

const Home = () => {
  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      <div className="bg-zinc-100 ms-60 w-full h-screen ">
        <div className="grid grid-cols-4 mx-8 -mt-2 gap-4 p-4">
          <UserInfo />
          <BoxCuti />
          <BoxKontrak />
        </div>
      </div>
    </div>
  );
};

export default Home;
