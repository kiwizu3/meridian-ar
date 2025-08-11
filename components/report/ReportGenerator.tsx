'use client';

import { useState } from 'react';

interface CheckboxState {
  [key: string]: boolean;
}

export default function ReportGenerator() {
  const [showReport, setShowReport] = useState(false);
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});

  const handleCheckboxChange = (id: string) => {
    setCheckboxes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDownloadReport = () => {
    setShowReport(true);
  };

  if (showReport) {
    return <ReportDisplay />;
  }

  return (
    <div className="report-generator-container">
      <nav className="report-breadcrumb">
        <span>Home</span>
        <span>Generate Report</span>
      </nav>

      <div className="report-main-card">
        <div className="report-header">
          <div className="report-logo-placeholder"></div>
          <div className="report-header-content">
            <h1>Generate Report</h1>
            <p>
              Create customized reports based on your data. Choose the metrics,
              time range, and format you need—then generate a report instantly
              for easy analysis and sharing.
            </p>
          </div>
        </div>

        <div className="report-sections-grid">
          <div className="report-section">
            <h2>1. Report Navigation</h2>
            <div className="report-checkbox-group">
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('oath')}
                />
                <span>Oath to Stakeholders</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('vision')}
                />
                <span>Vision, Mission and Values</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('innovate')}
                />
                <span>Innovate to Elevate</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('assurance')}
                />
                <span>Assurance on Carbon Footprint</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('userGuide')}
                />
                <span>User Guide to the Report</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('introduction')}
                />
                <span>Introduction</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('aboutReport')}
                />
                <span>About the Report</span>
              </label>
            </div>
          </div>

          <div className="report-section">
            <h2>2. The Company</h2>
            <div className="report-checkbox-group">
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('weLb')}
                />
                <span>We are LB Finance</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('building')}
                />
                <span>Building Socio-economic Prosperity</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('awards')}
                />
                <span>Awards and Accolades</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('financial')}
                />
                <span>Financial Highlights</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('nonFinancial')}
                />
                <span>Non-Financial Highlights</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('strategic')}
                />
                <span>Strategic Journey</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('snapshot')}
                />
                <span>A Snapshot of 2024/25</span>
              </label>
            </div>
          </div>

          <div className="report-section">
            <h2>3. Management Discussion and Analysis</h2>
            <div className="report-checkbox-group">
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('chairmanRemarks')}
                />
                <span>Chairman's Remarks</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('managingDirector')}
                />
                <span>Managing Director's Review</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('businessModel')}
                />
                <span>Business Model & Value Creation</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('operating')}
                />
                <span>Operating Environment</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('integrated')}
                />
                <span>Integrated Stakeholder Engagement</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('materiality')}
                />
                <span>Materiality</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('longTerm')}
                />
                <span>Long-term Sustainability Strategies</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('beyond2025')}
                />
                <span>Beyond 2025</span>
              </label>
            </div>
          </div>

          <div className="report-section">
            <h2>4. Management Discussion and Analysis</h2>
            <div className="report-checkbox-group">
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('webLife')}
                />
                <span>The Web of Life: Weaving Sustainability</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('leading')}
                />
                <span>Leading the Change</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('governance')}
                />
                <span>Sustainability Governance</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('pledges')}
                />
                <span>Sustainability Pledges</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('responsible')}
                />
                <span>Responsible Operations</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('green')}
                />
                <span>Green Building Practices</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('products')}
                />
                <span>Responsible Products and Services</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('climate')}
                />
                <span>Climate Risk and UN SDGs</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('esgIntegration')}
                />
                <span>ESG Integration</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('roadmap')}
                />
                <span>Roadmap for Sustainable Finance</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('activities')}
                />
                <span>Activities in Sri Lanka & Myanmar</span>
              </label>
              <label className="report-checkbox-item">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('journey')}
                />
                <span>Sustainability Journey</span>
              </label>
            </div>
          </div>
        </div>

        <button
          className="report-download-button"
          onClick={handleDownloadReport}
        >
          Download Report
        </button>
      </div>
    </div>
  );
}

