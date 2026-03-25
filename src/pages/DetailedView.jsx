import { useParams } from "react-router-dom";
import { dateFormatter } from "../utils/functions";
import { useDetailedBooking } from "../hooks/useBookings";

import Card from "../components/bookingDetails/Card";
import Detail from "../components/bookingDetails/Detail";
import PaymentBadge from "../components/bookingDetails/PaymentBadge";
import StatusBadge from "../components/bookingDetails/StatusBadge";

export default function DetailedView() {
  const { bookingId } = useParams();
  const id = Number(bookingId);

  const { data: booking, isLoading, isError } = useDetailedBooking(id);

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (isError || !booking) {
    return (
      <div className="p-6 text-white">
        <h2 className="text-xl font-semibold">Booking not found</h2>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Booking #{booking.id}</h1>
        <StatusBadge status={booking.status} />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Info */}
        <Card title="Customer Information">
          <Detail label="Name" value={booking.customerName} />
          <Detail label="Email" value={booking.email} />
          <Detail label="Location" value={booking.location} />
        </Card>

        {/* Sitter Info */}
        <Card title="Sitter Information">
          <Detail label="Sitter" value={booking.sitterName || "N/A"} />
          <Detail label="Service" value={booking.service} />
        </Card>

        {/* Booking Timeline */}
        <Card title="Booking Timeline">
          <Detail label="Created" value={dateFormatter(booking.createdAt)} />
          <Detail label="Start" value={dateFormatter(booking.startAt)} />
          <Detail
            label="Scheduled"
            value={dateFormatter(booking.scheduledAt)}
          />
          <Detail
            label="Completed"
            value={
              booking.completedAt ? dateFormatter(booking.completedAt) : "—"
            }
          />
        </Card>

        {/* Payment Info */}
        <Card title="Payment">
          <Detail label="Amount" value={`R${booking.amount}`} />
          <Detail
            label="Payment Status"
            value={<PaymentBadge status={booking.paymentStatus} />}
          />
        </Card>
      </div>

      {/* Progress */}
      <div>
        <h2 className="font-semibold mb-2">Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-black h-3 rounded-full transition-all"
            style={{ width: `${(booking.progress || 0) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
