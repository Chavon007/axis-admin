import type { fetchBookings } from "../types/hotel";

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
  );
}

export default BookingCard;
