'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/assets';
// import DigitalAccessImage from '@/public/images/sustainability-goals/lb-cim-app-transaction-value.jpg';
// import TaxPaidImage from '@/public/images/sustainability-goals/tax-paid-to-goverment.jpg';
// import TaxIcon from '@/public/images/sustainability-goals/tax-icon.jpg';

const DigitalAccessImage = assetUrl('/images/sustainability-goals/lb-cim-app-transaction-value.jpg');
const TaxPaidImage = assetUrl('/images/sustainability-goals/tax-paid-to-goverment.jpg');
const TaxIcon = assetUrl('/images/sustainability-goals/tax-icon.jpg');  

export default function NoPovertyPart2() {
  return (
    <div>
      <div className="bg-cardGreen rounded-lg p-8 mb-8">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h2 className="text-2xl font-semibold py-5">
                DIGITAL ACCESS: Breaking Barriers with Innovation
              </h2>
              <p>
                From digital financing to AI-driven lending, we are at the
                forefront of next-generation digitalised financial services,
                ensuring seamless, 24/7 access to financial transactions. Our
                digital platforms empower customers to manage their finances
                anytime, anywhere, enhancing convenience and accessibility.
              </p>
              <p className="mt-4">
                In 2019, we entered the mobile digital transaction space with
                the launch of the LB CIM app, introducing two dedicated
                platforms: one for individual customers and another tailored for
                merchants, enabling secure and efficient digital transactions
                for a range of financial needs.
              </p>
            </div>
          </div>
          <div className="my-10">
            <Image
              src={DigitalAccessImage}
              alt="Digital Access"
              className="rounded-lg"
              width={425}
              height={450}
            />
          </div>
          <div className="w-full">
            <div className="bg-cardGreen rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold py-5">
                  STRENGTHENING THE ECONOMY
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <p>
                    As a leader in the Non-Banking Financial Institution (NBFI)
                    sector, we are proud to be the highest taxpayer in the
                    industry. Our contributions are vital to Sri Lanka's
                    economic growth, supporting essential public services and
                    strengthening financial stability.
                  </p>

                  <div className="mt-6 text-center">
                    <h3 className="text-3xl font-bold">Rs. 12,645 Mn</h3>
                    <p>Total tax paid to the Government during the year</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
              <div className="bg-cardGreen rounded-l-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Tax Paid to the Government
                </h3>
                <div>
                  <Image
                    src={TaxPaidImage}
                    alt="Tax Chart"
                    className="rounded-lg"
                    width={405}
                    height={295}
                  />
                </div>
              </div>
              <div className="bg-cardGreen rounded-r-lg p-6">
                <div>
                  <Image
                    src={TaxIcon}
                    alt="Transaction Chart"
                    className="rounded-lg"
                    width={405}
                    height={295}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
