"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export type AssociationsIdColumn = {
  id: number;
  organization: string;
  name: string;
  email: string;
  created_at: string;
  phone: string;
  status: string;
};

export const columns: ColumnDef<AssociationsIdColumn>[] = [
  {
    accessorKey: "organization",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-3 cursor-pointer min-w-32"
        >
          Organization
          <Image
            src="filter-results-button.svg"
            alt="filter"
            width={16}
            height={16}
            className="text-[#545F7D]"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-3 cursor-pointer min-w-32"
        >
          Username
          <Image
            src="filter-results-button.svg"
            alt="filter"
            width={16}
            height={16}
            className="text-[#545F7D]"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-3 cursor-pointer"
        >
          Email
          <Image
            src="filter-results-button.svg"
            alt="filter"
            width={16}
            height={16}
            className="text-[#545F7D]"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-3 cursor-pointer min-w-32"
        >
          phone number
          <Image
            src="filter-results-button.svg"
            alt="filter"
            width={16}
            height={16}
            className="text-[#545F7D]"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-3 cursor-pointer"
        >
          JOINED DATE
          <Image
            src="filter-results-button.svg"
            alt="filter"
            width={16}
            height={16}
            className="text-[#545F7D]"
          />
        </div>
      );
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-3 cursor-pointer"
        >
          Status
          <Image
            src="filter-results-button.svg"
            alt="filter"
            width={16}
            height={16}
            className="text-[#545F7D]"
          />
        </div>
      );
    },
    cell: (info) => {
      const status = info.getValue() as string;
      const statusStyle =
        status === "active"
          ? { color: "#39CD62", backgroundColor: "#39CD620F" }
          : status === "inactive"
          ? { color: "#545F7D", backgroundColor: "#545F7D0F" } : status === "blacklisted" ? { color: "#E4033B", backgroundColor: "#E4033B1A"}
          : { color: "#E9B200", backgroundColor: "#E9B2001A" };

      return (
        <span
          style={statusStyle}
          className="flex justify-center items-center gap-2 py-1 pr-4 pl-3 rounded-[20px] text-sm font-normal w-fit capitalize"
        >
          <span>{status}</span>
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
