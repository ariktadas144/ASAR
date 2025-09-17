import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BarChart3, FileText, Settings } from "lucide-react";

export default function DashboardLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Analytics", path: "/dashboard/analytics", icon: <BarChart3 size={18} /> },
    { name: "Reports", path: "/dashboard/reports", icon: <FileText size={18} /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col">
        <div className="p-4 text-2xl font-bold">ASAR</div>
        <nav className="flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-slate-800 transition ${
                location.pathname === item.path ? "bg-slate-800 font-semibold" : ""
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">© 2025</div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-slate-200 w-8 h-8 flex items-center justify-center">
              🔔
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-400"></div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
