"use client";

import Image from "next/image";
import { Navigation } from "./navigation";
import { useStateContext } from "@/contexts/ContextProvider";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ headerText }: { headerText: string }) => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <header
      className={`border-b border-[#06080933] fixed  z-20 w-full bg-white transition-all duration-300 ${
        activeMenu ? "lg:left-[252px] lg:w-custom" : "lg:left-0"
      }`}
    >
      <div className="flex justify-between items-center py-[26px]">
        <div className="lg:pl-10 pl-4">
          {activeMenu ? (
            <h5 className="hidden lg:flex text-sm font-normal leading-[20.3px] text-[#5D5D5D]">
              {headerText}
            </h5>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <div>
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={36}
                  height={28}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <Image
                  src="/images/keyboard_double_arrow_left.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="cursor-pointer rotate-180"
                  onClick={() => setActiveMenu(!activeMenu)}
                />
              </div>
            </div>
          )}
          <div className="lg:hidden">
            <Navigation />
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center gap-1 w-[289px] h-7 py-1 px-1.5 rounded-lg bg-[#0000000D]">
          <Image src="/images/search.svg" alt="search" width={14} height={14} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-xs leading-4 font-normal"
          />
        </div>
        <div className="flex justify-center items-center gap-4 pr-[34px]">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src="/images/notifications_none.svg"
                alt="notifications"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-4 w-[385px] rounded-lg p-0">
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <div className="size-8 bg-[#f5f5f5] rounded-full">
              <Image
                src="/images/profile.png"
                alt="profile"
                width={32}
                height={32}
              />
            </div>
            <div>
              <Image
                src="/images/expand_more.svg"
                alt="profile"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
