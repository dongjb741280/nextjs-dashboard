import type { LatestInvoice, Revenue } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import { fetchCardData } from '@/app/lib/data';

export default async function DashboardPage() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main className="flex flex-1 flex-col gap-6">
      <h1 className={`${lusitana.className} text-xl text-gray-900 md:text-2xl`}>
        Dashboard
      </h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper
          totalPaidInvoices={totalPaidInvoices}
          totalPendingInvoices={totalPendingInvoices}
          numberOfInvoices={numberOfInvoices}
          numberOfCustomers={numberOfCustomers}
        />
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </section>
    </main>
  );
}



