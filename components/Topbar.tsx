'use client';
import { Bell, User } from 'lucide-react';
import DarkModeToggle from './providers/DarkModeToggle';

export default function Topbar() {
  return (
    <header className="bg-white dark:bg-slate-900 shadow px-6 py-3 flex justify-between items-center">
      <h1 className="font-semibold text-xl text-slate-900 dark:text-slate-100">Dashboard</h1>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <Bell className="h-5 w-5 text-slate-500 dark:text-slate-300" />
        <div className="flex items-center gap-2">
          <User className="h-6 w-6 text-primary" />
          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">John Doe</span>
        </div>
      </div>
    </header>
  );
}
