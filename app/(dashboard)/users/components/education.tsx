import { UserSummaryProps } from "@/types";

export const Education = ({ user }: UserSummaryProps) => {
  return (
    <div className="border-b border-[#213F7D1A] py-6">
      <h4 className="text-base text-[#213F7D] font-medium">
        Education and Employment
      </h4>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-6">
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            level of education
          </h6>
          <p className="text-base text-[#545F7D] font-medium">B.Sc</p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            employment status
          </h6>
          <p className="text-base text-[#545F7D] font-medium">Employed</p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            sector of employment
          </h6>
          <p className="text-base text-[#545F7D] font-medium">FinTech</p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            Duration of employment
          </h6>
          <p className="text-base text-[#545F7D] font-medium">2 years</p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
            office email
          </h6>
          <p className="text-base text-[#545F7D] font-medium">
            {user?.email}
          </p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
          Monthly income
          </h6>
          <p className="text-base text-[#545F7D] font-medium capitalize">
          ₦200,000.00- ₦400,000.00
          </p>
        </div>
        <div>
          <h6 className="text-xs text-[#545F7D] uppercase font-normal mb-1">
          loan repayment
          </h6>
          <p className="text-base text-[#545F7D] font-medium capitalize">
          40,000
          </p>
        </div>
      </div>
    </div>
  );
};
