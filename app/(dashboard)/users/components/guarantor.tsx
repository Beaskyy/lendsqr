import { UserSummaryProps } from "@/types";

export const Guarantor = ({ user }: UserSummaryProps) => {
  return (
    <div className="border-b border-[#213F7D1A] py-6">
      <h4 className="text-base text-[#213F7D] font-medium">Guarantor</h4>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 mt-6">
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            full Name
          </h6>
          <p className="text-base text-[#545F7D] font-medium lowercase">
            {user?.name}
          </p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Phone Number
          </h6>
          <p className="text-base text-[#545F7D] font-medium">{user?.phone}</p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Email Address
          </h6>
          <p
            className="text-base text-[#545F7D] font-medium"
          >
            @{user?.email}
          </p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Relationship
          </h6>
          <p
            className="text-base text-[#545F7D] font-medium"
          >
            Sister
          </p>
        </div>
      </div>
    </div>
  );
};
