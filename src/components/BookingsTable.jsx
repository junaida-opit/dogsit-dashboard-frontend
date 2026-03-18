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
  return (
    <tr className="border-t [&_td]:py-4 [&_td]:text-center [&_td]:mx-auto">
      <td className="">
        <span className="">#{booking.reference}</span>
      </td>
      <td>{booking.name}</td>
      <td className="hidden xl:table-cell">{booking.address}</td>
      <td>{booking.date}</td>
      <td className="hidden lg:table-cell">{booking.type}</td>
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
    <span className={`px-3 py-1 rounded  ${styles[status]}`}>{status}</span>
  );
}
