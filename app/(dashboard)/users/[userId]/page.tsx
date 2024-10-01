import { Button } from "@/components/ui/button";
import { users } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";
import { UserSummary } from "../components/user-summary";

const UserId = ({ params }: { params: { userId: string } }) => {
  const user = users.find((item) => item.id === parseInt(params.userId));

  return (
    <main className="mt-14 lg:ml-10 lg:mr-9 mx-4">
      <Link href={`/users`} className="flex items-center gap-3">
        <Image src="/arrow-left.svg" alt="arrow-left" width={20} height={20} />
        <span className="text-base text-[##545F7D] font-normal leading-[18.77px]">
          Back to Users
        </span>
      </Link>
      <div className="flex justify-between items-center">
        <h2 className="mt-4 text-[#213F7D] text-2xl font-medium leading-[28.15px] mb-6">
          User Details
        </h2>
        <div className="flex items-center gap-3">
          <Button className="bg-transparent text-[#E4033B] border border-[#E4033B] uppercase text-sm shadow-none">
            Blacklist User
          </Button>
          <Button className="bg-transparent text-[#39CDCC] border border-[#39CDCC] uppercase text-sm shadow-none">
            Activate User
          </Button>
        </div>
      </div>
      <UserSummary user={user} />
    </main>
  );
};

export default UserId;
