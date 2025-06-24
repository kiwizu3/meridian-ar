interface ProductProps {
  title: string;
  description: string;
}

function Product({ title, description }: ProductProps) {
  return (
    <div className="mb-4 text-black">
      <h3 className="text-lg font-semibold text-blue-700 mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default function GRIReporting3() {
  const loanLogo = [
    { key: '1', link: '/images/annual-report/lbleasing.png' },
    { key: '2', link: '/images/annual-report/goldloan.png' },
    { key: '3', link: '/images/annual-report/powerdraft.png' },
    { key: '4', link: '/images/annual-report/vehicleloan.png' },
    { key: '5', link: '/images/annual-report/3wlleasing.png' },
    { key: '6', link: '/images/annual-report/personalloans.png' },
    { key: '7', link: '/images/annual-report/cimpersonallogo.png' },
    { key: '8', link: '/images/annual-report/mulgala.png' },
    { key: '9', link: '/images/annual-report/powerplus.png' },
    { key: '10', link: '/images/annual-report/cimbusinesslogo.png' },
  ];
  const depositLogo = [
    { key: '1', link: '/images/annual-report/yasaisuru.png' },
    { key: '2', link: '/images/annual-report/littlehero.png' },
    { key: '3', link: '/images/annual-report/lbsavings.png' },
    { key: '4', link: '/images/annual-report/lbsim.png' },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#FFF8DC] rounded-lg p-4 h-fit">
                <div className="flex items-center mb-2">
                  <div className="bg-black rounded-full p-2 mr-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-black">DEPOSIT</h2>
                </div>
                <p className="text-sm mb-4 text-black">
                  Total deposit base Rs. 122.80 Bn
                </p>
                <Product
                  title="Fixed Deposit"
                  description="Fixed deposits yield the highest return on investment with an array of attractive benefits including promotional campaigns."
                />
                <Product
                  title="Savings Deposit"
                  description="LBF has the second largest savings deposit base in the NBFI sector, offering different products under the savings deposit category"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {depositLogo?.map((item: any) => (
                    <img src={item?.link} alt="loan logo" key={item} />
                  ))}
                </div>
              </div>

              <div className="bg-[#FFF8DC] rounded-lg p-4 h-fit">
                <div className="flex items-center mb-2">
                  <div className="bg-black rounded-full p-2 mr-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-black">
                    LOANS AND RECEIVABLES
                  </h2>
                </div>
                <p className="text-sm mb-4 text-black">
                  Lending portfolio Rs. 161.29 Bn
                </p>
                <Product
                  title="Auto Finance"
                  description="Flexible financial solutions provided by convenient leasing, vehicle loan and power draft services."
                />
                <Product
                  title="Gold Loans"
                  description="Provide best value for gold at competitive interest rates for business and urgent cash requirements."
                />
                <Product
                  title="Mortgage Loans"
                  description="Convenient and flexible financing with longer tenors of repayment to build/ own your dream house."
                />
                <Product
                  title="Pension Loans"
                  description="Uniquely designed product to suit various requirements for upgrading lifestyles."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {loanLogo?.map((item: any) => (
                    <img src={item?.link} alt="loan logo" key={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative  rounded-lg p-6">
              <img
                src="/images/annual-report/origamiCar.png"
                alt="Financial products illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
