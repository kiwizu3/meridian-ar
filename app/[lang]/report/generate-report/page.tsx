'use client';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GenerateReportPage() {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCheckboxChange = (sectionId: string) => {
    setSelectedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedSections.length === 0) {
      toast.error('Please select at least one section to generate a report.');
      return;
    }

    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedSections }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate report');
      }

      // Create blob from response
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'LB_Finance_Custom_Report.pdf';

      // Trigger download
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast.success('Report generated successfully!');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to generate report',
      );
    } finally {
      setIsGenerating(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#0E3A2F] py-8 px-2">
      <div className="max-w-5xl mx-auto bg-[#17634F] rounded-lg shadow-lg p-6 md:p-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 bg-[#138466] rounded-lg p-6 mb-8">
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src="/images/report/logo.png"
              alt="LB Finance Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Generate Report
            </h2>
            <p className="text-white text-sm md:text-base max-w-xl">
              Create customized reports based on your data. Choose the metrics,
              time range, and format you need—then generate a report instantly
              for easy analysis and sharing.
            </p>
          </div>
        </div>
        {/* Grid Section */}
        <form onSubmit={handleSubmit}>
          <div
            id="scrollable-grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 overflow-y-auto max-h-[620px] pr-2"
            style={{
              scrollbarColor: '#009D73 #0E3A2F',
              scrollbarWidth: 'thin',
            }}
          >
            <style jsx global>{`
              #scrollable-grid::-webkit-scrollbar {
                width: 8px !important;
              }
              #scrollable-grid::-webkit-scrollbar-track {
                background: #0e3a2f !important;
                border-radius: 50px !important;
              }
              #scrollable-grid::-webkit-scrollbar-thumb {
                background: #009d73 !important;
                border-radius: 50px !important;
              }
              #scrollable-grid::-webkit-scrollbar-thumb:hover {
                background: #00b383 !important;
              }
            `}</style>
            {/* Row 1 - Left Column */}
            <div>
              <h3 className="font-bold text-white mb-4">
                1. Report Navigation
              </h3>
              <div className="flex flex-col gap-2 text-white text-sm">
                <label
                  htmlFor="nav-oath"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="nav-oath"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('nav-oath')}
                    onChange={() => handleCheckboxChange('nav-oath')}
                  />
                  Oath to Stakeholders
                </label>
                <label
                  htmlFor="nav-vision"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="nav-vision"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('nav-vision')}
                    onChange={() => handleCheckboxChange('nav-vision')}
                  />
                  Vision, Mission and Values
                </label>
                <label
                  htmlFor="nav-innovate"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="nav-innovate"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('nav-innovate')}
                    onChange={() => handleCheckboxChange('nav-innovate')}
                  />
                  Innovate to Elevate
                </label>
                <label
                  htmlFor="nav-carbon"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="nav-carbon"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('nav-carbon')}
                    onChange={() => handleCheckboxChange('nav-carbon')}
                  />
                  Assurance on Carbon Footprint
                </label>
                <label
                  htmlFor="nav-guide"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="nav-guide"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('nav-guide')}
                    onChange={() => handleCheckboxChange('nav-guide')}
                  />
                  User Guide to the Report
                </label>
                <label
                  htmlFor="nav-intro"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="nav-intro"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('nav-intro')}
                    onChange={() => handleCheckboxChange('nav-intro')}
                  />
                  Introduction
                </label>
                <label
                  htmlFor="nav-about"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="nav-about"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('nav-about')}
                    onChange={() => handleCheckboxChange('nav-about')}
                  />
                  About the Report
                </label>
              </div>
            </div>

            {/* Row 1 - Right Column */}
            <div>
              <h3 className="font-bold text-white mb-4">2. The Company</h3>
              <div className="flex flex-col gap-2 text-white text-sm">
                <label
                  htmlFor="co-lbf"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="co-lbf"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('co-lbf')}
                    onChange={() => handleCheckboxChange('co-lbf')}
                  />
                  We are LB Finance
                </label>
                <label
                  htmlFor="co-socio"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="co-socio"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('co-socio')}
                    onChange={() => handleCheckboxChange('co-socio')}
                  />
                  Building Socio-economic Prosperity
                </label>
                <label
                  htmlFor="co-awards"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="co-awards"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('co-awards')}
                    onChange={() => handleCheckboxChange('co-awards')}
                  />
                  Awards and Accolades
                </label>
                <label
                  htmlFor="co-finhi"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="co-finhi"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('co-finhi')}
                    onChange={() => handleCheckboxChange('co-finhi')}
                  />
                  Financial Highlights
                </label>
                <label
                  htmlFor="co-nonfin"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="co-nonfin"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('co-nonfin')}
                    onChange={() => handleCheckboxChange('co-nonfin')}
                  />
                  Non-Financial Highlights
                </label>
                <label
                  htmlFor="co-strat"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="co-strat"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('co-strat')}
                    onChange={() => handleCheckboxChange('co-strat')}
                  />
                  Strategic Journey
                </label>
                <label
                  htmlFor="co-snap"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="co-snap"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('co-snap')}
                    onChange={() => handleCheckboxChange('co-snap')}
                  />
                  A Snapshot of 2024/25
                </label>
              </div>
            </div>

            {/* Row 2 - Left Column */}
            <div>
              <h3 className="font-bold text-white mb-4">
                3. Management Discussion and Analysis
              </h3>
              <div className="flex flex-col gap-2 text-white text-sm">
                <label
                  htmlFor="mda-chair"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda-chair"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda-chair')}
                    onChange={() => handleCheckboxChange('mda-chair')}
                  />
                  Chairman&apos;s Remarks
                </label>
                <label
                  htmlFor="mda-md"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda-md"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda-md')}
                    onChange={() => handleCheckboxChange('mda-md')}
                  />
                  Managing Director&apos;s Review
                </label>
                <label
                  htmlFor="mda-bmvc"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda-bmvc"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda-bmvc')}
                    onChange={() => handleCheckboxChange('mda-bmvc')}
                  />
                  Business Model &amp; Value Creation
                </label>
                <label
                  htmlFor="mda-oe"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda-oe"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda-oe')}
                    onChange={() => handleCheckboxChange('mda-oe')}
                  />
                  Operating Environment
                </label>
                <label
                  htmlFor="mda-ise"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda-ise"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda-ise')}
                    onChange={() => handleCheckboxChange('mda-ise')}
                  />
                  Integrated Stakeholder Engagement
                </label>
                <label
                  htmlFor="mda-mat"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda-mat"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda-mat')}
                    onChange={() => handleCheckboxChange('mda-mat')}
                  />
                  Materiality
                </label>
                <label
                  htmlFor="mda-ltss"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda-ltss"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda-ltss')}
                    onChange={() => handleCheckboxChange('mda-ltss')}
                  />
                  Long-term Sustainability Strategies
                </label>
                <label
                  htmlFor="mda-b25"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda-b25"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda-b25')}
                    onChange={() => handleCheckboxChange('mda-b25')}
                  />
                  Beyond 2025
                </label>
              </div>
            </div>

            {/* Row 2 - Right Column */}
            <div>
              <h3 className="font-bold text-white mb-4">
                4. Management Discussion and Analysis
              </h3>
              <div className="flex flex-col gap-2 text-white text-sm">
                <label
                  htmlFor="mda2-web"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-web"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-web')}
                    onChange={() => handleCheckboxChange('mda2-web')}
                  />
                  The Web of Life: Weaving Sustainability
                </label>
                <label
                  htmlFor="mda2-lead"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-lead"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-lead')}
                    onChange={() => handleCheckboxChange('mda2-lead')}
                  />
                  Leading the Change
                </label>
                <label
                  htmlFor="mda2-gov"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-gov"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-gov')}
                    onChange={() => handleCheckboxChange('mda2-gov')}
                  />
                  Sustainability Governance
                </label>
                <label
                  htmlFor="mda2-pledge"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-pledge"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-pledge')}
                    onChange={() => handleCheckboxChange('mda2-pledge')}
                  />
                  Sustainability Pledges
                </label>
                <label
                  htmlFor="mda2-ops"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-ops"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-ops')}
                    onChange={() => handleCheckboxChange('mda2-ops')}
                  />
                  Responsible Operations
                </label>
                <label
                  htmlFor="mda2-green"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-green"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-green')}
                    onChange={() => handleCheckboxChange('mda2-green')}
                  />
                  Green Building Practices
                </label>
                <label
                  htmlFor="mda2-prod"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-prod"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-prod')}
                    onChange={() => handleCheckboxChange('mda2-prod')}
                  />
                  Responsible Products and Services
                </label>
                <label
                  htmlFor="mda2-climate"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-climate"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-climate')}
                    onChange={() => handleCheckboxChange('mda2-climate')}
                  />
                  Climate Risk and UN SDGs
                </label>
                <label
                  htmlFor="mda2-esg"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-esg"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-esg')}
                    onChange={() => handleCheckboxChange('mda2-esg')}
                  />
                  ESG Integration
                </label>
                <label
                  htmlFor="mda2-road"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-road"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-road')}
                    onChange={() => handleCheckboxChange('mda2-road')}
                  />
                  Roadmap for Sustainable Finance
                </label>
                <label
                  htmlFor="mda2-act"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-act"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-act')}
                    onChange={() => handleCheckboxChange('mda2-act')}
                  />
                  Activities in Sri Lanka &amp; Myanmar
                </label>
                <label
                  htmlFor="mda2-journey"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda2-journey"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda2-journey')}
                    onChange={() => handleCheckboxChange('mda2-journey')}
                  />
                  Sustainability Journey
                </label>
              </div>
            </div>

            {/* Row 3 - Left Column */}
            <div>
              <h3 className="font-bold text-white mb-4">
                5. Management Discussion and Analysis
              </h3>
              <div className="flex flex-col gap-2 text-white text-sm">
                <label
                  htmlFor="mda3-ffc"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda3-ffc"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda3-ffc')}
                    onChange={() => handleCheckboxChange('mda3-ffc')}
                  />
                  Fortifying Financial Capital
                </label>
                <label
                  htmlFor="mda3-smc"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda3-smc"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda3-smc')}
                    onChange={() => handleCheckboxChange('mda3-smc')}
                  />
                  Strategising Manufactured Capital
                </label>
                <label
                  htmlFor="mda3-fhc"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda3-fhc"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda3-fhc')}
                    onChange={() => handleCheckboxChange('mda3-fhc')}
                  />
                  Framing Human Capital
                </label>
                <label
                  htmlFor="mda3-mic"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda3-mic"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda3-mic')}
                    onChange={() => handleCheckboxChange('mda3-mic')}
                  />
                  Mindscaping Intellectual Capital
                </label>
                <label
                  htmlFor="mda3-csrc"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda3-csrc"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda3-csrc')}
                    onChange={() => handleCheckboxChange('mda3-csrc')}
                  />
                  Cultivating Social and Relationship Capital
                </label>
                <label
                  htmlFor="mda3-nnc"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda3-nnc"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda3-nnc')}
                    onChange={() => handleCheckboxChange('mda3-nnc')}
                  />
                  Nurturing Natural Capital
                </label>
                <label
                  htmlFor="mda3-busrev"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda3-busrev"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda3-busrev')}
                    onChange={() => handleCheckboxChange('mda3-busrev')}
                  />
                  Business Review
                </label>
                <label
                  htmlFor="mda3-subs"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="mda3-subs"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('mda3-subs')}
                    onChange={() => handleCheckboxChange('mda3-subs')}
                  />
                  Subsidiary Information
                </label>
              </div>
            </div>

            {/* Row 3 - Right Column */}
            <div>
              <h3 className="font-bold text-white mb-4">
                6. Corporate Stewardship
              </h3>
              <div className="flex flex-col gap-2 text-white text-sm">
                <label
                  htmlFor="cs-chair"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="cs-chair"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('cs-chair')}
                    onChange={() => handleCheckboxChange('cs-chair')}
                  />
                  Chairman&apos;s Message
                </label>
                <label
                  htmlFor="cs-ids"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="cs-ids"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('cs-ids')}
                    onChange={() => handleCheckboxChange('cs-ids')}
                  />
                  Independent Director&apos;s Statement
                </label>
                <label
                  htmlFor="cs-gov"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="cs-gov"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('cs-gov')}
                    onChange={() => handleCheckboxChange('cs-gov')}
                  />
                  Governance Philosophy
                </label>
                <label
                  htmlFor="cs-bod"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="cs-bod"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('cs-bod')}
                    onChange={() => handleCheckboxChange('cs-bod')}
                  />
                  Board of Directors
                </label>
                <label
                  htmlFor="cs-senior"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="cs-senior"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('cs-senior')}
                    onChange={() => handleCheckboxChange('cs-senior')}
                  />
                  Senior Management
                </label>
                <label
                  htmlFor="cs-risk"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="cs-risk"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('cs-risk')}
                    onChange={() => handleCheckboxChange('cs-risk')}
                  />
                  Risk Management
                </label>
              </div>
            </div>

            {/* Row 4 - Left Column */}
            <div>
              <h3 className="font-bold text-white mb-4">
                7. Financial Information
              </h3>
              <div className="flex flex-col gap-2 text-white text-sm">
                <label
                  htmlFor="fin-high"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-high"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-high')}
                    onChange={() => handleCheckboxChange('fin-high')}
                  />
                  Financial Statements Highlights
                </label>
                <label
                  htmlFor="fin-cal"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-cal"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-cal')}
                    onChange={() => handleCheckboxChange('fin-cal')}
                  />
                  Financial Calendar
                </label>
                <label
                  htmlFor="fin-audit"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-audit"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-audit')}
                    onChange={() => handleCheckboxChange('fin-audit')}
                  />
                  Auditor&apos;s Report
                </label>
                <label
                  htmlFor="fin-inc"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-inc"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-inc')}
                    onChange={() => handleCheckboxChange('fin-inc')}
                  />
                  Income Statement
                </label>
                <label
                  htmlFor="fin-spl"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-spl"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-spl')}
                    onChange={() => handleCheckboxChange('fin-spl')}
                  />
                  Statement of Profit or Loss and Other Comprehensive Income
                </label>
                <label
                  htmlFor="fin-pos"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-pos"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-pos')}
                    onChange={() => handleCheckboxChange('fin-pos')}
                  />
                  Financial Position
                </label>
                <label
                  htmlFor="fin-eq"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-eq"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-eq')}
                    onChange={() => handleCheckboxChange('fin-eq')}
                  />
                  Changes in Equity
                </label>
                <label
                  htmlFor="fin-cash"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-cash"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-cash')}
                    onChange={() => handleCheckboxChange('fin-cash')}
                  />
                  Cash Flows
                </label>
                <label
                  htmlFor="fin-notes"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="fin-notes"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('fin-notes')}
                    onChange={() => handleCheckboxChange('fin-notes')}
                  />
                  Notes to Financial Statements
                </label>
              </div>
            </div>

            {/* Row 4 - Right Column */}
            <div>
              <h3 className="font-bold text-white mb-4">
                8. Supplementary Information
              </h3>
              <div className="flex flex-col gap-2 text-white text-sm">
                <label
                  htmlFor="supp-invest"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-invest"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-invest')}
                    onChange={() => handleCheckboxChange('supp-invest')}
                  />
                  Investor Information
                </label>
                <label
                  htmlFor="supp-decade"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-decade"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-decade')}
                    onChange={() => handleCheckboxChange('supp-decade')}
                  />
                  Decade at a Glance
                </label>
                <label
                  htmlFor="supp-quarter"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-quarter"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-quarter')}
                    onChange={() => handleCheckboxChange('supp-quarter')}
                  />
                  Quarterly &amp; USD Financial Statements
                </label>
                <label
                  htmlFor="supp-gov"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-gov"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-gov')}
                    onChange={() => handleCheckboxChange('supp-gov')}
                  />
                  Governance Framework Compliance
                </label>
                <label
                  htmlFor="supp-gri"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-gri"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-gri')}
                    onChange={() => handleCheckboxChange('supp-gri')}
                  />
                  GRI Index, SLRFS Index, SASB/UN Guidelines
                </label>
                <label
                  htmlFor="supp-anti"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-anti"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-anti')}
                    onChange={() => handleCheckboxChange('supp-anti')}
                  />
                  Anti-Corruption Programs
                </label>
                <label
                  htmlFor="supp-isa"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-isa"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-isa')}
                    onChange={() => handleCheckboxChange('supp-isa')}
                  />
                  Independent Sustainability Assurance
                </label>
                <label
                  htmlFor="supp-org"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-org"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-org')}
                    onChange={() => handleCheckboxChange('supp-org')}
                  />
                  Organisation Chart &amp; Glossary
                </label>
                <label
                  htmlFor="supp-corp"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-corp"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-corp')}
                    onChange={() => handleCheckboxChange('supp-corp')}
                  />
                  Corporate Information &amp; Notice of AGM
                </label>
                <label
                  htmlFor="supp-feedback"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    id="supp-feedback"
                    type="checkbox"
                    className="mr-3 w-4 h-4 accent-[#FFC43A]"
                    checked={selectedSections.includes('supp-feedback')}
                    onChange={() => handleCheckboxChange('supp-feedback')}
                  />
                  Feedback Form
                </label>
              </div>
            </div>
          </div>
          {/* Download Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isGenerating || selectedSections.length === 0}
              className="w-full bg-[#FFC43A] hover:bg-[#ffb300] disabled:bg-gray-400 disabled:cursor-not-allowed text-[#0E3A2F] font-semibold py-3 rounded-md transition-colors"
            >
              {isGenerating ? 'Generating Report...' : 'Download Report'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
