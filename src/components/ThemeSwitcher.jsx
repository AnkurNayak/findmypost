import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ThemeSwitcher = () => {
  const [selected, setSelected] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = selected;
  }, [selected]);

  const handleTheme = (theme) => {
    setSelected(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="relative flex w-fit items-center rounded-full overflow-hidden">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => handleTheme("light")}
      >
        <FiMoon size={24} className="relative z-10" />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => handleTheme("dark")}
      >
        <FiSun size={24} className="relative z-10" />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
