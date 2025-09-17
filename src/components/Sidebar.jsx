import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-6">ASAR</h2>
      <nav className="flex flex-col space-y-4 px-4">
        <Link to="/dashboard/congestion" className="hover:text-teal-400">
          Congestion Map
        </Link>
        <Link to="/dashboard/signal" className="hover:text-teal-400">
          Signal Control
        </Link>
        <Link to="/dashboard/junctions" className="hover:text-teal-400">
          Junction List
        </Link>
        <Link to="/dashboard/prediction" className="hover:text-teal-400">
          Traffic Prediction
        </Link>
        <Link to="/dashboard/emergency" className="hover:text-teal-400">
          Emergency Alerts
        </Link>
        <Link to="/dashboard/analytics" className="hover:text-teal-400">
          Data & AI Insights
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
