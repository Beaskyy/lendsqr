"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
      <div className="bg-[#00000008] p-20 lg:flex flex-col hidden">
        <Image src="/logo.svg" alt="logo" width={174} height={36} />
        <Image
          src="/pablo.png"
          alt="pablo"
          width={600}
          height={338}
          className="mt-40"
        />
      </div>
      <div className="flex flex-col justify-center h-screen lg:px-32 md:px-10 px-5">
        <Image
          src="/logo.svg"
          alt="logo"
          width={174}
          height={36}
          className="mb-40 lg:hidden"
        />
        <h1 className="text-[#213F7D] font-bold text-[40px] leading-[54.64px] tracking-[-4%] mb-4">
          Welcome!
        </h1>
        <p className="login text-xl leading-[27.32px] mb-16">
          Enter details to login.
        </p>
        <form>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Email"
              className="login h-[50px] rounded-[5px] border-2 w-full px-4"
            />
          </div>
          <div className="relative mb-5">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              className="login h-[50px] rounded-[5px] border-2 w-full px-4"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="login absolute right-5 top-[18px] uppercase font-semibold text-[#39CDCC] text-xs cursor-pointer"
            >
              Show
            </span>
          </div>
          <p className="login mb-8 text-[#39CDCC] text-xs font-semibold cursor-pointer uppercase">
            Forgot PASSWORD?
          </p>
          <div>
            <Button className="login w-full bg-[#39CDCC] text-white h-12 hover:bg-[#39cdcdd0] uppercase text-sm font-semibold">
              LOG IN
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
