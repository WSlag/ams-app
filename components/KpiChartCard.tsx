'use client';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from './providers/ThemeProvider';

export function KpiChartCard({ title, data, color }: { title: string; data: { name: string; value: number }[]; color?: string }) {
  const { theme } = useTheme();
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-slate-800 p-4">
      <div className="text-sm text-slate-500 dark:text-slate-400">{title}</div>
      <div className="h-28 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip wrapperStyle={{ backgroundColor: theme === 'dark' ? '#111827' : '#ffffff' }} />
            <Line type="monotone" dataKey="value" stroke={color || (theme === 'dark' ? '#6366F1' : '#4F46E5')} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
