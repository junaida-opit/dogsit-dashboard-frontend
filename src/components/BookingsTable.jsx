import { useNavigate } from "react-router-dom";
export default function BookingsTable({ bookings }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th>Reference</th>
          <th>Name</th>
          <th className="hidden xl:table-cell">Address</th>
          <th>Date</th>
          <th className="hidden lg:table-cell">Type</th>
          <th className="hidden lg:table-cell">Paid?</th>
        </tr>
      </thead>

      <tbody className="">
        {bookings.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </tbody>
    </table>
  );
}

function BookingRow({ booking }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bookings/${booking.id}`);
  };

  return (
    <tr
      onClick={handleClick}
      className="border-t text-gray-800 border-gray-300 cursor-pointer hover:bg-gray-100 transition [&_td]:py-4 [&_td]:text-center"
    >
      <td>#{booking.id}</td>
      <td>{booking.customerName}</td>
      <td className="hidden xl:table-cell">{booking.location}</td>
      <td>{booking.scheduledAt}</td>
      <td className="hidden lg:table-cell">{booking.service}</td>
      <td className="hidden lg:table-cell">
        <StatusBadge status={booking.status} />
      </td>
    </tr>
  );
}

function StatusBadge({ status }) {
  const styles = {
    paid: "bg-green-100 text-green-600",
    unpaid: "bg-red-100 text-red-600",
    processing: "bg-purple-100 text-purple-600",
  };

  return (
    <span className={`px-3 py-1 rounded capitalize ${styles[status]}`}>
      {status}
    </span>
  );
}
