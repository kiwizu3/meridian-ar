export default function SustainabilityIntegratedReporting() {
  const tableData = [
    {
      header: 'IR STANDARD',
      content: 'CONTENT DISCLOSURES',
      pageNo: 'PAGE NO',
      link: null,
    },
    {
      header: '1. Using the <IR> Framework',
      content: '',
      pageNo: '',
      link: null,
    },
    {
      header: '1.F',
      content: 'Application of the <IR> Framework',
      pageNo: '6-9',
      link: '/sustainability/integrated-reporting/6-9',
    },
    {
      header: '1.G',
      content: 'Responsibility for an integrated report',
      pageNo: '8',
      link: '/sustainability/integrated-reporting/6-9/#section8',
    },
    { header: '2. Fundamental Concepts', content: '', pageNo: '', link: null },
    {
      header: '2.B',
      content: 'Value creation for the organization and for others',
      pageNo: '40-44',
      link: '/sustainability/integrated-reporting/40-44',
    },
    {
      header: '2.C',
      content: 'The capitals',
      pageNo: '84-155',
      link: '/sustainability/integrated-reporting/84-155',
    },
    {
      header: '2.D',
      content: 'Process through which value is created, preserved or eroded',
      pageNo: '41',
      link: '/sustainability/integrated-reporting/40-44',
    },
    { header: '3. Guiding Principles', content: '', pageNo: '', link: null },
    {
      header: '3.A',
      content: 'Strategic focus and future orientation',
      pageNo: '50-51',
      link: '/sustainability/integrated-reporting/50-51',
    },
    {
      header: '3.C',
      content: 'Stakeholder relationships',
      pageNo: '40-44',
      link: '/sustainability/integrated-reporting/40-44',
    },
    {
      header: '3.D',
      content: 'Materiality',
      pageNo: '45-49',
      link: '/sustainability/integrated-reporting/45-49',
    },
    { header: '4. Content Elements', content: '', pageNo: '', link: null },
    {
      header: '4.A',
      content: 'Organizational overview and external environment',
      pageNo: '10-12, 32-37',
      link: '/sustainability/integrated-reporting/10-12-32-27',
    },
    {
      header: '4.B',
      content: 'Governance',
      pageNo: '164-178',
      link: '/sustainability/integrated-reporting/164-178',
    },
    {
      header: '4.C',
      content: 'Business model',
      pageNo: '38-39',
      link: '/sustainability/integrated-reporting/38-39',
    },
    {
      header: '4.D',
      content: 'Risks and opportunities',
      pageNo: '208-231, 60-61',
      link: '/sustainability/integrated-reporting/208-231-60-61',
    },
    {
      header: '4.E',
      content: 'Strategy and resource allocation',
      pageNo: '50-55',
      link: '/sustainability/integrated-reporting/50-55',
    },
    {
      header: '4.F',
      content: 'Performance',
      pageNo: '20-22',
      link: '/sustainability/integrated-reporting/20-22',
    },
    {
      header: '4.G',
      content: 'Outlook',
      pageNo: '423',
      link: '/sustainability/integrated-reporting/423',
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-cardGreen text-white p-8">
        <h1 className="text-3xl font-bold mb-6">
          INTEGRATED REPORTING CONTENT INDEX
        </h1>
        <div className="overflow-x-auto" style={{ marginTop: '48px' }}>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="border border-white p-2">IR STANDARD</th>
                <th className="border border-white p-2">CONTENT DISCLOSURES</th>
                <th className="border border-white p-2">PAGE NO</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border border-white p-2">
                  <td className="border border-white p-2">{row.header}</td>
                  <td className="border border-white p-2">{row.content}</td>
                  <td className="border border-white p-2">
                    {row.link ? (
                      <a href={row.link}>{row.pageNo}</a>
                    ) : (
                      <span>{row.pageNo}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
