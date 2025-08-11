'use client';

import Image from 'next/image';

export default function SocialRelationshipCapitalPart3() {
  return (
    <div>
      <div className="bg-white text-black p-4">
        <h2 className="text-xl font-bold text-[#C9A86B] mb-4">
          CAPITAL TRADE-OFF
        </h2>

        <div className="mb-6">
          <p className="text-center font-bold mb-2">
            Engage in community development
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div className="bg-[#d1e0f2] p-2 rounded">
              <h3 className="font-bold">FC</h3>
              <p>
                Requires financial resources to develop entrepreneurs and uplift
                the communities leading to a positive impact on economic growth
              </p>
            </div>
            <div className="bg-purple-200 p-2 rounded">
              <h3 className="font-bold">HC</h3>
              <p>
                Employee engagement in CSR activities forges good
                employee-community relationships and increases employee
                satisfaction
              </p>
            </div>
            <div className="bg-[#fbdde9] p-2 rounded">
              <h3 className="font-bold">IC</h3>
              <p>Enhances brand reputation</p>
            </div>
            <div className="bg-[#e7f1d4] p-2 rounded">
              <h3 className="font-bold">NC</h3>
              <p>Community engagement fosters a sustainable value chain</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-center font-bold mb-2">
            Improve customer relationship management
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div className="bg-[#d1e0f2] p-2 rounded">
              <h3 className="font-bold">FC</h3>
              <p>
                Investment in customer service improvements requires financial
                resources
              </p>
            </div>
            <div className="bg-purple-200 p-2 rounded">
              <h3 className="font-bold">HC</h3>
              <p>Employee training to enhance customer service</p>
            </div>
            <div className="bg-[#fbdde9] p-2 rounded">
              <h3 className="font-bold">IC</h3>
              <p>
                Investment in technology and digital channels augments
                intellectual capital
              </p>
            </div>
            <div className="bg-gray-200 p-2 rounded">
              <h3 className="font-bold">MC</h3>
              <p>
                Augmenting the branch network and customer touch points builds
                manufactured capital
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E1] p-4 rounded-lg mb-6">
          <div className="flex items-center mb-2">
            <h2 className="text-xl font-bold text-[#FF9800]">
              CUSTOMER CAPITAL
            </h2>
          </div>
          <p>
            Our customer base includes individuals and businesses engaged in
            investing, financing, and value-added services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold mb-2">WHAT WE WANT</h3>
            <p className="text-sm">
              To provide differentiated, customised financial solutions and
              relevant spaces in our VRIN context.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">WHAT THEY WANT</h3>
            <p className="text-sm">
              We offer resource-efficient spaces relevant to their evolving
              needs, and our differentiators, people centricity, technology, and
              environmental efficiency are at the forefront of our offering.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-2">MANAGEMENT APPROACH</h3>
          <p className="text-sm bg-purple-200 p-2 rounded">
            Our commitment to customers is reflected in our value proposition,
            based on enhancing customer experience and fostering trust. We
            promote inclusive financial services, serving Sri Lankans across the
            nation.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-2">CUSTOMER BASE</h3>
          <div className="flex justify-between">
            <div>
              <p className="font-bold">+800,000</p>
            </div>
            <div className="flex flex-wrap items-center">
              <Image
                src="/images/sustainability/male-cus.PNG"
                alt="customers"
                width={200}
                height={300}
                style={{ width: '100px' }}
              />
              <p>MALE CUSTOMERS: 61%</p>
            </div>
            <div className="flex flex-wrap items-center">
              <Image
                src="/images/sustainability/female-cus.PNG"
                alt="customers"
                width={200}
                height={300}
                style={{ width: '100px' }}
              />
              <p>FEMALE CUSTOMERS: 39%</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-2">OUR CUSTOMER PROMISE</h3>
          <p className="text-sm">
            We place our customers at the forefront of all our actions.
            Accordingly, we strive to provide a service that surpasses their
            expectations through our service standards, convenience, branch
            network and touch points, digital services, product range, and
            quality of our customer relationships. Moreover, we adhere to all
            relevant legal and regulatory standards governing our business.
          </p>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#C9A86B]">
              <th className="p-2 text-left">Principle</th>
              <th className="p-2 text-left">Our Responsibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Customer first</td>
              <td className="p-2 border">
                Consider customer requirements first
              </td>
            </tr>
            <tr>
              <td className="p-2 border">Customer accountability</td>
              <td className="p-2 border">
                Own the issue without passing the blame
              </td>
            </tr>
            <tr>
              <td className="p-2 border">Simple, clear and transparent</td>
              <td className="p-2 border">
                Communicate in clear, simple language
              </td>
            </tr>
            <tr>
              <td className="p-2 border">Continuous improvement</td>
              <td className="p-2 border">
                Continuously improve products, services and channels in line
                with customer expectations and changing needs
              </td>
            </tr>
            <tr>
              <td className="p-2 border">Monitor and reporting</td>
              <td className="p-2 border">
                Identify gaps and initiate appropriate corrective actions
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
