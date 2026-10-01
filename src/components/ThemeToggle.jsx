import { Moon, Sun } from "lucide-react";
import { useSite } from "../lib/site";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggle } = useSite();
  return (
    <button
      type="button" onClick={toggle} className={`btn btn-ghost btn-icon ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
