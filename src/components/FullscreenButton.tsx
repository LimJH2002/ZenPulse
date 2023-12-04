"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const FullscreenButton = () => {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="text-white text-2xl cursor-pointer hover:text-indigo-500">
      <FontAwesomeIcon icon={faExpand} onClick={toggleFullScreen} />
    </div>
  );
};

export default FullscreenButton;
