'use client';

import Image from 'next/image';
import ForeignTransactionChart from '@/public/images/sustainability-goals/foreign-exchange-transactions.jpg';
import WesternUnionTransactionChart from '@/public/images/sustainability-goals/western-union-transactions.jpg';
import CSRProjects from '@/public/images/sustainability-goals/No.-of-CSR-projects.jpg';
import CSRProjectsInvestments from '@/public/images/sustainability-goals/Investment-in-CSR-projects.jpg';

export default function NoPovertyPart4() {
  return (
    <div>
      <div className="bg-cardGreen rounded-lg text-black p-8 mb-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-yellow rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                5 FOREIGN CURRENCY EXCHANGE
              </h2>
              <p>
                LBF supports the development of provincial economies via its
                island-wide branch network. In line with efforts to provide
                equal access to all Sri Lankans, our most recent branch
                expansion strategy has focused on reaching out to customers in
                the North and East regions of Sri Lanka.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <h3 className="text-center text-xl rounded-lg border border-amber-300 p-1 mb-1">
                    Foreign Exchange Transactions
                  </h3>
                  <Image
                    src={ForeignTransactionChart}
                    alt="Forex Chart"
                    className="rounded-lg"
                    width={405}
                    height={295}
                  />
                </div>
                <div>
                  <h3 className="text-center text-xl rounded-lg border border-amber-300 p-1 mb-1">
                    Western Union Transactions
                  </h3>
                  <Image
                    src={WesternUnionTransactionChart}
                    alt="Western Union Chart"
                    className="rounded-lg"
                    width={405}
                    height={295}
                  />
                </div>
              </div>
            </div>

            <div className="bg-yellow rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                6 RURAL DEVELOPMENT
              </h2>
              <p>
                LBF supports the development of provincial economies via its
                island-wide branch network. In line with efforts to provide
                equal access to all Sri Lankans, our most recent branch
                expansion strategy has focused on reaching out to customers in
                the North and East regions of Sri Lanka.
              </p>
            </div>
          </div>

          <div className="bg-yellow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              7 SUPPORTING COMMUNITIES
            </h2>
            <p>
              Our commitment extends beyond financial contributions to uplifting
              communities through impactful social development programmes. Our
              strategic CSR initiatives focus on education, healthcare,
              financial literacy, and environmental sustainability, ensuring our
              growth benefits society as a whole.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="text-center text-xl rounded-lg border border-amber-300 p-1 mb-1">
                  No. of CSR Projects
                </h3>
                <Image
                  src={CSRProjects}
                  alt="CSR Projects"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-center text-xl rounded-lg border border-amber-300 p-1 mb-1">
                  Investment in CSR Projects
                </h3>
                <Image
                  src={CSRProjectsInvestments}
                  alt="CSR Investment"
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
