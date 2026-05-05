import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { IoIosAdd } from "react-icons/io";

function Navbar({ activeTab }: { activeTab: string }) {
  let date = new Date().toLocaleString();
  const user = useSelector((state: RootState) => state.auth.user);
  if (activeTab === "Overview")
    return (
      <nav className="flex justify-between items-center w-[95%] mx-auto p-5">
        <section className="p-2">
          <h3 className="text-gray-400 font-medium uppercase text-sm font-montserra">
            Welcome <span>{user?.hotelName}</span>
          </h3>
        </section>

        <section className="flex items-center gap-2 font-lato text-xs text-white">
          <p>{date}</p>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Rooms")
    return (
      <nav className="flex justify-between items-center w-[95%] mx-auto p-5">
        <section className="p-2">
          <h3 className="text-gray-400 font-medium uppercase text-sm font-montserra">
            Room
          </h3>
        </section>

        <section className="flex w-90 p-3 justify-between items-center gap-2 font-lato text-xs text-gray-300">
          <button className="bg-neutral-900  p-2 w-20 rounded border border-amber-50 hover:bg-neutral-500 cursor-pointer">
            Filter
          </button>
          <button className="bg-neutral-900  p-2 w-20 rounded border border-amber-50 hover:bg-neutral-500 cursor-pointer">
            Sort
          </button>
          <button className="flex items-center bg-neutral-900  justify-center p-2 w-30 rounded border border-amber-50 hover:bg-neutral-500 cursor-pointer">
            <span>
              <IoIosAdd />
            </span>
            <span>Add Room</span>
          </button>

          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Bookings")
    return (
      <nav className="flex justify-between items-center w-[95%] mx-auto p-5">
        <section className="p-2">
          <h3 className="text-gray-400 font-medium uppercase text-sm font-montserra">
            Bookings
          </h3>
        </section>

        <section className="flex w-90 p-3 justify-between items-center gap-2 font-lato text-xs text-gray-300">
          <input type="text" placeholder="Search booking/guest"  className="focus:outline-none w-50 p-2 bg-neutral-800 font-lato placeholder:font-lato placeholder:text-sm border-none rounded"/>
          <button className="bg-neutral-900  p-2 w-20 rounded border border-amber-50 hover:bg-neutral-500 cursor-pointer">
            Export CSV
          </button>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Verify Guest")
    return (
      <nav className="flex justify-between items-center w-[95%] mx-auto p-5">
        <section className="p-2">
          <h3 className="text-gray-400 font-medium uppercase text-sm font-montserra">Guest Verification</h3>
        </section>

        <section>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Settings")
    return (
      <nav className="flex justify-between items-center w-[95%] mx-auto p-5">
        <section className="p-2">
          <h3 className="text-gray-400 font-medium uppercase text-sm font-montserra"> Hotel Profile & Settings</h3>
        </section>

        <section>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Staff")
    return (
      <nav className="flex justify-between items-center w-[95%] mx-auto p-5">
        <section className="p-2">
          <h3 className="text-gray-400 font-medium uppercase text-sm font-montserra"> Staff Management</h3>
        </section>

        <section>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );
}

export default Navbar;
