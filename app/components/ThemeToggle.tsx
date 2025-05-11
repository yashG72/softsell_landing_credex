"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="absolute top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-800 text-sm"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
