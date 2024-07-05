
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const useSkillBar = (level) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { width: "0%" },
    visible: { width: `${level}%` },
  };

  return { ref, inView, variants, motion };
};