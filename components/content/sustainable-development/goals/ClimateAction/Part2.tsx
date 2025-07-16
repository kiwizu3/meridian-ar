'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function ClimateActionPart2() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">2.4 POLICY FRAMEWORK</h2>

      <Card>
        <CardBody>
          <h3 className="text-xl font-semibold mb-4">
            Introducing Our ESG Policy
          </h3>
          <p>
            Recognising our moral responsibility to address global climate
            challenges, LBF has recently implemented a comprehensive ESG Policy.
            This policy establishes robust energy, emissions, waste, and water
            management practices to ensure environmental stewardship across our
            organisation.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Key Focus Areas</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Minimising resource consumption</li>
                <li>Reducing waste</li>
                <li>Mitigating environmental impacts</li>
                <li>Promoting energy efficiency</li>
                <li>Lowering greenhouse gas emissions</li>
                <li>Optimising water use</li>
                <li>Enhancing waste management</li>
              </ul>
              <div className="mt-4">
                <p>Scan QR code to read our full ESG Policy</p>
                <div className="mt-2">
                  <Image
                    src="/placeholder-qr-code.jpg"
                    alt="ESG Policy QR Code"
                    width={150}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder-policy-framework.jpg"
                alt="Policy Framework"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Policy Components</h4>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold">Energy Policy</h5>
                <p className="mt-2 font-medium">Objective:</p>
                <p>
                  Optimise energy consumption, transition to renewable sources,
                  and enhance energy efficiency
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-bold">Water Policy</h5>
                <p className="mt-2 font-medium">Objective:</p>
                <p>
                  Manage water usage, avoid water waste, and promote sustainable
                  water management.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-bold">Emissions Policy</h5>
                <p className="mt-2 font-medium">Objective:</p>
                <p>
                  Reduce greenhouse gas emissions and transition to a low-carbon
                  economy, with a target to achieve net-zero emissions by 2050.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Implementation Framework</h4>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <div className="border p-4 rounded-lg text-center">
                <p>Identify the Environmental Challenges</p>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <p>Propose Strategies to Manage Issues</p>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <p>Implement the Strategies</p>
              </div>
              <div className="border p-4 rounded-lg text-center">
                <p>Review and Update</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
