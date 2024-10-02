import { UserSummaryProps } from "@/types";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star, UserRound } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalInfo } from "./personal-info";
import { Education } from "./education";
import { Socials } from "./socials";
import { Guarantor } from "./guarantor";

export const UserSummary = ({ user }: UserSummaryProps) => {
  return (
    <>
      <div className="border-t border-l border-r border-[#213F7D0F] rounded- py-5 px-6 bg-white">
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
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="bg-white w-full px-6 pt-12">
          <TabsTrigger value="details">General Details</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="bank">Bank Details</TabsTrigger>
          <TabsTrigger value="loans">Loans</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="app">App and System</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="bg-white mt-6 p-6 rounde">
          <PersonalInfo user={user} />
          <Education user={user} />
          <Socials user={user} />
          <Guarantor user={user} />
        </TabsContent>
        <TabsContent value="documents" className="bg-white mt-6 p-6 rounde">
          Change your password here.
        </TabsContent>
        <TabsContent value="bank" className="bg-white mt-6 p-6 rounde">
          Change your password here.
        </TabsContent>
        <TabsContent value="loans" className="bg-white mt-6 p-6 rounde">
          Change your password here.
        </TabsContent>
        <TabsContent value="savings" className="bg-white mt-6 p-6 rounde">
          Change your password here.
        </TabsContent>
        <TabsContent value="app" className="bg-white mt-6 p-6 rounde">
          Change your password here.
        </TabsContent>
      </Tabs>
    </>
  );
};
