'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function GenderQualityPart4() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">CHALLENGES AND PERFORMANCE</h2>

      <Card>
        <CardBody>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Challenges/Opportunities
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium">Increased competition</h4>
                  <p>
                    We strategically balanced responsible lending practices with
                    market competitiveness in response to the growing
                    competition in the Gold Loan sector. We maintained optimal
                    pricing models and launched a robust marketing campaign that
                    highlighted our financial stability and long-term commitment
                    to our customers.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">
                    Reduced interest rates and high vehicle prices
                  </h4>
                  <p>
                    To mitigate the pressures from declining interest rates, we
                    conducted thorough market analysis and ensured that our
                    interest rates remained competitive. Additionally, we
                    focused on enhancing operational efficiency to offset the
                    impact on profit margins and deliver value to our clients.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">
                    Talent acquisition by competitor
                  </h4>
                  <p>
                    In light of heightened talent acquisition by competitors, we
                    placed a strong emphasis on employee development and
                    retention. This included the implementation of monthly
                    training programmes specifically designed for our Gold Loan
                    staff. Furthermore, we introduced reward and recognition
                    schemes to foster employee loyalty, celebrate achievements,
                    and ensure a motivated and skilled workforce.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder-challenges.jpg"
                alt="Challenges and Opportunities"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              2.2 Performance - Gold Loans
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium">Gold Loan Portfolio</h4>
                <Image
                  src="/placeholder-graph.jpg"
                  alt="Gold Loan Portfolio Graph"
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p>YoY growth in the Gold Loan portfolio</p>
                  <p className="font-medium">15% (2023/24: 10%)</p>
                </div>
                <div>
                  <p>Gold Loan share of the total lending portfolio</p>
                  <p className="font-medium">42% (2023/24: 44%)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">2.3 NPL Management</h3>
            <p>
              This year, we achieved a notable Non-Performing Loan (NPL) ratio
              of 0.08%, a reflection of our proactive and customer-focused
              strategies. Key initiatives contributing to this achievement
              include:
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Incentive programmes: Implementing reward programmes designed to
                incentivise and promote consistent on-time payments
              </li>
              <li>
                Collaborative solutions for at-risk customers: Maintaining close
                engagement with customers facing potential asset auctions
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              2.4 Enhancing customer services
            </h3>
            <p>
              In line with our commitment to innovation and customer-centric
              services, the following initiatives have been introduced to
              enhance our Gold Loan offerings:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    AI and machine learning integration: We have leveraged AI
                    and machine learning technologies to streamline and enhance
                    the efficiency of our Gold Loan operations
                  </li>
                  <li>
                    Specialised products for women: The introduction of the
                    Vanitha product, tailored specifically for women customers
                  </li>
                  <li>
                    Top-Up Option via Digital App: The LB CIM app enhances
                    customer convenience by allowing users to remotely top up
                    their advance value
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Employee training and development: We invested in
                    comprehensive training programmes to equip our employees
                    with the necessary skills and knowledge
                  </li>
                  <li>
                    Ran Udana Season 3 campaign: To further engage with our
                    customers, we successfully conducted the Ran Udana Season 3
                    campaign
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
