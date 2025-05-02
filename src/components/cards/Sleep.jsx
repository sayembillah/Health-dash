import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function getSleepRecommendation(age) {
  if (!age) return "-";
  age = Number(age);

  // Updated sleep recommendations based on National Sleep Foundation and CDC guidelines
  if (age < 1) return "14-17 hours"; // Newborns need 14-17 hours
  if (age < 2) return "11-14 hours"; // Infants need 11-14 hours
  if (age < 5) return "10-13 hours"; // Toddlers need 10-13 hours
  if (age < 13) return "9-11 hours"; // Children need 9-11 hours
  if (age < 18) return "8-10 hours"; // Teenagers need 8-10 hours
  if (age < 65) return "7-9 hours"; // Adults need 7-9 hours
  return "7-8 hours"; // Older adults need 7-8 hours
}

const Sleep = () => {
  const { user } = useContext(UserContext);
  const sleep = user ? getSleepRecommendation(user.age) : "-";
  return (
    <div className="relative w-full max-w-sm h-[350px] bg-gradient-to-b from-neutral-50 to-gray-100 rounded-4xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex items-center justify-between p-6 rounded-t-4xl">
        <h1 className="text-2xl md:text-3xl font-bold">Sleep Recommendation</h1>
        <span className="text-3xl md:text-4xl">😴</span>
      </div>
      <div className="flex flex-col justify-center p-6 text-center flex-1">
        <h2 className="text-xl md:text-2xl font-semibold">You should sleep</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {sleep}
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">everyday.</p>
      </div>
    </div>
  );
};

export default Sleep;
