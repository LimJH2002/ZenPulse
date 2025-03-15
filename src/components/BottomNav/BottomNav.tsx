"use client";
import { useEffect, useState } from "react";
import FullscreenButton from "../FullscreenButton";
import ModeMenu from "../ModeMenu/ModeMenu";
import SettingsButton from "../SettingsButton";
import styles from "./BottomNav.module.css";

interface BottomNavProps {
  selectedMode: number;
  onModeChange: (mode: number) => void;
}

function BottomNav({ selectedMode, onModeChange }: BottomNavProps) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });
  }, []);

  return fontLoaded ? (
    <div
      className={`${styles.fadeIn} absolute flex items-center bottom-10 lg:bottom-12 lg:right-12`}
    >
      {/* Mode Menu */}
      <ModeMenu selectedMode={selectedMode} onModeChange={onModeChange} />

      {/* Settings Button */}
      <SettingsButton />

      {/* Fullscreen Button */}
      <div className="hidden lg:block">
        <FullscreenButton />
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default BottomNav;
