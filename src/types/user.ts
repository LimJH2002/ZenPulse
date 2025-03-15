export interface UserPreferences {
  name: string;
  theme?: "light" | "dark";
  hasCompletedOnboarding: boolean;
  createdAt: string;
}

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  name: "",
  theme: "dark",
  hasCompletedOnboarding: false,
  createdAt: new Date().toISOString(),
};
