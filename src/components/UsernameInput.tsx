import React from "react";
import { motion } from "framer-motion";

const UsernameInput = () => {
  const usernameInputVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={usernameInputVariants}
    >
      <h2>Enter your username</h2>
      <input type="text" className="border-2 border-gray-300 p-2 rounded" />
      {/* Add more UI elements as needed */}
    </motion.div>
  );
};

export default UsernameInput;
