import { Overview } from "@/components/overview";

import { columns } from "./components/columns";
import { DataTable } from "@/components/data-table";
import { members } from "@/lib/data";

const UsersPage = () => {
  return (
    <main className="p-12">
      <h3 className="text-2xl font-medium text-[#213F7D]">Users</h3>
      <Overview />
      <DataTable
        columns={columns}
        data={members}
        searchKey="name"
      />
    </main>
  );
};

export default UsersPage;
