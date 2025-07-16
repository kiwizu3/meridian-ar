'use client';

import { Card, CardBody, Image } from '@nextui-org/react';

export default function GreenBuildingPart2() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">7 GREEN BUILDING PRACTICES</h2>

      <Card>
        <CardBody>
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

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Architectural Design</h4>
              <p>
                Maximising natural light with large windows and open spaces
                significantly reduces the need for artificial lighting. The
                energy-efficient layout and smart building technologies further
                optimise energy use and enhance customer convenience.
              </p>

              <h4 className="font-medium mt-4">Energy Efficiency</h4>
              <p>
                Integration of energy-efficient lighting, on-site solar power
                generation, and advanced HVAC systems, resulting in a
                significant reduction in energy consumption. Employing real-time
                energy monitoring systems to track performance and identify
                opportunities for further energy conservation.
              </p>

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
            <div>
              <Image
                src="/placeholder-green-building.jpg"
                alt="Green Building"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
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

          <div className="mt-6">
            <h4 className="font-medium">Future Plans</h4>
            <p>
              The Chilaw green branch marks the first step in our strategy to
              integrate green building principles across all LBF branches.
              Scaling this initiative will reduce our environmental footprint
              and cultivate a culture of sustainability within the organisation
              and the communities we serve.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
