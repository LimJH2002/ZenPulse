"use client";

import { DEFAULT_USER_PREFERENCES, UserPreferences } from "@/types/user";
import { useEffect, useState } from "react";

const STORAGE_KEY = "zenpulse_user_preferences";

export const useUserPreferences = () => {
  const [preferences, setPreferences] = useState<UserPreferences>(
    DEFAULT_USER_PREFERENCES
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load preferences from localStorage on mount
    const storedPreferences = localStorage.getItem(STORAGE_KEY);
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
    }
    setIsLoading(false);
  }, []);

  const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
    const updatedPreferences = {
      ...preferences,
      ...newPreferences,
    };
    setPreferences(updatedPreferences);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPreferences));
  };

  const completeOnboarding = (name: string) => {
    updatePreferences({
      name,
      hasCompletedOnboarding: true,
    });
  };

  return {
    preferences,
    isLoading,
    updatePreferences,
    completeOnboarding,
  };
};
