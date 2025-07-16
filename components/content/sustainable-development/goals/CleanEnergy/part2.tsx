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

export default function CleanEnergyPart2() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Responsible Products and Services</h2>

      <Card>
        <CardBody className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">8.1 Green Leasing</h3>
            <p>
              Our green lending scheme offers preferential terms for leasing
              hybrid and electric vehicles, which significantly reduce carbon
              emissions compared to traditional gasoline or diesel vehicles.
            </p>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <Table aria-label="Green financing facilities">
                <TableHeader>
                  <TableColumn>YEAR</TableColumn>
                  <TableColumn>No. of Green Financing Facilities</TableColumn>
                  <TableColumn>Amount Granted (Rs. Mn)</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>2024/25</TableCell>
                    <TableCell>2,716</TableCell>
                    <TableCell>7,351</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>2023/24</TableCell>
                    <TableCell>1,597</TableCell>
                    <TableCell>5,056</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>2022/23</TableCell>
                    <TableCell>855</TableCell>
                    <TableCell>2,411</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>2021/22</TableCell>
                    <TableCell>1,457</TableCell>
                    <TableCell>4,135</TableCell>
                  </TableRow>
                  <TableRow key="5">
                    <TableCell>2020/21</TableCell>
                    <TableCell>2,293</TableCell>
                    <TableCell>4,293</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div>
                <Image
                  src="/placeholder-electric-vehicles.jpg"
                  alt="Electric Vehicles"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <p className="mt-2 text-center font-medium">
                  DRIVE CLEAN, SAVE GREEN WITH LB FINANCE ELECTRIC VEHICLE
                  LEASING
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              8.2 Solar Loan Scheme
            </h3>
            <p>
              The Solar Loan Scheme offers flexible financing with competitive
              interest rates and customisable repayment terms. It caters to
              homeowners, small businesses, and enterprises, providing quick
              approval through streamlined digital processes. Financing covers
              solar panels, inverters, batteries, and maintenance costs, making
              solar adoption accessible and hassle-free.
            </p>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <Table aria-label="Solar financing facilities">
                <TableHeader>
                  <TableColumn>YEAR</TableColumn>
                  <TableColumn>No. of Solar Financing Facilities</TableColumn>
                  <TableColumn>Amount Granted (Rs. Mn)</TableColumn>
                  <TableColumn>kW Generated</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>2024/25</TableCell>
                    <TableCell>13</TableCell>
                    <TableCell>25.5</TableCell>
                    <TableCell>180</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Image
                src="/placeholder-solar-loan.jpg"
                alt="Solar Loan Scheme"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              8.3 Green Loans through Digital Lending
            </h3>
            <p>
              We streamline green loan applications through advanced digital
              platforms. Customers enjoy online applications, real-time progress
              tracking via digital dashboards, and paperless documentation,
              ensuring a seamless and sustainable lending experience.
            </p>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <Table aria-label="GM loans disbursed">
                <TableHeader>
                  <TableColumn>YEAR</TableColumn>
                  <TableColumn>No. of GM Loans Disbursed</TableColumn>
                  <TableColumn>Amount Granted (Rs. Mn)</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>2024/25</TableCell>
                    <TableCell>4,056</TableCell>
                    <TableCell>533.77</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Image
                src="/placeholder-digital-lending.jpg"
                alt="Digital Lending"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
