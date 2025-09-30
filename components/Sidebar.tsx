'use client';
import Link from 'next/link';
import { Home, Users, FileText, Banknote, ClipboardList, LogOut } from 'lucide-react';
import { useState } from 'react';

const menu = [
  { name: 'Overview', icon: Home, href: '/dashboard' },
  { name: 'Applicants', icon: Users, href: '/applicants' },
  { name: 'Fund Requests', icon: Banknote, href: '/fund-requests' },
  { name: 'Expenses', icon: ClipboardList, href: '/expenses' },
  { name: 'Reports', icon: FileText, href: '/reports' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`flex flex-col transition-all duration-200 ${collapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-primary to-primary-light text-white`}>
      <div className="flex items-center justify-between p-4">
        <div className="font-bold text-lg">{collapsed ? 'AMS' : 'AMS CRM'}</div>
        <button onClick={() => setCollapsed(!collapsed)} className="opacity-80 hover:opacity-100 mr-1">
          {collapsed ? '☰' : '◀'}
        </button>
      </div>
      <nav className="flex-1">
        {menu.map(item => {
          const Icon = item.icon;
          return (
            <Link key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition">
              <Icon className="h-5 w-5" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="p-4">
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20">
          <LogOut className="h-4 w-4" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
