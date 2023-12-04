"use client";
import { STAGGER_CHILD_VARIANTS } from "@/app/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Intro() {
  const [showInput, setShowInput] = useState(false);

  const handleGetStartedClick = () => {
    setShowInput(true);
  };

  const inputVariants = {
    hidden: { x: 800, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 1, duration: 2 } },
    exit: { x: -800, opacity: 0 },
  };

  // Adjusted for slower animation
  const slowerTransition = { duration: 2 };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen z-10"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={slowerTransition} // Using slower transition
    >
      <motion.div
        variants={{
          show: {
            transition: {
              ...slowerTransition, // Using slower transition
              staggerChildren: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
      >
        <motion.h1
          className="font-display text-4xl font-bold text-foreground transition-colors sm:text-5xl relative bottom-10"
          variants={STAGGER_CHILD_VARIANTS}
        >
          Welcome to{" "}
          <span className="font-bold tracking-tighter">ZenPulse</span>
        </motion.h1>

        <AnimatePresence>
          {!showInput && (
            <motion.div
              variants={STAGGER_CHILD_VARIANTS}
              exit={{ x: -800, opacity: 0, transition: slowerTransition }} // Using slower transition for exit
              className="absolute"
            >
              <motion.p className="max-w-md text-accent-foreground/80 transition-colors sm:text-lg">
                ZenPulse is a platform that lets you put your unused screens to
                use and also helps you to relax.
              </motion.p>
              <button
                onClick={handleGetStartedClick}
                className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4"
              >
                Let's Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showInput && (
            <motion.div
              className="flex flex-col items-center space-y-4 absolute"
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              exit={{ ...inputVariants.exit, transition: slowerTransition }} // Using slower transition for exit
            >
              <p className="text-lg text-foreground">
                How would you like to be called?
              </p>
              <input
                type="text"
                placeholder="Enter your preferred name"
                className="rounded px-4 py-2 border border-gray-300"
              />
              <button className="rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4">
                Submit
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
