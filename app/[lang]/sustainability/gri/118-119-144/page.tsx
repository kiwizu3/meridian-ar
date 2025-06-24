import Section1 from '@/components/content/sustainable-development/humanCapital/part11';
import Section2 from '@/components/content/sustainable-development/humanCapital/part12';

export default function GRIReporting12() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <Section1 />
          <Section2 />

          <div className="text-black pt-8">
            <div className="bg-white rounded-lg p-6">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">
                Build partnerships
              </h1>
              <p className="text-sm mb-6">
                Recognising the power of strategic partnerships with
                organisations that share our values, we have observed how such
                alliances can amplify the impact of our community initiatives.
                Therefore, we are committed to seeking out and cultivating
                value-adding partnerships that align with our goals and
                objectives. These partnerships are tailored to the scope and
                scale of the projects we undertake, allowing us to leverage
                complementary strengths, resources, and expertise to achieve
                meaningful and sustainable outcomes for the communities we
                serve.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-amber-500 text-white">
                      <th className="border p-2 text-left">Project</th>
                      <th className="border p-2 text-left">Description</th>
                      <th className="border p-2 text-left">Achievement</th>
                      <th className="border p-2 text-left">
                        Employee volunteerism (hours)
                      </th>
                      <th className="border p-2 text-left">
                        Expenditure (Rs.)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 align-top">
                        Donating firewall to Lady Ridgeway Hospital
                      </td>
                      <td className="border p-2 align-top">
                        LBF donated a firewall to Lady Ridgeway Hospital on 10th
                        January 2024 in support of the hospital&apos;s
                        initiative to securely share its patients&apos; medical
                        details with other hospitals in a secure manner.
                        <br />
                        <br />
                        The mechanism would be crucial in transferring
                        patients&apos; details to better assist them during
                        emergencies and LB Finance is proud to be a part of this
                        initiative.
                      </td>
                      <td className="border p-2 align-top">
                        <ul className="list-disc list-inside">
                          <li>
                            Protect patients&apos; medical information from
                            unauthorised access
                          </li>
                          <li>
                            Secure sharing of patients&apos; medical information
                            between hospitals and treatments
                          </li>
                        </ul>
                      </td>
                      <td className="border p-2 align-top text-center">63</td>
                      <td className="border p-2 align-top text-center">
                        4,801,566
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Transformative CSR
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-amber-500 text-white">
                      <th className="border p-2 text-left">Project</th>
                      <th className="border p-2 text-left">Description</th>
                      <th className="border p-2 text-left">Achievement</th>
                      <th className="border p-2 text-left">
                        Employee volunteerism (hours)
                      </th>
                      <th className="border p-2 text-left">
                        Expenditure (Rs.)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 align-top">
                        Cyber security awareness
                      </td>
                      <td className="border p-2 align-top">
                        Conducted awareness campaigns on social media to enhance
                        the knowledge of cyber security tips on fraudulent
                        e-mails, cautious of the portable devices and sensitive
                        information
                      </td>
                      <td className="border p-2 align-top">
                        <ul className="list-disc list-inside">
                          <li>Awareness build on cyber security Problems</li>
                          <li>
                            Building discussion to protect from ransomware
                          </li>
                        </ul>
                      </td>
                      <td className="border p-2 align-top text-center">91</td>
                      <td className="border p-2 align-top text-center">-</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top">
                        LB career support
                      </td>
                      <td className="border p-2 align-top">
                        &apos;LB Career Fair&apos; series in partnership with
                        University of Kelanya to increase the participation in
                        career development
                      </td>
                      <td className="border p-2 align-top">
                        <ul className="list-disc list-inside">
                          <li>
                            Opportunity to explore a wide range of career
                            options provided by organisational for students to
                            connect with recruiters, hiring managers, and
                            professional
                          </li>
                          <li>
                            Interacting with industry professionals at career
                            fairs provides students with valuable insights into
                            current trends, challenges, and opportunities
                          </li>
                        </ul>
                      </td>
                      <td className="border p-2 align-top text-center">54</td>
                      <td className="border p-2 align-top text-center">-</td>
                    </tr>
                    <tr>
                      <td className="border p-2 align-top">
                        Digital literacy development and digital engagement
                      </td>
                      <td className="border p-2 align-top">
                        Building awareness of digital transactions and
                        encouraging customers to adopt digital transaction
                        habits through educational videos and sharing the
                        benefits of digital payments
                      </td>
                      <td className="border p-2 align-top">
                        <ul className="list-disc list-inside">
                          <li>
                            Educational videos provide a visual and interactive
                            way to explain the process and benefits of digital
                            transactions to customers
                          </li>
                          <li>
                            Digital transactions have a smaller environmental
                            footprint compared to paper-based transactions, as
                            they reduce the need for paper, ink, and other
                            resources
                          </li>
                        </ul>
                      </td>
                      <td className="border p-2 align-top text-center">74</td>
                      <td className="border p-2 align-top text-center">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
