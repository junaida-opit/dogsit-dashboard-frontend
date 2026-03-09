import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, Settings, Menu, Outdent } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 80 : 240 }}
        transition={{ duration: 0.25 }}
        className="bg-white shadow-lg md:flex flex-col "
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed ? (
            <span className="text-xl font-semibold">My Dashboard</span>
          ) : (
            <p>logo</p>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-2 space-y-1">
          <SidebarItem icon={Home} label="Home" collapsed={collapsed} url="/" />
          <SidebarItem
            icon={Users}
            label="Users"
            collapsed={collapsed}
            url="/users"
          />
          <SidebarItem
            icon={Settings}
            label="Settings"
            collapsed={collapsed}
            url="/settings"
          />
        </nav>
      </motion.aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <button
            className="flex md:hidden"
            onClick={() => setCollapsed(!collapsed)}
          >
            pdspd
          </button>

          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome back</span>
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-2xl shadow p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, collapsed, url }) {
  return (
    <a
      href={url}
      className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-100 transition"
    >
      <Icon className="w-5 h-5" />
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
    </a>
  );
}
