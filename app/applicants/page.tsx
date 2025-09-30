'use client';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import { KpiCard } from '../../components/KpiCard';
import { firestore } from '../../lib/firebase';
import { collection, getDocs, query } from 'firebase/firestore';

export default function ApplicantsPage() {
  const [applicants, setApplicants] = useState<any[]>([]);
  useEffect(() => {
    async function load() {
      try {
        const q = query(collection(firestore, 'applicants'));
        const snap = await getDocs(q);
        setApplicants(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error('Load applicants error', e);
      }
    }
    load();
  }, []);

  return (
    <Layout>
      <div className="px-6 py-6">
        <h1 className="text-2xl font-semibold mb-4">Applicants</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <KpiCard title="Total Applicants" value={String(applicants.length)} color="text-primary" />
        </div>
        <div>
          <table className="min-w-full text-sm bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
            <thead className="bg-slate-50 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Branch</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map(a => (
                <tr key={a.id} className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-2 text-slate-900 dark:text-slate-100">{a.name}</td>
                  <td className="px-4 py-2 text-slate-700 dark:text-slate-300">{a.branchId || '—'}</td>
                  <td className="px-4 py-2">{a.status || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
