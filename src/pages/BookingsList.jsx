import React from "react";
import BookingsTable from "../components/BookingsTable";
import { generateBookings } from "../utils/dummyData";

const BookingsList = () => {
  const bookings = generateBookings(50);
  return (
    <div>
      <BookingsTable bookings={bookings} />
    </div>
  );
};

export default BookingsList;
