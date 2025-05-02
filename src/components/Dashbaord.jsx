import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import BMI from "./cards/BMI";
import WeightRange from "./cards/WeightRange";
import WaterIntake from "./cards/WaterIntake";
import CaloricNeeds from "./cards/CaloricNeeds";
import BMR from "./cards/BMR";
import Sleep from "./cards/Sleep";
import MacroN from "./cards/MacroN";
import FinalTips from "./cards/FinalTips";

const Dashbaord = () => {
  const { dashboardVisible } = useContext(UserContext);
  if (!dashboardVisible) return null;
  return (
    <div id="dashboard-section" className="min-h-screen w-screen bg-gradient-to-br from-green-100 to-emerald-200 p-4 md:p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
        Here is what we found out
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <BMI />
          <WeightRange />
          <WaterIntake />
          <CaloricNeeds />
          <BMR />
          <Sleep />
          <MacroN />
          <FinalTips />
        </div>
      </div>
      <h1 className="text-xl md:text-2xl font-bold text-center mt-8">
        We hope this helps you to stay healthy and fit! 🏋️‍♂️
      </h1>
    </div>
  );
};

export default Dashbaord;
