"use client";

import Image from "next/image";
import { Navigation } from "./navigation";

import { Button } from "@/components/ui/button";
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
  return (
    <header className="fixed w-full bg-white z-50">
      <div className="grid grid-cols-2 p-5 shadow-md shadow-[#0000000A] h-[100px]">
        <div className="flex justify-between items-center">
          <div>
            <Image src="/logo.svg" alt="logo" width={145} height={30} />
          </div>
          <div className="relative hidden lg:flex">
            <input
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
  );
};

export default Header;
