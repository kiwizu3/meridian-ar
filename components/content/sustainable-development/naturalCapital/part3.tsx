'use client';

export default function NaturalCapitalPart3() {
  return (
    <div>
      <div className="bg-white text-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#97c93c]">
            CAPITAL TRADE-OFF
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-600">
              Managing our carbon footprint
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {['FC', 'HC', 'MC', 'NC'].map((capital, index) => (
                <div
                  key={capital}
                  className={`p-4 rounded-lg ${
                    [
                      'bg-[#d1e0f2]',
                      'bg-purple-100',
                      'bg-gray-200',
                      'bg-yellow-100',
                    ][index]
                  }`}
                >
                  <h3 className="font-bold mb-2">{capital}</h3>
                  <p className="text-sm">
                    {capital === 'FC' &&
                      'Investment in energy-efficient equipment'}
                    {capital === 'HC' &&
                      'Nurtures an environmentally conscious workforce through training and awareness creation'}
                    {capital === 'MC' &&
                      'Adopts green concepts in branches including maximising natural light'}
                    {capital === 'NC' &&
                      'Maintains a sustainable value chain through supplier screening and promoting green lending'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#97c93c]">
              Expanding green initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {['FC', 'IC', 'SC', 'HC'].map((capital, index) => (
                <div
                  key={capital}
                  className={`p-4 rounded-lg ${
                    [
                      'bg-[#d1e0f2]',
                      'bg-[#fbdde9]',
                      'bg-yellow-100',
                      'bg-purple-100',
                    ][index]
                  }`}
                >
                  <h3 className="font-bold mb-2">{capital}</h3>
                  <p className="text-sm">
                    {capital === 'FC' && 'Expands green financing and lending'}
                    {capital === 'IC' &&
                      'Automation and digitisation contribute to a paperless office and efficiency improvement'}
                    {capital === 'SC' &&
                      'Conducts tree-planting projects in collaboration with the community'}
                    {capital === 'HC' &&
                      'Employee volunteering to engage in environmental conservation initiatives'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#f68d46]">
              DRIVING BEHAVIOURAL CHANGE THROUGH ENGAGEMENT
            </h2>
            <p className="mb-4">
              Our approach to safeguarding natural capital is based on
              understanding stakeholder needs and taking action in areas where
              we can positively impact long-term sustainability and effective
              environmental stewardship. By incorporating ESG into our
              stakeholder engagement, we are able to create awareness and
              influence better practices.
            </p>
            <div className="flex justify-around items-center bg-green-100 p-4 rounded-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-xl mb-2">
                  1
                </div>
                <p>Understand impact</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-xl mb-2">
                  2
                </div>
                <p>Awareness and response</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-xl mb-2">
                  3
                </div>
                <p>Influence behaviour</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#97c93c]">
              RESOURCE MANAGEMENT - UNDERSTANDING OUR IMPACTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">INPUT MANAGEMENT</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#d1e0f2] p-4 rounded-lg">
                    <h4 className="font-semibold">Water Footprint</h4>
                    <p className="text-sm">
                      Established contingency plans to mitigate and improve
                      efficiency of water consumption across our business
                    </p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <h4 className="font-semibold">Energy Footprint</h4>
                    <p className="text-sm">
                      Our energy consumption matrix helps to streamline energy
                      consumption in day-to-day activities
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">OUTPUT MANAGEMENT</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold">Emission Footprint</h4>
                    <p className="text-sm">
                      Continuous and ongoing monitoring of our carbon footprint
                      helps to maintain control over GHG emissions and emissions
                      related materials
                    </p>
                  </div>
                  <div className="bg-[#fbdde9] p-4 rounded-lg">
                    <h4 className="font-semibold">Waste Footprint</h4>
                    <p className="text-sm">
                      Ongoing effort to control waste through the promotion of
                      4R principles (Reduce, Reuse, Refuse and Recycle)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#f68d46]">
              ENVIRONMENTAL GOVERNANCE
            </h2>
            <p className="mb-4">
              The sustainability team plays a vital role in overseeing effective
              management of the EMS (Environmental Management System). This
              encompasses monitoring the adequacy of the EMS in relation to the
              evolving regulatory requirements.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">
                Environmental Management System (EMS)
              </h3>
              <p>
                Our EMS is the foundation of our commitment to the Environment.
                All our employees are encouraged to uphold the Environmental
                Pledge, which reflects our core values and guiding principles.
                The EMS is dynamic, evolving to address emerging environmental
                challenges while ensuring compliance with regulations. Our focus
                on addressing key environmental issues demonstrates our
                commitment to responsible stewardship and driving positive
                change. Through the EMS, we have achieved specific achievements,
                including management in carbon emissions and the implementation
                of a successful recycling programme. Through these efforts, we
                cultivate eco-friendly individuals, adopt sustainable green
                practices, and contribute to the conservation of our planet for
                future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
