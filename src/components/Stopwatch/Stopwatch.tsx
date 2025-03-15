"use client";
import {
  faPause,
  faPlay,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const minutes = Math.floor(time / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="text-white text-[8rem] sm:text-[14rem] font-bold font-mono tracking-wider">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>

      <div className="flex space-x-6">
        <button
          onClick={startAndStop}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-200 ease-in-out"
          aria-label={isRunning ? "Pause stopwatch" : "Start stopwatch"}
        >
          <FontAwesomeIcon
            icon={isRunning ? faPause : faPlay}
            className="w-8 h-8"
          />
        </button>
        <button
          onClick={reset}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-200 ease-in-out"
          aria-label="Reset stopwatch"
        >
          <FontAwesomeIcon icon={faRotateLeft} className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
