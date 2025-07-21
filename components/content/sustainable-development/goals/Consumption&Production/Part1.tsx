'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function SustainabilityPledgesPart1() {
  return (
    <div className="bg-themeGreen p-5">
      <h1 className="text-4xl text-white font-bold mb-5">
        INTEGRATED SUSTAINABILITY REPORT
      </h1>

      <div className="bg-cardGreen p-4 rounded-lg mb-5">
        <h2 className="text-2xl font-semibold mb-4">SUSTAINABILITY PLEDGES</h2>
        <div>
          <p>
            We have articulated unwavering pledges across each ESG domain.
            Environmentally, we are resolutely committed to minimising our
            ecological footprint through sustainable operational practices and a
            pursuit of resource efficiency. Socially, we champion inclusivity,
            drive impactful community development, and are dedicated to tangibly
            improving the quality of life for all stakeholders. In governance,
            our pledge is to uphold the highest standards of transparency,
            maintain impeccable ethical conduct, and ensure adherence to
            exemplary corporate governance principles. This structured,
            principle-driven framework underpins our vision of proactive
            corporate citizenship and the creation of enduring, long-term value.
          </p>
        </div>
      </div>

      <div className="bg-cardGreen p-4 rounded-lg mb-5">
        <h2 className="text-2xl font-semibold mb-4">RESPONSIBLE OPERATIONS</h2>
        <div>
          <p>
            As a leading financial institution in Sri Lanka, we are committed to
            combating climate change and environmental degradation. We have
            adopted a strategic approach to minimise our environmental impact,
            addressing the most material concerns arising from our daily
            operations. Our Environment Policy prioritises the efficient and
            responsible use of resources, following the principles (Reduce,
            Reuse, Recycle, and Refuse) where necessary. We promote employee
            engagement and awareness to ensure consistent adherence to these
            practices
          </p>
          <div className="py-5">
            <Image
              src="/images/sustainability-goals/environmental-management-system.png"
              alt="Our Environmental Management System"
              width={900}
              height={400}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              6.1 Energy Management and Footprint
            </h3>
            <p>
              Recognising the significant impact of energy consumption on our
              carbon footprint, we have prioritised energy management and
              established baseline standards within our EMS to measure and
              monitor energy use.
            </p>

            <div className="mt-6 grid md:grid-cols-4 gap-4">
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h5 className="font-medium">Energy Footprint</h5>
                <p className="text-xl font-bold">55,714 GJ</p>
              </div>
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h5 className="font-medium">Per employee</h5>
                <p className="text-xl font-bold">12.64 GJ</p>
              </div>
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h5 className="font-medium">Per working day</h5>
                <p className="text-xl font-bold">232.14 GJ</p>
              </div>
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h5 className="font-medium">Per outlet</h5>
                <p className="text-xl font-bold">257.94 GJ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
