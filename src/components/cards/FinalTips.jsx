import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const tipsByAge = [
  {
    minAge: 0,
    maxAge: 12,
    title: "Childhood (0–12 years) 👶",
    tips: [
      "Get 9–11 hours of sleep to support healthy growth.",
      "Engage in daily physical play for at least 60 minutes.",
      "Eat a variety of fruits, vegetables, and whole grains.",
      "Build consistent habits around meals and rest.",
    ],
  },
  {
    minAge: 13,
    maxAge: 17,
    title: "Adolescence (13–17 years) 🧑‍🎓",
    tips: [
      "Aim for 8–10 hours of sleep to support brain development.",
      "Stay active with sports or regular exercise.",
      "Limit processed foods and sugary drinks.",
      "Build positive mental health habits and coping skills.",
    ],
  },
  {
    minAge: 18,
    maxAge: 25,
    title: "Young Adulthood (18–25 years) 🧑‍💼",
    tips: [
      "Establish regular sleep and exercise routines.",
      "Eat nutrient-rich meals to support energy and metabolism.",
      "Practice stress management with hobbies or mindfulness.",
      "Start regular health checkups and dental care.",
    ],
  },
  {
    minAge: 26,
    maxAge: 35,
    title: "Early Adulthood (26–35 years) 👨‍👩‍👧‍👦",
    tips: [
      "Strength train to preserve muscle mass.",
      "Manage stress proactively to support long-term health.",
      "Watch portion sizes and practice mindful eating.",
      "Stay consistent with sleep and hydration.",
    ],
  },
  {
    minAge: 36,
    maxAge: 45,
    title: "Midlife (36–45 years) 🧑‍🦳",
    tips: [
      "Focus on heart health with cardio and whole foods.",
      "Get routine screenings for cholesterol and blood pressure.",
      "Balance work, rest, and social life to reduce burnout.",
      "Maintain flexibility and core strength.",
    ],
  },
  {
    minAge: 46,
    maxAge: 60,
    title: "Pre-Senior Years (46–60 years) 👵",
    tips: [
      "Increase fiber and calcium in your diet.",
      "Stay mentally active with puzzles or learning.",
      "Stay consistent with aerobic and resistance training.",
      "Limit alcohol and avoid smoking.",
    ],
  },
  {
    minAge: 61,
    maxAge: 75,
    title: "Senior Years (61–75 years) 👴",
    tips: [
      "Focus on fall prevention with balance exercises.",
      "Eat smaller, nutrient-dense meals.",
      "Stay socially connected and engaged.",
      "Check hearing, vision, and bone density regularly.",
    ],
  },
  {
    minAge: 76,
    maxAge: 120,
    title: "Elderly (76+ years) 👵",
    tips: [
      "Stay mobile as much as safely possible.",
      "Monitor medications with your healthcare provider.",
      "Engage in community or family activities.",
      "Focus on light, regular meals and hydration.",
    ],
  },
];

const FinalTips = () => {
  const { user } = useContext(UserContext);
  const age = user?.age ? Number(user.age) : null;

  const matchedTip = tipsByAge.find(
    (group) => age >= group.minAge && age <= group.maxAge
  );

  return (
    <div className="relative w-full max-w-sm h-[352px] bg-gradient-to-b from-neutral-50 to-gray-100 rounded-4xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <div className="flex items-center justify-between p-6 rounded-t-4xl">
        <h1 className="text-2xl md:text-3xl font-bold">Age-Based Tips</h1>
      </div>
      <div className="flex flex-col items-start justify-start p-6 text-left flex-1 overflow-y-auto">
        {matchedTip ? (
          <>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              {matchedTip.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {matchedTip.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-base md:text-lg text-gray-700">
            Please enter your age to receive tailored health tips.
          </p>
        )}
      </div>
    </div>
  );
};

export default FinalTips;
