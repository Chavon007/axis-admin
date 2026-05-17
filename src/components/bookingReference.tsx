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
    <div className=" bg-neutral-900 border border-amber-50 p-2">
      <h4 className="text-sm font-lato font-bold p-2 border-b border-amber-100 text-amber-50">
        Booking Reference Code
      </h4>

      <div className="">
        <input
          value={reference}
          type="text"
          onChange={(e) => setReference(e.target.value)}
          placeholder="e.g. STH-2041"
          className="w-full mt-2 bg-neutral-800 border border-neutral-700 text-amber-50 px-3 py-2 text-sm outline-none focus:border-amber-400"
        />

        <button
          onClick={handleSearch}
          className="mt-2 flex rounded cursor-pointer items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black px-3 py-2 text-sm font-bold font-lato"
        >
          Start search
          <span>
            <CiSearch />
          </span>
        </button>

        <small className="block mt-2 text-xs text-gray-400 font-lato">
          Enter the guest booking reference code to continue
        </small>
      </div>
    </div>
  );
}

export default BookingSearch;
