export default function ContributionTowardsSustainability() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-4 h-[654px] overflow-auto grid grid-cols-1 gap-6 custom-scrollbar">
      <div>
        <h2 className="text-xl font-bold text-orange-500">
          CONTRIBUTION TO GENDER PARITY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white text-blue p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">
              Global trend
            </h3>
            <p className="mt-2">
              Gender parity has a fundamental bearing on whether or not
              economies and societies thrive. While the representation of women
              in governance and in leadership roles in the corporate sector has
              been increasing in recent years, there is still a long way to go
              in order to achieve equality. Statistics suggest that supporting
              empowerment as a general rule, corresponds with increased numbers
              of women in senior roles in the labour market. Furthermore,
              investing equally to develop both men and women helps to drive
              economies of scale and improve future readiness of companies.
            </p>
          </div>
          <div className="bg-white text-blue p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600">LBF context</h3>
            <p className="mt-2">
              LBF’s does not discriminate on the basis of gender or any other
              status protected by law. However, a majority of the Company’s
              field sales force remains largely male-dominated. Taking proactive
              steps to correct this situation, specific gender parity thresholds
              have been established for every stage of the employment lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Contribution to United Nations Sustainable Development Goals Section */}
      <div>
        <h2 className="text-xl font-bold ">
          CONTRIBUTING TO THE UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white text-blue p-6 rounded-lg">
            <h3 className="text-lg font-semibold ">Global trend</h3>
            <p className="mt-2">
              The 17 Sustainable Development Goals (SGDs) launched by the UN in
              2015 have provided a clear framework for countries and
              organisations to realign their economic, social and environmental
              strategies to meaningfully tackle the most pressing sustainability
              challenges of our time. The fact that the SDG’s have provided
              clear 2030 targets pushes governments and corporations towards the
              systematic implementation of projects at a granular level.
            </p>
          </div>
          <div className="bg-white text-blue p-6 rounded-lg">
            <h3 className="text-lg font-semibold ">LBF context</h3>
            <p className="mt-2">
              LBF contributes to the SGDs both directly and indirectly. Through
              our core business of providing financial services, we support
              individuals, directly enabling them to enhance their financial
              stability and quality of life. By supporting businesses, LBF is
              indirectly contributing to economic growth and job creation across
              Sri Lanka.
            </p>
            <p className="mt-2">
              In addition, by conserving resources and driving diversity,
              financial inclusion, education, we contribute to the societies and
              natural environment in which we operate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
