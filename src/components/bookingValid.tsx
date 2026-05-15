import type { fetchBookings } from "../types/hotel";
import { useBooking } from "../hooks/getBookingHook";

function BookingValidation({
  id,
  bookingId,
  guest,
  guestEmail,
  guestPhone,
  room,
  roomType,
  amount,
  checkedIn,
  checkedOut,
  status,
}: fetchBookings) {
  const { checkIn, loading, error } = useBooking();

  return (
    <div>
      <h3>Valid Booking Found</h3>

      <div>
        <p>
          <strong>Guest Name</strong>
          <span>{guest}</span>
        </p>
        <p>
          <strong>Booking ID</strong>
          <span>{bookingId}</span>
        </p>
        <p>
          <strong>Room</strong>
          <span>{room}</span>
        </p>
        <p>
          <strong>Check-in</strong>
          <span>{checkedIn}</span>
        </p>
        <p>
          <strong>Check-out</strong>
          <span>{checkedOut}</span>
        </p>
        <p>
          <strong>Amount</strong>
          <span>{amount}</span>
        </p>
        <p>
          <strong>Guest email</strong>
          <span>{guestEmail}</span>
        </p>
        <p>
          <strong>Guest Phone</strong>
          <span>{guestPhone}</span>
        </p>
        <p>
          <strong>Status</strong>
          <span>{status}</span>
        </p>
        <p>
          <strong>Room Type</strong>
          <span>{roomType}</span>
        </p>

        <div>
          <button onClick={() => checkIn(id)}>
            {loading
              ? "Checking..."
              : status === "checked-in"
                ? "Already Checked In"
                : "Check In Guest ]"}
          </button>

          <button>Reject</button>
        </div>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
export default BookingValidation;
