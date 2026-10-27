import React from "react";
import { Suspense } from "react";

import { AppHeader } from "@/components/sidebar/app-header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { requireAuth } from "@/module/auth/lib/auth-utils";

const DashboardContent = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  await requireAuth();

  return (
    <SidebarProvider className="relative h-svh">
      <AppSidebar />
      <SidebarInset className="md:peer-data-[variant=inset]:ml-0">
        <AppHeader />
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 md:p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <Suspense
    fallback={
      <div aria-label="Loading dashboard" className="min-h-svh" role="status" />
    }
  >
    <DashboardContent>{children}</DashboardContent>
  </Suspense>
);

export default DashboardLayout;
