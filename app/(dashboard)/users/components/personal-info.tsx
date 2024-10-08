import { UserSummaryProps } from "@/types";

export const PersonalInfo = ({ user }: UserSummaryProps) => {
  return (
    <div className="border-b border-[#213F7D1A] pb-6">
      <h4 className="text-base text-[#213F7D] font-medium">
        Personal Information
      </h4>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 mt-6">
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            full Name
          </h6>
          <p className="text-base text-[#545F7D] font-medium">{user?.name}</p>
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
          <p className="text-base text-[#545F7D] font-medium">{user?.email}</p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Bvn
          </h6>
          <p className="text-base text-[#545F7D] font-medium">{user?.phone}</p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Gender
          </h6>
          <p className="text-base text-[#545F7D] font-medium capitalize">
            female
          </p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Marital status
          </h6>
          <p className="text-base text-[#545F7D] font-medium capitalize">
            Single
          </p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Children
          </h6>
          <p className="text-base text-[#545F7D] font-medium capitalize">
            None
          </p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Type of residence
          </h6>
          <p className="text-base text-[#545F7D] font-medium capitalize">
            Parent’s Apartment
          </p>
        </div>
      </div>
    </div>
  );
};
