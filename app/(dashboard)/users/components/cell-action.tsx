"use client";

import Image from "next/image";
import { AssociationsIdColumn } from "./columns";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Eye, UserCheck, UserX } from "lucide-react";

interface CellActionProps {
  data: AssociationsIdColumn;
}

export const CellAction = ({ data }: CellActionProps) => {
  const router = useRouter();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <span className="sr-only">Open menu</span>
            <Image
              src="/three-dots.svg"
              alt="dots"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[180px] h-[130px] p-3">
          <DropdownMenuItem onClick={() => router.push(`/users/${data.id}`)}>
            <div className="flex items-center gap-2 cursor-pointer text-[#545F7D]">
              <Eye className="size-4" />
              <span className="text-sm font-normal">
                View Details
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 cursor-pointer text-[#545F7D]">
              <UserX className="size-4" />
              <span className="text-sm font-normal">
                Blacklist User
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 cursor-pointer text-[#545F7D]">
              <UserCheck className="size-4" />
              <span className="text-sm font-normal">
                Activate User
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
