// components/ModeMenu.tsx
import { faMessage, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./ModeMenu.module.css";

function ModeMenu() {
  const [selectedIcon, setSelectedIcon] = useState<number>(1);
  const iconWidthRem = 3;
  const sliderOffset = (selectedIcon - 1) * iconWidthRem;

  return (
    <div className="flex items-center rounded-3xl border-2 border-white border-opacity-100 mr-4">
      <div
        className={styles.slider}
        style={{ transform: `translateX(${sliderOffset}rem)` }}
      />
      {/* Music Icon */}
      <FontAwesomeIcon
        icon={faMusic}
        className="text-white text-2xl cursor-pointer hover:text-gray-300 ml-4 my-3 z-10"
        onClick={() => setSelectedIcon(1)}
      />
      {/* Message Icon */}
      <FontAwesomeIcon
        icon={faMessage}
        className="text-white text-2xl cursor-pointer hover:text-gray-300 mx-6 my-3 z-10"
        onClick={() => setSelectedIcon(2)}
      />
      {/* Another Message Icon */}
      <FontAwesomeIcon
        icon={faMessage}
        className="text-white text-2xl cursor-pointer hover:text-gray-300 mr-4 my-3 z-10"
        onClick={() => setSelectedIcon(3)}
      />
    </div>
  );
}

export default ModeMenu;
