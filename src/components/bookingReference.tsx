import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useBooking } from "../hooks/getBookingHook";
import type { fetchBookings } from "../types/hotel";

interface bookingSearchProps {
  onSearch: (bokking: fetchBookings) => void;
}
function BookingSearch({ onSearch }: bookingSearchProps) {
  const { bookings } = useBooking();
  const [reference, setReference] = useState("");

  const handleSearch = () => {
    const found = bookings?.find(
      (b) => b.bookingId === reference.trim().toUpperCase(),
    );

    if (found) onSearch(found);
  };

  return (
    <div>
      <h4>Booking Reference Code</h4>
      <div>
        <input
          value={reference}
          type="text"
          onChange={(e) => setReference(e.target.value)}
          placeholder="e.g. STH-2041"
        />
        <button onClick={handleSearch}>
          Start search"
          <span>
            <CiSearch />
          </span>
        </button>
      </div>
    </div>
  );
}

export default BookingSearch;
