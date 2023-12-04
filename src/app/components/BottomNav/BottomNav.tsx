"use client";
import { useEffect, useState } from "react";
import FullscreenButton from "../FullscreenButton";
import ModeMenu from "../ModeMenu/ModeMenu";
import SettingsButton from "../SettingsButton";
import styles from "./BottomNav.module.css";

function BottomNav() {
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
      <ModeMenu />

      {/* Settings Button */}
      <SettingsButton />

      {/* Fullscreen Button */}
      <div className="hidden lg:block">
        <FullscreenButton />
      </div>
    </div>
  ) : (
    <div></div> // Alternatively, you can render a loader or placeholder here
  );
}

export default BottomNav;
