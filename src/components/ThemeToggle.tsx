import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggle = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full border border-border bg-secondary/50 hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" />}
    </button>
  );
};

export default ThemeToggle;
