'use client';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto bg-background dark:bg-slate-950">
          {children}
        </main>
      </div>
    </div>
  );
}
