"use client";
import Stopwatch from "@/components/Stopwatch/Stopwatch";
import { useUserPreferences } from "@/hooks/useUserPreferences";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import Clock from "../components/Clock/Clock";
import PersonalizedMessages, {
  usePersonalizedMessage,
} from "./components/PersonalizedMessages/PersonalizedMessages";

export default function Home() {
  const { preferences, isLoading } = useUserPreferences();
  const [selectedMode, setSelectedMode] = useState<number>(2); // Default to home mode
  const message = usePersonalizedMessage();

  useEffect(() => {
    const passedOnboarding = localStorage.getItem("passedOnboarding");
    if (passedOnboarding !== "true") {
      redirect("/intro");
    }
  }, []);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  const renderContent = () => {
    switch (selectedMode) {
      case 1: // Lightbulb mode
        return (
          <div className="flex flex-col items-center space-y-4">
            <PersonalizedMessages />
            <Clock />
            <p className="text-2xl text-white">{message}</p>
          </div>
        );
      case 2: // Home mode
        return (
          <div className="flex flex-col items-center space-y-4">
            <PersonalizedMessages />
            <Clock />
            <p className="text-2xl text-white">{message}</p>
          </div>
        );
      case 3: // Stopwatch mode
        return <Stopwatch />;
      default:
        return (
          <div className="flex flex-col items-center space-y-4">
            <PersonalizedMessages />
            <Clock />
            <p className="text-lg text-white/80">{message}</p>
          </div>
        );
    }
  };

  return (
    <main className="bg-main-bg bg-cover bg-center h-screen bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <div className="text-white text-center">{renderContent()}</div>

        <BottomNav onModeChange={setSelectedMode} selectedMode={selectedMode} />
      </div>
    </main>
  );
}
