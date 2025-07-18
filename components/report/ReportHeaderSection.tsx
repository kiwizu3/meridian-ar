import Link from 'next/link';

export default function ReportHeaderSection() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-orange-200 to-yellow-100 header-section">
      <div className="absolute inset-0 bg-black bg-opacity-10" />
      
      {/* Main Content */}
      <div className="absolute z-10 main-content-container">
        <div className="flex flex-col h-full justify-start content-wrapper">
          <div className="flex items-start logo-container">
            <img src="/images/report/logo.png" alt="LB Finance Logo" className="logo-image" />
          </div>
          <h1 className="font-inter font-bold text-[48px] leading-[60px] tracking-[0px] text-[#17634F] main-title">
            Integrated Annual<br />Report 2025
          </h1>
          <div className="flex flex-col gap-[12px] button-container">
            <button type="button" className="bg-[#0E3A2F] text-white font-semibold transition-colors rounded-[8px] opacity-100 p-[12px_16px] download-button">
              Download Report
            </button>
            <Link href="/report/generate-report">
              <button type="button" className="bg-transparent border-2 border-white text-white font-semibold transition-colors rounded-[8px] opacity-100 p-[12px_16px] generate-button">
                Generate Report
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
