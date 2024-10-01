

import { users } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const UserId = ({ params }: { params: { userId: string } }) => {

  const user = users.find((item) => item.id === parseInt(params.userId));

  return (
    <main className="mt-14 lg:ml-10 lg:mr-9 mx-4">
      <Link
        href={`/users`}
        className="flex items-center gap-3"
      >
        <Image
          src="/arrow-left.svg"
          alt="arrow-left"
          width={20}
          height={20}
        />
        <span className="text-base text-[##545F7D] font-normal leading-[18.77px]">
        Back to Users
        </span>
      </Link>
      <h2 className="mt-4 text-[#213F7D] text-2xl font-medium leading-[28.15px] mb-6">
      User Details
      </h2>
      <div className="border border-[#D7D7D7] rounded-lg py-5 px-6">
        <div className="flex gap-3 items-center">
          <div className="h-[72px] rounded-xl">
            <Image
              src="/images/profile-img.png"
              alt="Profile"
              width={72}
              height={72}
            />
          </div>
          <div>
            <h6 className="text-black text-base font-medium tracking-[-0.16px] mb-2">
              {user?.name}
            </h6>
            <p className="text-xs text-[#797979] font-normal tracking-[-0.12px]">
              UI/UX Designer
            </p>
            <p className="text-xs text-[#797979] font-normal tracking-[-0.12px]">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
     
    </main>
  );
};

export default UserId;