function ReportDisplay() {
  return (
    <div className="report-container">
      <div className="report-header-display">
        <div className="report-logo"></div>
        <div className="report-title">
          <h1>Integrated Annual Report 2025</h1>
          <button className="report-download-btn">Download Report</button>
          <button className="report-generate-btn">Generate Report</button>
        </div>
        <div className="report-image"></div>
      </div>

      <div className="report-sections">
        <section className="report-section-display">
          <div className="section-image"></div>
          <div className="section-content">
            <h2>CONQUERING WITH COURAGE</h2>
            <p>
              With a legacy spanning over 54 years LB Finance Limited stands
              tall as a pioneer institution in Sri Lanka's financial landscape.
              From our humble beginnings as a small finance company to becoming
              one of Sri Lanka's most trusted financial services providers, we
              have consistently demonstrated resilience and innovation. Our
              journey reflects our commitment to delivering exceptional value to
              all stakeholders while maintaining the highest standards of
              corporate governance and sustainability.
            </p>
            <div className="section-buttons">
              <button>Awards and Accolades</button>
              <button>Financial Highlights</button>
              <button>Non-Financial Highlights</button>
              <button>Strategic Journey</button>
              <button>A Snapshot of 2024/25</button>
            </div>
          </div>
        </section>

        <section className="report-section-display">
          <div className="section-content">
            <h2>AMPLIFYING OUR REACH</h2>
            <p>
              LB Finance is amongst peer financial institutions offering a
              diverse range of financial services including consumer finance and
              all-encompassing facilities to support their requirements. Through
              strategic partnerships and digital innovation, we continue to
              expand our reach and amplify our impact across communities.
            </p>
            <div className="section-buttons">
              <button>Business Model & Value Creation</button>
              <button>Operating Environment</button>
              <button>Integrated Stakeholder Engagement</button>
              <button>Materiality</button>
              <button>Long-term Sustainability Strategies</button>
            </div>
          </div>
          <div className="section-image"></div>
        </section>

        <section className="report-section-display">
          <div className="section-image"></div>
          <div className="section-content">
            <h2>TRANSFORMING THE ENVIRONMENT</h2>
            <p>
              At LB Finance, we believe that building a sustainable future
              requires transformative action. LB Finance has a long-standing
              commitment to environmental stewardship and continues to implement
              innovative green initiatives across all operations. We actively
              pursue opportunities to minimize our environmental footprint while
              maximizing positive impact.
            </p>
            <div className="section-buttons">
              <button>Sustainability Governance</button>
              <button>Green Building Practices</button>
              <button>Environmental Impact</button>
              <button>Resource Management</button>
              <button>Climate Action</button>
            </div>
          </div>
        </section>

        <section className="report-section-display">
          <div className="section-content">
            <h2>RESPONDING WITH AGILITY</h2>
            <p>
              LB Finance understands that responding with agility is crucial in
              today's rapidly evolving financial landscape. Through adaptive
              strategies and innovative solutions, we continue to meet changing
              customer needs while maintaining operational excellence and
              regulatory compliance.
            </p>
            <div className="section-buttons">
              <button>Crisis Management</button>
              <button>Business Continuity</button>
              <button>Risk Management</button>
              <button>Innovation Strategy</button>
              <button>Digital Transformation</button>
            </div>
          </div>
          <div className="section-image"></div>
        </section>

        <section className="report-section-display">
          <div className="section-image"></div>
          <div className="section-content">
            <h2>ESTABLISHING OUR STRENGTH</h2>
            <p>
              LB Finance has established its strength through consistent
              performance, strategic investments, and strong leadership. Our
              robust financial position and comprehensive service portfolio
              position us as a leader in Sri Lanka's financial services sector.
            </p>
            <div className="section-buttons">
              <button>Financial Performance</button>
              <button>Strategic Investments</button>
              <button>Market Position</button>
              <button>Leadership Excellence</button>
              <button>Operational Efficiency</button>
            </div>
          </div>
        </section>

        <section className="report-section-display">
          <div className="section-content">
            <h2>LEADING THE PRIDE</h2>
            <p>
              As leaders in the Sri Lankan financial services industry, LB
              Finance takes pride in our achievements and contributions to
              national economic development. We continue to lead by example in
              corporate governance, sustainability, and stakeholder value
              creation.
            </p>
            <div className="section-buttons">
              <button>Industry Leadership</button>
              <button>Corporate Governance</button>
              <button>Stakeholder Value</button>
              <button>Economic Contribution</button>
            </div>
          </div>
          <div className="section-image"></div>
        </section>

        <section className="report-section-display">
          <div className="section-image"></div>
          <div className="section-content">
            <h2>ENVISIONING THE FUTURE</h2>
            <p>
              LB Finance envisions a future where financial services drive
              inclusive growth and sustainable development. Through strategic
              planning and innovative thinking, we are building tomorrow's
              financial services landscape today.
            </p>
            <div className="section-buttons">
              <button>Future Strategy</button>
              <button>Vision 2030</button>
              <button>Innovation Roadmap</button>
              <button>Sustainable Development</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
