import { useSelector, useDispatch } from "react-redux";

import {
  setError,
  saveRooomToDb,
  updateRoomToDb,
  removeRoom,
  addNewRoom,
  replaceRoom,
} from "../store/slices/roomSlice";
import type { RootState, AppDispatch } from "../store/store";
import type { RoomDetails } from "../types/room";

export function useRoom() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const loading = useSelector((state: RootState) => state.room.loading);
  const error = useSelector((state: RootState) => state.room.error);
  const rooms = useSelector((state: RootState) => state.room.rooms);

  const addRoom = async (roomData: RoomDetails) => {
    const tempId = `temp_${Date.now()}`;
    const optimisticRoom = { ...roomData, id: tempId, isPending: true };
    dispatch(addNewRoom(optimisticRoom));

    const result = await dispatch(saveRooomToDb({ ...roomData, tempId }));

    if (saveRooomToDb.rejected.match(result)) {
      dispatch(removeRoom(tempId));
      dispatch(setError("Failed to add room"));
    }
  };

  const editRoom = async (roomId: string, roomData: RoomDetails) => {
    dispatch(replaceRoom({ tempId: roomId, savedRoom: roomData }));

    const result = await dispatch(updateRoomToDb({ ...roomData, id: roomId })); 

    if (updateRoomToDb.rejected.match(result)) {
      dispatch(setError("Failed to update room"));
    }
  };
  return { addRoom, token, loading, error, rooms, editRoom };
}
