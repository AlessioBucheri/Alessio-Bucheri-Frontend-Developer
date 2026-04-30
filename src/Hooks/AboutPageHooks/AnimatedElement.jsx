import { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

const AnimatedElement = ({ children, visible, index }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (visible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, delay: index * 0.1 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [visible, controls, index]);

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
      {children}
    </motion.div>
  );
};

AnimatedElement.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default AnimatedElement;
