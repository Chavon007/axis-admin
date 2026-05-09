function BookingCard({
  bookingId,
  guest,
  room,
  checkedIn,
  checkedOut,
  nights,
  amount,
  status,
  action,
}: fetchBookings) {
  const statusColor =
    status === "Confirmed"
      ? "bg-green-500/20 text-green-400"
      : status === "Pending"
        ? "bg-yellow-500/20 text-yellow-400"
        : status === "Checked In"
          ? "bg-blue-500/20 text-blue-400"
          : "bg-gray-500/20 text-gray-400";

  return (
    <tr className="border-b border-neutral-800 hover:bg-neutral-900 transition-all duration-200">
      <td className="px-4 py-3 text-sm text-amber-100 font-montserra">
        {bookingId}
      </td>
      <td className="px-4 py-3 text-sm text-white">{guest}</td>
      <td className="px-4 py-3 text-sm text-gray-300">{room}</td>
      <td className="px-4 py-3 text-sm text-gray-300">{checkedIn}</td>
      <td className="px-4 py-3 text-sm text-gray-300">{checkedOut}</td>
      <td className="px-4 py-3 text-sm text-gray-300">{nights}</td>
      <td className="px-4 py-3 text-sm text-white font-semibold">{amount}</td>
      <td className="px-4 py-3">
        <span
          className={`text-xs px-2 py-1 rounded-full font-semibold ${statusColor}`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-3">
        <button className="text-xs text-amber-400 border border-amber-400 px-3 py-1 rounded hover:bg-amber-400 hover:text-black transition-all duration-200">
          {action}
        </button>
      </td>
    </tr>
  );
}

export default BookingCard;
