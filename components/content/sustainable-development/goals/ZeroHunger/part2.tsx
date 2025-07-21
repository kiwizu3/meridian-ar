'use client';

export default function ZeroHungerPart2() {
  return (
    <div>
      <div className="bg-themeGreen text-black p-8">
        <div className="w-full">
          <div className="bg-cardGreen rounded-lg p-6 mb-8">
            <div className="flex items-center mb-8">
              <h1 className="text-4xl font-bold text-white">
                CULTIVATING SOCIAL AND RELATIONSHIP CAPITAL
              </h1>
            </div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Education for development
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-[#4DA28C]">
                <thead>
                  <tr>
                    <th className="p-3 text-left">Project</th>
                    <th className="p-3 text-left">Description</th>
                    <th className="p-3 text-left">Beneficiaries</th>
                    <th className="p-3 text-left">Investment (Rs.)</th>
                    <th className="p-3 text-left">Time Spent (Hours)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#4DA28C]">
                    <td className="p-3">Tutoring Fee for Blind School</td>
                    <td className="p-3">
                      Launched an initiative in partnership with the Blind
                      School in Ratmalana, providing financial assistance for
                      English language and computer literacy education to
                      visually impaired students, empowering them with essential
                      skills.
                    </td>
                    <td className="p-3">53 students</td>
                    <td className="p-3">110,000</td>
                    <td className="p-3">10</td>
                  </tr>
                  <tr className="border-b border-[#4DA28C]">
                    <td className="p-3">World Children's Day Celebration</td>
                    <td className="p-3">
                      Celebrated World Children’s Day by organising the ‘LB
                      Thirasara Daruwo’ initiative, featuring various
                      competitions (e.g., creative writing, innovative
                      solutions, upcycling crafts, speech, photography, digital
                      art) to inspire creativity and environmental awareness
                      among children
                    </td>
                    <td className="p-3">112 school children</td>
                    <td className="p-3">1,200,000</td>
                    <td className="p-3">264</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-cardGreen rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">BUILD PARTNERSHIPS</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-[#4DA28C]">
                <thead>
                  <tr className="">
                    <th className="p-3 text-left">Project</th>
                    <th className="p-3 text-left">Description</th>
                    <th className="p-3 text-left">Beneficiaries</th>
                    <th className="p-3 text-left">Investment (Rs.)</th>
                    <th className="p-3 text-left">Time Spent (Hours)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#4DA28C]">
                    <td className="p-3">SME Workshop</td>
                    <td className="p-3">
                      In collaboration with NEDA, LBF conducted SME workshops in
                      Monaragala, Ratnapura, and Badulla. This initiative
                      directly addressed the critical need for digital literacy
                      and online financial solution adoption among regional
                      small and medium enterprises. By equipping participants
                      with the knowledge to effectively use the LB GIM app for
                      business transactions, the workshops empower SMEs,
                      supporting their growth, efficiency, and integration into
                      the digital economy. This aligns with national development
                      goals and strengthens relationships with a key customer
                      segment.
                    </td>
                    <td className="p-3">162</td>
                    <td className="p-3">-</td>
                    <td className="p-3">32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#3C8D79] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">TRANSFORMATIVE CSR</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#4DA28C]">
                    <th className="p-3 text-left">Project</th>
                    <th className="p-3 text-left">Description</th>
                    <th className="p-3 text-left">Beneficiaries</th>
                    <th className="p-3 text-left">Investment (Rs.)</th>
                    <th className="p-3 text-left">Time Spent (Hours)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#4DA28C]">
                    <td className="p-3">Cyber security awareness</td>
                    <td className="p-3">
                      In the digital age, customers are increasingly exposed to
                      cyber threats, including phishing emails, malware on
                      devices, and attempts to steal sensitive personal and
                      financial information. By providing actionable tips
                      through accessible platforms such as social media, we
                      directly empower customers to protect themselves. This
                      proactive measure helps reduce the likelihood of customers
                      falling victim to fraud or data breaches, safeguarding
                      their financial assets and personal data.
                      <p className="mt-2">
                        Accordingly, we conducted social media awareness
                        campaigns providing cybersecurity tips on identifying
                        fraudulent emails, securing portable devices, and
                        protecting sensitive information.
                      </p>
                    </td>
                    <td className="p-3">Many</td>
                    <td className="p-3">-</td>
                    <td className="p-3">5,393</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#3C8D79] rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">FOSTERING CULTURE</h2>
            <p>
              We develop video contents focused on sharing positive perspectives
              and insights throughout society, thereby helping to build a
              positive culture. Though not always directly tied to our
              commercial objectives, these videos deliver meaningful messages
              that encourage deeper thought.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
