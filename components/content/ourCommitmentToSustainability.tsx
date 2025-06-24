import Image from 'next/image';
import ManagementCard from '../cards/managementCard/managementCard';
export default function OurCommitmentSustainability() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Image and title */}
        <div className="flex flex-col items-center justify-center">
          <ManagementCard
            name={'Ms. Yanika Amarasekera'}
            title={'Board Sustainability Committee'}
            position={'Chairperson'}
            image={'/images/annual-report/yanika.png'}
          />
        </div>

        {/* Message header */}
        <div className="md:col-span-2 bg-orange-300 p-4">
          <h1 className="font-bold p-3 rounded-lg bg-[#d4a262] mb-4">
            MESSAGE FROM THE CHAIRPERSON
          </h1>
          <p className="text-lg">
            Throughout the year, LBF has remained steadfast in its commitment to
            sustainability by integrating environmental, social, and governance
            principles into our business operations. Our initiatives were driven
            by the overarching goal of generating long-term value for our
            stakeholders, minimising our environmental impact, and making a
            positive societal contribution.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white text-blue rounded-lg p-6">
        <div className="md:col-span-1">
          <p className="mb-4">
            As Chairperson of the Board Sustainability Committee, I am pleased
            to provide an update on LBF&#39;s sustainability activities for the
            financial year 2023/24.
          </p>
          <p className="mb-4">
            Throughout the year, LBF has remained steadfast in its commitment to
            sustainability by integrating Environmental, Social, and Governance
            (ESG) principles into our business operations. Our initiatives were
            driven by the overarching goal of generating long-term value for our
            stakeholders, minimising our environmental impact, and making a
            positive societal contribution.
          </p>
          <p className="mb-4">
            LBF actively pursued numerous initiatives to minimise its
            environmental footprint such as implementing energy efficient
            practices across its operations, introducing innovative
            technologies, promoting a paperless environment, and engaging in
            waste reduction and recycling programs. Additionally, LBF continued
            to support green financing to reduce scope 3 GHG emissions. Most
            importantly, our digital initiatives significantly enhanced
            operational efficiencies while maintaining a low environmental
            impact.
          </p>
          <p className="mb-4">
            During the year, LBF prioritised social welfare and community
            development. Our CSR programs focused on education, healthcare, and
            economic empowerment, with the goal of uplifting underprivileged
            communities. The Company also prioritised employee well-being by
            providing extensive training programs, fostering a diverse and
            inclusive workplace, and ensuring fair labour practices.
            Additionally, the Company engaged in regular stakeholder dialogues
            to understand and address community needs effectively.
          </p>
        </div>

        <div className="md:col-span-1">
          <p className="mb-4">
            In terms of governance and ethics, LBF maintained robust governance
            structures and established a dedicated Board Sustainability
            Committee to oversee its sustainability initiatives. The Company
            adhered to the highest ethical standards, implementing comprehensive
            risk management frameworks, anti-corruption policies, and compliance
            mechanisms. LBF ensured transparency and accountability through
            regular disclosures and reporting, aligning with global standards
            such as GRI, United Nations&#39; SDGs, and other sustainability
            related voluntary disclosures.
          </p>
          <p className="mb-4">
            LBF&#39;s sustainability reporting aligns with international best
            practices, offering detailed insights into its ESG performance. The
            sustainability reporting information LBF provides include both
            quantitative metrices and qualitative assessments, highlighting the
            Company&#39;s impact and progress over time. To ensure credibility
            and stakeholder trust, the Company engages third-party auditors to
            verify the accuracy and reliability of its sustainability data.
          </p>
        </div>

        <div className="md:col-span-1">
          <p className="mb-4">
            Looking ahead, LBF is dedicated to continually advancing its
            sustainability practices. The Company aims to set more ambitious
            targets for reducing its environmental impact, expand its social
            programs to reach a broader range of beneficiaries, and further
            strengthen its governance frameworks. LBF is dedicated to staying at
            the forefront of sustainability, leveraging innovation and best
            practices to drive positive change within the financial sector and
            beyond.
          </p>
          <p className="mb-4">
            I extend my sincere appreciation to all employees, partners, and
            stakeholders who have contributed to our sustainability efforts.
            Your dedication and commitment are invaluable as we work together to
            create positive change.
          </p>
          <div className="mt-8">
            <Image
              src="/images/annual-report/yanikaSig.png"
              alt="Signature"
              width={150}
              height={50}
            />
            <p>Ms. Yanika Amarasekera</p>
            <p>Chairperson</p>
            <p>Board Sustainability Committee</p>
            <p>27 May 2024</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white text-blue rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          SUSTAINABILITY VALUE CREATION MODEL
        </h2>
        <p>
          LB Finance continues its journey to integrate sustainability in a
          structured manner within the Company in readiness for full compliance
          with SLFRS S1 & S2 by due dates. The model below sets out LBF’s
          Sustainability Value Creation Model which encapsulates our ESG
          Framework. The model ensures that all three ESG pillars are covered
          and connects sustainability strategy with capitals to drive achieving
          the Company’s vision, mission, goals and values.
        </p>
      </div>

      <div className="grid md:grid-cols-3">
        <div></div>
        <div className="p-6 bg-gray-200 text-blue rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Financial Stability</h2>
          <p>
            Financial stability is crucial to ensure the Company’s long-term
            resilience and its ability to create sustainable value for our
            stakeholders
          </p>
        </div>
        <div></div>
      </div>

      <div className="grid md:grid-cols-5">
        <div className="p-6 bg-gray-200 text-blue rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Inclusive Growth</h2>
          <p>
            Inclusive growth impacts on societal well being , social justice and
            equity, including managing relationships with our employees,
            customer and community
          </p>
        </div>
        <div className="md:col-span-3">
          <img
            src="/images/annual-report/sustainability-circle.png"
            alt="sustainability value capital modal"
          />
        </div>

        <div className="p-6 bg-gray-200 text-blue rounded-lg md:text-right">
          <h2 className="text-2xl font-semibold mb-4">Great Work Place</h2>
          <p>
            We seek to create a great workplace through our governance goals and
            actions which comprise direct and indirect impacts on corporate
            governance through transparency, metrices, data security, risk
            management, and ownership review
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div></div>
        <div className="p-6 bg-gray-200 text-blue rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Positive Environmental Impact
          </h2>
          <p>
            Reducing direct and indirect impacts on emission, pollution,
            climate, waste and resource management are essential to our
            long-term success
          </p>
        </div>
        <div></div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">ESG GOVERNANCE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white text-blue rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Governance Structure</h3>
            <ul className="list-none space-y-2">
              <li className="bg-green-500 text-blue p-2 rounded">
                BOARD OF DIRECTORS
              </li>
              <li className="border border-blue p-2 rounded">
                Board Sustainability Committee
              </li>
              <li className="border border-blue p-2 rounded">
                Sustainability Management Committee
              </li>
              <li className="border border-blue p-2 rounded">
                Senior Manager Digital Strategy & Sustainability
              </li>
              <li className="border border-blue p-2 rounded">
                Manager Sustainability & Corporate Reporting
              </li>
            </ul>
            <p className="mt-4 ">
              The ESG governance structure of LBF starts with the Board which
              overlooks the sustainability related activities of the Company. In
              order to streamline this, a sub committee has been appointed by
              the Board which is known as Board Sustainability Committee (BSC).
              The BSC is comprised of four Directors as shown in the above
              illustration.
            </p>
            <p className="mt-2 ">
              The decisions taken at BSC level is executed by the Sustainability
              Management Committee which is led by seven different divisional
              heads to ensure sustainability practises are applied throughout
              the Company. This management committee is supported by the Senior
              Manager and Manager who are responsible for sustainability related
              activities.
            </p>
            <p className="mt-2 ">
              The Deputy Managing Director holds membership in both committees
              to bridge them, monitor progress and maintain smooth functioning.
            </p>
          </div>
          <div className="bg-white text-blue rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Board Sustainability Committee Members
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Ms. Yanika Amarasekera - Chairperson/Independent Non-Executive
                Director
              </li>
              <li>
                Mr. G.A.R.D. Prasanna - Non-Independent Non-Executive Director
              </li>
              <li>Mr. Niroshan Udage - Deputy Managing Director</li>
              <li>Ms. Ashwini Natesan - Independent Non-Executive Director</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Management Committee Members
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Deputy Managing Director</li>
              <li>Chief Financial Officer</li>
              <li>AGM - Risk Management</li>
              <li>Chief Internal Auditor</li>
              <li>AGM - Treasury</li>
              <li>Senior Manager - Compliance</li>
              <li>Senior Manager - Business Process Development</li>
              <li>Senior Manager - Digital Strategy & Sustainability</li>
              <li>Manager Sustainability & Corporate Reporting</li>
            </ul>
          </div>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">OUR ESG JOURNEY</h2>
          <p className="mb-4">
            Our ESG journey is captured alongside with the adoption of GRI,
            progressing to widen the scope as momentum gathered on
            sustainability reporting. We continue to be at the forefront of
            sustainability reporting as we believe this is the path to corporate
            longevity and building resilience. This year, we have set out our
            goals for the short, medium and long term which will be our roadmap
            in the future.
          </p>
          <div className="relative">
            <img
              src="/images/annual-report/timeline-map.jpg"
              alt="ESG Journey Timeline"
              className="w-full"
            />
            <div className="w-full h-full flex items-end">
              <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
                <div className="text-center bg-gray-100 p-4 rounded-lg">
                  <p className="font-bold">2021</p>
                  <p className="text-sm">
                    Over 38,000 trees were planted under &#39;Thuru Wawamu&#39;
                    project
                  </p>
                </div>
                <div className="text-center bg-gray-100 p-4 rounded-lg">
                  <p className="font-bold">2022</p>
                  <p className="text-sm">Green branch concept initiated</p>
                </div>
                <div className="text-center bg-gray-100 p-4 rounded-lg">
                  <p className="font-bold">2024</p>
                  <p className="text-sm">Early adoption of SLFRS & S2</p>
                </div>
                <div className="text-center bg-gray-100 p-4 rounded-lg">
                  <p className="font-bold">2027</p>
                  <p className="text-sm">
                    Finance emission reporting under GHG Scope 3
                  </p>
                </div>
                <div className="text-center bg-gray-100 p-4 rounded-lg">
                  <p className="font-bold">2030</p>
                  <p className="text-sm">
                    Carbon credit generating organisation
                  </p>
                </div>
                <div className="text-center bg-gray-100 p-4 rounded-lg">
                  <p className="font-bold">2050</p>
                  <p className="text-sm">Net zero ambition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
