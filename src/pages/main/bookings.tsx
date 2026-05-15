import { useState, useEffect } from "react";
import BookingCard from "../../components/bookingCard";
import { BookingFilter } from "../../components/bookingFilter";
// import { useBooking } from "../../hooks/getBookingHook";
import { TbHourglassEmpty } from "react-icons/tb";

const bookingHedaer = [
  {
    title: "Booking ID",
  },
  {
    title: "Guest",
  },
  {
    title: "Room",
  },
  {
    title: "Checked In",
  },
  {
    title: "Checked out",
  },
  {
    title: "Nights",
  },
  {
    title: "Amounts",
  },
  {
    title: "Status",
  },
  {
    title: "Action",
  },
];

const dummyBookings = [
  {
    bookingId: "BK001",
    guest: "James Okafor",
    room: "Suite 101",
    checkedIn: "2024-01-01",
    checkedOut: "2024-01-03",
    nights: 2,
    amount: "$200",
    status: "Confirmed",
    action: "View",
  },
  {
    bookingId: "BK002",
    guest: "Sarah Doe",
    room: "Room 205",
    checkedIn: "2024-01-05",
    checkedOut: "2024-01-07",
    nights: 2,
    amount: "$150",
    status: "Pending",
    action: "View",
  },
];
function Bookings() {
  const [activeFilter, setActiveFilter] = useState("All");
  //   const { fetchBooking, loading, error, bookings } = useBooking();

  //   useEffect(() => {
  //     fetchBooking();
  //   }, []);

  //   const handleBookingFilter = bookings?.filter((b) =>
  //     activeFilter === "All" ? true : b.status === activeFilter,
  //   );

  const handleBookingFilter = dummyBookings?.filter((b) =>
    activeFilter === "All" ? true : b.status === activeFilter,
  );
  //   if (loading) return <p>loading...</p>;

  //   if (error) return <p>{error}</p>;
  //   if (!bookings) return <p className="text-white">No bookings found</p>;

  return (
    <div className=" min-h-screen w-[90%] mx-auto h-auto flex flex-col gap-2 p-2">
      <section className=" p-2 max-w-135">
        <BookingFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </section>

      <section className="mt-2 h-50 border border-amber-100">
        <table className="w-full p-2">
          <thead className="border-b  border-amber-100 p-3 text-base font-montserra font-semibold text-neutral-400">
            <tr className="">
              {bookingHedaer.map((h) => (
                <th key={h.title}>{h.title}</th>
              ))}
            </tr>
          </thead>

          <tbody className="">
            {handleBookingFilter?.length === 0 ? (
              <tr className="">
                <td colSpan={9}>
                  <TbHourglassEmpty />
                  <p>No active booking yet</p>
                </td>
              </tr>
            ) : (
              handleBookingFilter?.map((booking) => (
                <BookingCard key={booking.bookingId} {...booking} />
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookings;
