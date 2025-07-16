'use client';

import Image from 'next/image';

export default function NoPovertyPart8() {
  return (
    <div>
      <div className="bg-[#4a8b51] text-black p-8">
        <div className="w-full">
          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">NPL Management</h2>
            <p className="mb-4">
              In a sector with NPL levels exceeding 27%, LB Microfinance Myanmar
              maintained an overall NPL ratio of 7.48%. The portfolio segment
              acquired since April 1, 2021 shows exceptional health with an NPL
              rate of only 0.48%.
            </p>
            <p>
              Our disciplined approach includes close monitoring by a dedicated
              recovery manager, daily reporting structures, consistent follow-up
              actions, and potential facility limit increases for customers with
              positive payment patterns.
            </p>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Enhancing Customer Service
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    Integrated with KBZ Bank and Wave Money for digital
                    repayments
                  </li>
                  <li>Streamlined documentation and reduced paperwork</li>
                  <li>Regular staff training programmes</li>
                </ul>
              </div>
              <div>
                <div className="relative h-48">
                  <Image
                    src="/placeholder-customer-growth.jpg"
                    alt="Customer Growth"
                    className="rounded-lg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">No. of Customers</h3>
              <div className="relative h-48">
                <Image
                  src="/placeholder-customers-chart.jpg"
                  alt="Customers Chart"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Region-wise Customers
              </h3>
              <div className="relative h-48">
                <Image
                  src="/placeholder-region-customers.jpg"
                  alt="Region Customers"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Sector-wise Loans</h3>
              <div className="relative h-48">
                <Image
                  src="/placeholder-sector-loans.jpg"
                  alt="Sector Loans"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Employees Based on Gender
              </h3>
              <div className="relative h-48">
                <Image
                  src="/placeholder-employees-gender.jpg"
                  alt="Employees Gender"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Employees Gender Composition
              </h3>
              <div className="relative h-48">
                <Image
                  src="/placeholder-gender-composition.jpg"
                  alt="Gender Composition"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
