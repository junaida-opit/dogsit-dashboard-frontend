import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { useWeeklyBookings } from "../hooks/useBookings";

export default function WeeklyBookings() {
  const { data: weeklyBookings, isLoading } = useWeeklyBookings();

  if (isLoading || !weeklyBookings) {
    return <div className="text-white">Loading...</div>;
  }
  // console.log(weeklyBookings);
  return (
    <div className="h-44 md:h-64 bg-black rounded-2xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={weeklyBookings}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          {/* X Axis (subtle) */}
          <XAxis
            dataKey="day"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            interval={0} // show all labels
            minTickGap={5} // prevent overlap
          />

          {/* Y Axis (numbers visible) */}
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Tooltip (clean dark) */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          {/* Bars */}
          <Bar
            dataKey="value"
            fill="#ffffff"
            radius={[4, 4, 0, 0]}
            barSize={14}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
