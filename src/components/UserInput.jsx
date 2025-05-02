import React, { useState, useContext, useRef } from "react";
import { UserContext } from "./UserContext";

const GITHUB_URL = "https://github.com/sayembillah/Health-dash"; // TODO: Replace with your repo

const UserInput = () => {
  const { setUser, setDashboardVisible } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
  });
  const dashboardRef = useRef(null);

  // Info modal state
  const [showInfo, setShowInfo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !form.name ||
      !form.age ||
      !form.gender ||
      !form.weight ||
      !form.height
    ) {
      alert("Please fill in all fields.");
      return;
    }
    setUser({ ...form });
    setDashboardVisible(true);
    setTimeout(() => {
      const dashboard = document.getElementById("dashboard-section");
      if (dashboard) {
        dashboard.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center p-6 relative">
      {/* Top Left: Info Icon */}
      <button
        className="absolute top-4 left-4  rounded-full p-2  hover:bg-white/10 transition z-20"
        aria-label="App Info"
        onClick={() => setShowInfo(true)}
        type="button"
      >
        <span role="img" aria-label="info" className="text-xl">
          ℹ️
        </span>
      </button>
      {/* Top Right: GitHub Icon */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4  rounded-full p-2  hover:bg-white/20 transition z-20"
        aria-label="GitHub Repository"
      >
        {/* GitHub SVG icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.011-1.04-0.017-2.04-3.338 0.726-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.334-5.466-5.931 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.873 0.119 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921 0.43 0.371 0.823 1.102 0.823 2.222 0 1.606-0.015 2.898-0.015 3.293 0 0.322 0.216 0.694 0.825 0.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-30">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowInfo(false)}
              aria-label="Close Info"
              type="button"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-2">About HealthDash</h2>
            <p className="text-gray-700 text-base">
              HealthDash helps you calculate and understand your BMI, BMR,
              caloric needs, water intake, sleep, and more. Enter your details
              to get personalized health insights and tips!
            </p>
          </div>
        </div>
      )}
      {/* App Logo and Title */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/vite.svg"
          alt="HealthDash Logo"
          className="w-20 h-20 mb-2 drop-shadow-lg"
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
          HealthDash
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <div className="backdrop-blur-md bg-white/30 shadow-2xl rounded-3xl px-6 py-6 text-base md:text-lg text-gray-800 font-medium border border-white/50 flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl text-center">
          <span>I am</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="your name"
            className="w-24 md:w-32 px-3 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/70 backdrop-blur-sm transition placeholder:text-gray-400"
          />
          <span>, I am</span>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="age"
            className="w-12 md:w-16 px-2 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 backdrop-blur-sm transition placeholder:text-gray-400 text-center"
          />
          <span>years old</span>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-20 md:w-28 px-3 py-1.5 rounded-full border border-gray-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-700"
          >
            <option value="">select gender</option>
            <option>male</option>
            <option>female</option>
            <option>other</option>
          </select>
          <span>and my weight is</span>
          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="kg"
            className="w-16 md:w-20 px-3 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/70 backdrop-blur-sm transition placeholder:text-gray-400 text-center"
          />
          <span>kg and my height is</span>
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={handleChange}
            placeholder="feet.inch"
            className="w-16 md:w-24 px-3 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white/70 backdrop-blur-sm transition placeholder:text-gray-400 text-center"
          />
          <span>feet.</span>
        </div>
        <button
          type="submit"
          className="mt-8 px-8 py-3 backdrop-blur-sm bg-white/30 border border-white/40 text-gray-800 font-semibold rounded-full shadow-md hover:bg-white/50 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          💡 Know about your health
        </button>
      </form>
    </div>
  );
};

export default UserInput;
