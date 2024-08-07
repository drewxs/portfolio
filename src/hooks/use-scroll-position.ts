"use client";

import { useEffect, useState } from "react";

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = (): void => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
