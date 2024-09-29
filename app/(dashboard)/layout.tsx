"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

import { useStateContext } from "@/contexts/ContextProvider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { activeMenu } = useStateContext();

  return (
    <main>
      <Header />
      <div className="relative">
        <div className="flex items-center">
          <div className="fixed top-[100px] h-screen bg-white w-[283px] overflow-y-auto overflow-hidden hover:overflow-auto">
            <Sidebar />
          </div>
          <div
            className={`absolute top-[100px] transition-all duration-300 ${
              activeMenu
                ? "lg:w-custom w-full overflow-hidden lg:left-[283px]"
                : "w-full lg:left-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
