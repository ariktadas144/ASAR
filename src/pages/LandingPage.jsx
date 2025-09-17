import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/traffic-bg.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-6xl font-extrabold text-white">ASAR</h1>
        <p className="mt-4 text-2xl text-gray-200">Reimagining Traffic Flow</p>

        <Link to="/signin">
          <button className="mt-8 px-8 py-4 bg-white text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition">
            Sign In →
          </button>
        </Link>

        {/* Traffic light bottom-left, under the button */}
        <div className="absolute bottom-6 left-6">
          <img
            src="/traffic-light.png"
            alt="Traffic Light"
            className="h-36 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
