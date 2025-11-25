import type { LatestInvoice, Revenue } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';

async function loadDashboardData(): Promise<{
  revenue: Revenue[];
  latestInvoices: LatestInvoice[];
}> {
  try {
    const dataModule = await import('@/app/lib/data');
    const [revenue, latestInvoices] = await Promise.all([
      dataModule.fetchRevenue(),
      dataModule.fetchLatestInvoices(),
    ]);

    return { revenue, latestInvoices };
  } catch (error) {
    console.error('Failed to load dashboard data.', error);
    return { revenue: [], latestInvoices: [] };
  }
}

export default async function DashboardPage() {
  const { revenue, latestInvoices } = await loadDashboardData();

  return (
    <main className="flex flex-1 flex-col gap-6">
      <h1 className={`${lusitana.className} text-xl text-gray-900 md:text-2xl`}>
        Dashboard
      </h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </section>
    </main>
  );
}

