import { useState } from "react";
import type { createHotel } from "../types/hotel";
import { useCreateHotel } from "../hooks/createHotelHook";

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
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <h4>Cover Photo</h4>
          <input
            type="files"
            accept="image/*"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files?.[0] ?? "" })
            }
          />
        </section>

        <section>
          <h4>Hotel Information</h4>
          <div>
            <label>
              <h5>Hotel Name</h5>
              <input
                type="text"
                value={formData.hotelName}
                onChange={(e) =>
                  setFormData({ ...formData, hotelName: e.target.value })
                }
                placeholder="Grand Continental Hotel"
              />
            </label>
            <label>
              <h5>Star Rating</h5>
              <select
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
          <label>
            <h5>Address</h5>
            <input
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="15 Victoria Island Blvd, Lagos"
            />
          </label>
          <label>
            <h5>Description</h5>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              name=""
              id=""
              placeholder="Hotel description..."
            ></textarea>
          </label>

          <div>
            <label>
              Phone number
              <input
                type="tel"
                placeholder="+234 1 234 5678"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </label>

            <label>
              Email
              <input
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

        <section>
          <h4>Visibility & Booking Controls</h4>

          <label>
            <div>
              <h5>Listed on StayHub app</h5>
              <small>Hotel is visible to guests browsing</small>
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.visibility}
                onChange={(e) =>
                  setFormData({ ...formData, visibility: e.target.checked })
                }
              />
              <span></span>
            </div>
          </label>

          <label>
            <div>
              <h5>Accepting new bookings</h5>
              <small>Guests can book available rooms</small>
            </div>
            <div>
              <input
                type="checkbox"
                checked={formData.acceptingBooking}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    acceptingBooking: e.target.checked,
                  })
                }
              />
              <span></span>
            </div>
          </label>
          <label>
            <div>
              <h5>Require booking approval</h5>
              <small>You manually confirm each booking</small>
            </div>
            <div>
              <input
                checked={formData.bookingApproval}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bookingApproval: e.target.checked,
                  })
                }
                type="checkbox"
              />
              <span></span>
            </div>
          </label>
          <label>
            <div>
              <h5>Instant booking (auto-confirm)</h5>
              <small>Bookings confirmed after payment</small>
            </div>
            <div>
              <input
                checked={formData.instantBooking}
                onChange={(e) =>
                  setFormData({ ...formData, instantBooking: e.target.checked })
                }
                type="checkbox"
              />
              <span></span>
            </div>
          </label>
        </section>

        <section>
          <button>Discard</button>
          <button disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </section>

        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        {formError && <p>{formError}</p>}
      </form>
    </div>
  );
}
