import React from 'react';

export default function SustainabilityStrategy() {
  return (
    <div className="sustainability-strategy p-6 max-h-[70vh] overflow-y-auto pr-2 bg-themeGreen">
      <h2 className="text-2xl font-bold mb-6">3. SUSTAINABILITY STRATEGY</h2>

      <p className="mb-8 text-lg ">
        Sustainability is a core strategic focus at LB Finance, underpinning our
        vision to create long-term value for all stakeholders. Our approach is
        centered on integrating responsible business practices with financial
        performance, environmental stewardship, and social impact. The following
        strategies reflect our commitment to embedding sustainability across our
        operations, driving growth that is resilient, inclusive, and
        future-ready.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Strategy 1 */}
        <div className="strategy-card p-6 rounded-lg shadow-md bg-cardGreen">
          <h3 className="text-xl font-semibold mb-4">
            Strengthening Long-Term Financial Resilience
          </h3>
          <p className="mb-4">
            As a leading financial institution, LB Finance is committed to sound
            financial governance and risk management. By embedding resilience
            into our business model, we ensure sustainable value creation for
            stakeholders while navigating evolving market dynamics with
            stability and foresight. Our disciplined approach to financial
            stewardship underpins our ability to support the economy and remain
            agile in the face of uncertainty.
          </p>
          <div className="uncg-tag bg-gray-100 text-[#467643] p-2 rounded inline-block text-sm">
            UNCG - Principle 8, 10
          </div>
        </div>

        {/* Strategy 2 */}
        <div className="strategy-card p-6 rounded-lg shadow-md bg-cardGreen">
          <h3 className="text-xl font-semibold mb-4 ">
            Minimising Environmental Footprint through Sustainable Practices
          </h3>
          <p className="mb-4">
            Environmental responsibility is a key pillar of our sustainability
            strategy. We continue to reduce our operational impact through
            energy-efficient practices, resource conservation, and investment in
            green financing solutions. Our alignment with global climate
            commitments reflects our dedication to protecting the planet and
            contributing to a low-carbon, sustainable future.
          </p>
          <div className="uncg-tag bg-gray-100 text-[#467643] p-2 rounded inline-block text-sm">
            UNCG - Principle 7, 8, 9
          </div>
        </div>

        {/* Strategy 3 */}
        <div className="strategy-card bg-cardGreen p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Minimising Environmental Footprint through Sustainable Practices
          </h3>
          <p className="mb-4 text-black">
            Environmental responsibility is a key pillar of our sustainability
            strategy. We continue to reduce our operational impact through
            energy-efficient practices, resource conservation, and investment in
            green financing solutions. Our alignment with global climate
            commitments reflects our dedication to protecting the planet and
            contributing to a low-carbon, sustainable future.
          </p>
          <div className="uncg-tag bg-gray-100 text-[#467643] p-2 rounded inline-block text-sm">
            UNCG - Principle 7, 8, 9
          </div>
        </div>

        {/* Strategy 4 */}
        <div className="strategy-card bg-cardGreen p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Cultivating an Empowering and Inclusive Work Culture
          </h3>
          <p className="mb-4 text-black">
            We place our people at the core of all our endeavours. We are
            committed to creating a safe, inclusive, and inspiring work
            environment where employees are valued, respected, and given
            opportunities to grow. By prioritising diversity, continuous
            learning, and well-being, we foster a high-performing culture that
            supports both employee satisfaction and organisational excellence.
          </p>
          <div className="uncg-tag bg-gray-100 p-2 rounded inline-block text-sm text-[#467643]">
            UNCG - Principle 6, 10
          </div>
        </div>
      </div>
    </div>
  );
}
