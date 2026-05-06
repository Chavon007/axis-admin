import { useState } from "react";
import { Hotel } from "../services/createHotelService";
import type { createHotel } from "../types/hotel";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

export function useCreateHotel() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = useSelector((state: RootState) => state.auth.user);
  const createhotel = async ({
    hotelName,
    acceptingBooking,
    visibility,
    email,
    phoneNumber,
    description,
    address,
    image,
    rating,
    bookingApproval,
  }: createHotel) => {
    try {
      if (!user) {
        setError("User not authenticated");
        return;
      }

      const data = await Hotel({
        hotelName,
        acceptingBooking,
        visibility,
        rating,
        image,
        phoneNumber,
        email,
        bookingApproval,
        address,
        description,
        created_by: user?.email,
      });

      if (!data) {
        setError("Failed to create hotel");
      }
      setSuccess("Hotel created");
      return data;
    } catch (err) {
      setError("Can't hotel now");
    }
  };

  return { error, success, createhotel };
}
