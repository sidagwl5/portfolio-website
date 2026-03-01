import { useState, useEffect } from "react";

/**
 * Hook to detect if the device has touch capabilities.
 * Uses (pointer: coarse) which is the standard for touch screens.
 */
export const useTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if the device has a coarse pointer (touchscreen)
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouch(mediaQuery.matches);

    const handler = (e) => setIsTouch(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isTouch;
};
