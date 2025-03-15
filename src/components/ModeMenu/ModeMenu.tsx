// components/ModeMenu.tsx
import {
  faHome,
  faLightbulb,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ModeMenu.module.css";

interface ModeMenuProps {
  selectedMode: number;
  onModeChange: (mode: number) => void;
}

function ModeMenu({ selectedMode, onModeChange }: ModeMenuProps) {
  const iconWidthRem = 3;
  const sliderOffset = (selectedMode - 1) * iconWidthRem;

  return (
    <div className="flex items-center rounded-full border-2 border-white border-opacity-100 mr-4">
      <div
        className={styles.slider}
        style={{ transform: `translateX(${sliderOffset}rem)` }}
      />
      {/* Lightbulb Icon */}
      <FontAwesomeIcon
        icon={faLightbulb}
        className="text-white text-2xl cursor-pointer hover:text-gray-300 ml-3 my-3 z-10 w-6"
        onClick={() => onModeChange(1)}
      />
      {/* Home Icon */}
      <FontAwesomeIcon
        icon={faHome}
        className="text-white text-2xl cursor-pointer hover:text-gray-300 mx-6 my-3 z-10 w-6"
        onClick={() => onModeChange(2)}
      />
      {/* Stopwatch Icon */}
      <FontAwesomeIcon
        icon={faStopwatch}
        className="text-white text-2xl cursor-pointer hover:text-gray-300 mr-3 my-3 z-10 w-6"
        onClick={() => onModeChange(3)}
      />
    </div>
  );
}

export default ModeMenu;
