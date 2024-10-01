import { Overview } from "@/components/overview";

import { columns } from "./components/columns";
import { DataTable } from "@/components/data-table";
import { users } from "@/lib/data";

const UsersPage = () => {
  return (
    <main className="lg:p-12 md:p-6 p-4">
      <h3 className="text-2xl font-medium text-[#213F7D]">Users</h3>
      <Overview />
      <DataTable
        columns={columns}
        data={users}
      />
    </main>
  );
};

export default UsersPage;
