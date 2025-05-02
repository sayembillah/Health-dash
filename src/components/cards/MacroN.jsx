import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function calculateMacros(tdee) {
  // Standard: 50% carbs, 20% protein, 30% fat
  if (!tdee) return null;
  const carbs = (tdee * 0.5) / 4; // grams
  const protein = (tdee * 0.2) / 4; // grams
  const fat = (tdee * 0.3) / 9; // grams
  return {
    carbs: Math.round(carbs),
    protein: Math.round(protein),
    fat: Math.round(fat),
  };
}

const MacroN = () => {
  const { user } = useContext(UserContext);
  let macros = null;
  if (user) {
    // Calculate TDEE as in CaloricNeeds
    const [feet, inch = 0] = user.height
      ? user.height.split(".").map(Number)
      : [0, 0];
    const totalInches = feet * 12 + (inch || 0);
    const heightCm = totalInches * 2.54;
    let bmr = null;
    if (user.gender === "male") {
      bmr =
        10 * Number(user.weight) + 6.25 * heightCm - 5 * Number(user.age) + 5;
    } else if (user.gender === "female") {
      bmr =
        10 * Number(user.weight) + 6.25 * heightCm - 5 * Number(user.age) - 161;
    } else {
      bmr =
        10 * Number(user.weight) + 6.25 * heightCm - 5 * Number(user.age) - 78;
    }
    const tdee = bmr * 1.2;
    macros = calculateMacros(tdee);
  }
  return (
    <div className="relative w-full max-w-sm h-[350px] bg-gradient-to-b from-neutral-50 to-gray-100 rounded-4xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex items-center justify-between p-6 rounded-t-4xl">
        <h1 className="text-2xl md:text-3xl font-bold">
          Macronutrient Breakdown
        </h1>
        <span className="text-3xl md:text-4xl">🥦</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 text-center flex-1">
        <h2 className="text-xl md:text-2xl font-semibold">
          To maintain health, have
        </h2>
        <h1 className="text-lg md:text-2xl font-bold text-gray-800">
          Carbs: {macros ? macros.carbs : "-"}g
        </h1>
        <h1 className="text-lg md:text-2xl font-bold text-gray-800">
          Protein: {macros ? macros.protein : "-"}g
        </h1>
        <h1 className="text-lg md:text-2xl font-bold text-gray-800">
          Fat: {macros ? macros.fat : "-"}g
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">Everyday.</p>
      </div>
    </div>
  );
};

export default MacroN;
