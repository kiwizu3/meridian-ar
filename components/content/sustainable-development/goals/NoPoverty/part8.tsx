'use client';

import Image from 'next/image';

import { assetUrl } from '@/lib/assets';

// import NoOfCustomers from '@/public/images/sustainability-goals/no-of-customers.png';
// import RegionCustomers from '@/public/images/sustainability-goals/region-wise-customers.png';
// import TotalGrantingSector from '@/public/images/sustainability-goals/total-granting-sector-wise.png';
// import EmployeeBasedOnGender from '@/public/images/sustainability-goals/employee-based-on-gender.png';
// import EmployeesGenderComposition from '@/public/images/sustainability-goals/employees-gender-composition.png';

const NoOfCustomers = assetUrl('/images/sustainability-goals/no-of-customers.png');
const RegionCustomers = assetUrl('/images/sustainability-goals/region-wise-customers.png');
const TotalGrantingSector = assetUrl('/images/sustainability-goals/total-granting-sector-wise.png');
const EmployeeBasedOnGender = assetUrl('/images/sustainability-goals/employee-based-on-gender.png');
const EmployeesGenderComposition = assetUrl('/images/sustainability-goals/employees-gender-composition.png');


export default function NoPovertyPart8() {
  return (
    <div>
      <div className="bg-[#4a8b51] text-black p-8">
        <div className="w-full">
          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">NPL Management</h2>
            <p className="mb-4">
              In a sector currently experiencing NPL levels exceeding 27%, LB
              Microfinance Myanmar maintained an overall NPL ratio of 7.48%.
              Notably, the portfolio segment comprising over 25,000 customers
              acquired since April 1, 2021, demonstrates exceptional health with
              an NPL rate of only 0.48%. This performance is supported by our
              disciplined approach to recovery management, which includes close
              monitoring overseen by a dedicated recovery manager, daily
              reporting structures, and consistent follow-up actions.
              Furthermore, our policy of potentially increasing facility limits
              based on customers' positive payment patterns serves as a key
              motivator for timely repayments.
            </p>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Key Initiatives Implemented to Grow the Microfinance Operations
              and Customer Base
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Enhancing Customer Service
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    We integrated with leading digital payment providers, KBZ
                    Bank and Wave Money, to streamline the loan repayment
                    process. Customers are enabled to conveniently pay their
                    instalments via their respective mobile wallets
                  </li>
                  <li>
                    To improve client experience and increase operational
                    efficiency, we have streamlined the documentation process,
                    reduced paperwork and simplified loan application procedures
                    without compromising compliance
                  </li>
                  <li>
                    In parallel, we conduct regular staff training programmes
                    focused on customer service, financial education, and
                    responsible lending practices. These trainings ensure that
                    frontline staff are well-equipped to provide clear guidance,
                    build trust with clients, and respond effectively to their
                    needs, ultimately enhancing customer satisfaction and
                    longterm engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">No. of Customers</h3>
              <div>
                <Image
                  src={NoOfCustomers}
                  alt="Customers Chart"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Region-wise Customers
              </h3>
              <div>
                <Image
                  src={RegionCustomers}
                  alt="Region Customers"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Total Granting Sector-wise
              </h3>
              <div>
                <Image
                  src={TotalGrantingSector}
                  alt="Sector Loans"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Employees Based on Gender
              </h3>
              <div>
                <Image
                  src={EmployeeBasedOnGender}
                  alt="Employees Gender"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-[#6aa070] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Employees Gender Composition
              </h3>
              <div>
                <Image
                  src={EmployeesGenderComposition}
                  alt="Gender Composition"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
