// components/Clock.js
"use client";
import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    // Delay setting the loaded state to trigger the fade-in effect
    const loadTimer = setTimeout(() => setLoaded(true), 100);

    return () => {
      clearInterval(timer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <span className={styles.fadeInAnimation}>
      <p className="text-6xl">{currentTime}</p>
    </span>
  );
};

export default Clock;
