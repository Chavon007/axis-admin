import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RoomDetails } from "../../types/room";

interface roomState {
  rooms: RoomDetails[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: roomState = {
  rooms: null,
  loading: false,
  error: null,
};

export const saveRooomToDb = createAsyncThunk(
  "rooms/saveRoomToDb",
  async (roomData: RoomDetails & { tempId: string }, { rejectWithValue }) => {
    try {
      const sendData = await fetch("http//:localhost:5000", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roomData),
      });

      const data = await sendData.json();
      return {
        data,
        tempId: roomData.tempId,
      };
    } catch (error: any) {
      return rejectWithValue({ error: error.message, tempId: roomData.tempId });
    }
  },
);

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRoom: (state, action: PayloadAction<RoomDetails[]>) => {
      state.rooms = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    addNewRoom: (state, action) => {
      state.rooms?.push(action.payload);
    },

    replaceRoom: (state, action) => {
      const { tempId, savedRoom } = action.payload;
      const index = state.rooms?.findIndex((r) => r.id === tempId);
      if (index !== undefined && index !== -1 && state.rooms)
        state.rooms[index] = savedRoom;
    },
    removeRoom: (state, action: PayloadAction<string>) => {
      state.rooms = state.rooms?.filter((r) => r.id !== action.payload) ?? null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(saveRooomToDb.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveRooomToDb.fulfilled, (state, action) => {
        state.loading = false;
        const { tempId, data: savedRoom } = action.payload;
        const index = state.rooms?.findIndex((r) => r.id === tempId);
        if (index !== undefined && index !== -1 && state.rooms) {
          state.rooms[index] = savedRoom;
        }
      })
      .addCase(saveRooomToDb.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload?.error ?? "Failed to save room";
      });
  },
});

export const {
  addNewRoom,
  removeRoom,
  setError,
  setLoading,
  setRoom,
  replaceRoom,
} = roomSlice.actions;
export default roomSlice.reducer;
