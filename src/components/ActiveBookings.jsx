import { useActiveBookings } from "../hooks/useBookings.js";
import { useNavigate } from "react-router-dom";

export default function ActiveBookings() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/bookings/${id}`);
  };
  const { data: activeBookings, isLoading } = useActiveBookings();
  if (isLoading || !activeBookings) {
    return <div className="text-white">Loading...</div>;
  }
  // console.log(activeBookings);
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4">
      <h2 className="text-sm font-semibold mb-4">Active Bookings</h2>

      {/* Header row */}
      <div className="grid grid-cols-4 text-xs text-gray-500 mb-2 px-1">
        <span>Client</span>
        <span>Service</span>
        <span>Sitter</span>
        <span className="text-right">Completion</span>
      </div>

      <div className="space-y-4">
        {activeBookings.map((booking, i) => (
          <div
            onClick={() => handleClick(booking.id)}
            key={i}
            className="grid grid-cols-4 items-center gap-2 cursor-pointer hover:bg-gray-100 transition p-2 rounded-lg "
          >
            {/* Text columns */}
            <span className="text-sm">{booking.customerName}</span>
            <span className="text-sm">{booking.service}</span>
            <span className="text-sm">{booking.sitterName}</span>

            {/* Completion */}
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 mb-1">
                {booking.progress}%
              </span>

              <div className="w-24 bg-gray-200 h-2 rounded">
                <div
                  className="bg-teal-400 h-2 rounded"
                  style={{ width: `${booking.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
