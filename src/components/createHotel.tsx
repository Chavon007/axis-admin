import { useState } from "react";
import type { createHotel } from "../types/hotel";
import { useCreateHotel } from "../hooks/createHotelHook";

function CreateHotel() {
  const [formData, setFormData] = useState<createHotel>({
    hotelName: "",
    rating: "",
    image: "",
    address: "",
    description: "",
    email: "",
    visibility: true,
    acceptingBooking: true,
    bookingApproval: true,
    phoneNumber: "",
    created_by: "",
  });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const { error, success, createhotel } = useCreateHotel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    if (
      !formData.hotelName ||
      !formData.acceptingBooking ||
      !formData.address ||
      !formData.bookingApproval ||
      !formData.phoneNumber ||
      !formData.visibility ||
      !formData.email ||
      !formData.acceptingBooking ||
      !formData.bookingApproval
    ) {
      setFormError("Please fill all requied fields");
      return;
    }
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      setFormError("Invalid email address");
      return;
    }
    if (formData.phoneNumber.length !== 11) {
      setFormError("Phone number can't be less or more than 11");
      return;
    }

    try {
      await createhotel(formData);
    } catch (err) {
      setFormError("failed to create hotel");
    } finally {
      setLoading(false);
    }
  };

  return <div></div>;
}
