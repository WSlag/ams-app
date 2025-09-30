'use client';
export function DataTable() {
  const rows = [
    { name: 'Maria Lopez', recruiter: 'Juan Cruz', status: 'Active', expenses: '₱150' },
    { name: 'John Smith', recruiter: 'Ana Santos', status: 'Pending', expenses: '₱200' },
    { name: 'Liza Chan', recruiter: 'Mark Reyes', status: 'Deployed', expenses: '₱120' },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th className="px-4 py-2 text-left font-medium">Applicant</th>
            <th className="px-4 py-2 text-left font-medium">Recruiter</th>
            <th className="px-4 py-2 text-left font-medium">Status</th>
            <th className="px-4 py-2 text-left font-medium">Expenses</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t border-slate-200 dark:border-slate-700">
              <td className="px-4 py-2 text-slate-900 dark:text-slate-100">{row.name}</td>
              <td className="px-4 py-2 text-slate-700 dark:text-slate-300">{row.recruiter}</td>
              <td className="px-4 py-2">{row.status}</td>
              <td className="px-4 py-2">{row.expenses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
