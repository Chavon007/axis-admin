import type { filterBooking } from "../types/hotel";

const filter = [
  {
    title: "All",
  },
  {
    title: "Confirmed",
  },
  {
    title: "Checked In",
  },
  {
    title: "Checked out",
  },
  {
    title: "Pending",
  },
];

export function BookingFilter({
  activeFilter,
  setActiveFilter,
}: filterBooking) {
  return (
    <div className="flex justify-between gap-2 items-center">
      {filter.map((f) => (
        <button
          key={f.title}
          className={` bg-neutral-900 rounded cursor-pointer hover:scale-105 transition font-lato p-2 w-30 text-xs ${activeFilter === f.title ? "text-amber-400" : "text-gray-400"} `}
          onClick={() => setActiveFilter(f.title)}
        >
          {f.title}
        </button>
      ))}
    </div>
  );
}
