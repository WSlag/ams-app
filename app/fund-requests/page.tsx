'use client';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import { firestore } from '../../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function FundRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  useEffect(() => {
    async function load() {
      try {
        const q = query(collection(firestore, 'fundRequests'), orderBy('createdAt', 'desc'));
        const snap = await getDocs(q);
        setRequests(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error('Load requests error', e);
      }
    }
    load();
  }, []);

  return (
    <Layout>
      <div className="px-6 py-6">
        <h1 className="text-2xl font-semibold mb-4">Fund Requests</h1>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 text-left">Branch</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(r => (
                <tr key={r.id} className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-4 py-2">{r.branchId}</td>
                  <td className="px-4 py-2">{r.type}</td>
                  <td className="px-4 py-2">₱{r.amount?.toLocaleString?.() ?? r.amount}</td>
                  <td className="px-4 py-2">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
