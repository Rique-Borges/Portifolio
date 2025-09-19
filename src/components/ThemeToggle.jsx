import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    // Lógica simplificada para definir o tema inicial
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 p-2 rounded-full transition-all duration-300",
        "bg-background border shadow-md", // ALTERAÇÃO: Adicionado fundo, borda e sombra
        "hover:bg-secondary/60 hover:scale-110", // Efeito extra no hover
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", // Correção de foco para acessibilidade
        "z-[51]" // ALTERAÇÃO: Z-index maior que o da navbar
      )}
      aria-label={isDarkMode ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-slate-800" />
      )}
    </button>
  );
};