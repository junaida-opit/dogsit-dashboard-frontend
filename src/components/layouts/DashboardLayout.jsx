import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, LogOut } from "lucide-react";
import { Outlet, Link } from "react-router-dom";
import { sidebarLinks } from "../../../constants";
import { logoutUser } from "../../api/auth";
import logo from "../../assets/logo.svg";
import noDisplayPic from "../../assets/noDisplayPic.png";
export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <motion.aside
        animate={{ width: collapsed ? 80 : 240 }}
        className="hidden md:flex flex-col bg-white shadow-lg"
      >
        <SidebarContent
          collapsed={collapsed}
          toggleCollapse={() => setCollapsed(!collapsed)}
        />
      </motion.aside>

      <AnimatePresence>
        x
        {mobileOpen && (
          <div>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col"
            >
              <SidebarContent
                collapsed={false}
                toggleCollapse={() => setMobileOpen(false)}
                isMobile
              />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <span className="text-sm text-gray-600">Welcome back</span>
            <img className="w-8 h-8 rounded-full" src={noDisplayPic} />
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-2xl shadow p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarContent({ collapsed, toggleCollapse, isMobile }) {
  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between p-4  h-16">
        {!collapsed && (
          <div className="text-xl font-semibold flex gap-2">
            <img className="w-3.5 m-auto h-3.5" src={logo} alt="PupDesk logo" />
            <span className="m">PupDesk</span>
          </div>
        )}

        <button
          onClick={toggleCollapse}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isMobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {sidebarLinks.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            url={item.url}
            collapsed={collapsed}
          />
        ))}
        <button
          className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-100 transition text-sm font-medium"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </nav>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, collapsed, url }) {
  return (
    <Link
      to={url}
      className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-100 transition"
    >
      <Icon className="w-5 h-5" />
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}
