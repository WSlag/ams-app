'use client';
import Layout from '../../components/Layout';
import { KpiCard } from '../../components/KpiCard';
import { KpiChartCard } from '../../components/KpiChartCard';
import { DataTable } from '../../components/DataTable';

const applicantTrend = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 320 },
  { name: "Mar", value: 400 },
  { name: "Apr", value: 280 },
  { name: "May", value: 500 },
];

const fundRequestTrend = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 28 },
  { name: "Apr", value: 40 },
  { name: "May", value: 56 },
];

export default function DashboardPage() {
  return (
    <Layout>
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <KpiCard title="Applicants" value="1,245" change="+12%" color="text-primary" />
          <KpiCard title="Deployments" value="532" change="+5%" color="text-accent" />
          <KpiCard title="Fund Requests" value="56" change="+4%" color="text-warning" />
          <KpiCard title="Rejected" value="8" change="-2%" color="text-danger" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <KpiChartCard title="Applicant Trend" data={applicantTrend} color="#4F46E5" />
          <KpiChartCard title="Fund Requests Trend" data={fundRequestTrend} color="#10B981" />
        </div>

        <h2 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100">Recent Applicants</h2>
        <DataTable />
      </div>
    </Layout>
  );
}
