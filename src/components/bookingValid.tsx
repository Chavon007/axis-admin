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
    <div className="bg-neutral-900 border border-amber-100/20 rounded-2xl p-4 shadow-lg text-amber-50">
      <h3 className="text-sm font-lato font-bold p-2 border-b border-amber-100/10 mb-4">
        Valid Booking Found
      </h3>

      <div className="flex flex-col gap-3 text-sm">
        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Guest Name</strong>
          <span>{guest}</span>
        </p>

        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Booking ID</strong>
          <span>{bookingId}</span>
        </p>

        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Room</strong>
          <span>{room}</span>
        </p>

        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Check-in</strong>
          <span>{checkedIn}</span>
        </p>

        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Check-out</strong>
          <span>{checkedOut}</span>
        </p>

        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Amount</strong>
          <span>{amount}</span>
        </p>

        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Guest Email</strong>
          <span className="text-right">{guestEmail}</span>
        </p>

        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Guest Phone</strong>
          <span>{guestPhone}</span>
        </p>

        <p className="flex justify-between border-b border-neutral-800 pb-2">
          <strong>Status</strong>
          <span
            className={`capitalize ${
              status === "checked-in" ? "text-green-400" : "text-amber-400"
            }`}
          >
            {status}
          </span>
        </p>

        <p className="flex justify-between pb-2">
          <strong>Room Type</strong>
          <span>{roomType}</span>
        </p>

        {/* buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => checkIn(id)}
            className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-bold text-sm py-2 rounded-xl transition-all duration-300 disabled:opacity-50"
            disabled={loading || status === "checked-in"}
          >
            {loading
              ? "Checking..."
              : status === "checked-in"
                ? "Already Checked In"
                : "Check In Guest"}
          </button>

          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold text-sm py-2 rounded-xl transition-all duration-300">
            Reject
          </button>
        </div>

        {error && (
          <p className="text-red-400 text-xs mt-2 font-lato">{error}</p>
        )}
      </div>
    </div>
  );
}

export default BookingValidation;
