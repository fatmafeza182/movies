"use client"
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeChange = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center gap-1">
      <CiLight
        size={24}
        className="cursor-pointer"
        onClick={() => setTheme("light")}
      >
        
      </CiLight>
      <CiDark
        size={24}
        className="cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        
      </CiDark>
    </div>
  );
};

export default ThemeChange;
