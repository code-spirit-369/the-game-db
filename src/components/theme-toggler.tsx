"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer hover:text-primary">
      <Sun className="size-8 block dark:hidden" />
      <Moon className="size-8 hidden dark:block" />
    </div>
  );
}
