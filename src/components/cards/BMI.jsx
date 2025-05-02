import React, { useContext } from "react";
import { UserContext } from "../UserContext";

// BMI calculation from height in feet.inch and weight in kg
function calculateBMI(weight, height) {
  if (!weight || !height) return null;
  const [feet, inch = 0] = height.split(".").map(Number);
  if (isNaN(weight) || isNaN(feet) || isNaN(inch)) return null;

  const totalInches = feet * 12 + inch;
  const heightMeters = totalInches * 0.0254;
  const bmi = weight / (heightMeters * heightMeters);
  return bmi;
}

// Category based on BMI value
function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

const BMI = () => {
  const { user } = useContext(UserContext);
  let bmi = null,
    category = "-";

  if (user) {
    bmi = calculateBMI(Number(user.weight), user.height);
    if (bmi) category = getBMICategory(bmi);
  }

  return (
    <div className="relative w-full max-w-sm h-[380px] bg-gradient-to-b from-neutral-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 rounded-t-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-black">BMI</h1>
        <span className="text-3xl md:text-4xl">📏</span>
      </div>

      {/* BMI Display */}
      <div className="flex flex-col items-center justify-center px-6 text-center flex-1">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Your BMI is
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {bmi ? bmi.toFixed(1) : "-"}
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-600">
          {bmi
            ? `You are in the ${category} range.`
            : "Enter your details above."}
        </p>

        {/* BMI Visual Scale */}
        <div className="mt-6 w-full">
          <div className="relative h-4 bg-gradient-to-r from-blue-300 via-green-300 to-red-300 rounded-full">
            {bmi && (
              <div
                className="absolute -top-2 w-1.5 h-8 bg-black rounded-full"
                style={{
                  left: `${Math.min(
                    Math.max(((bmi - 10) / 30) * 100, 0),
                    100
                  )}%`,
                  transform: "translateX(-50%)",
                }}
                title={`BMI: ${bmi.toFixed(1)}`}
              />
            )}
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-1 px-1">
            <span>Underweight</span>
            <span>Normal</span>
            <span>Overweight</span>
            <span>Obese</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
