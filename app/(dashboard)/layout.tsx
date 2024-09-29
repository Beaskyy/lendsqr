"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStateContext } from "@/contexts/ContextProvider";
import { Bell, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [headerText, setHeaderText] = useState("Dashboard");
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const pathname = usePathname();

  console.log(pathname.split("/"));

  useEffect(() => {
    if (pathname === "/") {
      setHeaderText("Dashboard");
    } else {
      setHeaderText(
        pathname.split("/")[1].charAt(0).toUpperCase() +
          pathname.split("/")[1].slice(1)
      );
    }
  }, [pathname]);

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    // <main>
    //   <div
    //     className="flex relative"
    //     onClick={() => {
    //       if (activeMenu) {
    //         handleCloseSidebar();
    //       }
    //     }}
    //   >
    //     {activeMenu && (
    //       <div className="w-[252px] fixed z-50 bg-white left-0">
    //         <Sidebar />
    //       </div>
    //     )}
    //     <div
    //       className={`min-h-screen w-full ${
    //         activeMenu ? "lg:ml-64" : "flex-2"
    //       }`}
    //     >
    //       <div className="fixed lg:static w-full z-20">
    //         <Header headerText={headerText} />
    //       </div>
    //     </div>
    //     <div
    //       className={`absolute top-20 transition-all duration-300 ${
    //         activeMenu
    //           ? "lg:w-custom w-full overflow-hidden lg:left-[252px]"
    //           : "w-full lg:left-0"
    //       }`}
    //     >
    //       {children}
    //     </div>
    //   </div>
    // </main>
    <main>
      <Header />
      <div>
        {activeMenu && (
          <div className="w-[252px] fixed z-50 bg-white left-0">
            <Sidebar />
          </div>
        )}
        <div
          className={`absolute top-20 transition-all duration-300 ${
            activeMenu
              ? "lg:w-custom w-full overflow-hidden lg:left-[252px]"
              : "w-full lg:left-0"
          }`}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
