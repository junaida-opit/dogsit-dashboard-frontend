import { useParams } from "react-router-dom";
import { useDetailedBooking } from "../hooks/useBookings";
import { dateFormatter } from "../utils/functions";
import StatusBadge from "../components/StatusBadge";

export default function DetailedView() {
  const { bookingId } = useParams();
  const id = Number(bookingId);

  const { data: booking, isLoading, isError } = useDetailedBooking(id);

  if (isLoading) return <div className="p-6 text-white">Loading...</div>;

  if (isError || !booking) {
    return (
      <div className="p-6 text-white">
        <h2 className="text-xl font-semibold">Booking not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">
          Booking #{booking.id}
        </h1>
        <StatusBadge status={booking.status} />
      </div>

      {/* 🔥 TOP STRIP */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold text-gray-700 mb-4">Booking Details</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Date and Time</p>
            <p className="text-gray-800 font-medium">
              {dateFormatter(booking.startAt)}
            </p>
            <p className="text-gray-600 text-xs">
              {dateFormatter(booking.scheduledAt)}
            </p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Duration</p>
            <p className="text-gray-800 font-medium">30 Mins</p>
            <p className="text-gray-600 text-xs">Standard Walk</p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Service Type</p>
            <p className="text-gray-800 font-medium">
              {booking.service} (1 dog)
            </p>
            <p className="text-gray-600 text-xs">No additional dogs</p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Location</p>
            <p className="text-gray-800 font-medium">{booking.location}</p>
            <p className="text-gray-600 text-xs">Gate code requested</p>
          </div>
        </div>
      </div>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Client Details */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-700 mb-4">Client Details</h2>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-500">Name</p>
              <p className="text-gray-800 font-medium">
                {booking.customerName}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Email Address</p>
              <p className="text-gray-800 font-medium">{booking.email}</p>
            </div>

            <div>
              <p className="text-gray-500">Location</p>
              <p className="text-gray-800 font-medium">{booking.location}</p>
            </div>
          </div>
        </div>

        {/* Dog Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-700 mb-4">Dog Information</h2>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-500">Name</p>
              <p className="text-gray-800 font-medium">Sergeant Woof</p>
            </div>

            <div>
              <p className="text-gray-500">Details</p>
              <p className="text-gray-800 font-medium">
                Male • 7 years old • 65 lbs
              </p>
            </div>

            <div>
              <p className="text-gray-500">Training</p>
              <p className="text-gray-800">
                Leash trained, knows basic commands.
                <br />
                Responds to Sit, Stay, Come, Heel.
              </p>
            </div>
          </div>
        </div>

        {/* Food & Water */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-700 mb-4">Food and Water</h2>

          <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
            <p>
              Feed in the morning (around 07:00) and evening (around 18:00).
            </p>
            <p>Food is located in the kitchen container labeled “dog food”.</p>
            <p>Blueberries can be given as a lunchtime snack.</p>
          </div>
        </div>

        {/* Medicine & Health */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-700 mb-4">
            Medicine and Health
          </h2>

          <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
            <p>No medical conditions.</p>
            <p>Anti-anxiety medication available if needed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
