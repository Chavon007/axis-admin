import { useState } from "react";
import BookingSearch from "../../components/bookingReference";
import BookingValidation from "../../components/bookingValid";
import QRScanner from "../../components/qrScanner";
import type { fetchBookings } from "../../types/hotel";
import { useBooking } from "../../hooks/getBookingHook";

function VerifyGuest() {
  const [foundBooking, setFoundBooking] = useState<fetchBookings | null>(null);
  const { bookings } = useBooking();

  const handleSearch = (decodedText: string) => {
    const found = bookings?.find((b) => b.bookingId === decodedText);

    if (found) setFoundBooking(found);
  };
  return (
    <div className=" h-screen flex  gap-2 w-[92%] p-2 mx-auto">
      <div className=" w-[50%]  bg-neutral-900 border border-amber-50 p-2">
        <QRScanner onScan={handleSearch} />
      </div>

      <section className="flex flex-col gap-5 mx-auto w-[50%]">
        <div className="">
          <BookingSearch onSearch={setFoundBooking} />
        </div>
        {foundBooking ? (
          <BookingValidation {...foundBooking} />
        ) : (
          <div className="border border-amber-100 h-screen bg-neutral-900 text-amber-50 text-sm font-bold font-montserra flex justify-center items-center">
            <p>No booking found yet. Scan a QR code or enter a reference.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default VerifyGuest;
