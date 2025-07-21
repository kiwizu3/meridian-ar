import React from 'react';
import Image from 'next/image';

export default function StrategicJourney() {
  return (
    <div className="strategic-journey p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">STRATEGIC JOURNEY</h1>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <p className="mb-4">
            Our journey has been shaped by the unwavering support of our
            customers, shareholders, employees, business partners, regulators,
            and the wider community. Each has been an essential piece of the
            puzzle, forming the foundation of who we are today one of the most
            recognized and largest financial institutions in the country.
          </p>
          <p className="mb-4">
            Together, we have climbed mountains and reached remarkable
            milestones. Through challenges and change, we stood as one family
            growing, learning, and persevering. As we celebrated this golden
            milestone, we reflected on the countless lives we've touched those
            who have given us purpose and inspired us to give back.
          </p>
          <p className="mb-4">
            This year, we bring you stories that represent our Mosaic of
            Strength individual experiences and shared triumphs that embody the
            spirit of resilience, unity, and progress. These are not just
            achievements of the past, but inspirations lighting our path
            forward.
          </p>
        </div>

        {/* Timeline Sections */}
        <div className="space-y-12">
          {/* The Beginning */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              The Beginning 1971 - 1981
            </h2>
            <p className="mb-4">
              Established as a private Company on 30th May 1971 with its
              registered office at No. 101, Vinayalankara Mawatha, Colombo 10.
              The majority shareholding of 94.9% was held by Lewis Brown &
              Company Limited.
            </p>
          </div>
          {/* 1982 - 2001 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              1982 - 2001
            </h2>
            <div className="grid grid-cols-1">
              <div className="bg-cardGreen p-4 rounded-lg">
                <h3 className="font-bold mb-2">Early Expansion</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Changed status to public company</li>
                  <li>
                    Vanik Incorporation Limited's shareholding increased to
                    83.26%
                  </li>
                  <li>Listed on the Colombo Stock Exchange</li>
                  <li>Commenced Gold Loan services</li>
                  <li>First Gold Loan center opened in Maradana</li>
                  <li>
                    Moved Head Office to Prof. Stanley Wijesundera Mawatha,
                    Colombo 7
                  </li>
                  <li>Introduced lottery-based deposit scheme 'Siya Savi'</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 2002-2011 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              2002-2011
            </h2>
            <div className="grid grid-cols-1">
              <div className="bg-cardGreen p-4 rounded-lg">
                <h3 className="font-bold mb-2">Maturity and Leadership</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Mr. K D D Perera took over a stake of 58.74% to turn around
                    the loss-making Company into a profitable venture
                  </li>
                  <li>
                    Registered in terms of Section 2 of the Finance Companies
                    Act No. 78 of 1988
                  </li>
                  <li>
                    The Company re-registered under the new Companies Act No. 07
                    of 2007
                  </li>
                  <li>
                    Developed a new website with online payment and vehicle
                    trade-in facility
                  </li>
                  <li>
                    Profits doubled and reached over Rs. 1 Billion for the first
                    time
                  </li>
                  <li>North and East market presence for the first time</li>
                  <li>
                    Became a part of Vallibel One PLC umbrella which is a
                    diversified company
                  </li>
                  <li>
                    Upgraded the ratings from BBB+/P2 to A-/ P2 by RAM Ratings
                    (Lanka) Limited
                  </li>
                  <li>
                    Company has emerged as the second largest Licensed Finance
                    Company (LFC) in Sri Lanka
                  </li>
                  <li>
                    Introduced Global Reporting Initiative (GRI) to the Annual
                    Report
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 2012-2015 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              2012-2015
            </h2>
            <div className="grid grid-cols-1">
              <div className="bg-cardGreen p-4 rounded-lg">
                <h3 className="font-bold mb-2">Excellence and Innovation</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Moved to new corporate office at Dharmapala Mawatha, Colombo
                    03
                  </li>
                  <li>
                    Introduced LB Savings, Pay Hub facility, and VISA shopping
                    card
                  </li>
                  <li>
                    Largest expansion drive within the industry with 20 new
                    outlets
                  </li>
                  <li>Recorded largest deposit base among NBFI sector</li>
                  <li>
                    Global Banking and Finance Review UK awarded us as the ‘Best
                    Retail Finance in Sri Lanka for 2013’
                  </li>
                  <li>Opened first premier branch in Mount Lavinia</li>
                  <li>
                    Became the 1st finance company in Sri Lanka to comply with
                    ISO 27001:2013
                  </li>
                  <li>Integrated Interbank payment system (SLIPS)</li>
                  <li>Opened 100th branch in Jaffna</li>
                  <li>First carbon neutral finance institution in Sri Lanka</li>
                  <li>Ranked 26 among top 100 brands by Brand Finance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2025 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              2025
            </h2>
            <div className="grid grid-cols-1">
              <div className="bg-cardGreen p-4 rounded-lg">
                <h3 className="font-bold mb-2">A Mosaic of Strength</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Achieved highest ever profit after tax of Rs. 10.8 Billion
                  </li>
                  <li>
                    Enhanced LB CIM app with the ability to open savings
                    accounts, FD flex option, withholding tax certificate
                    request option, biometric and security upgrades, and a
                    refreshed user interface and user experience design{' '}
                  </li>
                  <li>Voluntary adoption of SLFRS S1 and S2 standards</li>
                  <li>
                    First NBFI in Sri Lanka to calculate financed emissions and
                    obtain a verification opinion
                  </li>
                  <li>Became member of UN Global Compact Network Sri Lanka</li>
                  <li>
                    Initiated construction of first green branch in Chilaw
                  </li>
                  <li>
                    LB Microfinance Myanmar commenced operations in the Yangon
                    region
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2016-2017 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              2016-2017
            </h2>
            <div className="grid grid-cols-1 ">
              <div className="bg-cardGreen p-4 rounded-lg">
                <h3 className="font-bold mb-2">
                  Sustainability Meets Technology
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Successfully completed 45 years in the finance industry with
                    a profit after tax growth of 70% (Rs. 3.7 Billion)
                  </li>
                  <li>
                    Launched LB e-connect online platform to Savings customers
                  </li>
                  <li>
                    Obtained MoneyGram agentship for international money
                    transfer
                  </li>
                  <li>
                    Integrated with Common Electronic Fund Transfer Switch
                    (CEFTS)
                  </li>
                  <li>Exceeded Rs. 100 Billion asset base</li>
                  <li>Launched LB Gift Store</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 2018-2019 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              2018-2019
            </h2>
            <div className="grid grid-cols-1">
              <div className="bg-cardGreen p-4 rounded-lg">
                <h3 className="font-bold mb-2">Bold as a Brand</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Upgraded the ratings from BBB+/P2 to A-/ P2 by RAM Ratings
                    (Lanka) Limited
                  </li>
                  <li>
                    Mortgage Loan product was re-branded and re-launched as
                    ‘Mulgala’
                  </li>
                  <li>
                    Launched of ‘Krutha Hastha’ senior citizens loan scheme
                  </li>
                  <li>First overseas expansion to Myanmar</li>
                  <li>Moved to cloud-based IT platform</li>
                  <li>Ranked among top 20 brands in Sri Lanka by Interbrand</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 2020-2021 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              2020-2021
            </h2>
            <div className="grid grid-cols-1">
              <div className="bg-cardGreen p-4 rounded-lg">
                <h3 className="font-bold mb-2">Smarter, Faster, Automated</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Chatbot was introduced to the corporate website and social
                    media platforms
                  </li>
                  <li>Automation of the credit verification process</li>
                  <li>Automated insurance renewal process</li>
                  <li>
                    Fully automated risk assessment scorecard for branches and
                    Gold Loan centres
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 2022-2024 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              2022-2024
            </h2>
            <div className="grid grid-cols-1">
              <div className="bg-cardGreen p-4 rounded-lg">
                <h3 className="font-bold mb-2">The Digital Era</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tied up with DRP for digital financial services</li>
                  <li>
                    Partnered with WEBXPAY for 'CIM' business loans to MSMEs
                  </li>
                  <li>Installed data visualisation and modelling software</li>
                  <li>Strengthened ISO 27001 information security standard</li>
                  <li>
                    Tied up with FinCSIRT (Computer Security Incident Response
                    Team for Sri Lanka’s financial sector)
                  </li>
                  <li>First NBFI to launch Annual Report micro-site</li>
                  <li>Amalgamation of Multi Finance PLC</li>
                  <li>Introduced cookie policy to corporate website</li>
                  <li>Integration with CRIB backend</li>
                  <li>Updated website with AI-based digital imagery</li>
                  <li>Opened 200th branch in Pallai</li>
                  <li>Ranked 16 among top 40 corporates by Business Today</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 2025 */}
        </div>
      </div>
    </div>
  );
}
