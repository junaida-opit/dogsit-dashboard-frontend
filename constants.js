import { Home, Users, Settings, Book } from "lucide-react";

export const sidebarLinks = [
  {
    label: "Home",
    icon: Home,
    url: "/",
  },
  {
    label: "Users",
    icon: Users,
    url: "/users",
  },
  {
    label: "Bookings",
    icon: Book,
    url: "/bookings",
  },
  {
    label: "Settings",
    icon: Settings,
    url: "/settings",
  },
];

export const bookingDataMonthly = [
  { month: "Jun", bookings: 192 },
  { month: "Jul", bookings: 201 },
  { month: "Aug", bookings: 244 },
  { month: "Sep", bookings: 256 },
  { month: "Oct", bookings: 290 },
  { month: "Nov", bookings: 321 },
  { month: "Dec", bookings: 410 },
  { month: "Jan", bookings: 200 },
  { month: "Feb", bookings: 180 },
  { month: "Mar", bookings: 250 },
  { month: "Apr", bookings: 300 },
  { month: "May", bookings: 320 },
];

// Top stat cards
export const statsData = [
  { title: "Today's Income", value: "R20,072", change: "+55%" },
  { title: "Today's Bookings", value: "15", change: "+5%" },
  { title: "New Clients", value: "+252", change: "-14%" },
];

// Small chart (bar)
export const weeklyBookings = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 200 },
  { day: "Wed", value: 150 },
  { day: "Thu", value: 250 },
  { day: "Fri", value: 300 },
  { day: "Sat", value: 180 },
  { day: "Sun", value: 100 },
];

// Active bookings table
export const activeBookingsData = [
  {
    client: "Jennifer A.",
    service: "Walk",
    sitter: "J. Adams",
    progress: 60,
  },
  {
    client: "Robert G.",
    service: "Overnight Sit",
    sitter: "G. House",
    progress: 10,
  },
  {
    client: "Timothy T.",
    service: "Visit",
    sitter: "L. Rosa",
    progress: 100,
  },
];

// Recent bookings list
export const recentBookingsData = [
  {
    title: "Walk - J. Abrahams",
    date: "22 Dec 7:20 PM",
  },
  {
    title: "Overnight Sit - N. Dvorak",
    date: "21 Dec 11:21 PM",
  },
  {
    title: "Visit - K. Lemon",
    date: "21 Dec 9:28 PM",
  },
];
