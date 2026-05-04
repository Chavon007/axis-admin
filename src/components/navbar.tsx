import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { IoIosAdd } from "react-icons/io";

function Navbar({ activeTab }: { activeTab: string }) {
  let date = new Date().toLocaleString();
  const user = useSelector((state: RootState) => state.auth.user);
  if (activeTab === "Overview")
    return (
      <nav>
        <section>
          <h3>
            Welcome <span>{user?.hotelName}</span>
          </h3>
        </section>

        <section>
          <p>{date}</p>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Rooms")
    return (
      <nav>
        <section>
          <h3>Room</h3>
        </section>

        <section>
          <button>Filter</button>
          <button>Sort</button>
          <button>
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
      <nav>
        <section>
          <h3>Bookings</h3>
        </section>

        <section>
          <input type="text" placeholder="Search booking/guest" />
          <button>Export CSV</button>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Verify Guest")
    return (
      <nav>
        <section>
          <h3>Guest Verification</h3>
        </section>

        <section>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Settings")
    return (
      <nav>
        <section>
          <h3> Hotel Profile & Settings</h3>
        </section>

        <section>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );

  if (activeTab === "Staff")
    return (
      <nav>
        <section>
          <h3> Staff Management</h3>
        </section>

        <section>
          <img src={user?.hotelImage} alt={user?.hotelName} />
        </section>
      </nav>
    );
}

export default Navbar;
