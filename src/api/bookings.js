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
