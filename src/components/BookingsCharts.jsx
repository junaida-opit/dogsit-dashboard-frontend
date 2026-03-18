import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", bookings: 200 },
  { month: "Feb", bookings: 180 },
  { month: "Mar", bookings: 250 },
  { month: "Apr", bookings: 300 },
  { month: "May", bookings: 320 },
];

export default function BookingsChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="bookings"
            stroke="#14b8a6"
            fill="#99f6e4"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
