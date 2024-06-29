import { useState, useEffect } from "react";

const useButtonVisibility = (ref, delay) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const bottom = ref.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        if (top <= windowHeight && bottom >= 0) {
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          clearTimeout(timeoutId);
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [ref, delay]);

  return isVisible;
};

export default useButtonVisibility;
