'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function AwarenessCampaignsPart3() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">3.2 AWARENESS CAMPAIGNS</h2>

      <Card>
        <CardBody>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-xl font-bold">109</p>
              <p>Environmentally friendly awareness campaigns</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-xl font-bold">15</p>
              <p>Social media campaigns</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-xl font-bold">80</p>
              <p>e-mail campaigns</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-xl font-bold">14</p>
              <p>Conventional awareness campaigns</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Public Awareness</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Promoted sustainability awareness among stakeholders through UN
                international and national day campaigns
              </li>
              <li>
                Launched a sustainability-focused video series for children to
                enhance their understanding of environmental responsibility
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Internal Awareness</h4>
            <p>e-mail campaigns for internal staff:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Implemented e-mail campaigns promoting sustainability practices,
                including energy-saving tips and waste management strategies
              </li>
              <li>
                Conducted awareness e-mail campaigns for our employees on
                workplace and home sustainability practices
              </li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">In-person Awareness and Trainings</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Conducted a training session for Directors on sustainability
                  standards and frameworks
                </li>
                <li>
                  Partnered with Vibhava Solutions to provide sustainability
                  training for staff
                </li>
                <li>
                  Collaborated with Vibhava Solutions to conduct a waste
                  management awareness session for employees
                </li>
                <li>
                  Implemented ESG awareness orientation programmes for all new
                  LB employees
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder-awareness.jpg"
                alt="Awareness Campaigns"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Campaign Highlights</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold">WORLD WILDLIFE CONSERVATION DAY</h5>
                <p className="mt-2">Biodiversity For a Healthy Planet.</p>
                <p className="mt-2">
                  Practicing in Discrepmed Schools Planning Natural Medicine.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-bold">REDUCE, REUSE, RECYCLE</h5>
                <p className="mt-2">
                  One of the simplest ways to practice sustainability is by
                  following the 3 R's: Reduce your consumption of goods and
                  energy. Reuse items when possible. Recycle materials such as
                  paper, plastic, and glass to reduce waste.
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
