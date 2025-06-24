'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SocialRelationshipCapitalPart2() {
  const chartOptions = {
    chart: {
      type: 'bar' as const,
      height: 350,
    },
    colors: ['#4CAF50', '#2196F3'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: 'Hours',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} hours`,
      },
    },
  };

  const series = [
    {
      name: 'Staff Volunteer Hours',
      data: [5000, 7500, 15000, 18000, 10000],
    },
  ];
  return (
    <div>
      <div className="bg-white text-black p-4">
        <h2 className="text-xl font-bold mb-4">
          SOCIAL AND RELATIONSHIP CAPITAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="col-span-2 bg-[#F0B6B6] p-4 rounded-lg">
            <p className="font-bold mb-2">
              Our social and relationship capital involves the relationship we
              have created and nurtured with our stakeholders as well as the
              interrelationship between them that enabled greater value creation
              for all
            </p>
          </div>
          <div className="bg-[#C9A86B] p-4 rounded-lg">
            <h3 className="font-bold mb-2">CONTRIBUTING TO OUR MISSION</h3>
            <p className="text-sm">
              To offer a caring and personalised service that will form the
              foundation for developing lasting partnerships with our
              stakeholders
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <h3 className="font-bold mb-2">MANAGEMENT APPROACH</h3>
            <p className="text-sm">
              We continued to forge strong relationships with our customers,
              suppliers, and communities to nurture our social and relationship
              (S&R) capital. The strength of our strategic relationships remains
              fundamental to maintaining our leadership in the industry.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#FF6B6B] mb-2">
              COMPONENTS OF SOCIAL AND RELATIONSHIP CAPITAL
            </h3>
            <div className="flex items-center mb-2">
              <p>CUSTOMER CAPITAL</p>
            </div>
            <div className="flex items-center mb-2">
              <p>BUSINESS PARTNER CAPITAL</p>
            </div>
            <div className="flex items-center mb-2">
              <p>COMMUNITY CAPITAL</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">CONTRIBUTION TO OUR VALUES</h3>
            <div>
              <p className="mb-2">Transparency</p>
              <p className="tmb-2">Innovation</p>
              <p className="mb-2">Quality</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-2">
            NURTURING SOCIAL AND RELATIONSHIP CAPITAL
          </h3>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Leveraging digital platforms to enhance customer convenience
            </li>
            <li>Customer relationship management</li>
            <li>Responsible customer communications</li>
            <li>Supply chain management</li>
            <li>Community development</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="col-span-2">
            <h3 className="font-bold mb-2">MATERIAL MATTERS</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Customer Satisfaction</li>
              <li>Online customer support</li>
              <li>Technological advancement</li>
              <li>Social license to operate</li>
              <li>Regional expansion</li>
              <li>Business continuity</li>
              <li>Business model innovation</li>
            </ul>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-2">PROGRESS IN PRIORITIES FY 2023/24</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-bold">Short-term</h4>
              <p>
                Analyse our customer profiles and identify the cross-selling
                capabilities
              </p>
            </div>
            <div>
              <h4 className="font-bold">Medium-term</h4>
              <p>
                Partnerships with educational organizations to support financing
                and community development of underserved segments
              </p>
            </div>
            <div>
              <h4 className="font-bold">Long-term</h4>
              <p>Empowering entrepreneurs</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-2">COMMITMENTS TO UN SDGs</h3>
          <Image
            src="/images/sustainability/health-commitments-img-set.PNG"
            width={250}
            height={100}
            alt="health-commitments"
            style={{ width: '250px' }}
          />
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-2">Staff Volunteer Hours</h3>
          <Chart
            options={chartOptions}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
