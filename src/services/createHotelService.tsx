import supabase from "../utils/supabaseClient";
import type { createHotel } from "../types/hotel";

export const Hotel = async ({
  hotelName,
  acceptingBooking,
  address,
  phoneNumber,
  image,
  rating,
  email,
  visibilityy,
  bookingApproval,
  created_by,
}: createHotel) => {
  const { data, error } = await supabase
    .from("Hotels")
    .insert([
      {
        hotelName,
        acceptingBooking,
        address,
        phoneNumber,
        image,
        rating,
        email,
        visibility,
        bookingApproval,
        created_by,
      },
    ])
    .select();

  if (error) throw error;

  return data;
};
