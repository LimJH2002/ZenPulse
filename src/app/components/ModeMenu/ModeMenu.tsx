"use client";
import { faMessage, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./ModeMenu.module.css";

function ModeMenu() {
  const [selectedIcon, setSelectedIcon] = useState(1);
   const iconWidthRem = 2.3;
  const sliderOffset = (selectedIcon - 1) * iconWidthRem;

  return (
    <div className="relative right-5 flex items-center rounded-3xl border-2 border-white border-opacity-100">
      <div
        className={styles.slider}
        style={{ transform: `translateX(${sliderOffset}rem)` }}
      />
      {/* Music Icon */}
      <FontAwesomeIcon
        icon={faMusic}
        className={`text-white text-xl cursor-pointer hover:text-gray-300 pl-2 py-2 z-10`}
        onClick={() => {
          setSelectedIcon(1);
        }}
      />

      <FontAwesomeIcon
        icon={faMessage}
        className={`text-white text-xl cursor-pointer hover:text-gray-300 px-4 py-2 z-10`}
        onClick={() => {
          setSelectedIcon(2);
        }}
      />

      <FontAwesomeIcon
        icon={faMessage}
        className={`text-white text-xl cursor-pointer hover:text-gray-300 pr-2 py-2 z-10`}
        onClick={() => {
          setSelectedIcon(3);
        }}
      />
    </div>
  );
}

export default ModeMenu;
