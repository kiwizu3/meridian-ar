'use client';

import Image from 'next/image';

export default function NoPovertyPart3() {
  return (
    <div>
      <div className="bg-[#5d8de8] text-black p-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#7ba1eb] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">2 JOB CREATION</h2>
              <h3 className="text-xl font-semibold mb-2">
                From Employment to Empowerment
              </h3>
              <p>
                We empower entrepreneurs to build businesses and create jobs.
                Our commitment to economic growth extends far beyond our own
                Company, impacting communities across Sri Lanka.
              </p>
              <div className="relative h-48 mt-4">
                <Image
                  src="/placeholder-job-chart.jpg"
                  alt="Job Creation Chart"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="bg-[#7ba1eb] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                4 EMPOWERING WOMEN
              </h2>
              <p>
                Financial independence is a key driver of social progress, and
                we are leading the charge in empowering women entrepreneurs and
                professionals. Our targeted programmes provide customised
                financial support, mentorship, and networking opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                <div>
                  <h3 className="text-xl font-bold">Rs. 84 Bn</h3>
                  <p>Gold Loans to women entrepreneurs</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">2,090</h3>
                  <p>Representational workforce</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Rs. 374 Mn</h3>
                  <p>Business/Personal Loans</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">10,289</h3>
                  <p>Vehicle financing facilities</p>
                </div>
              </div>
            </div>

            <div className="bg-[#7ba1eb] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                3 ECONOMIC VALUE CREATION
              </h2>
              <p>
                At LBF, we measure success by more than profit. We measure it by
                the real economic value we create through Economic Value Added
                (EVA) and Market Value Added (MVA).
              </p>
              <div className="relative h-48 mt-4">
                <Image
                  src="/placeholder-value-chart.jpg"
                  alt="Economic Value Chart"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
