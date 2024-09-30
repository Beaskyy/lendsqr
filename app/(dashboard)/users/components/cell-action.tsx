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
            <Image src="/images/dots.svg" alt="dots" width={32} height={32} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[241px]">
          <DropdownMenuItem
            onClick={() =>
              router.push(`/members/${data.id}`)
            }
          >
            <div className="flex items-center gap-2 py-2.5">
              <Image
                src="/images/view.svg"
                alt="eye"
                width={16}
                height={16}
              />
              <span className="text-sm font-normal text-black">
                View profile
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 py-2.5">
              <Image
                src="/images/delete.svg"
                alt="delete"
                width={16}
                height={16}
              />
              <span className="text-sm font-normal text-black">
                Remove member
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
