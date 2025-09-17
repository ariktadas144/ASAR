// src/pages/JunctionList.jsx
import { Camera } from "lucide-react";

export default function JunctionList() {
  const junctions = [
    {
      name: "Main St & 1st Ave",
      traffic: "normal traffic",
      lastMaintenance: "2024-01-15",
      cameras: [
        { name: "North View", status: "Active" },
        { name: "South View", status: "Active" },
      ],
    },
    {
      name: "Broadway & Oak St",
      traffic: "heavy traffic",
      incidents: 1,
      lastMaintenance: "2024-01-10",
      cameras: [
        { name: "East View", status: "Active" },
        { name: "West View", status: "Maintenance" },
        { name: "Overview", status: "Active" },
      ],
    },
    {
      name: "Highway 101 Ramp",
      traffic: "light traffic",
      lastMaintenance: "2024-01-05",
      cameras: [
        { name: "Ramp Monitor", status: "Active" },
        { name: "Merge Point", status: "Active" },
      ],
    },
    {
      name: "Park Ave & Center St",
      traffic: "moderate traffic",
      incidents: 1,
      lastMaintenance: "2024-01-08",
      cameras: [
        { name: "Intersection View", status: "Offline" },
        { name: "Pedestrian Area", status: "Active" },
      ],
    },
  ];

  const cameraStats = {
    total: 9,
    active: 7,
    maintenance: 1,
    offline: 1,
  };

  const recentActivity = [
    { type: "Camera Offline", detail: "Park Ave - Intersection View", time: "5 min ago" },
    { type: "Incident Detected", detail: "Broadway & Oak St", time: "12 min ago" },
    { type: "Maintenance Complete", detail: "Highway 101 Ramp", time: "2 hours ago" },
  ];

  return (
    <div className="p-6 flex gap-6">
      {/* Left: Junction Cards */}
      <div className="flex-1 space-y-6">
        {junctions.map((junction, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4">
            {/* Junction Header */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold flex items-center gap-2">
                <Camera size={18} /> {junction.name}
              </h2>
              <div className="flex gap-2 text-sm">
                <span
                  className={`${
                    junction.traffic.includes("heavy")
                      ? "text-red-600"
                      : junction.traffic.includes("moderate")
                      ? "text-orange-600"
                      : junction.traffic.includes("light")
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {junction.traffic}
                </span>
                {junction.incidents && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                    {junction.incidents} Incident
                  </span>
                )}
              </div>
            </div>

            {/* Feeds */}
            <div className="grid grid-cols-2 gap-4">
              {junction.cameras.map((cam, i) => (
                <div key={i} className="border rounded-lg p-2">
                  {/* ✅ Street + Camera + View */}
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="flex items-center gap-1">
                      <Camera size={14} />
                      {junction.name} — {cam.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs ${
                        cam.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : cam.status === "Maintenance"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {cam.status}
                    </span>
                  </div>

                  {/* Feed Box */}
                  <div className="bg-gray-100 h-28 flex items-center justify-center text-gray-400 text-sm">
                    {cam.status === "Active" ? "Live Feed" : cam.status}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between mt-2">
                    <button className="text-sm text-black border border-black bg-white rounded px-2 py-0.5">
                      View
                    </button>
                    <button className="text-sm text-black border border-black bg-white rounded px-2 py-0.5">
                      ⚙
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-xs text-gray-500 mt-2">
              Last maintenance: {junction.lastMaintenance}
            </div>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 border border-black bg-white text-black rounded text-sm">
                View All Feeds
              </button>
              <button className="px-3 py-1 border border-black bg-white text-black rounded text-sm">
                Junction Settings
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Status + Activity */}
      <div className="w-72 space-y-6">
        {/* Camera Status Overview */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Camera Status Overview</h3>
          <p>Total Cameras <span className="float-right">{cameraStats.total}</span></p>
          <p>Active <span className="float-right">{cameraStats.active}</span></p>
          <p>Maintenance <span className="float-right">{cameraStats.maintenance}</span></p>
          <p>Offline <span className="float-right">{cameraStats.offline}</span></p>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Recent Activity</h3>
          <ul className="space-y-2 text-sm">
            {recentActivity.map((item, i) => (
              <li key={i}>
                <span className="font-medium">{item.type}</span> — {item.detail}
                <span className="text-gray-500 text-xs block">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Quick Actions</h3>
          <div className="flex flex-col gap-2">
            <button className="px-3 py-1 border border-black bg-white text-black rounded text-sm">
              👁 View All Feeds
            </button>
            <button className="px-3 py-1 border border-black bg-white text-black rounded text-sm">
              ⏺ Start Recording All
            </button>
            <button className="px-3 py-1 border border-black bg-white text-black rounded text-sm">
              ⚙ Camera Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
