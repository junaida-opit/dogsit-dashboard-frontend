import { activeBookingsData } from "../../constants";

export default function ActiveBookings() {
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
        {activeBookingsData.map((booking, i) => (
          <div key={i} className="grid grid-cols-4 items-center gap-2">
            {/* Text columns */}
            <span className="text-sm">{booking.client}</span>
            <span className="text-sm">{booking.service}</span>
            <span className="text-sm">{booking.sitter}</span>

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
