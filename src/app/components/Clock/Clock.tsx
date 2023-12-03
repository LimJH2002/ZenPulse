// components/Clock.js
"use client";
import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

const formatTime = () => {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes();

  // Convert 24-hour format to 00:xx after midnight
  hour = hour === 24 ? 0 : hour;

  // Format hour and minute to always be 2 digits
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");

  return `${formattedHour}:${formattedMinute}`;
};

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(formatTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className={styles.fadeInAnimation}>
      <p className="text-6xl">{currentTime}</p>
    </span>
  );
};

export default Clock;