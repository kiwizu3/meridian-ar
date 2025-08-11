'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function GreenBuildingPart2() {
  return (
    <div className="bg-themeGreen p-5 mb-10">
      <h1 className="text-4xl font-bold">GREEN BUILDING PRACTICES</h1>

      <div>
        <div className="bg-cardGreen p-4 rounded-lg mb-5">
          <h3 className="text-xl font-semibold mb-4">
            LBF Pioneers Sustainability with Green Branch in Chilaw
          </h3>
          <p>
            Demonstrating our commitment to environmental responsibility, we
            have planned a green branch in Chilaw, designed to meet GREENSL®
            rating system standards. Certified by the Green Building Council of
            Sri Lanka (GBCSL), this initiative integrates sustainable practices
            into our operations and sets a new benchmark for green construction
            in the financial services sector.
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-cardGreen p-4 rounded-lg mb-5">
            <h4 className="font-medium">Architectural Design</h4>
            <p>
              Maximising natural light with large windows and open spaces
              significantly reduces the need for artificial lighting. The
              energy-efficient layout and smart building technologies further
              optimise energy use and enhance customer convenience.
            </p>
          </div>
          <div className="bg-cardGreen p-4 rounded-lg mb-5">
            <h4 className="font-medium mt-4">Energy Efficiency</h4>
            <p>
              Integration of energy-efficient lighting, on-site solar power
              generation, and advanced HVAC systems, resulting in a significant
              reduction in energy consumption. Employing real-time energy
              monitoring systems to track performance and identify opportunities
              for further energy conservation.
            </p>
          </div>
          <div className="bg-cardGreen p-4 rounded-lg mb-5">
            <h4 className="font-medium mt-4">Material Usage</h4>
            <p>
              Utilising locally sourced, sustainable materials – such as
              recycled concrete, bamboo, and certified timber – reduces the
              carbon footprint. Energy-efficient glass minimises heat gain and
              cooling demands. Non-toxic paints ensure healthier indoor air
              quality. Durable materials, designed for longevity and reduced
              maintenance, support circular economic principles.
            </p>
          </div>
          <div className="bg-cardGreen p-4 rounded-lg mb-5">
            <h4 className="font-medium mt-4">Waste Management</h4>
            <p>
              Implementing zero-waste construction practices and segregating
              waste disposal systems for operations, promoting a circular
              economy.
            </p>
          </div>
          <div className="bg-cardGreen p-4 rounded-lg mb-5">
            <h4 className="font-medium mt-4">Water Conservation</h4>
            <p>
              Installation of rainwater harvesting systems and water-efficient
              fixtures to minimise water usage.
            </p>
          </div>
          <div className="bg-cardGreen p-4 rounded-lg mb-5">
            <h4 className="font-medium">Environmental Impact</h4>
            <p>The Chilaw green branch is projected to achieve:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                20% - 40% reduction in energy consumption compared to
                conventional buildings
              </li>
              <li>
                10,000 - 20,000 litres of annual water conservation through
                innovative water management systems
              </li>
              <li>
                25% - 50% reduction in its carbon footprint through renewable
                energy integration
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-around gap-8 mt-6 ">
          <div>
            <h4>Economic Benefits</h4>
            <p>
              The Chilaw green branch will generate longterm cost savings
              through reduced energy and water consumption. This investment in
              sustainable infrastructure also enhances the building’s value and
              positions LBF as a leader in sustainable finance.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Future Plans</h4>
            <p>
              The Chilaw green branch marks the first step in our strategy to
              integrate green building principles across all LBF branches.
              Scaling this initiative will reduce our environmental footprint
              and cultivate a culture of sustainability within the organisation
              and the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
