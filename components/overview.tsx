import Image from "next/image";

export const Overview = () => {
  return (
    <div className="mt-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
        <div className="bg-white p-8 border border-[#213F7D0F] rounded overview-shadow">
          <Image src="/all-users.svg" alt="all users" width={40} height={40} />
          <h6 className="text-[#545F7D] my-3 text-sm font-medium uppercase">
            Users
          </h6>
          <h4 className="text-[#213F7D] text-2xl font-semibold">2,453</h4>
        </div>
        <div className="bg-white p-8 border border-[#213F7D0F] rounded overview-shadow">
          <Image src="/active-users.svg" alt="all users" width={40} height={40} />
          <h6 className="text-[#545F7D] my-3 text-sm font-medium uppercase">
            Active Users
          </h6>
          <h4 className="text-[#213F7D] text-2xl font-semibold">2,453</h4>
        </div>
        <div className="bg-white p-8 border border-[#213F7D0F] rounded overview-shadow">
          <Image src="/loans.svg" alt="all users" width={40} height={40} />
          <h6 className="text-[#545F7D] my-3 text-sm font-medium uppercase">
            Users with Loans
          </h6>
          <h4 className="text-[#213F7D] text-2xl font-semibold">12,453</h4>
        </div>
        <div className="bg-white p-8 border border-[#213F7D0F] rounded overview-shadow">
          <Image src="/savings.svg" alt="all users" width={40} height={40} />
          <h6 className="text-[#545F7D] my-3 text-sm font-medium uppercase">
            Users with Savings
          </h6>
          <h4 className="text-[#213F7D] text-2xl font-semibold">102,453</h4>
        </div>
      </div>
    </div>
  );
};
