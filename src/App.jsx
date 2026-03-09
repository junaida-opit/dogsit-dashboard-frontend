import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

import PageNotFound from "./pages/PageNotFound";
import DashboardPageNotFound from "./pages/DashboardPageNotFound";

import DashboardLayout from "./components/layouts/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<DashboardPageNotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
