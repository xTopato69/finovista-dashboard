
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import FinanceSummary from "@/components/dashboard/FinanceSummary";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import SpendingChart from "@/components/dashboard/SpendingChart";

const Index = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Sidebar overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar 
        isMobile={isMobile} 
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 px-4 sm:px-6 py-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Header */}
            <div className="dashboard-section">
              <h1 className="text-3xl font-bold">Welcome back, Emma!</h1>
              <p className="text-muted-foreground">
                Here's what's happening with your finances today.
              </p>
            </div>

            {/* Financial Summary */}
            <FinanceSummary />

            {/* Main Grid - Chart and Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SpendingChart />
              </div>
              <div className="lg:col-span-1">
                <RecentTransactions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
