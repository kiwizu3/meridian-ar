'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function AwarenessCampaignsPart3() {
  return (
    <div className="bg-themeGreen p-5 mb-10">
      <h1 className="text-4xl font-bold">NURTURING NATURAL CAPITAL</h1>

      <div>
        <div className="bg-cardGreen p-4">
          <h2 className="text-xl">Awareness Campaigns</h2>
          <div className="grid md:grid-cols-4 gap-4 my-6">
            <div className="bg-[#4DA28C] p-4 rounded-lg text-center">
              <p className="text-xl font-bold">109</p>
              <p>Environmentally friendly awareness campaigns</p>
            </div>
            <div className="bg-[#4DA28C] p-4 rounded-lg text-center">
              <p className="text-xl font-bold">15</p>
              <p>Social media campaigns</p>
              <ul>
                <li>
                  Promoted sustainability awareness among stakeholders through
                  UN international and national day campaigns
                </li>
                <li>
                  Launched a sustainability-focused video series for children to
                  enhance their understanding of environmental responsibility
                </li>
              </ul>
            </div>
            <div className="bg-[#4DA28C] p-4 rounded-lg text-center">
              <p className="text-xl font-bold">80</p>
              <p>e-mail campaigns</p>
              <p>e-mail campaigns for internal staf</p>
              <ul>
                <li>
                  Implemented e-mail campaigns promoting sustainability
                  practices, including energy-saving tips and waste management
                  strategies
                </li>
                <li>
                  Conducted awareness e-mail campaigns for our employees on
                  workplace and home sustainability practices, linking to the
                  'Sihina - Discards to Dreams' initiative
                </li>
              </ul>
            </div>
            <div className="bg-[#4DA28C] p-4 rounded-lg text-center">
              <p className="text-xl font-bold">14</p>
              <p>Conventional awareness campaigns</p>
              <p>In person awareness and trainings:</p>
              <ul>
                <li>
                  Conducted a training session for Directors on sustainability
                  standards and frameworks, including SLFRS S1 and S2
                </li>
                <li>
                  Partnered with Vibhava Solutions to provide sustainability
                  training for staff, focusing on responsible plastic recycling
                  practices to promote environmental sustainability
                </li>
                <li>
                  Collaborated with Vibhava Solutions to conduct a waste
                  management awareness session for employees, highlighting waste
                  management techniques, the importance of waste segregation,
                  and the environmental impact of improper disposal
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
