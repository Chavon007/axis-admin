import { useState } from "react";
import RoomCard from "../../components/roomCard";
import RoomFilter from "../../components/roomFilter";
import { FcEmptyFilter } from "react-icons/fc";
import type { RoomDetails } from "../../types/room";
import RoomForm from "../../components/roomForm";

const adminRoomSeedData: RoomDetails[] = [
  {
    id: "bp-dlx-1",
    hotel_id: "hotel-001",
    name: "Deluxe Suite 701",
    floor: 7,
    size: "52 sqm",
    maxGuests: 2,
    beds: "1 King Bed",
    roomType: "deluxe",
    status: "available",
    amount: "₦125,000",
    photo: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    ],
    description:
      "Luxurious deluxe suite with separate living area, full minibar, marble bathroom, soaking tub, rainfall shower, and butler service.",
    amenities: [
      "Free Wi-Fi",
      "65-inch Smart TV",
      "Air Conditioning",
      "Full Minibar",
      "Soaking Tub",
      "Rainfall Shower",
      "Butler Service",
      "In-room Safe",
    ],
  },
  {
    id: "bp-dlx-2",
    hotel_id: "hotel-001",
    name: "Deluxe Suite 702",
    floor: 7,
    size: "52 sqm",
    maxGuests: 2,
    beds: "1 King Bed",
    roomType: "deluxe",
    status: "occupied",
    amount: "₦125,000",
    photo: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
      "https://images.unsplash.com/photo-1591088398332-8596b4c8b4fc?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    ],
    description:
      "Elegant deluxe room on the 7th floor with panoramic city views, king bed, marble bathroom, and exclusive lounge access.",
    amenities: [
      "Free Wi-Fi",
      "65-inch Smart TV",
      "Air Conditioning",
      "Full Minibar",
      "King Bed",
      "City View",
      "Lounge Access",
      "In-room Safe",
    ],
  },
  {
    id: "bp-dlx-3",
    hotel_id: "hotel-001",
    name: "Deluxe Suite 703",
    floor: 7,
    size: "52 sqm",
    maxGuests: 2,
    beds: "1 King Bed",
    roomType: "deluxe",
    status: "maintenance",
    amount: "₦125,000",
    photo: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    ],
    description:
      "Premium deluxe suite featuring a private jacuzzi, separate lounge, high ceilings, and a stunning pool-facing balcony.",
    amenities: [
      "Free Wi-Fi",
      "Private Jacuzzi",
      "Air Conditioning",
      "Separate Lounge",
      "Balcony",
      "Full Minibar",
      "Butler Service",
    ],
  },
  {
    id: "bp-sdlx-4",
    hotel_id: "hotel-001",
    name: "Semi-Deluxe Room 401",
    floor: 4,
    size: "38 sqm",
    maxGuests: 2,
    beds: "1 Queen Bed",
    roomType: "semi-deluxe",
    status: "available",
    amount: "₦85,000",
    photo: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
    ],
    description:
      "A stylish semi-deluxe room with a queen bed, modern furnishings, and a cozy seating area — the perfect balance of comfort and affordability.",
    amenities: [
      "Free Wi-Fi",
      "55-inch Smart TV",
      "Air Conditioning",
      "Mini Bar",
      "Queen Bed",
      "Hot Shower",
      "In-room Safe",
    ],
  },
  {
    id: "bp-sdlx-5",
    hotel_id: "hotel-001",
    name: "Semi-Deluxe Room 402",
    floor: 4,
    size: "38 sqm",
    maxGuests: 2,
    beds: "1 Queen Bed",
    roomType: "semi-deluxe",
    status: "occupied",
    amount: "₦85,000",
    photo: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
    ],
    description:
      "Bright and spacious semi-deluxe room on the 4th floor with garden views, a writing desk, and a walk-in shower.",
    amenities: [
      "Free Wi-Fi",
      "55-inch Smart TV",
      "Air Conditioning",
      "Mini Bar",
      "Garden View",
      "Walk-in Shower",
      "Work Desk",
    ],
  },
  {
    id: "bp-sdlx-6",
    hotel_id: "hotel-001",
    name: "Semi-Deluxe Room 403",
    floor: 4,
    size: "38 sqm",
    maxGuests: 2,
    beds: "1 Queen Bed",
    roomType: "semi-deluxe",
    status: "maintenance",
    amount: "₦85,000",
    photo: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&q=80",
    ],
    description:
      "A well-appointed semi-deluxe room with contemporary decor, plush queen bed, rainfall shower, and complimentary breakfast.",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Queen Bed",
      "Rainfall Shower",
      "Complimentary Breakfast",
      "55-inch Smart TV",
    ],
  },
  {
    id: "bp-std-7",
    hotel_id: "hotel-001",
    name: "Standard Room 201",
    floor: 2,
    size: "24 sqm",
    maxGuests: 2,
    beds: "1 Double Bed",
    roomType: "standard",
    status: "available",
    amount: "₦55,000",
    photo: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80",
    ],
    description:
      "A clean and comfortable standard room with all essentials covered — perfect for solo travelers or short overnight stays.",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "43-inch Smart TV",
      "Hot Shower",
      "Work Desk",
      "In-room Safe",
    ],
  },
  {
    id: "bp-std-8",
    hotel_id: "hotel-001",
    name: "Standard Room 202",
    floor: 2,
    size: "24 sqm",
    maxGuests: 2,
    beds: "1 Double Bed",
    roomType: "standard",
    status: "available",
    amount: "₦55,000",
    photo: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=800&q=80",
    ],
    description:
      "A modern standard room on the 2nd floor with a double bed, city-facing window, and complimentary toiletries.",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Double Bed",
      "43-inch Smart TV",
      "Hot Shower",
      "Wardrobe",
    ],
  },
  {
    id: "bp-std-9",
    hotel_id: "hotel-001",
    name: "Standard Room 203",
    floor: 2,
    size: "24 sqm",
    maxGuests: 2,
    beds: "1 Double Bed",
    roomType: "standard",
    status: "occupied",
    amount: "₦55,000",
    photo: [
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&q=80",
    ],
    description:
      "Affordable standard room with a cozy double bed, warm lighting, and easy access to hotel facilities including the pool and gym.",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Double Bed",
      "Hot Shower",
      "43-inch Smart TV",
      "Pool Access",
      "Gym Access",
    ],
  },
  {
    id: "bp-std-10",
    hotel_id: "hotel-001",
    name: "Standard Room 204",
    floor: 2,
    size: "24 sqm",
    maxGuests: 2,
    beds: "1 Double Bed",
    roomType: "standard",
    status: "maintenance",
    amount: "₦55,000",
    photo: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
    ],
    description:
      "A tidy standard room with minimalist design, a single or double bed option, and everything you need for a relaxed stay.",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "43-inch Smart TV",
      "Hot Shower",
      "Wardrobe",
      "In-room Safe",
    ],
  },
];

