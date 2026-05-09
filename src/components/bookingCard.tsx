import type { fetchBookings } from "../types/hotel";

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
function BookingCard({
  bookingId,
  guest,
  room,
  checkedIn,
  checkedOut,
  nights,
  amount,
  status,
  action,
}: fetchBookings) {
  return (
    <table>
      <thead>
        <tr>
          {" "}
          {bookingHedaer.map((h) => (
            <th key={h.title}>{h.title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{bookingId}</td>
          <td>{guest}</td>
          <td>{room}</td>
          <td>{checkedIn}</td>
          <td>{checkedOut}</td>
          <td>{nights}</td>
          <td>{amount}</td>
          <td>{status}</td>
          <td>{action}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default BookingCard;
