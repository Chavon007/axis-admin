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
    <div className="bg-red-500">
      <section>
        <div>
          <QRScanner onScan={handleSearch} />
        </div>
        <div>
          <BookingSearch onSearch={setFoundBooking} />
        </div>
      </section>

      <section>
        {foundBooking ? (
          <BookingValidation {...foundBooking} />
        ) : (
          <div>
            <p>No booking found yet. Scan a QR code or enter a reference.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default VerifyGuest;
