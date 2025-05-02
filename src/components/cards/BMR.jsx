import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function calculateBMR({ gender, weight, height, age }) {
  if (!gender || !weight || !height || !age) return null;
  const [feet, inch = 0] = height.split(".").map(Number);
  const totalInches = feet * 12 + (inch || 0);
  const heightCm = totalInches * 2.54;
  // Mifflin-St Jeor Equation
  if (gender === "male") {
    return 10 * weight + 6.25 * heightCm - 5 * age + 5;
  } else if (gender === "female") {
    return 10 * weight + 6.25 * heightCm - 5 * age - 161;
  } else {
    // average of male and female
    return 10 * weight + 6.25 * heightCm - 5 * age - 78;
  }
}

const BMR = () => {
  const { user } = useContext(UserContext);
  let bmr = null;
  if (user) {
    bmr = calculateBMR({
      gender: user.gender,
      weight: Number(user.weight),
      height: user.height,
      age: Number(user.age),
    });
  }
  return (
    <div className="relative w-full max-w-sm h-[350px] bg-gradient-to-b from-neutral-50 to-gray-100 rounded-4xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex justify-between p-6 rounded-t-4xl">
        <h1 className="text-3xl md:text-4xl font-bold">BMR</h1>
        <span className="text-3xl md:text-4xl">🧬</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 text-center flex-1">
        <h2 className="text-xl md:text-2xl font-semibold">Your Basal Metabolic Rate is</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{bmr ? `${Math.round(bmr)} kcal/day` : "-"}</h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          just to stay alive and do nothing.
        </p>
      </div>
    </div>
  );
};

export default BMR;
