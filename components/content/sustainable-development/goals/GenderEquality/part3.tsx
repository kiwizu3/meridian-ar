'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function GenderQualityPart3() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        CULTIVATING SOCIAL AND RELATIONSHIP CAPITAL
      </h2>

      <Card>
        <CardBody>
          <h3 className="text-xl font-semibold mb-4">5 COMMUNITY CAPITAL</h3>
          <p>
            As a responsible corporate citizen, we are committed to fostering
            the social and economic development of the nation. We undertake
            impact community engagement projects focused on significantly
            uplifting the quality of life for undeserved communities across the
            country.
          </p>

          <div className="mt-6">
            <h4 className="font-medium">
              5.1 LBF's Commitment to Community Investment
            </h4>
            <p>
              At LBF, our community investment strategy is guided by national
              priorities and local needs, aiming to create positive and
              meaningful change. Recognising the vital link between society and
              our long-term success, we are focusing on uplifting marginalised
              areas, with a specific emphasis on rural communities.
            </p>

            <p className="mt-2">
              We invest in community capital by supporting initiatives that
              drive inclusive, long-term socio-economic development. Our
              community investment strategy prioritises undeserved and rural
              areas across Sri Lanka, focusing on education, health, and
              livelihood development.
            </p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Priority Areas</h4>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Knowledge sharing</li>
                <li>Community well-being</li>
                <li>Access to education</li>
                <li>Build partnerships</li>
                <li>Transformative CSR</li>
              </ul>

              <p className="mt-4">
                Some of these investments are part of a continued historical
                journey, underscoring our enduring commitment to advancing
                community initiatives and promoting societal well-being.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder-csr.jpg"
                alt="Community Investment"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">LCES Tailoring School Project</h4>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="border p-4 rounded-lg">
                <h5 className="font-medium">Priority Area</h5>
                <p>Access to education</p>
              </div>
              <div className="border p-4 rounded-lg">
                <h5 className="font-medium">What we did in past</h5>
                <p>
                  In 2023/24, we completed training of the first batch from the
                  LCES Tailoring School
                </p>
              </div>
              <div className="border p-4 rounded-lg">
                <h5 className="font-medium">Partnership</h5>
                <p>LCES Tailoring School</p>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium">Expected Benefits and Impact</h5>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Empowering women by equipping them with practical skills and
                  knowledge
                </li>
                <li>
                  Expanding career opportunities, facilitating entry into
                  diverse and skilled professions
                </li>
                <li>
                  Increasing earning potential and fostering greater financial
                  stability
                </li>
                <li>
                  Enabling contributions to community development through
                  participation in skilled labour markets
                </li>
              </ul>

              <p className="mt-4">
                To equip individuals with skills in tailoring and sewing, LBF
                sponsored a vocational training programme at the La Sallian
                Community Education Center (LCES) in Colombo.
              </p>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium">Current year activities</h5>

                <div className="mt-4 border p-4 rounded-lg">
                  <h6 className="font-medium">Activity 01</h6>
                  <p>
                    An SME workshop, supported by SME Connect, was conducted at
                    the LCES Tailoring School. The workshop equipped students
                    with essential skills in entrepreneurship, leadership, basic
                    social media usage, and fundamental financial management.
                  </p>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                      <p className="text-sm text-gray-600">Investment</p>
                      <p>Rs. 35,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Beneficiaries</p>
                      <p>26</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Man hours</p>
                      <p>40</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border p-4 rounded-lg">
                  <h6 className="font-medium">Activity 02</h6>
                  <p>
                    The Graduation Ceremony for the second batch of the LCES
                    Tailoring School celebrated student achievements and
                    facilitated economic empowerment by providing job
                    opportunities at a garment factory.
                  </p>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                      <p className="text-sm text-gray-600">Investment</p>
                      <p>Rs. 1,638,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Beneficiaries</p>
                      <p>15</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Man hours</p>
                      <p>52</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder-tailoring.jpg"
                  alt="LCES Tailoring School"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium">FUTURE ROAD MAP</h5>
              <p>
                We plan to commence the 3rd batch, enabling them to become
                skilled professionals like the previous batches.
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
