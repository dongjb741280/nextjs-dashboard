import type { ReactNode } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-gray-100 md:flex-row md:overflow-hidden">
      <div className="w-full border-b border-gray-200 md:w-64 md:border-b-0 md:border-r">
        <SideNav />
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-6">
        {children}
      </div>
    </div>
  );
}
