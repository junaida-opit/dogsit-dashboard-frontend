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
  // {
  //   label: "Settings",
  //   icon: Settings,
  //   url: "/settings",
  // },
];

// Top stat cards
export const statsData = [
  { title: "Today's Income", value: "R20,072", change: "+55%" },
  { title: "Today's Bookings", value: "15", change: "+5%" },
  { title: "New Clients", value: "+252", change: "-14%" },
];
