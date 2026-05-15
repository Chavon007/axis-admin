import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const checkInGuest = createAsyncThunk(
  "rooms/checkIn",
  async (bookingId: string, { rejectWithValue }) => {
    try {
      const saveCheckIn = await fetch("http//:localhost:5000", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookingId }),
      });
      const data = await saveCheckIn.json();
      return data;
    } catch (err: any) {
      return rejectWithValue({ err: err.message });
    }
  },
);
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

    updateBookingStatus: (
      state,
      action: PayloadAction<{ bookingId: string; status: string }>,
    ) => {
      const booking = state.bookings?.find(
        (r) => r.bookingId === action.payload.bookingId,
      );
      if (booking) {
        booking.status = action.payload.status;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(checkInGuest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkInGuest.fulfilled, (state, action) => {
        state.loading = false;
        const bookingIndex = state.bookings?.findIndex(
          (r) => r.bookingId === action.payload.bookingId,
        );
        if (
          bookingIndex !== undefined &&
          bookingIndex !== -1 &&
          state.bookings
        ) {
          state.bookings[bookingIndex] = action.payload;
        }
        state.error = null;
      })
      .addCase(checkInGuest.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload?.error ?? "Failed to update booking";
      });
  },
});

export const { setLoading, setError, setBooking, updateBookingStatus } =
  bookingSlice.actions;
export default bookingSlice.reducer;
