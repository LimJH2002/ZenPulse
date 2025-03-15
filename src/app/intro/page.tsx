"use client";

import { useUserPreferences } from "@/hooks/useUserPreferences";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Intro() {
  const router = useRouter();
  const { completeOnboarding } = useUserPreferences();
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      completeOnboarding(name.trim());
      localStorage.setItem("passedOnboarding", "true");
      router.push("/");
    }
  };

  const steps = [
    {
      title: "Welcome to ZenPulse",
      content: (
        <div className="space-y-6">
          <p className="text-lg">
            Your journey to mindful productivity begins here.
          </p>
          <button
            onClick={() => setStep(1)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-lg transition-all"
          >
            Get Started
          </button>
        </div>
      ),
    },
    {
      title: "What should we call you?",
      content: (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg w-64 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            autoFocus
          />
          <div>
            <button
              type="submit"
              disabled={!name.trim()}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Begin Journey
            </button>
          </div>
        </form>
      ),
    },
  ];

  return (
    <main className="bg-main-bg bg-cover bg-center h-screen bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div
        className={`flex items-center justify-center h-full relative z-10 ${styles.fadeIn}`}
      >
        <div className="text-white text-center space-y-8">
          <h1 className="text-4xl font-bold mb-8">{steps[step].title}</h1>
          {steps[step].content}
        </div>
      </div>
    </main>
  );
}
