"use client";

import { useStateContext } from "@/contexts/ContextProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/lib/data";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useStateContext();
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (name: string) => {
    setActiveLink(name);
  };

  return (
    <div className="pb-[34px]">
      <div className="flex flex-col">
       
        {links?.map(({ main, subMenu }) => (
          <div className="mb-6" key={main}>
            <div>
              <p className={`text-sm text-[#7A7C7B] font-normal mb-4`}>
                {main}
              </p>
            </div>
            {subMenu?.map(({ name, icon, icon2, href }) => (
              <div key={name}>
                <Link
                  href={href}
                  className={`h-8 pt-1.5 pr-[103px] pb-1.5 flex items-center rounded-lg mb-2 cursor-pointer ${
                    activeLink === name
                      ? "bg-[#071A7E0D]"
                      : "hover:bg-[#071A7E0D]"
                  }`}
                  onClick={() => handleClick(name)}
                >
                  <p className="flex justify-start items-center gap-2 px-2">
                    <Image
                      src={activeLink === name ? icon2 : icon}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <span
                      className={`text-sm font-normal whitespace-nowrap ${
                        activeLink === name
                          ? "text-[#071A7E]"
                          : "text-[#060809]"
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
