import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import DetailedView from "./pages/DetailedView";
import DetailedUser from "./pages/DetailedUser";

import PageNotFound from "./pages/PageNotFound";
import DashboardPageNotFound from "./pages/DashboardPageNotFound";

import DashboardLayout from "./components/layouts/DashboardLayout";
import BookingsList from "./pages/BookingsList";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<BookingsList />} />
          <Route path="/users" element={<Users />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="/bookings/:bookingId" element={<DetailedView />} />
          <Route path="/users/:userId" element={<DetailedUser />} />
          <Route path="*" element={<DashboardPageNotFound />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
