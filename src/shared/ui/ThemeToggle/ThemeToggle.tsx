import { useTheme } from "../../hooks/useTheme";
import { ThemeIcon } from "./ThemeIcon";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: 6,
        borderRadius: 8,
        color: "var(--text-primary)",
        border: "1px solid var(--border-card)",
      }}
    >
      <ThemeIcon isDark={theme === "dark"} />
    </button>
  );
};
