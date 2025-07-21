import Link from 'next/link';
import Image from 'next/image';

export default function ReportHeaderSection() {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-orange-200 to-yellow-100 overflow-hidden"
      style={{ backgroundImage: "url('/images/report/journey-page.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-6xl mx-auto px-6 sm:px-10 py-16">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/report/logo.png"
            alt="LB Finance Logo"
            width={180}
            height={60}
            className="w-auto h-auto max-w-[200px]"
          />
        </div>

        {/* Heading */}
        <h1 className="text-[#17634F] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-inter">
          Integrated Annual
          <br />
          Report 2025
        </h1>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            className="bg-[#0E3A2F] text-white font-semibold rounded-lg px-6 py-3 transition hover:bg-[#145244]"
          >
            Download Report
          </button>
          <Link href="/report/generate-report">
            <button
              type="button"
              className="bg-transparent border-2 border-white text-white font-semibold rounded-lg px-6 py-3 transition hover:bg-white hover:text-[#0E3A2F]"
            >
              Generate Report
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
