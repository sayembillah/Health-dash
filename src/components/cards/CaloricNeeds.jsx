import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";

function calculateTDEE(bmr, activityLevel) {
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
  };
  const factor = activityFactors[activityLevel] || 1.2;
  return bmr ? bmr * factor : null;
}

const CaloricNeeds = () => {
  const { user } = useContext(UserContext);
  const [activity, setActivity] = useState("sedentary");
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);

  useEffect(() => {
    if (user) {
      const [feet, inch = 0] = user.height
        ? user.height.split(".").map(Number)
        : [0, 0];
      const totalInches = feet * 12 + (inch || 0);
      const heightCm = totalInches * 2.54;
      let calculatedBmr;
      if (user.gender === "male") {
        calculatedBmr =
          10 * Number(user.weight) + 6.25 * heightCm - 5 * Number(user.age) + 5;
      } else if (user.gender === "female") {
        calculatedBmr =
          10 * Number(user.weight) +
          6.25 * heightCm -
          5 * Number(user.age) -
          161;
      } else {
        calculatedBmr =
          10 * Number(user.weight) +
          6.25 * heightCm -
          5 * Number(user.age) -
          78;
      }
      setBmr(calculatedBmr);
      setTdee(calculateTDEE(calculatedBmr, activity));
    }
  }, [user]);

  useEffect(() => {
    if (bmr) {
      setTdee(calculateTDEE(bmr, activity));
    }
  }, [activity, bmr]);

  return (
    <div className="relative w-full max-w-sm h-[382px] bg-gradient-to-b from-neutral-50 to-gray-100 rounded-4xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex items-center justify-between p-6 rounded-t-4xl">
        <h1 className="text-2xl md:text-4xl font-bold">Caloric Needs</h1>
        <span className="text-3xl md:text-4xl">🔥</span>
      </div>
      <div className="flex flex-col items-center justify-center px-6 pb-4 pt-2 text-center flex-1">
        <h2 className="text-xl md:text-2xl font-semibold">You need</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {tdee ? `${Math.round(tdee)} kcal/day` : "-"}
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-600">
          for maintenance
        </p>

        <div className="mt-4 w-full text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select your activity level:
          </label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (1–3 days/week)</option>
            <option value="moderate">Moderate (3–5 days/week)</option>
            <option value="active">Very Active (6–7 days/week)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CaloricNeeds;
