'use client';

export default function SocialRelationshipCapitalPart4() {
  return (
    <div>
      <div className="bg-white text-black p-4">
        <h1 className="text-2xl font-bold text-[#C9A86B] mb-2">
          CAPITAL REPORTS
        </h1>
        <h2 className="text-xl font-bold text-[#C9A86B] mb-4">
          SOCIAL AND RELATIONSHIP CAPITAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#E6E6FA] p-4 rounded">
            <h3 className="font-bold text-[#6A5ACD] mb-2">
              VALUE CUSTOMERS RECEIVE
            </h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Customised products to satisfy every financial need</li>
              <li>
                Investment products that provide retirement income and meet
                savings goals
              </li>
              <li>Responsible and objective financial advice</li>
            </ul>
          </div>
          <div className="bg-[#FFDAB9] p-4 rounded">
            <h3 className="font-bold text-[#FF8C00] mb-2">VALUE WE RECEIVE</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Income generated through lending activities</li>
              <li>Access to funds through deposits</li>
              <li>Mobilisation activities</li>
              <li>
                Ability to earn fee-based income through value added services
              </li>
            </ul>
          </div>
          <div className="bg-[#E6E6FA] p-4 rounded">
            <h3 className="font-bold text-[#8A2BE2] mb-2">
              VALUE SOCIETY RECEIVES
            </h3>
            <ul className="list-disc pl-5 text-sm">
              <li>
                Enhances the service quality of the LBF&apos;s value proposition
              </li>
              <li>Improves trust in the financial services industry</li>
              <li>Opportunity for development of start-ups</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-[#FF4500] mb-2">
            OUR CUSTOMER VALUE PROPOSITION (CVP)
          </h3>
          <p className="text-sm mb-2">
            We engage with our customers to understand their evolving
            requirements amidst shifting lifestyles and socio-economic
            conditions. These insights enable us to improve our CVP by
            continuously refining our ability to effectively address their
            financial requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#FFD700] p-2 rounded">
              <h4 className="font-bold mb-1">
                Cost-effective and affordable financial products and services
              </h4>
              <p>
                Facilitating convenience by enabling more financial services
                through the CIM app and offering concessions to customers to
                tide over their financial challenges
              </p>
            </div>
            <div className="bg-[#4169E1] p-2 rounded text-white">
              <h4 className="font-bold mb-1">
                Consistent support to achieve financial goals
              </h4>
              <p>
                Facilitating access to financial services anywhere any time
                whilst rewarding loyal customers
              </p>
            </div>
            <div className="bg-[#FF6347] p-2 rounded">
              <h4 className="font-bold mb-1">
                Simple and secure platforms with 24/7 availability
              </h4>
              <p>
                Accessible convenience at an affordable cost through
                user-friendly channels including the CIM app and online services
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-[#FF4500] mb-2">
            LEVERAGING OUR DIGITAL PLATFORMS TO MEET OUR CUSTOMER&apos;S NEEDS
          </h3>
          <p className="text-sm">
            During the year under review, we have enabled our gold loan
            customers to conduct all their transactions, including gold loan
            top-ups and renewals from the comfort of their homes, eliminating
            the need to visit a branch.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-[#FF4500] mb-2">
            SUPPORTING CUSTOMERS THROUGH FINANCIAL CHALLENGES
          </h3>
          <p className="text-sm mb-2">
            We supported our customers to navigate the financial challenges
            during the year by:
          </p>
          <div className="flex flex-wrap justify-between">
            {[
              'Extended financial grace to optimise loan finances',
              'Offered interest waivers',
              'Offered rebates on the accumulated overdue interests',
              'Rescheduled facilities',
              'Reduced rates on flexible facilities',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#D2B48C] p-2 m-1 rounded-lg text-sm w-[calc(20%-0.5rem)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold text-[#FF4500] mb-2">
              RESPONSIBLE CUSTOMER COMMUNICATION
            </h3>
            <p className="text-sm">
              We empower our customers by providing comprehensive information
              about our products and services, allowing them to make informed
              decisions. Our marketing materials comply with regulatory
              requirements and industry standards, reflecting missions from
              customer feedback. Additionally, we ensure content aligns with our
              ethical values. All marketing content is approved by the
              respective head and generic content by the marketing head.
              Additionally, all materials undergo Board approval before
              publication.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#0000FF] mb-2">
              Our marketing communication initiatives
            </h3>
            <ul className="list-disc pl-5 text-sm">
              <li>
                The following marketing campaigns were launched during the year
                and each campaign was strategically designed to meet specific
                objectives and attract targeted audiences.
              </li>
              <li>
                The Gold Loan product campaign targeting the business sector was
                conducted for 3 months with prizes as incentives. The campaign
                received significant advertising exposure, reaching a wide
                audience.
              </li>
              <li>
                Branch expansion campaign to promote the opening of new branches
                in local areas.
              </li>
              <li>Leasing and Power Draft campaigns</li>
              <li>
                A Women&apos;s Day campaign was launched to honour female
                entrepreneurs who play a crucial role in our nation&apos;s
                economy. As part of this initiative, we introduced a convenient
                loan scheme with favourable rates tailored to support their
                endeavours.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
