"use client";

import { useState } from "react";
import styles from "./Onboarding.module.css";

interface OnboardingProps {
  onComplete: (name: string) => void;
}

const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onComplete(name.trim());
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
    <div
      className={`fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center ${styles.fadeIn}`}
    >
      <div className="text-white text-center space-y-8">
        <h1 className="text-4xl font-bold mb-8">{steps[step].title}</h1>
        {steps[step].content}
      </div>
    </div>
  );
};

export default Onboarding;
