import React from "react";
import { motion } from "framer-motion";
import "./WaveTransition.css";

const waveVariants = {
  hidden: { clipPath: "ellipse(70% 40% at 50% 100%)" },
  visible: { clipPath: "ellipse(150% 150% at 50% 50%)" },
  exit: { clipPath: "ellipse(70% 40% at 50% -100%)" },
};

const WaveTransition = ({ children }) => {
  return (
    <motion.div
      className='wave-container'
      variants={waveVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={{ duration: 2.5, ease: "easeInOut" }}
    >
      <div className='wave-background'>{children}</div>
    </motion.div>
  );
};

export default WaveTransition;
