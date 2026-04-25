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

function SideBar() {
  const user = useSelector((state: RootState) => state.auth.user);
  const { logout } = useAuth();

  return (
    <div>
      <section>
        {user?.hotelImage ? <img src={user.hotelImage} /> : <LuHotel />}
        <img src="" alt="" />
        <h3>{user?.hotelName}</h3>
        <small>Live & acceping bookings</small>
      </section>
      {/* divider */}
      <div></div>
      {/* main */}
      <section>
        {mainList.map((main, index) => (
          <button key={index}>
            <div>
              <span>{main.icon}</span>
              <span>{main.name}</span>
            </div>
          </button>
        ))}
      </section>
      {/* manage */}
      <section>
        {manageList.map((manageList, index) => (
          <button key={index}>
            <div>
              <span>{manageList.icon}</span> <span>{manageList.name}</span>
            </div>
          </button>
        ))}
      </section>

      {/* profile */}
      <section>
        <div>
          {user?.firstName.charAt(0).toUpperCase()}
          {user?.lastName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3>
            <span>{user?.firstName}</span> <span>{user?.lastName}</span>
          </h3>
          <small>Hotel Owner</small>
        </div>
      </section>

      <section>
        <button type="button" onClick={logout}>
          <FaSignOutAlt /> <p>Sign out</p>
        </button>
      </section>
    </div>
  );
}
export default SideBar;
