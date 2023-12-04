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
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 200, opacity: 0 },
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen z-10"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <motion.div
        variants={{
          show: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
      >
        <motion.h1
          className="font-display text-4xl font-bold text-foreground transition-colors sm:text-5xl"
          variants={STAGGER_CHILD_VARIANTS}
        >
          Welcome to{" "}
          <span className="font-bold tracking-tighter">ZenPulse</span>
        </motion.h1>

        <AnimatePresence>
          {!showInput && (
            <motion.div>
              <motion.p
                className="max-w-md text-accent-foreground/80 transition-colors sm:text-lg"
                variants={STAGGER_CHILD_VARIANTS}
                exit={{ x: -200, opacity: 0 }}
              >
                ZenPulse is a platform that lets you put your unused screens to
                use and also helps you to relax.
              </motion.p>
              <motion.div
                variants={STAGGER_CHILD_VARIANTS}
                exit={{ x: -200, opacity: 0 }}
              >
                <button
                  onClick={handleGetStartedClick}
                  className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4"
                >
                  Let's Get Started
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showInput && (
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
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
