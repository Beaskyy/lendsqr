"use client";

import Image from "next/image";
import { Navigation } from "./navigation";
import { useStateContext } from "@/contexts/ContextProvider";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, Search } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <>
      {/* <header
        className={`border-b border-[#06080933] fixed  z-20 w-full bg-white transition-all duration-300 ${
          activeMenu ? "lg:left-[283px] lg:w-custom" : "lg:left-0"
        }`}
      >
        <div className="flex justify-between items-center py-[26px]">
          <div className="lg:pl-10 pl-4">
            <div className="lg:hidden">
              <Navigation />
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center gap-1 w-[289px] h-7 py-1 px-1.5 rounded-lg bg-[#0000000D]">
            <Image
              src="/images/search.svg"
              alt="search"
              width={14}
              height={14}
            />
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
              <DropdownMenuContent
                align="end"
                className="mt-4 w-[385px] rounded-lg p-0"
              ></DropdownMenuContent>
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
      </header> */}
      <header className="fixed w-full bg-white z-50 h-[100px]">
        <div className="grid grid-cols-2 p-5 shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <Image src="/logo.svg" alt="logo" width={145} height={30} />
            </div>
            <div className="relative hidden lg:flex">
              <Input
                type="text"
                className="border border-[#213F7D1A] h-10 w-[400px] placeholder:text-[#545F7D] placeholder:text-sm"
                placeholder="Search for anything"
              />
              <Button className="absolute bg-[#39CDCC] h-10 w-14 flex justify-center items-center rounded-r-md top-0 right-0 rounded-l-none">
                <Search className="size-3.5 text-white" />
              </Button>
            </div>
          </div>
          <div>
            <div className="lg:hidden flex justify-end">
              <Navigation />
            </div>
            <div className="hidden lg:flex justify-end items-center gap-6">
              <div>
                <Link
                  href="docs"
                  className="text-base text-[#213F7D] underline pr-6"
                >
                  Docs
                </Link>
              </div>
              <div>
                <Bell className="w-[26px] h-[26px]" />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="pr-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sky-600 bg-[url('/avatar.svg')] bg-center"></div>
                  <p className="flex items-center text-base text-[#213F7D] font-medium">
                    Adedeji
                    <span>
                      <ChevronDown className="ml-2 size-5" />
                    </span>
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
