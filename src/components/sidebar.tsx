import { CiViewTimeline } from "react-icons/ci";
import type { MainSideBarType, manageSideBarType } from "../types/sidebar";
import { MdCheckroom } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/authHooks";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { LuHotel } from "react-icons/lu";
import type { sideBarProps } from "../types/sidebar";

const mainList: MainSideBarType[] = [
  {
    name: "Overview",
    icon: <CiViewTimeline />,
  },
  {
    name: "Rooms",
    icon: <MdCheckroom />,
  },
  {
    name: "Bookings",
    icon: <TbBrandBooking />,
  },
  {
    name: "Verify Guest",
    icon: <CiUser />,
  },
];

const manageList: manageSideBarType[] = [
  {
    name: "Staff",
    icon: <FaUserFriends />,
  },
  {
    name: "Settings",
    icon: <CiSettings />,
  },
];

function SideBar({ activeTab, setActiveTab }: sideBarProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const { logout } = useAuth();

  return (
    <div className="w-[95%] mx-auto p-2 flex flex-col h-screen  gap-3 shadow-[4px_0_10px_rgb(253_230_138/0.4)] ">
      <section className="bg-neutral-900 rounded rounded-1xl p-3 mt-2 max-w-70 h-25">
        {user?.hotelImage ? (
          <img className="w-[95%] mx-auto" src={user.hotelImage} />
        ) : (
          <LuHotel />
        )}

        <h3 className="text-2xl font-montserra text-white font-bold">
          {user?.hotelName}
        </h3>
        <small className="text-xs text-gray-300 font-lato font-light italic ">
          Live & acceping bookings
        </small>
      </section>
      {/* divider */}
      <div className="border border-amber-50"></div>
      {/* main */}
      <section className="flex flex-col gap-5 p-2 justify-between">
        {mainList.map((main, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(main.name)}
            className={`rounded-lg transition-all duration-200 ${
              activeTab === main.name
                ? "bg-amber-300 text-black"
                : "bg-transparent text-white"
            }`}
          >
            <div className="flex items-center cursor-pointer gap-2 p-2">
              <span
                className={`text-2xl hover:text-gray-400 ${
                  activeTab === main.name ? "text-black" : "text-gray-300"
                }`}
              >
                {main.icon}
              </span>

              <span className="text-base font-lato font-light hover:text-gray-400">
                {main.name}
              </span>
            </div>
          </button>
        ))}
      </section>

      {/* divider */}
      <div className="border border-amber-50"></div>
      {/* manage */}
      <section className="flex flex-col gap-2 p-2 justify-between">
        {manageList.map((manageList, index) => (
          <button
            onClick={() => setActiveTab(manageList.name)}
            key={index}
            className={`rounded-lg transition-all duration-200 ${
              activeTab === manageList.name
                ? "bg-amber-300 text-black"
                : "bg-transparent text-white"
            }`}
          >
            <div className="flex items-center cursor-pointer gap-2 p-2">
              <span
                className={`text-2xl hover:text-gray-400 ${
                  activeTab === manageList.name ? "text-black" : "text-gray-300"
                }`}
              >
                {manageList.icon}
              </span>{" "}
              <span className="text-base hover:text-gray-400 font-lato font-light">
                {manageList.name}
              </span>
            </div>
          </button>
        ))}
      </section>

      {/* divider */}
      <div className="border border-amber-50"></div>
      {/* profile */}
      <section className=" flex justify-center gap-2">
        <div className="bg-neutral-900 rounded-2xl uppercase text-2xl text-amber-50 font-lato font-bold">
          {user?.firstName.charAt(0).toUpperCase()}
          {user?.lastName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3>
            <span className="text-base font-montserra text-white font-bold">
              {user?.firstName}
            </span>{" "}
            <span>{user?.lastName}</span>
          </h3>
          <small className="text-xs text-gray-300 font-lato font-light italic">
            Hotel Owner
          </small>
        </div>
      </section>
      {/* divider */}
      <section className=" ">
        <button
          className="flex font-montserra cursor-pointer hover:bg-neutral-500 text-sm w-40 bg-neutral-900  mx-auto text-gray-300 items-center gap-2  p-2 rounded"
          type="button"
          onClick={logout}
        >
          <FaSignOutAlt /> <p>Sign out</p>
        </button>
      </section>
    </div>
  );
}
export default SideBar;
