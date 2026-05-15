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

  //separate state for amenities checkboxes
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    roomData?.amenities ?? []
  );

  // separate state for image files (just for preview)
  const [images, setImages] = useState<File[]>([]);

  const [validationError, setValidationError] = useState("");

  //  simple toggle — if already in list remove it, if not add it
  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.amount || !formData.description || !formData.id) {
      setValidationError("Please fill all required fields");
      return;
    }

    //  merge selectedAmenities into formData before submitting
    const finalData = { ...formData, amenities: selectedAmenities };

    if (mode === "Add") {
      await addRoom(finalData);
    } else {
      await editRoom(finalData.id, finalData);
    }
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <h4>{mode === "Add" ? "Add New Room" : "Edit Room"}</h4>
            <IoIosClose onClick={onClose} />
          </div>
        </section>

        <section>
          <label>
            Room Id
            <input
              value={formData.id}
              placeholder="bp-dlx-1"
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            />
          </label>
          <label>
            Floor
            <input
              type="number"
              value={formData.floor}
              onChange={(e) =>
                setFormData({ ...formData, floor: Number(e.target.value) })
              }
            />
          </label>
        </section>

        <section>
          <label>
            Room Type
            <select
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
          <label>
            Max Guests
            <input
              type="number"
              value={formData.maxGuests}
              onChange={(e) =>
                setFormData({ ...formData, maxGuests: Number(e.target.value) })
              }
            />
          </label>
        </section>

        <section>
          <label>
            Price / night
            <input
              type="text"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
          </label>
          <label>
            Status
            <select
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
        </section>

        <section>
          <label>
            Description
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </label>
        </section>

        {/*  Amenities — simple toggle */}
        <section>
          <h3>Amenities</h3>
          <div>
            {AMENITIES_LIST.map((amenity) => (
              <label key={amenity}>
                <input
                  type="checkbox"
                  checked={selectedAmenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Photos — files just for preview, not stored in formData */}
        <section>
          <label>
            Room Photos
            <div>
              <CiImageOn size={24} />
              <p>Upload room photos</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  setImages((prev) => [...prev, ...files]); // ✅ preview only
                }}
              />
            </div>
          </label>

          <div>
            {images.map((img, index) => (
              <img key={index} src={URL.createObjectURL(img)} alt={`preview ${index}`} />
            ))}
          </div>
        </section>

        <section>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">
            {loading ? "Saving..." : mode === "Add" ? "Add Room" : "Update Room"}
          </button>
        </section>

        {validationError && <p>{validationError}</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default RoomForm;