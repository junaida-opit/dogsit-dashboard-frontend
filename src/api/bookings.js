import axios from "./axios";

// GET stats
export const fetchStats = async () => {
  const { data } = await axios.get("/bookings/stats");
  return data;
};

// GET weekly bookings
export const fetchWeeklyBookings = async () => {
  const { data } = await axios.get("/bookings/weekly");
  return data;
};

// GET monthly bookings
export const fetchMonthlyBookings = async () => {
  const { data } = await axios.get("/bookings/monthly");
  return data;
};

// GET recent bookings
export const fetchRecentBookings = async () => {
  const { data } = await axios.get("/bookings/recent");
  return data;
};

export const fetchActiveBookings = async () => {
  const { data } = await axios.get("/bookings/active");
  return data;
};

export const fetchBookings = async () => {
  const { data } = await axios.get("bookings/");
  return data;
};

export const fetchBookingDetails = async (bookingId) => {
  const { data } = await axios.get(`/bookings/${bookingId}`);
  return data;
};
