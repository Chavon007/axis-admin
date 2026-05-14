import { useState } from "react";
import RoomCard from "../../components/roomCard";
import RoomFilter from "../../components/roomFilter";
import { FcEmptyFilter } from "react-icons/fc";
import type { RoomDetails } from "../../types/room";
import RoomForm from "../../components/roomForm";
const adminRoomSeedData = [
  {
    roomId: "bp-dlx-1",
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
    roomId: "bp-dlx-2",
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
    roomId: "bp-dlx-3",
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
    roomId: "bp-sdlx-4",
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
    roomId: "bp-sdlx-5",
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
    roomId: "bp-sdlx-6",
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
    roomId: "bp-std-7",
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
    roomId: "bp-std-8",
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
    roomId: "bp-std-9",
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
    roomId: "bp-std-10",
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

export function Rooms() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomDetails | null>(null);
  const [mode, setMode] = useState<"Add" | "Edit">("Add");

  const handleEdit = (room: RoomDetails) => {
    setSelectedRoom(room);
    setMode("Edit");
    setShowForm(true);
  };

  const handleAdd = () => {
    setSelectedRoom(null);
    setMode("Add");
    setShowForm(true);
  };
  const handleRoomFilter = adminRoomSeedData?.filter((r) =>
    activeFilter === "All"
      ? true
      : r.status === activeFilter.trim().toLowerCase(),
  );
  return (
    <div className=" min-h-screen w-[90%] mx-auto h-auto flex flex-col gap-2 p-2">
      <section className="p-2 max-w-135">
        <RoomFilter
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
      </section>

      <section className=" grid grid-cols-3 gap-3">
        {handleRoomFilter?.length === 0 ? (
          <div className="">
            <small>
              <FcEmptyFilter />
            </small>
            <p>You haven't added any room yet. Add rooms</p>
          </div>
        ) : (
          handleRoomFilter?.map((rooms) => (
            <RoomCard key={rooms.roomId} {...rooms} onEdit={handleEdit} />
          ))
        )}
      </section>


      {showForm &&(
        <RoomForm mode={mode} roomData={selectedRoom ?? undefined} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
export default Rooms;
