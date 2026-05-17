import { getBookings } from "../services/bookingServices";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

import {
  setBooking,
  setError,
  setLoading,
  checkInGuest,
  updateBookingStatus,
} from "../store/slices/bookingSlice";

export function useBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const loading = useSelector((state: RootState) => state.booking.loading);
  const error = useSelector((state: RootState) => state.booking.error);
  const bookings = useSelector((state: RootState) => state.booking.bookings);

  const fetchBooking = async () => {
    dispatch(setLoading(true));
    try {
      const data = await getBookings(token!);
      dispatch(setBooking(data));
    } catch (err) {
      dispatch(setError("Failed to fetch bookings"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const checkIn = async (bookingId: string) => {
    dispatch(updateBookingStatus({ bookingId, status: "Checked- in" }));

    const updateStatus = await dispatch(checkInGuest(bookingId));

    if (checkInGuest.rejected.match(updateStatus)) {
      dispatch(updateBookingStatus({ bookingId, status: "Confirmed" }));
      dispatch(setError("Failed to check in guest"));
    }
  };

  return { fetchBooking, checkIn, loading, error, bookings };
}
