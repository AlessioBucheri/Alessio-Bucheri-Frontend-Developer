import { useRef } from "react";

export default function useGlobeSpin() {
  const globeRef = useRef(null);

  const handleMouseEnter = () => {
    if (globeRef.current) {
      globeRef.current.classList.add("rotate");
    }
  };

  const handleMouseLeave = () => {
    if (globeRef.current) {
      globeRef.current.classList.remove("rotate");
    }
  };

  return {
    globeRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}
