import { useState } from "react";
import type { RoomDetails } from "../types/room";
import { useRoom } from "../hooks/roomHook";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

interface RoomFormProps {
  mode: "Add" | "Edit";
  roomData?: RoomDetails;
  onClose: () => void;
}

const AMENITIES_LIST = [
  "Air Conditioning",
  "Free Wi-Fi",
  "Smart TV",
  "Mini Fridge",
  "Room Service",
  "Balcony View",
  "King Size Bed",
  "Hot Water",
  "Wardrobe",
];

function RoomForm({ mode, roomData, onClose }: RoomFormProps) {
  const { addRoom, editRoom, loading, error } = useRoom();

  const [formData, setFormData] = useState<RoomDetails>({
    id: roomData?.id ?? "",
    hotel_id: roomData?.hotel_id ?? "",
    name: roomData?.name ?? "",
    floor: roomData?.floor ?? 1,
    size: roomData?.size ?? "",
    maxGuests: roomData?.maxGuests ?? 2,
    beds: roomData?.beds ?? "",
    status: roomData?.status ?? "available",
    roomType: roomData?.roomType ?? "deluxe",
    amount: roomData?.amount ?? "",
    description: roomData?.description ?? "",
    amenities: roomData?.amenities ?? [],
    photo: roomData?.photo ?? [],
  });

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    roomData?.amenities ?? [],
  );
  const [images, setImages] = useState<File[]>([]);
  const [validationError, setValidationError] = useState("");

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || !formData.description || !formData.id) {
      setValidationError("Please fill all required fields");
      return;
    }
    const finalData = { ...formData, amenities: selectedAmenities };
    if (mode === "Add") {
      await addRoom(finalData);
    } else {
      await editRoom(finalData.id, finalData);
    }
    onClose();
  };

  return (
    <div className="h-auto pb-6 w-[95%] mx-auto mt-2">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        {/* HEADER */}
        <section className="border bg-neutral-900 rounded border-amber-100 p-2">
          <div className="flex justify-between items-center p-3">
            <h4 className="text-sm font-lato font-bold text-amber-50">
              {mode === "Add" ? "Add New Room" : "Edit Room"}
            </h4>
            <IoIosClose
              onClick={onClose}
              className="text-2xl text-amber-50 cursor-pointer hover:text-amber-400 transition"
            />
          </div>
        </section>

        {/* ROOM INFO */}
        <section className="border bg-neutral-900 rounded border-amber-100 py-5 px-2">
          <h4 className="text-sm font-lato font-bold text-amber-50 border-b p-3">
            Room Information
          </h4>

          <div className="flex justify-between items-center">
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
                Room ID
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                value={formData.id}
                placeholder="bp-dlx-1"
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
              />
            </label>
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
                Room Name
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                value={formData.name}
                placeholder="Deluxe Suite 701"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </label>
          </div>

          <div className="flex justify-between items-center">
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
                Floor
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                type="number"
                value={formData.floor}
                onChange={(e) =>
                  setFormData({ ...formData, floor: Number(e.target.value) })
                }
              />
            </label>
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
                Size
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                value={formData.size}
                placeholder="52 sqm"
                onChange={(e) =>
                  setFormData({ ...formData, size: e.target.value })
                }
              />
            </label>
          </div>

          <div className="flex justify-between items-center">
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
                Room Type
              </h5>
              <select
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                value={formData.roomType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    roomType: e.target.value as RoomDetails["roomType"],
                  })
                }
              >
                <option value="deluxe">Deluxe</option>
                <option value="semi-deluxe">Semi-Deluxe</option>
                <option value="standard">Standard</option>
              </select>
            </label>
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
                Beds
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                value={formData.beds}
                placeholder="1 King Bed"
                onChange={(e) =>
                  setFormData({ ...formData, beds: e.target.value })
                }
              />
            </label>
          </div>

          <div className="flex justify-between items-center">
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
                Max Guests
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                type="number"
                value={formData.maxGuests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    maxGuests: Number(e.target.value),
                  })
                }
              />
            </label>
            <label className="w-[50%] p-3 flex flex-col gap-2">
              <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
                Price / Night
              </h5>
              <input
                className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
                type="text"
                value={formData.amount}
                placeholder="₦125,000"
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </label>
          </div>

          <label className="w-full py-2 px-3 flex flex-col gap-2">
            <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
              Status
            </h5>
            <select
              className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as RoomDetails["status"],
                })
              }
            >
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </label>

          <label className="w-full py-2 px-3 flex flex-col gap-2">
            <h5 className="text-xs font-lato font-light italic text-amber-50 ml-1">
              Description
            </h5>
            <textarea
              className="p-2 h-25 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
              value={formData.description}
              placeholder="Room description..."
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </label>
        </section>

        {/* AMENITIES */}
        <section className="border bg-neutral-900 rounded border-amber-100 py-5 px-2">
          <h4 className="text-sm font-lato font-bold text-amber-50 border-b p-3">
            Amenities
          </h4>
          <div className="grid grid-cols-3 gap-3 p-3">
            {AMENITIES_LIST.map((amenity) => (
              <label
                key={amenity}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="accent-amber-400 cursor-pointer"
                  checked={selectedAmenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                />
                <span className="text-xs font-lato text-gray-300">
                  {amenity}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* PHOTOS */}
        <section className="border bg-neutral-900 rounded border-amber-100 py-5 px-2">
          <h4 className="text-sm font-lato font-bold text-amber-50 border-b p-3">
            Room Photos
          </h4>
          <label className="flex flex-col items-center justify-center cursor-pointer h-24 text-white font-lato">
            <CiImageOn size={24} />
            <p className="text-sm">Upload room photos</p>
            <small className="text-gray-400 text-xs">
              You can upload multiple photos
            </small>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                setImages((prev) => [...prev, ...files]);
              }}
            />
          </label>

          {images.length > 0 && (
            <div className="flex flex-wrap gap-2 px-3 mt-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt={`preview ${index}`}
                  className="w-20 h-20 object-cover rounded border border-neutral-600"
                />
              ))}
            </div>
          )}
        </section>

        {/* BUTTONS */}
        <section className="flex gap-2 justify-end items-center">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-lato font-light cursor-pointer hover:scale-105 hover:bg-neutral-700 w-30 bg-neutral-400 p-2 rounded text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="text-xs font-lato font-light cursor-pointer hover:scale-105 hover:bg-neutral-400 w-30 bg-neutral-700 p-2 rounded text-white"
          >
            {loading
              ? "Saving..."
              : mode === "Add"
                ? "Add Room"
                : "Update Room"}
          </button>
        </section>

        {validationError && (
          <p className="text-red-500 text-center text-xs">{validationError}</p>
        )}
        {error && <p className="text-red-500 text-center text-xs">{error}</p>}
      </form>
    </div>
  );
}

export default RoomForm;
