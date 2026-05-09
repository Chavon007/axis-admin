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

export function BookingFilter({ activeFilter, setActiveFilter }: filterBooking) {
  return (
    <div>
      {filter.map((f) => (
        <button
          key={f.title}
          className={
            activeFilter === f.title ? "text-amber-400" : "text-gray-400"
          }
          onClick={() => setActiveFilter(f.title)}
        >
          {f.title}
        </button>
      ))}
    </div>
  );
}
