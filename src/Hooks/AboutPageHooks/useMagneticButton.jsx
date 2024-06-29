import { useEffect } from "react";

const useMagneticButton = (ref, strength = 0.5) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const button = ref.current;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * strength}px, ${
        y * strength
      }px)`;
    };

    const handleMouseLeave = () => {
      const button = ref.current;
      button.style.transform = "translate(0, 0)";
    };

    const button = ref.current;
    button.style.transition = "transform 0.2s ease-out";
    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength]);
};

export default useMagneticButton;
