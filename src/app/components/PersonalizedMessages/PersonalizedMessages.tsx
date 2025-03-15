"use client";

import { useUserPreferences } from "@/hooks/useUserPreferences";
import { useMemo } from "react";

const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const getRandomMessage = () => {
  const messages = [
    "Embrace the weekend, you aced Friday.",
    "Keep taking time for yourself until you're you again",
    "Small steps lead to big changes",
    "Take a deep breath, you're doing great",
    "Your journey is uniquely yours",
    "Every moment is a fresh beginning",
    "Progress over perfection",
    "You're exactly where you need to be",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

export const usePersonalizedMessage = () => {
  return useMemo(() => getRandomMessage(), []);
};

const PersonalizedMessages = () => {
  const { preferences } = useUserPreferences();
  const greeting = useMemo(() => getTimeBasedGreeting(), []);

  return (
    <p className="text-3xl">
      {preferences.name
        ? `${greeting}, ${preferences.name}`
        : "Welcome to ZenPulse"}
    </p>
  );
};

export default PersonalizedMessages;
