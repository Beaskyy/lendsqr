import { Button } from "@/components/ui/button";
import { users } from "@/lib/data";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="border border-[#213F7D0F] rounded- py-5 px-6 bg-white">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#213F7D29]">
            <UserRound className="size-10 text-[#213F7D]" />
          </div>
          <div className="border-r pr-6 border-[#545F7D33]">
            <h4 className="text-[22px] text-[#213F7D] font-semibold">
              {user?.name}
            </h4>
            <p className="text-sm text-[#545F7D] font-normal">LSQFf587g90</p>
          </div>
          <div className="border-r pr-6 border-[#545F7D33]">
            <h4 className="text-sm text-[#545F7D] font-semibold mb-2">
              User’s Tier
            </h4>
            <div className="flex items-center gap-0.5">
              <StarFilledIcon className="size-4 text-[#E9B200]" />
              <Star className="size-4 text-[#E9B200]" />
              <Star className="size-4 text-[#E9B200]" />
            </div>
          </div>
          <div className="">
            <h4 className="text-[22px] text-[#213F7D] font-semibold">
              ₦200,000.00
            </h4>
            <p className="text-xs text-[#213F7D] font-normal">
              9912345678/Providus Bank
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserId;
