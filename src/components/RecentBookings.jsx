import { useRecentBookings } from "../hooks/useBookings";
import { timeFormatter, dateFormatter } from "../utils/functions";
import { useNavigate } from "react-router-dom";

export default function RecentBookings() {
  const navigate = useNavigate(); // ✅ invoke it

  const { data: recentBookings, isLoading } = useRecentBookings();

  if (isLoading || !recentBookings) {
    return <div className="text-white">Loading...</div>;
  }

  const handleClick = (id) => {
    navigate(`/bookings/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-sm font-semibold mb-4">Recent Bookings</h2>

      <div className="space-y-3">
        {recentBookings.map((booking) => (
          <div
            key={booking.id}
            onClick={() => handleClick(booking.id)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <p className="text-sm font-medium">
              {booking.service} - {booking.customerName}
            </p>
            <p className="text-xs text-gray-500">
              {dateFormatter(booking.scheduledAt)} @{" "}
              {timeFormatter(booking.scheduledAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
