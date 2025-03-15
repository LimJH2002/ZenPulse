"use client";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SettingsOverlay from "./SettingsOverlay";
import { set } from "date-fns";

function SettingsButton() {
  const [open, setOpen] = useState(false);

  const handleSettingsClick = () => {
    setOpen(!open);
  };

  return (
    <div className="text-white text-2xl cursor-pointer lg:mr-6 hover:text-indigo-500">
      <FontAwesomeIcon icon={faCog} onClick={handleSettingsClick} />
      <SettingsOverlay open={open} setOpen={setOpen} />
    </div>
  );
}

export default SettingsButton;
