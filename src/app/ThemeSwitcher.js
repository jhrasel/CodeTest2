import React, { useState, useEffect } from "react";
import ORImage from "@/components/Reuse/ORImage";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useEffect(() => {
    setOpen(JSON.parse(localStorage.getItem("themeSwitcherOpen")) || false);
  }, []);

  const handleOpen = () => {
    const newOpen = !open;
    setOpen(newOpen);
    localStorage.setItem("themeSwitcherOpen", JSON.stringify(newOpen));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0">
      {open ? (
        <div className="" onClick={handleOpen}>
          <button
            onClick={() => setTheme("light")}
            className="border-2 bg-orange-400 p-1 rounded-lg"
          >
            <ORImage
              image="/images/light-mood.png"
              width="30"
              height="30"
              alt="light"
            />
          </button>
        </div>
      ) : (
        <div className="" onClick={handleOpen}>
          <button
            onClick={() => setTheme("dark")}
            className="border-2 bg-orange-400 p-1 rounded-lg"
          >
            <ORImage
              image="/images/dark-mood.png"
              width="30"
              height="30"
              alt="light"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
