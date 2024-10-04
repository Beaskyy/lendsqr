"use client";

import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/data";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="pb-28">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mx-6 my-9">
          <Image src="briefcase.svg" alt="switch" width={16} height={16} />
          <p className="text-base text-[#213F7D]">Switch Organization</p>
        </div>
        <div>
          <Link
            href="/"
            className={`h-8 p-5 flex items-center mb-2 cursor-pointer hover:bg-[#39CDCd0f]"
                  }`}
          >
            <p className="flex justify-start items-center gap-2 px-2">
              <Image src="home.svg" alt="icon" width={16} height={16} />
              <span className="text-base font-normal whitespace-nowrap capitalize text-[#213F7D]">
                Dashboard
              </span>
            </p>
          </Link>
        </div>

        {links?.map(({ main, subMenu }) => (
          <div key={main}>
            <div>
              <p className={`text-xs text-[#545F7D] font-medium uppercase m-6`}>
                {main}
              </p>
            </div>
            {subMenu?.map(({ name, icon, href }) => (
              <div key={name}>
                <Link
                  href={href}
                  className={`h-8 p-5 flex items-center mb-2 cursor-pointer ${
                    pathname.split("/")[1] === name
                      ? "bg-[#39cdcd0f] border-l-[3px] border-[#39CDCC]"
                      : "hover:bg-[#39CDCd0f]"
                  }`}
                >
                  <p className="flex justify-start items-center gap-2 px-2">
                    <Image src={icon} alt="icon" width={16} height={16} />
                    <span
                      className={`text-base font-normal whitespace-nowrap capitalize ${
                        pathname?.split("/")[1] === name
                          ? "text-[#213F7D]"
                          : "text-[#213F7D99]"
                      }`}
                    >
                      {name}
                    </span>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
