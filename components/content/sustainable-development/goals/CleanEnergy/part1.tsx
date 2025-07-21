'use client';

import {
  Card,
  CardBody,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';

export default function CleanEnergyPart1() {
  return (
    <div className="bg-themeGreen max-w-4xl mx-auto py-8 px-4 my-5">
      <h1 className="text-4xl font-bold my-3">
        LBF's Ongoing Actions on Energy Management
      </h1>

      <Card>
        <CardBody className="bg-cardGreen p-4 ">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-4">Reduce Consumption</h3>
            <h4 className="font-medium">Actions Taken</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Employing high-tech, energy-efficient equipment across all
                operations
              </li>
              <li>
                Installing solar water heating systems to reduce electricity
                consumption
              </li>
              <li>
                Utilising energy-efficient lighting for all signage and interior
                spaces
              </li>
              <li>
                Optimising HVAC (Heating, Ventilation, and Air Conditioning)
                systems using proven energy reduction methodologies
              </li>
              <li>
                Implementing electronic data collection and analysis tools to
                track energy consumption and identify areas for improvement
              </li>
              <li>
                Conducting energy audits and periodic assessments to ensure
                continuous improvement
              </li>
              <li>Maximising the use of natural light in all facilities</li>
              <li>
                Promoting green building concepts in new construction and
                renovations
              </li>
              <li>
                Transitioning branch operations to solar energy where feasible
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-4">Awareness</h3>
            <h4 className="font-medium">Actions Taken</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Promoting energy-saving tips through engaging displays</li>
              <li>
                Launching e-mail and social media campaigns to highlight the
                benefits of energy conservation
              </li>
              <li>
                Conducting energy audits and periodic assessments to ensure
                continuous improvement
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-4">
              Employee engagement policies and procedures
            </h3>
            <h4 className="font-medium">Actions Taken</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Implementing energy reduction methods in the office and
                encouraging their adoption at home
              </li>
              <li>
                Securing employee commitment to our Sustainability Pledge and
                Energy Policy
              </li>
              <li>
                Regulating equipment operating times to minimise energy
                consumption
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-4">Refuse</h3>
            <h4 className="font-medium">Actions Taken</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Avoiding unnecessary power usage</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">Energy Audit</h3>
              <p>
                To better understand our energy footprint, we partnered with U
                Tech Company this year to conduct a thorough energy audit
                encompassing energy consumption, power quality, and
                environmental conditions within our building. The audit
                identified our chiller system as the primary energy consumer,
                followed by lighting, office operations, and kitchen activities.
                Notably, temperature and humidity levels exceeded optimal ranges
                on weekends when the chiller system was inactive. We are now
                implementing U Tech's recommended strategies, targeting a 10%
                reduction in energy consumption to achieve a more sustainable
                and energy-efficient operation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Our Renewable Energy Imperative
              </h3>
              <p>
                As part of our commitment to sustainability and reducing our
                carbon footprint, our solar powered branches programme remains a
                key initiative in our journey towards achieving net-zero carbon
                operations. We have invested in rooftop solar panel
                installations across our branches, demonstrating our commitment
                to renewable energy integration. This year, we equipped 14
                additional branches with solar PV systems, bringing the total to
                40 branches now operating with rooftop solar technology.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              Province-Wise Renewable Energy Generation
            </h3>
            <Table aria-label="Province-wise renewable energy generation">
              <TableHeader>
                <TableColumn>PROVINCE</TableColumn>
                <TableColumn>No. of branches with rooftop solar</TableColumn>
                <TableColumn>Total energy generation (kVA)</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Western Province</TableCell>
                  <TableCell>13</TableCell>
                  <TableCell>58.1</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Central Province</TableCell>
                  <TableCell>03</TableCell>
                  <TableCell>13.4</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Northern Province</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>34.8</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Eastern Province</TableCell>
                  <TableCell>07</TableCell>
                  <TableCell>26.6</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>North Central Province</TableCell>
                  <TableCell>01</TableCell>
                  <TableCell>03</TableCell>
                </TableRow>
                <TableRow key="6">
                  <TableCell>Uva Province</TableCell>
                  <TableCell>02</TableCell>
                  <TableCell>7.2</TableCell>
                </TableRow>
                <TableRow key="7">
                  <TableCell>Southern Province</TableCell>
                  <TableCell>04</TableCell>
                  <TableCell>19.6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
