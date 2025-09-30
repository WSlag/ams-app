'use client';
export function KpiCard({ title, value, change, color }: { title: string; value: string; change?: string; color?: string; }) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-slate-800 p-4">
      <div className="text-sm text-slate-500 dark:text-slate-400">{title}</div>
      <div className={`text-2xl font-bold ${color || 'text-slate-900 dark:text-slate-100'}`}>{value}</div>
      {change && <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{change}</div>}
    </div>
  );
}
