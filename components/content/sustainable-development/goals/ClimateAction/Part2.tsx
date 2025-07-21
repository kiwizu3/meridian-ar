'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function ClimateActionPart2() {
  return (
    <div className="bg-themeGreen p-5 mb-10">
      <h2 className="text-2xl font-bold">2.4 POLICY FRAMEWORK</h2>

      <div className="bg-cardGreen p-4 rounded-lg mb-5">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Introducing Our ESG Policy
          </h3>
          <p>
            Recognising our moral responsibility to address global climate
            challenges, LBF has recently implemented a comprehensive ESG Policy.
            This policy establishes robust energy, emissions, waste, and water
            management practices to ensure environmental stewardship across our
            organisation. By minimising resource consumption, reducing waste,
            mitigating environmental impacts, promoting energy efficiency,
            lowering greenhouse gas emissions, optimising water use, and
            enhancing waste management, we are fostering long-term
            sustainability. These initiatives also empower our employees,
            partners, and stakeholders to align with our green vision and
            contribute to a healthier planet.
          </p>

          <div className="mt-6 grid grid-cols-1">
            <div className="mt-2">
              <Image
                src="/images/sustainability-goals/ESG-policy.jpg"
                alt="ESG Policy QR Code"
                width={550}
                height={550}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg bg-[#4DA28C]">
              <h5 className="font-bold">Energy Policy</h5>
              <p className="mt-2 font-medium">Objective:</p>
              <p>
                Optimise energy consumption, transition to renewable sources,
                and enhance energy efficiency
              </p>
              <p className="my-5">Commitments</p>
              <ul className="list-disc">
                <li>Improve energy efficiency in facilities and processes</li>
                <li>Transition to renewable energy</li>
                <li>Monitor and report energy performance</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg bg-[#4DA28C]">
              <h5 className="font-bold">Water Policy</h5>
              <p className="mt-2 font-medium">Objective:</p>
              <p>
                Manage water usage, avoid water waste, and promote sustainable
                water management.
              </p>
              <p className="my-5">Commitments</p>
              <ul className="list-disc">
                <li>Optimise water usage</li>
                <li>Protect water resources through projects </li>
                <li>Implement water recycling and harvesting</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg bg-[#4DA28C]">
              <h5 className="font-bold">Emissions Policy</h5>
              <p className="mt-2 font-medium">Objective:</p>
              <p>
                Reduce greenhouse gas emissions and transition to a low-carbon
                economy, with a target to achieve net-zero emissions by 2050.
              </p>
              <p className="my-5">Commitments</p>
              <ul className="list-disc">
                <li>Set and achieve GHG reduction targets</li>
                <li>Work towards carbon neutrality</li>
                <li>Disclose emissions data transparently</li>
                <li>
                  Implement robust decarbonisation strategies aligned with
                  global best practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
