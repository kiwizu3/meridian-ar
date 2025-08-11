'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Chart configurations
const customerChart = {
  series: [
    {
      name: 'Customers',
      data: [25000, 30000, 35000],
    },
  ],
  options: {
    chart: { type: 'bar' as const },
    xaxis: { categories: ['2022', '2023', '2024'] },
    title: { text: 'No. of Customers' },
    colors: ['#0A3D5F'],
  },
};

const regionChart = {
  series: [
    {
      name: '2023',
      data: [18000, 8000, 3000],
    },
    {
      name: '2024',
      data: [19000, 9000, 4000],
    },
  ],
  options: {
    chart: { type: 'bar' as const },
    xaxis: { categories: ['Bago', 'Magway', 'Ayeyarwady'] },
    title: { text: 'Region-wise Customers' },
    colors: ['#4CAF50', '#2196F3'],
  },
};

const genderChart = {
  series: [46, 54],
  options: {
    chart: { type: 'donut' as const },
    labels: ['Male', 'Female'],
    title: { text: 'Employee Based on Gender' },
    colors: ['#0A3D5F', '#4CAF50'],
  },
};

const grantingChart = {
  series: [58, 24, 11, 7],
  options: {
    chart: { type: 'donut' as const },
    labels: ['Agriculture', 'Livestock', 'Services', 'Trading'],
    title: { text: 'Total Granting Sector-wise' },
    colors: ['#0A3D5F', '#4CAF50', '#FFC107', '#FF5722'],
  },
};

const womenGrantingChart = {
  series: [
    {
      name: 'Granting to Women',
      data: [850, 50, 30, 80],
    },
  ],
  options: {
    chart: { type: 'bar' as const },
    xaxis: { categories: ['Agriculture', 'Livestock', 'Services', 'Trading'] },
    title: { text: 'Total Granting to Women (Rs. Mn)' },
    colors: ['#0A3D5F'],
  },
};

const employeeGenderChart = {
  series: [
    {
      name: '2023',
      data: [60, 80],
    },
    {
      name: '2024',
      data: [45, 70],
    },
  ],
  options: {
    chart: { type: 'bar' as const },
    xaxis: { categories: ['Male', 'Female'] },
    title: { text: 'Employees Based on Gender' },
    colors: ['#4CAF50', '#0A3D5F'],
  },
};

