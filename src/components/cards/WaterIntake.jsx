import React, { useContext } from "react";
import { UserContext } from "../UserContext";

// Tailored water intake calculation
function calculateWaterIntake(weight) {
  // Standard: 35 ml per kg body weight
  if (!weight) return null;
  const liters = (weight * 35) / 1000; // Liters
  return liters;
}

// Convert liters into number of glasses (1 glass = 250 ml)
function convertToGlasses(liters) {
  return liters ? Math.round(liters / 0.25) : null;
}

const WaterIntake = () => {
  const { user } = useContext(UserContext);
  const liters = user ? calculateWaterIntake(Number(user.weight)) : null;
  const glasses = liters ? convertToGlasses(liters) : null;

  return (
    <div className="relative w-full max-w-sm h-[382px] bg-gradient-to-b from-neutral-50 to-gray-100 rounded-4xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex justify-between p-6 rounded-t-4xl gap-2">
        <h1 className="text-2xl md:text-3xl font-bold">Water Intake</h1>
        <span className="text-3xl md:text-4xl">💧</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 text-center flex-1">
        <h2 className="text-xl md:text-2xl font-semibold">You should intake</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {liters ? liters.toFixed(1) : "-"} Litre
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-600 mt-2">
          or approximately {glasses ? glasses : "-"} glasses
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">Everyday.</p>
      </div>
    </div>
  );
};

export default WaterIntake;
