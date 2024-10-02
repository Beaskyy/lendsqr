import { UserSummaryProps } from "@/types";

export const Socials = ({ user }: UserSummaryProps) => {
  return (
    <div className="border-b border-[#213F7D1A] py-6">
      <h4 className="text-base text-[#213F7D] font-medium">
      Socials
      </h4>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 mt-6">
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Twitter
          </h6>
          <p className="text-base text-[#545F7D] font-medium lowercase">
            @{user?.name.replace(" ", "_")}
          </p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Facebook
          </h6>
          <p className="text-base text-[#545F7D] font-medium">{user?.name}</p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Instagram
          </h6>
          <p className="text-base text-[#545F7D] font-medium lowercase">
            @{user?.name.replace(" ", "_")}
          </p>
        </div>
      </div>
    </div>
  );
};
