import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { fetchBookings } from "../../types/hotel";

interface bookingState {
  bookings: fetchBookings[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: bookingState = {
  bookings: null,
  loading: false,
  error: null,
};
const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setBooking: (state, action: PayloadAction<fetchBookings[]>) => {
      state.bookings = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError, setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
