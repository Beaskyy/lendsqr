"use client";

import { members } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const UserId = ({ params }: { params: { membersId: string } }) => {
  const [list, setList] = useState(1);
  const [show, setShow] = useState(true);

  const member = members.find((item) => item.id === parseInt(params.membersId));

  return (
    <main className="mt-6 lg:ml-10 lg:mr-9 mx-4">
      <Link
        href={`/users`}
        className="flex items-center gap-3"
      >
        <Image
          src="/images/arrow-left.svg"
          alt="arrow-left"
          width={20}
          height={20}
        />
        <span className="text-base text-[#414141] font-normal leading-[20.3px]">
          Back
        </span>
      </Link>
      <h2 className="mt-4 text-[#060809] text-[28px] font-semibold leading-[33.6px] mb-6">
        Profile information
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
              {member?.name}
            </h6>
            <p className="text-xs text-[#797979] font-normal tracking-[-0.12px]">
              UI/UX Designer
            </p>
            <p className="text-xs text-[#797979] font-normal tracking-[-0.12px]">
              {member?.email}
            </p>
          </div>
        </div>
      </div>
     
    </main>
  );
};

export default UserId;