export default function BusinessOperationInMyanmar() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-4 h-[654px] overflow-auto flex flex-col gap-6 custom-scrollbar">
      {/* Company Information */}
      <h2 className="text-2xl font-bold text-[#ff9057]">
        LB Microfinance Myanmar
      </h2>
      <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
        <p>
          LBMM, a wholly owned subsidiary of LB Finance PLC, launched in 2017
          with a mission to champion financial inclusion in Myanmar. By
          providing accessible and impactful microfinance solutions, LBMM
          empowers individuals and communities, paving the way for greater
          economic opportunity and prosperity.
        </p>
      </div>

      {/* Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-[#0A3D5F] p-4 rounded-b-lg">
          <h2 className="font-bold text-lg mb-2">VISION</h2>
          <p>
            To contribute to the development of sustainable and socially
            significant enterprises that improve the lives of the entire nation.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white text-[#0A3D5F] p-4 rounded-b-lg">
          <h2 className="font-bold text-lg mb-2">MISSION</h2>
          <p>
            The mission of LB Microfinance Myanmar is to bridge the gap between
            ambition and achievement of the low-income individuals of Myanmar by
            providing financial assistance to creative entrepreneurs,
            value-demanding consumers, and innovative businessmen; thereby
            creating a robust microfinance model leading to the creation of
            businesses and markets, which mutually benefit LB Microfinance
            Myanmar and the poor communities of Myanmar.
          </p>
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="font-bold text-lg mb-2">VALUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
          <div className="bg-[#00456b] p-2 rounded text-center">Excellence</div>
          <div className="bg-[#d4a262] p-2 rounded text-center">
            Transparency
          </div>
          <div className="bg-[#466fb4] p-2 rounded text-center">Ethics</div>
          <div className="bg-[#ff8e51] p-2 rounded text-center">Respect</div>
          <div className="bg-[#a04b85] p-2 rounded text-center">
            Professionalism
          </div>
          <div className="bg-teal-500 p-2 rounded text-center">Quality</div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-purple-100 text-[#0A3D5F] p-4 rounded-lg text-center">
          <h3 className="font-bold text-2xl">22%</h3>
          <p>INCREASE IN CUSTOMER BASE</p>
        </div>
        <div className="bg-yellow-100 text-[#0A3D5F] p-4 rounded-lg text-center">
          <h3 className="font-bold text-2xl">54%</h3>
          <p>FEMALE EMPLOYEES</p>
        </div>
        <div className="bg-purple-100 text-[#0A3D5F] p-4 rounded-lg text-center">
          <h3 className="font-bold text-2xl">91%</h3>
          <p>OF THE GRANTING FOR WOMEN EMPOWERMENT</p>
        </div>
      </div>

      {/* Business Focus */}
      <div className="bg-white text-[#0A3D5F] p-4 rounded-lg mt-4">
        <h2 className="font-bold text-lg mb-2">BUSINESS FOCUS</h2>
        <p>
          True to its mission, LBMM&#39;s microfinance model is deeply rooted in
          empowering rural areas of Myanmar. By providing small-scale farmers
          with vital financial assistance and tailored business development
          guidance, LBMM empowers them to build sustainable livelihoods, enhance
          their living standards, and improve their overall quality of life.
          This commitment is bolstered by substantial ongoing investments in
          infrastructure, technology, and human resources, enabling LBMM to
          strategically expand its reach and impact within this crucial market.
        </p>
      </div>

      {/* Product Portfolio */}
      <div className="bg-white text-[#0A3D5F] p-4 rounded-lg mt-4">
        <h2 className="font-bold text-lg mb-2">PRODUCT PORTFOLIO</h2>
        <p>
          LBMM caters to a diverse clientele with a comprehensive suite of
          financial products tailored to their unique needs. Starting with the
          Microfinance Group Loan, which empowers micro-entrepreneurs through
          collective borrowing, LBMM has expanded its offerings to include the
          Group Business Loan for joint ventures, the Business Loan for
          registered enterprises seeking higher credit lines, and the Employee
          Loan designed to provide financial flexibility for salaried
          individuals. This commitment to innovation and customer-centricity
          ensures that individuals and businesses across Myanmar have access to
          the financial tools they need to prosper.
        </p>
        <div className='flex flex-col items-center'>
        <img
            src="/images/charts/businessReview/myanmarMap.png"
            alt="ownership image"
            className="w-full md:w-1/2 mb-4 rounded-lg"
          />
        </div>
      </div>

      {/* Regional Footprint */}
      <div className="bg-white text-[#0A3D5F] p-4 rounded-lg mt-4">
        <h2 className="font-bold text-lg mb-2">
          REGIONAL FOOTPRINT, CUSTOMERS AND EMPLOYEES
        </h2>
        <p>
          Two new branches were opened in Magway and Ayeyarwady in 2023/24
          increasing the total branches to 16. The number of customers swelled
          by 22% to 30,897, whilst a majority of 54% of the employees were
          women.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-black">
            No. of Customers
          </h4>
          {/* <Chart
            options={customerChart.options}
            series={customerChart.series}
            type="bar"
            height={300}
          /> */}
          <img
            src="/images/charts/businessReview/siCustomers.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-black">
            Region-wise Customers
          </h4>
          {/* <Chart
            options={regionChart.options}
            series={regionChart.series}
            type="bar"
            height={300}
          /> */}
          <img
            src="/images/charts/businessReview/siRegionCustomers.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-black">
            Employee Based on Gender
          </h4>
          {/* <Chart
            options={genderChart.options}
            series={genderChart.series}
            type="donut"
            height={300}
          /> */}
          <img
            src="/images/charts/businessReview/siEmployeeGender.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-black">
            Total Granting Sector-wise
          </h4>
          {/* <Chart
            options={grantingChart.options}
            series={grantingChart.series}
            type="donut"
            height={300}
          /> */}
          <img
            src="/images/charts/businessReview/siSectorWise.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-black">
            Total Granting to Women
          </h4>
          {/* <Chart
            options={womenGrantingChart.options}
            series={womenGrantingChart.series}
            type="bar"
            height={300}
          /> */}
          <img
            src="/images/charts/businessReview/siTotalWomen.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-black">
            Employees Based on Gender
          </h4>
          {/* <Chart
            options={employeeGenderChart.options}
            series={employeeGenderChart.series}
            type="bar"
            height={300}
          /> */}
          <img
            src="/images/charts/businessReview/siBasedGender.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
      </div>

      {/* Outlook section */}
      <div className=" bg-white text-[#0A3D5F] p-4 rounded-lg">
        <h2 className="font-bold text-lg mb-2">Outlook</h2>
        <p>
          We are dedicated to fostering financial inclusion and economic
          empowerment. LBMM plays a crucial role in achieving this mission by
          providing essential financial services to underserved communities in
          Myanmar.
        </p>
        <p className=" mt-2">
          By aligning LBMM’s growth strategies with our overarching mission and
          leveraging our expertise, we are confident in our ability to make a
          significant impact in Myanmar. LBMM will continue to empower
          individuals and communities, driving sustainable development and
          improving the quality of life for our clients.
        </p>
        <p className=" mt-2">
          As we move forward, we remain committed to the endeavours of LBMM,
          ensuring that it remains a beacon of financial inclusion and economic
          empowerment in Myanmar.
        </p>
      </div>
    </div>
  );
}
