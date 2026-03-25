import MonthlyBookings from "../components/MonthlyBookings";
import ActiveBookings from "../components/ActiveBookings";
import WeeklyBookings from "../components/WeeklyBookings";
import RecentBookings from "../components/RecentBookings";
import StatCard from "../components/StatCard";

import { statsData } from "../../constants";

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statsData.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-sm font-semibold mb-2">Weekly Bookings</h2>
          <WeeklyBookings />
        </div>

        <div className="lg:col-span-1 xl:col-span-2 bg-white rounded-2xl shadow p-4">
          <h2 className="text-sm font-semibold mb-2">Bookings by Month</h2>
          <MonthlyBookings />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ActiveBookings />
        <RecentBookings />
      </div>
    </div>
  );
};

export default Home;
