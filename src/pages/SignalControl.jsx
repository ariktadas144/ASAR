import { useState } from "react";
import { AlertCircle, Settings, Play, StopCircle } from "lucide-react";
import "../styles/Dashboard.css";

export default function SignalControl() {
  const [signals, setSignals] = useState([
    {
      id: 1,
      name: "Main St & 1st Ave",
      status: "active",
      mode: "auto",
      light: "green",
      timer: "45s",
    },
    {
      id: 2,
      name: "Broadway & Oak St",
      status: "active",
      mode: "auto",
      light: "red",
      timer: "125s",
    },
    {
      id: 3,
      name: "Highway 101 Ramp",
      status: "maintenance",
      mode: "manual",
      light: "yellow",
      timer: "--",
    },
    {
      id: 4,
      name: "Park Ave & Center St",
      status: "active",
      mode: "auto",
      light: "green",
      timer: "38s",
    },
    {
      id: 5,
      name: "Industrial Blvd",
      status: "active",
      mode: "emergency",
      light: "red",
      timer: "--",
    },
  ]);

  // Toggle Auto/Manual
  const toggleMode = (id) => {
    setSignals((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, mode: s.mode === "auto" ? "manual" : "auto" }
          : s
      )
    );
  };

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Left Side - Traffic Signal List */}
      <div className="col-span-2 space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="material-icons">Traffic</span> Signal Control
        </h2>

        {signals.map((signal) => (
          <div
            key={signal.id}
            className="border border-gray-300 rounded-lg p-4 flex items-center justify-between bg-white shadow-sm"
          >
            <div>
              <h3 className="font-medium text-black">{signal.name}</h3>
              <div className="flex gap-2 mt-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    signal.status === "active"
                      ? "bg-green-100 text-green-700"
                      : signal.status === "maintenance"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {signal.status}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    signal.mode === "auto"
                      ? "bg-gray-200 text-gray-800"
                      : signal.mode === "manual"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {signal.mode}
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                {/* Configure Button */}
                <button className="px-3 py-1 border rounded text-sm flex items-center gap-1 bg-white text-black hover:bg-gray-200">
                  <Settings size={14} /> Configure
                </button>
                {/* Override / Report Issue Button */}
                {signal.status === "maintenance" ? (
                  <button className="px-3 py-1 border rounded text-sm flex items-center gap-1 text-red-600 border-red-600 bg-white hover:bg-gray-200">
                    <AlertCircle size={14} /> Report Issue
                  </button>
                ) : (
                  <button className="px-3 py-1 border rounded text-sm bg-white text-black hover:bg-gray-200">
                    Override
                  </button>
                )}
              </div>
            </div>

            {/* Right side - Light, Timer & Toggle */}
            <div className="flex flex-col items-center">
              <span
                className={`w-3 h-3 rounded-full ${
                  signal.light === "red"
                    ? "bg-red-500"
                    : signal.light === "green"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              ></span>
              <span className="mt-1 text-sm text-black">{signal.timer}</span>

              {/* Toggle Auto/Manual */}
              <label className="inline-flex items-center cursor-pointer mt-2">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={signal.mode === "auto"}
                  onChange={() => toggleMode(signal.id)}
                />
                <div
                  className="relative w-12 h-6 rounded-full border border-gray-300
                             bg-gray-600 peer-checked:bg-black transition-colors duration-300"
                >
                  <div
                    className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md
                               transition-transform duration-300
                               peer-checked:translate-x-6"
                  ></div>
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Overview */}
      <div className="space-y-6">
        {/* System Overview */}
        <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
          <h3 className="font-medium mb-3 text-black">System Overview</h3>
          <ul className="space-y-1 text-sm text-black">
            <li className="flex justify-between">
              <span>Total Signals</span> <span>5</span>
            </li>
            <li className="flex justify-between">
              <span>Active</span> <span className="text-green-600">4</span>
            </li>
            <li className="flex justify-between">
              <span>Maintenance</span> <span className="text-red-600">1</span>
            </li>
            <li className="flex justify-between">
              <span>Auto Mode</span> <span>3</span>
            </li>
            <li className="flex justify-between">
              <span>Manual Mode</span> <span>1</span>
            </li>
            <li className="flex justify-between">
              <span>Emergency Override</span>{" "}
              <span className="text-red-600">1</span>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm space-y-2">
          <h3 className="font-medium mb-3 text-black">Quick Actions</h3>
          <button className="w-full py-2 bg-black text-white rounded flex items-center justify-center gap-2">
            <Play size={16} /> Emergency Override All
          </button>
          <button className="w-full py-2 border rounded bg-white text-black hover:bg-gray-200">
            Pause System
          </button>
          <button className="w-full py-2 border rounded bg-white text-black hover:bg-gray-200">
            Global Settings
          </button>
          <button className="w-full py-2 bg-red-600 text-white rounded flex items-center justify-center gap-2">
            <StopCircle size={16} /> Emergency Stop
          </button>
        </div>

        {/* Recent Events */}
        <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
          <h3 className="font-medium mb-3 text-black">Recent Events</h3>
          <ul className="text-sm space-y-2 text-black">
            <li>
              <div className="font-semibold">Signal Override</div>
              <div>Main St &amp; 1st Ave - 2 min ago</div>
            </li>
            <li>
              <div className="font-semibold">Maintenance Started</div>
              <div>Highway 101 Ramp - 15 min ago</div>
            </li>
            <li>
              <div className="font-semibold">Timer Adjusted</div>
              <div>Park Ave &amp; Center St - 1 hour ago</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
