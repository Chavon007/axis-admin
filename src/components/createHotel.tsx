import { useState } from "react";
import type { createHotel } from "../types/hotel";
import { useCreateHotel } from "../hooks/createHotelHook";
import { CiImageOn } from "react-icons/ci";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
export function CreateHotel() {
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
    instantBooking: false,
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

  return (
    <div className="h-auto pb-6">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <section className="border h-40 bg-neutral-900 rounded border-amber-100 p-2">
          <h4 className="text-sm font-lato font-bold text-amber-50 border-b p-3">
            Cover Photo
          </h4>

          <label className="flex flex-col items-center justify-center cursor-pointer h-24 text-white font-lato">
            <CiImageOn size={24} />
            <p className="text-sm">Upload hotel cover photo</p>
            <small className="text-gray-400 text-xs">
              Recommended: 1200 × 400px
            </small>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files?.[0] ?? "" })
              }
            />
          </label>
        </section>

        <section className="border h-auto bg-neutral-900 rounded border-amber-100 py-5 px-2">
          <h4 className="text-sm font-lato font-bold text-amber-50 border-b p-3">
            Hotel Information
          </h4>
          <div className="flex justify-between items-center">
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1 ">
                Hotel Name
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                type="text"
                value={formData.hotelName}
                onChange={(e) =>
                  setFormData({ ...formData, hotelName: e.target.value })
                }
                placeholder="Grand Continental Hotel"
              />
            </label>
            <label className="w-[50%]  p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1 ">
                Star Rating
              </h5>
              <select
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: e.target.value })
                }
              >
                <option>5 stars</option>
                <option>4 stars</option>
                <option>3 stars</option>
                <option>2 stars</option>
                <option>1 star</option>
              </select>
            </label>
          </div>
          <label className="w-full py-2 px-3 flex flex-col gap-2">
            <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1 ">
              Address
            </h5>
            <input
              className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="15 Victoria Island Blvd, Lagos"
            />
          </label>
          <label className="w-full py-2 px-3 flex flex-col gap-2">
            <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1 ">
              Description
            </h5>
            <textarea
              className="p-2 h-25 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              name=""
              id=""
              placeholder="Hotel description..."
            ></textarea>
          </label>

          <div className="flex justify-between items-center">
            <label className="w-[50%] py-2 px-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1 ">
                Phone number
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                type="tel"
                placeholder="+234 1 234 5678"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </label>

            <label className="w-[50%] py-2 px-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1 ">
                {" "}
                Email
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="info@grandcontinental.com"
              />
            </label>
          </div>
        </section>

        <section className="border h-auto bg-neutral-900 rounded border-amber-100 py-5 px-2">
          <h4 className="text-sm font-lato font-bold text-amber-50 border-b p-3">
            Visibility & Booking Controls
          </h4>

          <label className="flex justify-between items-center p-3">
            <div className=" flex flex-col">
              <h5 className="text-sm  font-montserra font-bold  text-amber-50 ml-1 ">
                Listed on StayHub app
              </h5>
              <small className="text-xs font-lato font-light italic text-gray-400 ml-1 ">
                Hotel is visible to guests browsing
              </small>
            </div>
            <div
              className="cursor-pointer text-2xl"
              onClick={() =>
                setFormData({ ...formData, visibility: !formData.visibility })
              }
            >
              {formData.visibility ? (
                <FaToggleOn className="text-amber-400 " />
              ) : (
                <FaToggleOff className="text-amber-300 " />
              )}
            </div>
          </label>

          <label className="flex justify-between items-center p-3">
            <div className="flex flex-col">
              <h5 className="text-sm  font-montserra font-bold  text-amber-50 ml-1 ">
                Accepting new bookings
              </h5>
              <small className="text-xs font-lato font-light italic text-gray-400 ml-1 ">
                Guests can book available rooms
              </small>
            </div>
            <div
              className="cursor-pointer text-2xl"
              onClick={() =>
                setFormData({
                  ...formData,
                  acceptingBooking: !formData.acceptingBooking,
                })
              }
            >
              {formData.visibility ? (
                <FaToggleOn className="text-amber-400 " />
              ) : (
                <FaToggleOff className="text-amber-300 " />
              )}
            </div>
          </label>
          <label className="flex justify-between items-center p-3">
            <div className="flex flex-col">
              <h5 className="text-sm font-montserra font-bold  text-amber-50 ml-1">
                Require booking approval
              </h5>
              <small className="text-xs font-lato font-light italic text-gray-400 ml-1 ">
                You manually confirm each booking
              </small>
            </div>
            <div
              className="cursor-pointer text-2xl"
              onClick={() =>
                setFormData({
                  ...formData,
                  bookingApproval: !formData.bookingApproval,
                })
              }
            >
              {formData.bookingApproval ? (
                <FaToggleOn className="text-amber-400 " />
              ) : (
                <FaToggleOff className="text-amber-300 " />
              )}
            </div>
          </label>
          <label className="flex justify-between items-center p-3">
            <div className="flex flex-col">
              <h5 className="text-sm  font-montserra font-bold  text-amber-50 ml-1 ">
                Instant booking (auto-confirm)
              </h5>
              <small className="text-xs font-lato font-light italic text-gray-400 ml-1">
                Bookings confirmed after payment
              </small>
            </div>
            <div
              className="cursor-pointer text-2xl"
              onClick={() =>
                setFormData({
                  ...formData,
                  instantBooking: !formData.instantBooking,
                })
              }
            >
              {formData.instantBooking ? (
                <FaToggleOn className="text-amber-400 " />
              ) : (
                <FaToggleOff className="text-amber-300 " />
              )}
            </div>
          </label>
        </section>

        <section className=" flex gap-2 justify-end items-center">
          <button className="text-xs font-lato font-light cursor-pointer hover:scale-105 hover:bg-neutral-700  w-30 bg-neutral-400 p-2 rounded text-white">
            Discard
          </button>
          <button
            className="text-xs font-lato font-light cursor-pointer hover:scale-105 hover:bg-neutral-400  w-30 bg-neutral-700 p-2 rounded text-white"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </section>

        {error && <p className="text-red-500 text-center text-xs">{error}</p>}
        {success && (
          <p className="text-green-500 text-center text-xs">{success}</p>
        )}
        {formError && (
          <p className="text-red-500 text-center text-xs">{formError}</p>
        )}
      </form>
    </div>
  );
}
