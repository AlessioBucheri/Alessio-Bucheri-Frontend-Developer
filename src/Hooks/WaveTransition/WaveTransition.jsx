import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./WaveTransition.css";

const waveVariants = {
  hidden: { clipPath: "ellipse(58% 18% at 50% 102%)" },
  visible: { clipPath: "ellipse(165% 155% at 50% 48%)" },
  exit: { clipPath: "ellipse(62% 20% at 50% -8%)" },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.985,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.99,
    filter: "blur(8px)",
  },
};

const WaveTransition = ({ children }) => {
  return (
    <motion.div
      className='wave-container'
      variants={waveVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className='wave-background'
        variants={contentVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        transition={{
          duration: 0.95,
          delay: 0.14,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

WaveTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WaveTransition;
