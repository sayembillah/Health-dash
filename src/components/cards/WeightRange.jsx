import React, { useContext } from "react";
import { UserContext } from "../UserContext";

// Calculate ideal weight range based on height (in feet and inches)
function calculateWeightRange(height) {
  if (!height) return null;

  // Convert height to meters
  const [feet, inch = 0] = height.split(".").map(Number);
  const totalInches = feet * 12 + (inch || 0);
  const heightMeters = totalInches * 0.0254;

  // BMI normal range: 18.5 - 24.9
  const min = 18.5 * heightMeters * heightMeters;
  const max = 24.9 * heightMeters * heightMeters;

  return { min, max };
}

const WeightRange = () => {
  const { user } = useContext(UserContext);
  const range = user ? calculateWeightRange(user.height) : null;
  return (
    <div className="relative w-full max-w-sm h-[382px] bg-gradient-to-b from-neutral-50 to-gray-100 rounded-4xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex justify-between p-6 rounded-t-4xl gap-2">
        <h1 className="text-2xl md:text-3xl font-bold">Ideal Weight Range</h1>
        <span className="text-3xl md:text-4xl">⚖️</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 text-center flex-1">
        <h2 className="text-xl md:text-2xl font-semibold">
          Your Ideal Weight Range is
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {range ? `${range.min.toFixed(1)} - ${range.max.toFixed(1)} Kg` : "-"}
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          {range
            ? "This is the healthy range for your height."
            : "Enter your details above."}
        </p>
      </div>
    </div>
  );
};

export default WeightRange;
