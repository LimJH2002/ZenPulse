"use client";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SettingsButton() {
  const handleSettingsClick = () => {
    console.log("Settings clicked");
    // Implement your settings logic here
  };

  return (
    <div className="text-white text-2xl cursor-pointer mr-6 hover:text-indigo-500">
      <FontAwesomeIcon icon={faCog} onClick={handleSettingsClick} />
    </div>
  );
}

export default SettingsButton;
