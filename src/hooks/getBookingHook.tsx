import { getBookings } from "../services/bookingServices";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setBooking, setError, setLoading } from "../store/slices/bookingSlice";

export function useBooking() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

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

  return { fetchBooking };
}
