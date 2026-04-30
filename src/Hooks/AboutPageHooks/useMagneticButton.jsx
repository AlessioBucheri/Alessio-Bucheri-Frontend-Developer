import { useEffect } from "react";

const useMagneticButton = (ref, strength = 0.5) => {
  useEffect(() => {
    const button = ref.current;

    if (!button) {
      return undefined;
    }

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.setProperty("--magnetic-x", `${x * strength}px`);
      button.style.setProperty("--magnetic-y", `${y * strength}px`);
    };

    const handleMouseLeave = () => {
      button.style.setProperty("--magnetic-x", "0px");
      button.style.setProperty("--magnetic-y", "0px");
    };

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
