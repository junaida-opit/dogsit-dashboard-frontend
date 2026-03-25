export default function StatCard({ title, value, change }) {
  const isPositive = change.includes("+");

  return (
    <div className="bg-white p-4 rounded-2xl shadow flex justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-semibold">{value}</h2>
        <p
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </p>
      </div>
    </div>
  );
}
