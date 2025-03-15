"use client";
import { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";

const formatTime = (timeInSeconds: number): string => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const format = (num: number) => num.toString().padStart(2, "0");
  return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="text-center">
      <div className={`text-[8rem] font-bold mb-8 ${styles.fadeInAnimation}`}>
        {formatTime(time)}
      </div>
      <div className="space-x-4">
        <button
          onClick={handleStartStop}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-lg transition-all"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-lg transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
