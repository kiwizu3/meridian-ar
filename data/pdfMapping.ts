export interface PDFSection {
  id: string;
  title: string;
  pdfPath: string;
  section: string;
}

const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_SERVER_URL || '';

export const PDF_MAPPING: Record<string, PDFSection> = {
  'nav-oath': {
    id: 'nav-oath',
    title: 'Oath to Stakeholders',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-1/oath-to-stakeholders.pdf`,
    section: 'Report Navigation',
  },
  'nav-vision': {
    id: 'nav-vision',
    title: 'Vision, Mission and Values',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-1/vision-mission-values.pdf`,
    section: 'Report Navigation',
  },
  'nav-innovate': {
    id: 'nav-innovate',
    title: 'Innovate to Elevate',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-1/innovate-to-elevate.pdf`,
    section: 'Report Navigation',
  },
  'nav-carbon': {
    id: 'nav-carbon',
    title: 'Assurance on Carbon Footprint',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-1/carbon-footprint-assurance.pdf`,
    section: 'Report Navigation',
  },
  'nav-guide': {
    id: 'nav-guide',
    title: 'User Guide to the Report',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-1/user-guide.pdf`,
    section: 'Report Navigation',
  },
  'nav-intro': {
    id: 'nav-intro',
    title: 'Introduction',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-1/introduction.pdf`,
    section: 'Report Navigation',
  },
  'nav-about': {
    id: 'nav-about',
    title: 'About the Report',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-1/about-the-report.pdf`,
    section: 'Report Navigation',
  },
  'co-lbf': {
    id: 'co-lbf',
    title: 'We are LB Finance',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-2/we-are-lb-finance.pdf`,
    section: 'The Company',
  },
  'co-socio': {
    id: 'co-socio',
    title: 'Building Socio-economic Prosperity',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-2/socio-economic-prosperity.pdf`,
    section: 'The Company',
  },
  'co-awards': {
    id: 'co-awards',
    title: 'Awards and Accolades',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-2/awards-accolades.pdf`,
    section: 'The Company',
  },
  'co-finhi': {
    id: 'co-finhi',
    title: 'Financial Highlights',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-2/financial-highlights.pdf`,
    section: 'The Company',
  },
  'co-nonfin': {
    id: 'co-nonfin',
    title: 'Non-Financial Highlights',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-2/non-financial-highlights.pdf`,
    section: 'The Company',
  },
  'co-strat': {
    id: 'co-strat',
    title: 'Strategic Journey',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-2/strategic-journey.pdf`,
    section: 'The Company',
  },
  'co-snap': {
    id: 'co-snap',
    title: 'A Snapshot of 2024/25',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-2/snapshot-2024-25.pdf`,
    section: 'The Company',
  },
  'mda-chair': {
    id: 'mda-chair',
    title: "Chairman’s Remarks",
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-3/chairmans-remarks.pdf`,
    section: 'Management Discussion and Analysis',
  },
  'mda-md': {
    id: 'mda-md',
    title: "Managing Director’s Review",
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-3/md-review.pdf`,
    section: 'Management Discussion and Analysis',
  },
  'mda-bmvc': {
    id: 'mda-bmvc',
    title: 'Business Model & Value Creation',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-3/business-model-value-creation.pdf`,
    section: 'Management Discussion and Analysis',
  },
  'mda-oe': {
    id: 'mda-oe',
    title: 'Operating Environment',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-3/operating-environment.pdf`,
    section: 'Management Discussion and Analysis',
  },
  'mda-ise': {
    id: 'mda-ise',
    title: 'Integrated Stakeholder Engagement',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-3/stakeholder-engagement.pdf`,
    section: 'Management Discussion and Analysis',
  },
  'mda-mat': {
    id: 'mda-mat',
    title: 'Materiality',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-3/materiality.pdf`,
    section: 'Management Discussion and Analysis',
  },
  'mda-ltss': {
    id: 'mda-ltss',
    title: 'Long-term Sustainability Strategies',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-3/sustainability-strategies.pdf`,
    section: 'Management Discussion and Analysis',
  },
  'mda-b25': {
    id: 'mda-b25',
    title: 'Beyond 2025',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-3/beyond-2025.pdf`,
    section: 'Management Discussion and Analysis',
  },
  'mda2-web': {
    id: 'mda2-web',
    title: 'The Web of Life: Weaving Sustainability',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/The Web of Life-Weaving Sustainability.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-lead': {
    id: 'mda2-lead',
    title: 'Leading the Change',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/leading-the-change.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-gov': {
    id: 'mda2-gov',
    title: 'Sustainability Governance',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/sustainability-governance.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-pledge': {
    id: 'mda2-pledge',
    title: 'Sustainability Pledges',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/sustainability-pledges.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-ops': {
    id: 'mda2-ops',
    title: 'Responsible Operations',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/responsible-operations.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-green': {
    id: 'mda2-green',
    title: 'Green Building Practices',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/green-building-practices.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-prod': {
    id: 'mda2-prod',
    title: 'Responsible Products and Services',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/responsible-products-services.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-climate': {
    id: 'mda2-climate',
    title: 'Climate Risk and UN SDGs',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/Climate Risk and UN SDGs.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-esg': {
    id: 'mda2-esg',
    title: 'ESG Integration',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/ESG Integration.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-road': {
    id: 'mda2-road',
    title: 'Roadmap for Sustainable Finance',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/sustainable-finance-roadmap.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-act': {
    id: 'mda2-act',
    title: 'Activities in Sri Lanka & Myanmar',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/activities-sri-lanka-myanmar.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda2-journey': {
    id: 'mda2-journey',
    title: 'Sustainability Journey',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-4/sustainability-journey.pdf`,
    section: 'Management Discussion and Analysis - Sustainability',
  },
  'mda3-ffc': {
    id: 'mda3-ffc',
    title: 'Fortifying Financial Capital',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-5/financial-capital.pdf`,
    section: 'Management Discussion and Analysis - Capital',
  },
  'mda3-smc': {
    id: 'mda3-smc',
    title: 'Strategising Manufactured Capital',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-5/manufactured-capital.pdf`,
    section: 'Management Discussion and Analysis - Capital',
  },
  'mda3-fhc': {
    id: 'mda3-fhc',
    title: 'Framing Human Capital',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-5/human-capital.pdf`,
    section: 'Management Discussion and Analysis - Capital',
  },
  'mda3-mic': {
    id: 'mda3-mic',
    title: 'Mindscaping Intellectual Capital',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-5/intellectual-capital.pdf`,
    section: 'Management Discussion and Analysis - Capital',
  },
  'mda3-csrc': {
    id: 'mda3-csrc',
    title: 'Cultivating Social and Relationship Capital',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-5/social-relationship-capital.pdf`,
    section: 'Management Discussion and Analysis - Capital',
  },
  'mda3-nnc': {
    id: 'mda3-nnc',
    title: 'Nurturing Natural Capital',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-5/natural-capital.pdf`,
    section: 'Management Discussion and Analysis - Capital',
  },
  'mda3-busrev': {
    id: 'mda3-busrev',
    title: 'Business Review',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-5/business-review.pdf`,
    section: 'Management Discussion and Analysis - Capital',
  },
  'mda3-subs': {
    id: 'mda3-subs',
    title: 'Subsidiary Information',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-5/subsidiary-information.pdf`,
    section: 'Management Discussion and Analysis - Capital',
  },
  'cs-chair': {
    id: 'cs-chair',
    title: 'Chairman’s Message',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-6/chairmans-message.pdf`,
    section: 'Corporate Stewardship',
  },
  'cs-ids': {
    id: 'cs-ids',
    title: 'Independent Director’s Statement',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-6/independent-directors-statement.pdf`,
    section: 'Corporate Stewardship',
  },
  'cs-gov': {
    id: 'cs-gov',
    title: 'Governance Philosophy',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-6/Governance Philosophy.pdf`,
    section: 'Corporate Stewardship',
  },
  'cs-bod': {
    id: 'cs-bod',
    title: 'Board of Directors',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-6/board-of-directors.pdf`,
    section: 'Corporate Stewardship',
  },
  'cs-senior': {
    id: 'cs-senior',
    title: 'Senior Management',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-6/senior-management.pdf`,
    section: 'Corporate Stewardship',
  },
  'cs-risk': {
    id: 'cs-risk',
    title: 'Risk Management',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-6/Risk Management.pdf`,
    section: 'Corporate Stewardship',
  },
  'fin-high': {
    id: 'fin-high',
    title: 'Financial Statements Highlights',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/financial-statements-highlights.pdf`,
    section: 'Financial Information',
  },
  'fin-cal': {
    id: 'fin-cal',
    title: 'Financial Calendar',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/financial-calendar.pdf`,
    section: 'Financial Information',
  },
  'fin-audit': {
    id: 'fin-audit',
    title: 'Auditor’s Report',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/auditors-report.pdf`,
    section: 'Financial Information',
  },
  'fin-inc': {
    id: 'fin-inc',
    title: 'Income Statement',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/income-statement.pdf`,
    section: 'Financial Information',
  },
  'fin-spl': {
    id: 'fin-spl',
    title: 'Statement of Profit or Loss and Other Comprehensive Income',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/profit-loss-comprehensive-income.pdf`,
    section: 'Financial Information',
  },
  'fin-pos': {
    id: 'fin-pos',
    title: 'Financial Position',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/financial-position.pdf`,
    section: 'Financial Information',
  },
  'fin-eq': {
    id: 'fin-eq',
    title: 'Changes in Equity',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/changes-in-equity.pdf`,
    section: 'Financial Information',
  },
  'fin-cash': {
    id: 'fin-cash',
    title: 'Cash Flows',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/cash-flows.pdf`,
    section: 'Financial Information',
  },
  'fin-notes': {
    id: 'fin-notes',
    title: 'Notes to Financial Statements',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-7/notes-financial-statements.pdf`,
    section: 'Financial Information',
  },
  'supp-invest': {
    id: 'supp-invest',
    title: 'Investor Information',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/investor-information.pdf`,
    section: 'Supplementary Information',
  },
  'supp-decade': {
    id: 'supp-decade',
    title: 'Decade at a Glance',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/decade-at-glance.pdf`,
    section: 'Supplementary Information',
  },
  'supp-quarter': {
    id: 'supp-quarter',
    title: 'Quarterly & USD Financial Statements',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/quarterly-usd-statements.pdf`,
    section: 'Supplementary Information',
  },
  'supp-gov': {
    id: 'supp-gov',
    title: 'Governance Framework Compliance',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/governance-framework-compliance.pdf`,
    section: 'Supplementary Information',
  },
  'supp-gri': {
    id: 'supp-gri',
    title: 'GRI Index, SLRFS Index, SASB/UN Guidelines',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/gri-slrfs-sasb-guidelines.pdf`,
    section: 'Supplementary Information',
  },
  'supp-anti': {
    id: 'supp-anti',
    title: 'Anti-Corruption Programs',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/anti-corruption-programs.pdf`,
    section: 'Supplementary Information',
  },
  'supp-isa': {
    id: 'supp-isa',
    title: 'Independent Sustainability Assurance',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/sustainability-assurance.pdf`,
    section: 'Supplementary Information',
  },
  'supp-org': {
    id: 'supp-org',
    title: 'Organisation Chart & Glossary',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/organization-chart-glossary.pdf`,
    section: 'Supplementary Information',
  },
  'supp-corp': {
    id: 'supp-corp',
    title: 'Corporate Information & Notice of AGM',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/corporate-info-agm.pdf`,
    section: 'Supplementary Information',
  },
  'supp-feedback': {
    id: 'supp-feedback',
    title: 'Feedback Form',
    pdfPath: `${ASSETS_URL}/pdf/annual-report/section-8/feedback-form.pdf`,
    section: 'Supplementary Information',
  },
};

export const getSustainabilityRelatedSections = (): string[] => [
  'mda2-web',
  'mda2-esg',
  'mda2-climate',
  'cs-gov',
  'cs-risk',
];

export const getAllSectionIds = (): string[] => Object.keys(PDF_MAPPING);

export const getPdfPath = (sectionId: string): string | null => PDF_MAPPING[sectionId]?.pdfPath || null;

export const validateSelectedSections = (selectedSections: string[]): { valid: string[]; invalid: string[] } => {
  const valid: string[] = [];
  const invalid: string[] = [];
  selectedSections.forEach(id => {
    if (PDF_MAPPING[id]) valid.push(id);
    else invalid.push(id);
  });
  return { valid, invalid };
};