import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useMonthlyBookings } from "../hooks/useBookings";

export default function MonthlyBookings() {
  const { data: monthlyBookings, isLoading } = useMonthlyBookings();
  // console.log(monthlyBookings);

  if (isLoading || !monthlyBookings) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className="w-full h-44 md:h-64">
      <ResponsiveContainer>
        <AreaChart data={monthlyBookings}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Bookings"
            stroke="#14b8a6"
            fill="#99f6e4"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
