"use client";
import {
  faHouse,
  faMusic,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";
import styles from "./ModeMenu.module.css";

function ModeMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const iconWidthRem = 2.3;

  // Determine selected icon based on current path
  let selectedIcon = 2; // Default to home
  if (pathname === "/") selectedIcon = 2;
  else if (pathname === "/music") selectedIcon = 1;
  else if (pathname === "/focus") selectedIcon = 3;

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
          router.push("/music");
        }}
      />

      {/* Home Icon */}
      <FontAwesomeIcon
        icon={faHouse}
        className={`text-white text-xl cursor-pointer hover:text-gray-300 px-4 py-2 z-10`}
        onClick={() => {
          router.push("/");
        }}
      />

      {/* Focus Icon */}
      <FontAwesomeIcon
        icon={faStopwatch}
        className={`text-white text-xl cursor-pointer hover:text-gray-300 pr-2 py-2 z-10`}
        onClick={() => {
          router.push("/focus");
        }}
      />
    </div>
  );
}

export default ModeMenu;
