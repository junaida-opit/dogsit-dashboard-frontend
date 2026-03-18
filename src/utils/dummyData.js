const names = [
  "Christine Brooks",
  "Rosie Pearson",
  "Darrell Caldwell",
  "Gilbert Johnston",
  "Alan Cain",
  "Alfred Murray",
  "Maggie Sullivan",
  "Rosie Todd",
  "Dollie Hines",
];

const types = ["Walk", "Visit", "Overnight Sit"];
const statuses = ["paid", "unpaid", "processing"];

export function generateBookings(count = 20) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    reference: 14500 + i,
    name: names[i % names.length],
    address: `${Math.floor(Math.random() * 999)} Example Street`,
    date: new Date(2026, 0, Math.floor(Math.random() * 28) + 1)
      .toISOString()
      .split("T")[0],
    type: types[Math.floor(Math.random() * types.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
}
