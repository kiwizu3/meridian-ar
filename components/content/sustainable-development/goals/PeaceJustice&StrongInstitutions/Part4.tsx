import Image from 'next/image';

export default function CybersecurityPart4() {
  return (
    <div className="bg-themeGreen p-5 mb-10">
      <h1 className="text-4xl font-bold mb-6">
        INTEGRATED RISK MANAGEMENT REPORT
      </h1>

      <div className="mb-8">
        <div className="grid grid-cols-1 mb-6">
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">
              Information and Cybersecurity Risk
            </h2>
            <p>
              LBF continues to pursue an accelerated digital transformation
              agenda to enhance operational efficiency, elevate customer
              experience, and reinforce its competitive positioning. While this
              evolution brings substantial benefits, it also elevates the
              Company’s exposure to information security, cybersecurity, and
              broader technology risks. In response, LBF has significantly
              strengthened its IT Risk Management Framework, adopting a
              proactive, structured approach to manage these evolving threats
              effectively. As a retail financial institution entrusted with a
              vast volume of sensitive customer information, information
              security risk remains a key area of focus. Compliance with
              emerging Personal Data Protection regulations is critical, and LBF
              has taken decisive steps to ensure the confidentiality, integrity,
              and availability of customer data. A dedicated Information
              Security Department, headed by Chief Information Security Officer
              (CISO) has been established to lead this effort to oversee
              regulatory alignment and implementation of appropriate controls.
            </p>
            <div className="mt-4">
              <Image
                src="/images/sustainability-goals/key-defence-funtions.png"
                alt="Key Defence Funtions"
                width={500}
                height={400}
              />
            </div>
            <p className="my-3">
              Our cybersecurity strategy is built on a multi-layered defense
              model aligned with the Three Lines of Defense. This approach
              integrates preventive, detective, and responsive controls across
              systems and processes to enhance digital resilience. Key
              components include advanced security technologies such as
              firewalls, intrusion detection and prevention systems, encryption
              protocols, and endpoint protection tools. Regular vulnerability
              assessments, penetration testing, and thematic security audits are
              conducted to identify and address security gaps in a timely
              manner. To further strengthen data privacy, the Company has
              implemented comprehensive measures including access controls, data
              encryption, and secure data storage practices, while progressing
              with compliance initiatives under the Personal Data Protection
              Act. Enhancing operational resilience is also a critical
              objective, with robust Business Continuity Planning (BCP) and
              Disaster Recovery (DR) frameworks in place to ensure continuity of
              critical services during disruptions.
            </p>
            <p>
              Our risk mitigation efforts are guided by a structured methodology
              that includes the evaluation and application of technical,
              operational, and managerial controls to address identified
              vulnerabilities. The foundation of this approach is the
              Information Security Management System (ISMS), implemented in
              accordance with the ISO/IEC 27001:2022 standard. This system
              ensures that information security practices are embedded within
              daily operations and consistently reviewed for improvement.
            </p>
            <p>
              In addition, a comprehensive IS Audit Framework provides an
              independent assessment of internal controls, governance, and
              compliance with regulatory and industry standards. These efforts
              collectively reinforce LBF’s ability to safeguard its digital
              infrastructure, protect stakeholder interests, and deliver secure,
              reliable services in an increasingly complex cyber environment.
            </p>
          </div>
          <div></div>

          <div className="bg-cardGreen p-4 rounded-lg my-3">
            <h3 className="text-xl font-medium mb-4">17.3 Compliance Risk</h3>
            <p>
              LBF remains firmly committed to conducting its business with the
              highest level of integrity, in full compliance with applicable
              laws, regulations, and regulatory expectations. Compliance is not
              viewed as a standalone function but as an integral part of the
              Company’s overall risk governance framework. A culture of
              compliance is embedded across the organisation, supported by
              continuous training, active oversight from the Board and its
              SubCommittees, and a clear tone from the top
            </p>
            <p>
              To manage compliance risk effectively, we have adopted a range of
              practices and tools, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Periodic internal compliance reviews at branch and departmental
                levels to ensure adherence to laws, regulations, and internal
                policies
              </li>
              <li>
                Regular monitoring and reporting on compliance with regulatory
                directions issued by the Central Bank of Sri Lanka
              </li>
              <li>
                Early adoption of new regulatory requirements and ongoing
                alignment of internal practices with emerging compliance
                standards
              </li>
              <li>
                Continuous transaction monitoring to detect and prevent
                potential financial crimes, including AML/CTF-related risks
              </li>
              <li>
                Timely execution of Customer Due Diligence (CDD) and Enhanced
                Due Diligence (EDD) where required, based on customer risk
                profiles
              </li>
              <li>
                Ongoing staff awareness initiatives to strengthen compliance
                culture and promote ethical conduct
              </li>
              <li>
                Independent oversight by the Compliance Department, with
                escalation of material compliance matters to the Board through
                relevant sub-committees
              </li>
              <li>
                Engagement with industry forums and regulators to stay abreast
                of key developments and maintain alignment with best practices
              </li>
            </ul>
            <p>
              Through these measures, LBF ensures that compliance remains a
              cornerstone of sustainable and responsible business conduct.
            </p>
          </div>

          <div className="bg-cardGreen p-4 rounded-lg my-3">
            <h3 className="text-xl font-medium mb-4">17.4 Model Risk</h3>
            <p>
              At LB Finance, quantitative models play an essential role in
              informing strategic decisions. Ensuring these models are developed
              and maintained responsibly is vital to safeguarding the Company’s
              financial health. A structured framework governing the entire
              model lifecycle from inception through retirement underpins our
              ability to generate reliable outputs and maintain robust risk
              controls.
            </p>
            <p>
              Sources of model risk include programming defects, data
              inaccuracies, bias, incorrect assumptions, or misinterpretation of
              results.
            </p>
            <h3 className="text-lg font-medium mt-4">
              Managing Model Risk at LBF
            </h3>
            <p>
              During the year 2024/25, we established a comprehensive Model Risk
              Management Framework to reinforce governance over the use of
              models across the institution. This framework defines the
              standards, processes, and responsibilities for managing model risk
              throughout the entire model lifecycle from development and
              implementation to monitoring and retirement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
