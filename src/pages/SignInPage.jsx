import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake login validation (replace with real auth later if needed)
    if (email && password) {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center" style={{ backgroundColor: "#050427" }}>
      <div className="glass p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <h2 className="mt-2 text-lg font-semibold text-white">Admin</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm mb-1 text-white">Email :</label>
            <input
              type="email"
              placeholder="trafficofficialemail01@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border focus:outline-none text-black"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm mb-1 text-white">Password :</label>
            <input
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border focus:outline-none text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 px-4 py-2 bg-white text-black font-bold rounded-lg shadow-md hover:shadow-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
