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
    amenities: roomData?.amenities ?? false,
    photo: roomData?.photo ?? [],
  });

  const [images, setImages] = useState<File[]>([]);
  const [validationError, setValidationError] = useState<string | []>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.amenities ||
      !formData.amount ||
      !formData.description ||
      !formData.photo ||
      !formData.roomType ||
      !formData.beds ||
      !formData.floor ||
      !formData.size ||
      !formData.maxGuests ||
      !formData.photo ||
      !formData.id
    ) {
      setValidationError("Please fill all required fields");
      return;
    }
    if (mode === "Add") {
      await addRoom(formData);
    } else {
      await editRoom(formData.id, formData);
    }
    onClose();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <h4>{mode === "Add" ? "Add New Room" : "Edit Room"}</h4>
            <IoIosClose />
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
              value={formData.floor}
              onChange={(e) =>
                setFormData({ ...formData, floor: Number(e.target.value) })
              }
            />
          </label>
        </section>

        <section>
          <label>
            <h3>Room Type</h3>
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
              <option value="semi-deluxe">Semi-deluxe</option>
              <option value="standard">Standard</option>
            </select>
          </label>
          <label>
            <h3>Max Guests</h3>
            <input
              value={formData.maxGuests}
              onChange={(e) =>
                setFormData({ ...formData, maxGuests: Number(e.target.value) })
              }
            />
          </label>
        </section>

        <section>
          <label>
            <h3>Price / night</h3>
            <input
              type="text"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
          </label>
          <label>
            <h3>Status</h3>
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
            <h3>Description</h3>
            <textarea
              name=""
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
          </label>
        </section>

        <section>
          <h3>Amenities</h3>
          <div>
            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>Air Conditioning</h5>
            </label>

            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>Free Wi-Fi</h5>
            </label>

            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>Smart TV</h5>
            </label>

            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>Mini Fridge</h5>
            </label>

            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>Room Service</h5>
            </label>

            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>Balcony View</h5>
            </label>

            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>King Size Bed</h5>
            </label>

            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>Hot Water</h5>
            </label>

            <label>
              <input
                checked={formData.amenities}
                onChange={(e) =>
                  setFormData({ ...formData, amenities: e.target.checked })
                }
              />
              <h5>Wardrobe</h5>
            </label>
          </div>
        </section>

        <section>
          <label>
            <h3>Room Photos</h3>

            <div>
              <CiImageOn size={24} />
              <p className="text-sm">Upload hotel cover photo</p>
              <small className="text-gray-400 text-xs">
                Recommended: 1200 × 400px
              </small>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);

                  setImages((prev) => [...prev, ...files]);

                  setFormData({
                    ...formData,
                    photo: [...formData.photo, ...files],
                  });
                }}
              />
            </div>
          </label>

          <div>
            {images.map((i, index) => (
              <img key={index} src={URL.createObjectURL(i)} />
            ))}
          </div>
        </section>

        <section>
          <button>{loading ? "Canceling..." : "Camcel"}</button>
          <button>
            {loading
              ? "Saving..."
              : mode === "Add"
                ? "Add Room"
                : "Updating room"}
          </button>
        </section>

        {error && <p>{error}</p>}
        {validationError && <p>{validationError}</p>}
      </form>
    </div>
  );
}

export default RoomForm;
