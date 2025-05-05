import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // or however you're storing auth
    navigate("/login");
  };

  // Fetch user from localStorage or context
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <nav className="space-y-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="block w-full text-left text-gray-700 hover:text-blue-500"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="block w-full text-left text-gray-700 hover:text-blue-500"
          >
            Profile
          </button>
          {/* Add more links as needed */}
          <button
            onClick={handleLogout}
            className="mt-10 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">
          Welcome, {user?.name || "User"} 👋
        </h1>
        <p className="text-lg text-gray-700">
          You are logged in as{" "}
          <span className="font-semibold">{user?.role || "unknown"}</span>.
        </p>
        {/* You can add more content here like stats, charts, etc. */}
      </main>
    </div>
  );
};

export default Dashboard;
