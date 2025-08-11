import Image from 'next/image';

export default function GoodHealthWellbeingPart2() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="overflow-x-auto mb-12 bg-[#4DA28C] p-6">
        <h2 className="text-2xl font-semibold mb-6 text-black">
          Community Well-being Initiatives
        </h2>
        <table className="min-w-full bg-[#3C8D79] border border-gray-200">
          <thead className="bg-[#3C8D79]">
            <tr>
              <th className="px-4 py-2 border">Project</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Beneficiaries</th>
              <th className="px-4 py-2 border">Investment (Rs.)</th>
              <th className="px-4 py-2 border">Employee volunteer hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">
                Donation to HelpAge Eye Hospital
              </td>
              <td className="px-4 py-2 border">
                Supported eye patients through donations to HelpAge Eye
                Hospital.
              </td>
              <td className="px-4 py-2 border">10</td>
              <td className="px-4 py-2 border">200,000</td>
              <td className="px-4 py-2 border">6</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">
                Donation to Little Heart Foundation
              </td>
              <td className="px-4 py-2 border">
                Supported children with heart diseases through donations to the
                "Little Hearts Foundation" at Lady Ridgeway Hospital for
                Children.
              </td>
              <td className="px-4 py-2 border">3 children</td>
              <td className="px-4 py-2 border">1,350,000</td>
              <td className="px-4 py-2 border">8</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Water Purification Project</td>
              <td className="px-4 py-2 border">
                In collaboration with the NIDA Foundation, provided purified
                drinking water to students at Sunanda Maha Vidyalaya, Padeniya.
              </td>
              <td className="px-4 py-2 border">400 students</td>
              <td className="px-4 py-2 border">1,600,000</td>
              <td className="px-4 py-2 border">92</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Shina - Discards to Dreams</td>
              <td className="px-4 py-2 border">
                Promoting responsible waste collection and recycling across LBF,
                with proceeds funding education of children facing financial
                hardship.
              </td>
              <td className="px-4 py-2 border">Many</td>
              <td className="px-4 py-2 border">155,000</td>
              <td className="px-4 py-2 border">576</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Promoting purposeful living</td>
              <td className="px-4 py-2 border">
                Launched the LB "Saara Sitthham" video initiative using Buddhist
                philosophy to encourage reflection on life.
              </td>
              <td className="px-4 py-2 border">Many</td>
              <td className="px-4 py-2 border">350,000</td>
              <td className="px-4 py-2 border">16</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">
                Community Awareness Programmes
              </td>
              <td className="px-4 py-2 border">
                Conducted awareness campaigns for international days via social
                media platforms.
              </td>
              <td className="px-4 py-2 border">Many</td>
              <td className="px-4 py-2 border">-</td>
              <td className="px-4 py-2 border">112</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto bg-[#4DA28C] p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Employee Well-being Initiatives
        </h2>

        <table className="min-w-full bg-[#3C8D79] border border-gray-200">
          <thead className="bg-[#3C8D79]">
            <tr>
              <th className="px-4 py-2 border">Project</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Beneficiaries</th>
              <th className="px-4 py-2 border">Investment (Rs.)</th>
              <th className="px-4 py-2 border">Time spent (Hours)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Smile Programme</td>
              <td className="px-4 py-2 border">
                Employee well-being initiative offering free professional
                counselling services in a confidential environment.
              </td>
              <td className="px-4 py-2 border">3</td>
              <td className="px-4 py-2 border">18,600</td>
              <td className="px-4 py-2 border">8</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">
                Free Health and Vision Clinic
              </td>
              <td className="px-4 py-2 border">
                Provided employees with access to comprehensive eye check-ups
                and necessary treatments.
              </td>
              <td className="px-4 py-2 border">50</td>
              <td className="px-4 py-2 border">-</td>
              <td className="px-4 py-2 border">40</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">
                Weekly Cross Fit and Boot Camp Sessions
              </td>
              <td className="px-4 py-2 border">
                Introduced weekly yoga sessions, boot camps, and regional
                fitness programmes to enhance physical and mental wellbeing.
              </td>
              <td className="px-4 py-2 border">15</td>
              <td className="px-4 py-2 border">350,000</td>
              <td className="px-4 py-2 border">35</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
