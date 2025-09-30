'use client';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import { firestore } from '../../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useUserStore } from '../../hooks/useUserStore';

export default function ApprovalsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const currentUser = useUserStore(s => s);

  useEffect(() => {
    async function load() {
      try {
        const cr = query(collection(firestore, 'fundRequests'), orderBy('createdAt', 'desc'));
        const snap = await getDocs(cr);
        setRequests(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error('Load approvals error', e);
      }
    }
    load();
  }, []);

  const canApprove = currentUser?.role && ['Administrator','HeadOfficeAccounting','President'].includes(currentUser.role);

  if (!canApprove) {
    return (
      <Layout>
        <div className="px-6 py-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-red-600">Access Denied</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-2">You do not have permission to access approvals.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="px-6 py-6">
        <h1 className="text-2xl font-semibold mb-4">Fund Request Approvals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4">
            <h3 className="font-medium mb-2">Requests</h3>
            <ul>
              {requests.map(r => (
                <li key={r.id} className="py-2 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{r.branchId}</div>
                      <div className="text-xs text-slate-500">{r.requestedBy}</div>
                    </div>
                    <div>{r.status}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
