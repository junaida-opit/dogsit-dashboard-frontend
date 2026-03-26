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

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4">
      <h2 className="text-sm font-semibold mb-4">Active Bookings</h2>

      {/* Header row */}
      <div className="hidden sm:grid grid-cols-4 text-xs text-gray-500 mb-2 px-1">
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
            className="cursor-pointer hover:bg-gray-100 transition p-2 rounded-lg border border-gray-100 sm:grid sm:grid-cols-4 sm:gap-2 flex flex-col gap-1"
          >
            {/* For small screens, stack labels */}
            <div className="flex justify-between sm:block">
              <div className="sm:hidden text-xs text-gray-500">Client</div>
              <span className="text-sm">{booking.customerName}</span>
            </div>

            <div className="flex justify-between sm:block">
              <div className="sm:hidden text-xs text-gray-500">Service</div>
              <span className="text-sm">{booking.service}</span>
            </div>

            <div className="flex justify-between sm:block">
              <div className="sm:hidden text-xs text-gray-500">Sitter</div>
              <span className="text-sm">{booking.sitterName}</span>
            </div>

            {/* Completion */}
            <div className="flex flex-col items-end">
              <div className="flex justify-between w-full sm:w-auto">
                <div className="sm:hidden text-xs text-gray-500">
                  Completion
                </div>
                <span className="text-xs text-gray-500 mb-1">
                  {booking.progress}%
                </span>
              </div>

              <div className="w-full sm:w-24 bg-gray-200 h-2 rounded">
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
