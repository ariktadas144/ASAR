// src/pages/Dashboard.jsx
import { useState } from "react";
import {
  MapPin,
  TrafficCone,
  List,
  BarChart2,
  Globe,
  AlertTriangle,
  RefreshCcw,
  Search,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import "../styles/Dashboard.css";
import SignalControl from "./SignalControl"; 
import JunctionList from "./JunctionList"; // ✅ Import Junction List

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Congestion Map");

  const navItems = [
    { name: "Congestion Map", icon: <MapPin size={16} /> },
    { name: "Signal Control", icon: <TrafficCone size={16} /> },
    { name: "Junction List", icon: <List size={16} /> }, // ✅ Junction List
    { name: "Traffic Analytics", icon: <BarChart2 size={16} /> },
    { name: "AI Insights", icon: <Globe size={16} /> },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="ASAR Logo" className="navbar-logo" />
          <span className="navbar-title">ASAR</span>
        </div>

        <div className="navbar-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`nav-link ${activeTab === item.name ? "active" : ""}`}
              onClick={() => setActiveTab(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className="navbar-right">
          <button className="emergency-btn">
            <AlertTriangle size={16} />
            Emergency Alerts
            <span className="badge">3</span>
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="dashboard-content">
        {activeTab === "Congestion Map" && (
          <div className="congestion-map-page">
            <div className="traffic-map-card">
              <div className="card-header">
                <h3>Real-Time Traffic Map</h3>
                <div className="map-controls">
                  <button><RefreshCcw size={16} /></button>
                  <button><Search size={16} /></button>
                  <button><ZoomIn size={16} /></button>
                  <button><ZoomOut size={16} /></button>
                </div>
              </div>
              <div className="map-placeholder">
                <span>
                  Interactive Traffic Map<br />
                  Real-time congestion data overlay
                </span>
              </div>
              <div className="map-footer">
                <div className="legend">
                  <span className="dot red"></span> Heavy Traffic
                  <span className="dot black"></span> Moderate Traffic
                  <span className="dot gray"></span> Light Traffic
                </div>
                <span className="last-updated">Last updated: 8:48:33 PM</span>
              </div>
            </div>

            {/* Right-side Panel */}
            <div className="right-panel">
              <div className="traffic-zones">
                <h3>Traffic Zones</h3>
                <div className="zone heavy">
                  <h4>Downtown Core</h4>
                  <p>Average Speed: 15 km/h</p>
                  <p>Active Incidents: 2</p>
                  <span className="tag heavy">heavy</span>
                </div>
                <div className="zone moderate">
                  <h4>Highway 401</h4>
                  <p>Average Speed: 65 km/h</p>
                  <p>Active Incidents: 1</p>
                  <span className="tag moderate">moderate</span>
                </div>
                <div className="zone light">
                  <h4>Business District</h4>
                  <p>Average Speed: 45 km/h</p>
                  <p>Active Incidents: 0</p>
                  <span className="tag light">light</span>
                </div>
              </div>

              <div className="current-metrics">
                <h3>Current Metrics</h3>
                <p>Total Vehicles <span>12,847</span></p>
                <p>Average Speed <span>42 km/h</span></p>
                <p>Active Incidents <span className="red">3</span></p>
                <p>Traffic Flow <span className="green">Normal</span></p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Signal Control" && <SignalControl />}
        {activeTab === "Junction List" && <JunctionList />} {/* ✅ NEW PAGE */}
      </div>
    </div>
  );
}
