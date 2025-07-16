'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function SustainabilityPledgesPart1() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">SUSTAINABILITY PLEDGES</h2>

      <Card>
        <CardBody>
          <p>
            We have articulated unwavering pledges across each ESG domain.
            Environmentally, we are resolutely committed to minimising our
            ecological footprint through sustainable operational practices and a
            pursuit of resource efficiency. Socially, we champion inclusivity,
            drive impactful community development, and are dedicated to tangibly
            improving the quality of life for all stakeholders. In governance,
            our pledge is to uphold the highest standards of transparency,
            maintain impeccable ethical conduct, and ensure adherence to
            exemplary corporate governance principles.
          </p>
        </CardBody>
      </Card>

      <h2 className="text-2xl font-bold">ENVIRONMENT PLEDGE</h2>

      <Card>
        <CardBody>
          <h3 className="text-xl font-semibold mb-4">
            6. RESPONSIBLE OPERATIONS
          </h3>
          <p>
            As a leading financial institution in Sri Lanka, we are committed to
            combating climate change and environmental degradation. We have
            adopted a strategic approach to minimise our environmental impact,
            addressing the most material concerns arising from our daily
            operations. Our Environment Policy prioritises the efficient and
            responsible use of resources, following the principles (Reduce,
            Reuse, Recycle, and Refuse) where necessary.
          </p>

          <div className="mt-6">
            <h4 className="font-medium">Our Environmental Management System</h4>
            <h5 className="font-medium mt-4">Input Management</h5>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Energy</li>
              <li>Water</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Energy Management</h4>
            <p>
              We manage our energy consumption across all branches by
              implementing efficiency measures and leveraging new technologies
              to monitor electricity usage. Regular energy audits identify
              opportunities for optimisation and enable the integration of
              renewable energy solutions where feasible.
            </p>
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
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-medium">Energy Footprint</h5>
                <p className="text-xl font-bold">55,714 GJ</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-medium">Per employee</h5>
                <p className="text-xl font-bold">12.64 GJ</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-medium">Per working day</h5>
                <p className="text-xl font-bold">232.14 GJ</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-medium">Per outlet</h5>
                <p className="text-xl font-bold">257.94 GJ</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
