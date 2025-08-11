'use client';

import Image from 'next/image';

export default function NaturalCapitalPart7() {
  return (
    <div className="bg-white text-gray-800 p-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-[#97c93c]">
          Our Commitment to the Environment
        </h1>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <p className="mb-4">
            Our commitment to protect and preserve the environment by
            continuously refining our policies and procedures and improving our
            products and services through the use of technology has enabled LB
            Finance PLC to be certified as a Carbon Neutral Company until last
            year.
          </p>
          <p>
            LBF&apos;s commitment towards nature and sustainability by promoting
            environment-friendly business practices to the various business
            segments of the country as well as reducing carbon footprints from
            our organisational framework.
          </p>
        </div>

        <div className="text-center mb-8">
          <p className="text-4xl font-bold text-[#97c93c]">3,982.9 tCO₂e</p>
          <p className="text-sm text-gray-600">Total Carbon Footprint</p>
        </div>

        <div>
          <Image
            src="/images/sustainability/climate-carbon-certificate.PNG"
            width={600}
            height={800}
            style={{ width: '50%' }}
            alt="Carbon Conscious Certificate"
            className="mx-auto"
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 mb-2">
            Scan QR code to view our Carbon Journey online
          </p>
          {/* Placeholder for QR code */}
          <div className="w-24 h-24 mx-auto">
            <Image
              src="/images/sustainability/climate-qr-2.PNG"
              width={120}
              height={120}
              alt="QR code"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
