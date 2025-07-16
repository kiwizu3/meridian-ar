'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function GenderQualityPart2() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">MINDSCAPING INTELLECTUAL CAPITAL</h2>

      <Card>
        <CardBody>
          <h3 className="text-xl font-semibold mb-4">
            3.1.1 Brand Building and Marketing Campaigns
          </h3>
          <p>
            Our marketing efforts focused on strengthening brand presence,
            promoting specific products, and engaging directly with target
            audiences through various channels.
          </p>

          <div className="mt-4">
            <h4 className="font-medium">
              Integrated Brand Building and Advertising
            </h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Conducted comprehensive advertising campaigns and sales
                promotions to enhance product visibility and overall brand
                recognition
              </li>
              <li>
                Adopted a mix of mass marketing for broad reach and focused
                campaigns targeting specific customer segments
              </li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Gold Loans</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Continued the successful Vanitha Ran Sawya programme,
                  supporting female entrepreneurs with Gold Loans
                </li>
              </ul>

              <h4 className="font-medium mt-4">Deposits</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Promoted the Premier Savings account through integrated mass
                  media and digital marketing channels
                </li>
                <li>
                  Utilised digital platforms extensively for promoting Deposit
                  Products
                </li>
              </ul>
            </div>

            <div>
              <Image
                src="/placeholder-marketing.jpg"
                alt="Marketing Campaigns"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Digital Channel Enhancement</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Upgraded the LB CIM app to improve user experience and
                functionality
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">
              Below-the-Line (BTL) Activations and Community Engagement
            </h4>
            <p>Implemented intensive field activations, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                A 10-day door-to-door campaign covering selected areas in the
                Northern Province
              </li>
              <li>
                Town storming promotional activities and evening community
                engagement events
              </li>
              <li>
                Culturally relevant activations, such as participating in
                Thajpongal celebrations
              </li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">
                Strategic Partnerships and New Offerings
              </h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Facilitated gold jewellery sales through partnerships with
                  vendors, supported by offering dedicated credit facilities to
                  customers
                </li>
              </ul>

              <h4 className="font-medium mt-4">Product-specific Campaigns</h4>
              <h5 className="font-medium mt-2">Leasing</h5>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Launched targeted campaigns, including advertising for hybrid
                  vehicle leasing options
                </li>
                <li>
                  Capitalised on the opening of the unregistered vehicle market
                  by promoting a highly competitive leasing offer themed around
                  highest loan amount, lowest interest rate
                </li>
                <li>
                  Promoted specific leasing products including Power Draft
                </li>
              </ul>
            </div>

            <div>
              <Image
                src="/placeholder-partnerships.jpg"
                alt="Strategic Partnerships"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <p className="mt-4 italic text-center">
                Want a new vehicle without the hassle of ownership?
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Value Added Services (VAS)</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Executed targeted promotions for services such as Western Union
                bill payments, focusing on peak transaction months
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
