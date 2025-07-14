import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const Header = ({ handleClear }: { handleClear: () => void }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center mb-6">
      <h1
        className="text-3xl sm:text-4xl mt-8  text-foreground text-center flex items-center cursor-pointer tracking-wider"
        onClick={() => handleClear()}
      >
       NLP Fantasy Data
       
      </h1>
      
      <div className="absolute top-10 right-10 flex items-center justify-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <div className="hidden sm:block">
          
        </div>
      </div>
    </div>
  );
};
