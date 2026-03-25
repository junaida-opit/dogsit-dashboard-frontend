import BookingsTable from "../components/BookingsTable";
import { useAllBookings } from "../hooks/useBookings";

const BookingsList = () => {
  const { data: allBookings, isLoading } = useAllBookings();
  if (isLoading || !allBookings) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
      <BookingsTable bookings={allBookings} />
    </div>
  );
};

export default BookingsList;
