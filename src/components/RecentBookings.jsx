import { recentBookingsData } from "../../constants";
export default function RecentBookings() {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-sm font-semibold mb-4">Recent Bookings</h2>

      <div className="space-y-3">
        {recentBookingsData.map((item, i) => (
          <div key={i}>
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
