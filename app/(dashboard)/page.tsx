import Image from "next/image";

const UsersPage = () => {
  return (
    <main className="lg:p-12 md:p-6 p-4">
      <h3 className="text-2xl font-medium text-[#213F7D]">Dashboard</h3>
      <div className="mt-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <div className="bg-white p-8 border border-[#213F7D0F] rounded overview-shadow">
            <Image
              src="/all-users.svg"
              alt="all users"
              width={40}
              height={40}
            />
            <h6 className="text-[#545F7D] my-3 text-sm font-medium uppercase">
              Users
            </h6>
            <h4 className="text-[#213F7D] text-2xl font-semibold">
              1000
            </h4>
          </div>
          <div className="bg-white p-8 border border-[#213F7D0F] rounded overview-shadow">
            <Image
              src="/active-users.svg"
              alt="all users"
              width={40}
              height={40}
            />
            <h6 className="text-[#545F7D] my-3 text-sm font-medium uppercase">
              Loans
            </h6>
            <h4 className="text-[#213F7D] text-2xl font-semibold">{1000}</h4>
          </div>
          <div className="bg-white p-8 border border-[#213F7D0F] rounded overview-shadow">
            <Image src="/loans.svg" alt="all users" width={40} height={40} />
            <h6 className="text-[#545F7D] my-3 text-sm font-medium uppercase">
              Savings
            </h6>
            <h4 className="text-[#213F7D] text-2xl font-semibold">{1000}</h4>
          </div>
          <div className="bg-white p-8 border border-[#213F7D0F] rounded overview-shadow">
            <Image src="/savings.svg" alt="all users" width={40} height={40} />
            <h6 className="text-[#545F7D] my-3 text-sm font-medium uppercase">
              Guarantors
            </h6>
            <h4 className="text-[#213F7D] text-2xl font-semibold">{1000}</h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UsersPage;