interface RoomProps {
  showForm: boolean;
  setShowForm: (val: boolean) => void;
  selectedRoom: RoomDetails | null;
  mode: "Add" | "Edit";
  onEdit: (room: RoomDetails) => void;
}

export function Rooms({
  showForm,
  setShowForm,
  selectedRoom,
  mode,
  onEdit,
}: RoomProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleRoomFilter = adminRoomSeedData?.filter((r) =>
    activeFilter === "All"
      ? true
      : r.status === activeFilter.trim().toLowerCase(),
  );

  return (
    <div className="min-h-screen w-[90%] mx-auto h-auto flex flex-col gap-4 p-2">
      {/* FILTER */}
      <section className="p-2 max-w-135">
        <RoomFilter
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
      </section>

      {/* ROOM COUNT */}
      <section className="px-2">
        <p className="text-xs font-lato text-gray-400">
          Showing{" "}
          <span className="text-amber-400 font-semibold">
            {handleRoomFilter?.length}
          </span>{" "}
          {activeFilter === "All" ? "total" : activeFilter.toLowerCase()} rooms
        </p>
      </section>

      {/* ROOM CARDS */}
      <section className="grid grid-cols-3 gap-4">
        {handleRoomFilter?.length === 0 ? (
          <div className="col-span-3 flex flex-col items-center justify-center gap-3 py-20 text-center">
            <FcEmptyFilter size={48} />
            <p className="text-gray-400 font-lato text-sm">
              No rooms found for this filter.
            </p>
            <small className="text-gray-600 text-xs font-lato">
              Try a different filter or add a new room.
            </small>
          </div>
        ) : (
          handleRoomFilter?.map((rooms) => (
            <RoomCard key={rooms.id} {...rooms} onEdit={onEdit} />
          ))
        )}
      </section>

      {/* MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={(e) => {
            // close modal when clicking outside
            if (e.target === e.currentTarget) setShowForm(false);
          }}
        >
          <div className="bg-neutral-950 w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-amber-100/20 shadow-[0_0_40px_rgba(253,230,138,0.1)]">
            <RoomForm
              mode={mode}
              roomData={selectedRoom ?? undefined}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Rooms;
