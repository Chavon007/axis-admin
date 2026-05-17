import type { filterRoom } from "../types/room";

const filter = [
  {
    title: "All",
  },
  {
    title: "Available",
  },
  {
    title: "Occupied",
  },
  {
    title: "Maintenance",
  },
];

function RoomFilter({ activeFilter, setActiveFilter }: filterRoom) {
  return (
    <div className="flex justify-between gap-2 items-center">
      {filter.map((f) => (
        <button
          className={` bg-neutral-900 rounded cursor-pointer hover:scale-105 transition font-lato p-2 w-30 text-xs ${activeFilter === f.title ? "text-amber-400" : "text-gray-400"} `}
          key={f.title}
          onClick={() => setActiveFilter(f.title)}
        >
          {f.title}
        </button>
      ))}
    </div>
  );
}

export default RoomFilter;
