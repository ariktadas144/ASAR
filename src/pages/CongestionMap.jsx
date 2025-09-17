import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Navigation, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";

export default function Dashboard() {
  const trafficZones = [
    { id: 1, name: "Downtown Core", status: "heavy", incidents: 2, avgSpeed: "15 km/h" },
    { id: 2, name: "Highway 401", status: "moderate", incidents: 1, avgSpeed: "65 km/h" },
    { id: 3, name: "Business District", status: "light", incidents: 0, avgSpeed: "45 km/h" },
    { id: 4, name: "Residential Area", status: "light", incidents: 0, avgSpeed: "35 km/h" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "heavy":
        return "bg-red-600 text-white";
      case "moderate":
        return "bg-yellow-500 text-white";
      case "light":
        return "bg-green-400 text-slate-800";
      default:
        return "bg-slate-200 text-slate-600";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">🚦 Traffic Congestion Dashboard</h1>
        <p className="text-slate-600">Real-time monitoring of city traffic zones</p>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Map */}
        <div className="lg:col-span-2">
          <Card className="border-slate-200 bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <MapPin className="w-5 h-5" />
                Real-Time Traffic Map
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-slate-600 border-slate-300">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm" className="text-slate-600 border-slate-300">
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-slate-600 border-slate-300">
                  <ZoomOut className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Map Simulation */}
              <div className="relative bg-slate-100 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">Interactive Traffic Map</p>
                  <p className="text-sm text-slate-500 mt-2">Real-time congestion data overlay</p>
                </div>

                {/* Fake traffic signals */}
                <div className="absolute top-4 left-4 bg-red-600 w-3 h-3 rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-8 bg-yellow-500 w-3 h-3 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-12 bg-green-400 w-3 h-3 rounded-full animate-pulse"></div>
                <div className="absolute bottom-16 right-16 bg-green-400 w-3 h-3 rounded-full animate-pulse"></div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between mt-4 p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-sm text-slate-600">Heavy Traffic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Moderate Traffic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-600">Light Traffic</span>
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right - Stats */}
        <div className="space-y-6">
          {/* Traffic Zones */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Navigation className="w-5 h-5" />
                Traffic Zones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trafficZones.map((zone) => (
                <div
                  key={zone.id}
                  className="p-3 border border-slate-200 rounded-lg bg-slate-50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-800">{zone.name}</h4>
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                        zone.status
                      )}`}
                    >
                      {zone.status}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 space-y-1">
                    <div>Average Speed: {zone.avgSpeed}</div>
                    <div>Active Incidents: {zone.incidents}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Metrics */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-800">Current Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Total Vehicles</span>
                <span className="font-medium text-slate-800">12,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Average Speed</span>
                <span className="font-medium text-slate-800">42 km/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Active Incidents</span>
                <span className="font-medium text-red-600">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Traffic Flow</span>
                <span className="font-medium text-green-600">Normal</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
