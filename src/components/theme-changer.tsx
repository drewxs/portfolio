"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button className="theme-changer" onClick={handleThemeToggle}>
      <div className="gear"></div>
      <div className="gear tooth"></div>
      <div className="gear tooth"></div>
      <div className="gear tooth"></div>
      <div className="gear tooth"></div>
      <div className="circle"></div>
      <div className="circle inner"></div>
    </button>
  );
};
