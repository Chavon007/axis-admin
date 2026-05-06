import type { statCardProps } from "../types/statcard";

import { MdCheckroom } from "react-icons/md";
import { MdDonutLarge } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";

const statcard = [
  {
    title: "Total Rooms",
    icon: <MdCheckroom />,
    number: 48,
    info: "12 available now",
  },
  {
    title: "Occupancy Rate",
    icon: <MdDonutLarge />,
    number: 75,
    info: "8% vs last week",
  },
  {
    title: "Active Bookings",
    icon: <TbBrandBooking />,
    number: 36,
    info: "3 pending approval",
  },
  {
    title: "Revenue (April)",
    icon: <MdAttachMoney />,
    number: "₦4.2M",
    info: "12% vs March",
  },
];

function StatCard() {
  // {
  //   totalRoom,
  //   availableRoOM,
  //   occupancyRate,
  //   activeBooking,
  //   pendingApproval,
  //   revenue,
  // }: statCardProps
  return (
    <div className="grid grid-cols-4 w-[90%] mx-auto gap-2">
      {statcard.map((s, index) => (
        <div
          className="bg-neutral-800 rounded h-35 flex shadow-gray-200  shadow flex-col justify-center gap-3 items-center "
          key={index}
        >
          <div className="text-gray-300 font-bold text-2xl">{s.icon}</div>
          <h5 className="text-base font-bold font-montserra text-amber-100">{s.title}</h5>
          <p className="text-3xl font-lato font-semibold text-gray-300">{s.number}</p>
          <small className="font-lato font-light italic text-xs text-gray-200">{s.info}</small>
        </div>
      ))}
    </div>
  );
}

export default StatCard;
