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
    <div>
      {statcard.map((s, index) => (
        <div key={index}>
          {s.icon}
          <h5>{s.title}</h5>
          <p>{s.number}</p>
          <small>{s.info}</small>
        </div>
      ))}
    </div>
  );
}

export default StatCard;
