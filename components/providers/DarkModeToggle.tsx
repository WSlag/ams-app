'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg border bg-white dark:bg-slate-800 dark:border-slate-700">
      {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400"/> : <Moon className="h-5 w-5 text-slate-700"/>}
    </button>
  );
}
