import { useQuery } from "@tanstack/react-query";
import {
  fetchStats,
  fetchWeeklyBookings,
  fetchMonthlyBookings,
  fetchRecentBookings,
} from "../api/bookings";

// Stats
export const useStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
  });
};

// Weekly
export const useWeeklyBookings = () => {
  return useQuery({
    queryKey: ["weeklyBookings"],
    queryFn: fetchWeeklyBookings,
  });
};

export const useMonthlyBookings = () => {
  return useQuery({
    queryKey: ["monthlyBookings"],
    queryFn: fetchMonthlyBookings,
    select: (data) =>
      data.map((item) => ({
        ...item,
        label: new Date(item.month).toLocaleString("default", {
          month: "short",
        }),
      })),
  });
};

// Recent
export const useRecentBookings = () => {
  return useQuery({
    queryKey: ["recentBookings"],
    queryFn: fetchRecentBookings,
  });
};
