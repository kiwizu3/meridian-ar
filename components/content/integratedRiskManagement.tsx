'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import riskGovernance from '@/public/images/risk-governance.png';
import riskCulture from '@/public/images/risk-culture.png';
import riskPrincipleOverview from '@/public/images/risk-principle-overview.png';
import riskCreditProcess from '@/public/images/risk-credit-process.png';
import Image from 'next/image';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function IntegratedRiskManagement() {
  const creditRiskSeries = [
    {
      name: 'Stage 2',
      data: [140000, 160000, 175000],
    },
    {
      name: 'Stage 3',
      data: [50000, 60000, 70000],
    },
    {
      name: 'Gross NPL Ratio (%)',
      data: [4.0, 3.5, 3.0],
    },
  ];
  const creditRiskData: ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['2022', '2023', '2024'],
    },
    yaxis: [
      {
        title: {
          text: 'Rs. Mn',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Gross NPL Ratio (%)',
        },
      },
    ],
    colors: ['#008FFB', '#FF4560', '#00E396'],
    markers: {
      size: 6,
    },
  };

  const provisionSeries = [
    {
      name: 'Impairment Charges',
      data: [1000, 850, 800],
    },
    {
      name: 'Impairment Coverage Ratio (%)',
      data: [140, 136, 120],
    },
  ];

  const provisionData: ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['2022', '2023', '2024'],
    },
    yaxis: [
      {
        title: {
          text: 'Rs. Mn',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Impairment Coverage Ratio (%)',
        },
      },
    ],
    colors: ['#FF4560', '#775DD0'],
    markers: {
      size: 6,
    },
  };

  const returnsOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: ['2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: '%',
      },
    },
    colors: ['#FF4560', '#00E396'],
  };

  const returnsSeries = [
    {
      name: 'ROE',
      data: [25, 20, 15],
    },
    {
      name: 'ROA',
      data: [5, 4, 3],
    },
  ];

  const efficiencyOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: '%',
      },
    },
    colors: ['#00E396', '#FF4560'],
  };

  const efficiencySeries = [
    {
      name: 'Cost to Income Ratio',
      data: [50, 45, 40],
    },
    {
      name: 'Net Interest Margin',
      data: [20, 18, 15],
    },
  ];

  interface ImpactOnCompanyRow {
    title: string;
    riskLevel: string;
    trend: string;
    impact: string[];
    strategies: string[];
  }

  interface Section {
    sectionTitle: string;
    rows: ImpactOnCompanyRow[];
  }

  const data: Section[] = [
    {
      sectionTitle: 'Volatility in Market Variables',
      rows: [
        {
          title: 'Declining Interest Rates',
          riskLevel: '🟢',
          trend: '➡',
          impact:['Downward pressure on NII due to mismatches in rate sensitive assets and liabilities'],
          strategies: [
            'Strategically managed the rate sensitive assets and liabilities in each repricing bucket to minimise the gap',
            'Ensured timely repricing of deposit liabilities, following the market interest rate trend',
            'Secured long-term low-cost funding sources at the low interest rate environment',
          ],
        },
        {
          title: 'Volatility in Global and Local Gold Prices',
          riskLevel: '🟡',
          trend: '⬆',
          impact:['High default risk of gold loan borrowers and risk of higher losses when recovering through collateral, if price drops suddenly'],
          strategies: [
            'Promptly reacted to market price changes and maintained healthy loan to value ratio at all times',
            'Further strengthened the loan loss provision allocated for gold loan exposure',
            'Stress tests were carried out regularly to assess the impact at a further decline in gold prices',
          ],
        },
        {
          title: 'Volatility in Exchange Rate',
          riskLevel: '🟢',
          trend: '➡',
          impact:['Possible exchange rate loss related to repayment of foreign currency borrowings'],
          strategies: [
            'LBF has entered into cross currency swap, hence exchange rate risk is mitigated',
          ],
        },
        {
          title:
            'Volatility in Exchange Rate',
          riskLevel: '🟡',
          trend: '➡',
          impact:['Create volatility in gold price in local market, leading to default risk of gold loan borrowers'],
          strategies: [
            'Closely monitored exchange rate movement and its impact to local gold price and revised the advance amount swiftly',
            'Exchange rate volatility was also considered in the assessment of impairment for Gold Loan portfolio by adopting VaR methodology',
          ],
        },
        {
          title: 'Continued Restrictions on Vehicle Importation',
          riskLevel: '🟡',
          trend: '➡',
          impact:['Less opportunities for the growth of vehicle financing portfolio'],
          strategies: [
            'Leveraged on the lending opportunities in the registered vehicle financing category',
            'Strategically enhanced the lending focus on other products such as gold backed lending, digital lending, personal financing, etc.',
          ],
        },
        {
          title:
            'Increase in Government taxes',
          riskLevel: '🟢',
          trend: '➡',
          impact:['Increase in VAT created inflationary pressure, elevating default risk'],
          strategies: [
            'Adopted sound credit risk management practices such as pre/post sanctioning of loans to mitigate the risk impact',
          ],
        },
        {
          title: 'Change of NPL Definition \n\n NPL classification was tightened by reducing the number of past due days from 120 to 90 days',
          riskLevel: '🟢',
          trend: '➡',
          impact: ['Deteriorating NPL ratio'],
          strategies: [
            'Strengthened the post sanction credit follow-up process to enhance the customers repayment pattern. This enabled LBF to reduce the NPL ratio to 3.5% by 31st March 2024, which is better than the ratio of 4.5% reported 31st March 2023, prior to the NPL Classification change. The current NPL ratio is well below the industry average of 17.8% as at 31st December 2023',
          ],
        },
        {
          title: 'Low Demand For Credit \n\n Uncertainty and high interest rates deterred investment and demand for credit',
          riskLevel: '🟢',
          trend: '➡',
          impact: ['Limited potential for portfolio growth'],
          strategies: [
            'Targeted marketing of credit products to existing customers with good credit quality',
          ],
        },
        {
          title: 'High Turnover of Talented Staff \n\n Due to socio economic deterioration of the country, many talented employees migrated \n\n Headhunting by competitors',
          riskLevel: '🟡',
          trend: '⬆',
          impact:['Possible business loss/ interruption due to loss of talented staff','Negative impact on efficiency and productivity','Higher replacement costs'],
          strategies: [
            'Launched various programs to increase staff engagement',
            'Developed retention strategies for key talent',
            'Worked with universities to access talent pools',
          ],
        },
        {
          title: 'Increasing Trends in Cyber Attacks',
          riskLevel: '🟡',
          trend: '⬆',
          impact:['Possible loss of customer data or confidential company information','Possible reputational, legal and financial consequences and loss of customer confidence'],
          strategies: [
            'Established second line of defence for Information Security Risk Management',
            'Conducted continuous assessment of cyber risk, and vulnerability assessments',
            'Conducted many programs to increase awareness among employees',
            'Continuously invested to strengthen the IT security infrastructure',
          ],
        },
      ],
    },
    // {
    //   sectionTitle: 'Government Policies',
    //   rows: [
    //     {
    //       title: 'Continued Restrictions on Vehicle Importation',
    //       riskLevel: '🟡',
    //       trend: '➡',
    //       impact:['Less opportunities for the growth of vehicle financing portfolio'],
    //       strategies: [
    //         'Leveraged on the lending opportunities in the registered vehicle financing category',
    //         'Strategically enhanced the lending focus on other products such as gold backed lending, digital lending, personal financing, etc.',
    //       ],
    //     },
    //     {
    //       title:
    //         'Increase in Government taxes',
    //       riskLevel: '🟢',
    //       trend: '➡',
    //       impact:['Increase in VAT created inflationary pressure, elevating default risk'],
    //       strategies: [
    //         'Adopted sound credit risk management practices such as pre/post sanctioning of loans to mitigate the risk impact',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   sectionTitle: 'Regulatory Environment',
    //   rows: [
    //     {
    //       title: 'Change of NPL Definition \n NPL classification was tightened by reducing the number of past due days from 120 to 90 days',
    //       riskLevel: '🟢',
    //       trend: '➡',
    //       impact: ['Deteriorating NPL ratio'],
    //       strategies: [
    //         'Strengthened the post sanction credit follow-up process to enhance the customers repayment pattern. This enabled LBF to reduce the NPL ratio to 3.5% by 31st March 2024, which is better than the ratio of 4.5% reported 31st March 2023, prior to the NPL Classification change. The current NPL ratio is well below the industry average of 17.8% as at 31st December 2023',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   sectionTitle: 'Economic Slowdown',
    //   rows: [
    //     {
    //       title: 'Low Demand For Credit \n Uncertainty and high interest rates deterred investment and demand for credit',
    //       riskLevel: '🟢',
    //       trend: '➡',
    //       impact: ['Limited potential for portfolio growth'],
    //       strategies: [
    //         'Targeted marketing of credit products to existing customers with good credit quality',
    //       ],
    //     },
    //     {
    //       title: 'High Turnover of Talented Staff \n Due to socio economic deterioration of the country, many talented employees migrated \n Headhunting by competitors',
    //       riskLevel: '🟡',
    //       trend: '⬆',
    //       impact:['Possible business loss/ interruption due to loss of talented staff','Negative impact on efficiency and productivity','Higher replacement costs'],
    //       strategies: [
    //         'Launched various programs to increase staff engagement',
    //         'Developed retention strategies for key talent',
    //         'Worked with universities to access talent pools',
    //       ],
    //     },
    //   ],
    // },
    // {
    //   sectionTitle: 'Technological Advancement',
    //   rows: [
    //     {
    //       title: 'Increasing Trends in Cyber Attacks',
    //       riskLevel: '🟡',
    //       trend: '⬆',
    //       impact:['Possible loss of customer data or confidential company information','Possible reputational, legal and financial consequences and loss of customer confidence'],
    //       strategies: [
    //         'Established second line of defence for Information Security Risk Management',
    //         'Conducted continuous assessment of cyber risk, and vulnerability assessments',
    //         'Conducted many programs to increase awareness among employees',
    //         'Continuously invested to strengthen the IT security infrastructure',
    //       ],
    //     },
    //   ],
    // },
  ];

  interface CommitteeData {
    committee: string;
    rolesAndResponsibilities: string;
    moreInformation: string[];
  }

  const committeeData: CommitteeData[] = [
    {
      committee: 'Board of Directors (BOD)',
      rolesAndResponsibilities:
        'Responsible for setting in place an effective risk management function, policies and processes and regular review of risk reports to determine the risk profile of LBF. In fulfilling its responsibilities, the Board approves risk management policies, sets the risk appetite, ensures alignment between risk and strategy and reviews reports and exposures.',
      moreInformation: [
        'Meets monthly',
        'Risk Management is a regular item on the agenda',
      ],
    },
    {
      committee: 'Board Integrated Risk Management Committee (BIRMC)',
      rolesAndResponsibilities:
        'Oversight of risk management and makes recommendations to the BOD on developing and implementing risk management policies, setting the risk appetite and monitoring material risks. The Head of Risk Management and Compliance Officer report directly to BIRMC and are invitees to the meeting along with the CEO and CFO.',
      moreInformation: [
        'Meets at least every other month',
        'BIRMC report on page 192',
      ],
    },
    {
      committee: 'Board Audit Committee (BAC)',
      rolesAndResponsibilities:
        'Assist the Board to fulfil its stewardship responsibilities with regard to financial reporting requirements and information requirements of the Companies Act and other relevant financial reporting regulations and requirements. It also has oversight responsibility for reviewing the effectiveness of internal control and risk management systems. The Chief Internal Auditor directly reports to the BAC and is an invitee to the meetings along with the CEO and CFO.',
      moreInformation: ['Meets at least monthly', 'BAC report on page 188'],
    },
    {
      committee: 'Board Information Security Committee (BISC)',
      rolesAndResponsibilities:
        'The primary objective is to strengthen the information security and technology risk resilience process of LBF. The Committee assists the BOD in fulfilling its responsibilities to oversee the Company’s information security and technology risk management.',
      moreInformation: ['Meets at least quarterly', 'BISC report on page 200'],
    },
    {
      committee: 'Board Sustainability Committee (BSC)',
      rolesAndResponsibilities:
        'Supervise, on behalf of the Board, the procedures, criteria, and tactics formulated to handle sustainability risks while maximising potential opportunities. This is achieved through monitoring the Company’s performance against selected external sustainability indexes and internal metrics.',
      moreInformation: ['Meets at least quarterly', 'BSC report on page 202'],
    },
    {
      committee: 'Assets & Liability Committee (ALCO)',
      rolesAndResponsibilities:
        'Provides oversight for liquidity risk and market risk management at an operational level. It reviews cashflow forecasts to manage gaps, adequacy of contingency funding plans and stress testing results in achieving its objectives.',
      moreInformation: ['Meets at least monthly'],
    },
    {
      committee: 'Credit Committee (CC)',
      rolesAndResponsibilities:
        'This committee is accountable for day-to-day management of credit risk. As part of their duties, the Credit Committee monitors LBF’s lending portfolio and oversees the management of asset quality and recovery actions. The Committee also periodically reviews the credit policy and lending guidelines issued to business segments, vis-a-vis changing market conditions and industry dynamics.',
      moreInformation: ['Meets at least quarterly'],
    },
    {
      committee: 'IT Security & Steering Committee (ITSSC)',
      rolesAndResponsibilities:
        'Provides strategic direction and oversight to the information technology needs of LBF by ensuring business objectives and needs are been adequately addressed. The committee is also responsible for both strategic and operational aspect of information security and technology risk management. As part of their duties, the committee addresses issues on technology adoption, information security, cyber security, outsourcing, concentration and support the BISC.',
      moreInformation: ['Meets at least every other month'],
    },
    {
      committee: 'Business Continuity Management Steering Committee (BCMSC)',
      rolesAndResponsibilities:
        'BCMSC governs the Business Continuity Management System (BCMS) which ensures LBF can effectively minimise the business impact, respond and recover from disruptions, resume normal operations after any interruption. It is responsible to align BCM goals with business goals and provides strategic direction.',
      moreInformation: ['Meets when required'],
    },
    {
      committee: 'Sustainability Committee (SC)',
      rolesAndResponsibilities:
        'Formulates and reviews Company’s sustainability policy, ensuring that sustainability activities are integrated into the Company’s operations. Committee is tasked with the responsibility of steering the Company’s sustainability activities.',
      moreInformation: ['Meets when required'],
    },
  ];

  type RiskApetiteData = {
    category: string;
    subCategory: string;
    appetite: string;
    regulatory: string;
    mar24: string;
    mar23: string;
  };

  const riskApetiteData: RiskApetiteData[] = [
    {
      category: 'Credit Risk',
      subCategory: 'Gross NPL Ratio',
      appetite: '< 6%',
      regulatory: '',
      mar24: '3.54%',
      mar23: '4.45%',
    },
    {
      category: 'Credit Risk',
      subCategory: 'Net NPL Ratio',
      appetite: '< 1%',
      regulatory: '',
      mar24: '-0.79%',
      mar23: '-0.65%',
    },
    {
      category: 'Credit Risk',
      subCategory: 'Provision Coverage Ratio',
      appetite: '> 75%',
      regulatory: '',
      mar24: '122.42%',
      mar23: '114.40%',
    },
    {
      category: 'Credit Concentration Risk',
      subCategory: 'Maximum Unsecured Exposure',
      appetite: '< 2%',
      regulatory: '',
      mar24: '0.18%',
      mar23: '0.21%',
    },
    {
      category: 'Credit Concentration Risk',
      subCategory: 'Maximum Exposure to Stress Industries',
      appetite: '5%-7.5%',
      regulatory: '',
      mar24: '7.08%',
      mar23: '5.30%',
    },
    {
      category: 'Credit Concentration Risk',
      subCategory: 'Maximum Exposure to Single Borrower - Secured - Individual',
      appetite: '< 5%',
      regulatory: '< 15%',
      mar24: '1.23%',
      mar23: '1.40%',
    },
    {
      category: 'Credit Concentration Risk',
      subCategory: 'Maximum Exposure to Single Borrower - Secured - Group',
      appetite: '< 10%',
      regulatory: '< 20%',
      mar24: '1.23%',
      mar23: '1.40%',
    },
    {
      category: 'Credit Concentration Risk',
      subCategory:
        'Maximum Exposure to Single Borrower - Unsecured - Individual',
      appetite: '< 0.5%',
      regulatory: '< 1%',
      mar24: '0.06%',
      mar23: '0.03%',
    },
    {
      category: 'Credit Concentration Risk',
      subCategory: 'Maximum Aggregate Unsecured Exposure',
      appetite: '< 4%',
      regulatory: '< 5%',
      mar24: '0.80%',
      mar23: '1.04%',
    },
    {
      category: 'Credit Concentration Risk',
      subCategory: 'Maximum Exposure to Gold Loan (on net basis)',
      appetite: '30%-50%',
      regulatory: '',
      mar24: '45.33%',
      mar23: '45.83%',
    },
    {
      category: 'Credit Concentration Risk',
      subCategory: 'Maximum Accommodation to Related Party',
      appetite: '< 1%',
      regulatory: '',
      mar24: '0.02%',
      mar23: '0.03%',
    },
    {
      category: 'Capital and Leverage',
      subCategory: 'Core Capital Ratio',
      appetite: '> 12%',
      regulatory: '> 10%',
      mar24: '31.45%',
      mar23: '30.50%',
    },
    {
      category: 'Capital and Leverage',
      subCategory: 'Total Risk Weighted Capital Ratio',
      appetite: '> 16%',
      regulatory: '> 14%',
      mar24: '32.19%',
      mar23: '31.13%',
    },
    {
      category: 'Capital and Leverage',
      subCategory: 'Capital Funds to Deposits Ratio',
      appetite: '> 12%',
      regulatory: '> 10%',
      mar24: '27.77%',
      mar23: '33.43%',
    },
    {
      category: 'Liquidity Risk',
      subCategory: 'Liquid Assets to Total Savings Deposits',
      appetite: '',
      regulatory: '>15%',
      mar24: '',
      mar23: '',
    },
    {
      category: 'Liquidity Risk',
      subCategory: 'Liquid Assets to Total Fixed Deposit',
      appetite: '>12%',
      regulatory: '>10%',
      mar24: '21.02%',
      mar23: '19.31%',
    },
    {
      category: 'Liquidity Risk',
      subCategory: 'Liquid Assets to Total Outstanding Borrowings',
      appetite: '',
      regulatory: '>10%',
      mar24: '',
      mar23: '',
    },
    {
      category: 'Liquidity Risk',
      subCategory: 'Largest Single Depositor to Total Fixed Deposit',
      appetite: '< 5%',
      regulatory: '',
      mar24: '0.72%',
      mar23: '0.61%',
    },
    {
      category: 'Liquidity Risk',
      subCategory: 'Maximum Exposure to Bulk Deposits (Over Rs. 50 Mn)',
      appetite: '< 20%',
      regulatory: '',
      mar24: '12.94%',
      mar23: '11.73%',
    },
    {
      category: 'Liquidity Risk',
      subCategory: 'Deposit Renewal Ratio (Overall)',
      appetite: '>75%',
      regulatory: '',
      mar24: '81.21%',
      mar23: '78.77%',
    },
    {
      category: 'Liquidity Risk',
      subCategory: 'Deposit Renewal Ratio (Non-Bulk)',
      appetite: '> 80%',
      regulatory: '',
      mar24: '82.43%',
      mar23: '78.49%',
    },
    {
      category: 'Market Risk',
      subCategory:
        'Interest Rate Sensitivity of Liabilities (to every 1.00% increase)',
      appetite: '< 0.75%',
      regulatory: '',
      mar24: '0.71%',
      mar23: '0.61%',
    },
  ];

  type IntegratedRisk = {
    category: string;
    description: string;
    sustainability: string[];
    capitalsImpacted: string[];
    riskMonitoring: string[];
    mitigationActions: string[];
    opportunities: string[];
  };

  const integratedRiskData: IntegratedRisk[] = [
    {
      category: 'CREDIT RISK',
      description:
        'The risk of financial loss to LBF if a customer or a counterparty to a financial instrument fails to meet its contractual obligations',
      sustainability: ['EC', 'SC'],
      capitalsImpacted: ['FC', 'SC'],
      riskMonitoring: [
        'Continuous monitoring of key risk indicators attached to asset quality, concentration, provisioning and collaterals',
        'Credit portfolio analysis',
      ],
      mitigationActions: [
        'Risk based pricing',
        'Collateral support',
        'Sound credit evaluation process',
        'Conducting regular credit reviews',
        'Diversify the portfolio in terms of products, geographies, borrowers',
        'Ensure risk appetite limits are maintained',
        'Prudent provisioning approach',
      ],
      opportunities: [
        'Strategically diversify the lending portfolio to other products such as CIM digital loans, personal financing etc.',
        'Enhancing portfolio management enabling first line to react faster',
      ],
    },
    {
      category: 'INTEREST RATE RISK',
      description:
        'Potential losses arising from interest rate movements that affect the overall performance of the financial markets',
      sustainability: ['EC', 'SC'],
      capitalsImpacted: ['FC', 'SC'],
      riskMonitoring: [
        'Close monitoring of rate sensitive assets and liabilities',
        'Stress scenario impact analysis',
      ],
      mitigationActions: [
        'Timely repricing of assets and liabilities',
        'Minimise the gap between rate sensitive assets and liabilities in different repricing buckets',
      ],
      opportunities: [
        'Mobilise more savings deposits',
        'Secure long-term borrowings at low interest rates',
      ],
    },
    {
      category: 'COMMODITY PRICE RISK',
      description:
        'Potential losses arising from movements in commodity prices that affect the overall performance of the financial markets. For LBF, the relevant commodity is gold',
      sustainability: ['EC', 'SC'],
      capitalsImpacted: ['FC', 'SC'],
      riskMonitoring: [
        'Close monitoring of global and local market price movements',
        'VAR assessment',
        'Stress impact analysis',
      ],
      mitigationActions: [
        'Maintaining healthy LTV',
        'Prudent provisioning approach for Gold loan portfolio',
        'Timely auction of Gold stock',
      ],
      opportunities: ['Further strengthen the provisioning'],
    },
    {
      category: 'OPERATIONAL RISK',
      description:
        'The risk of loss resulting from inadequate or failed internal processes, people or systems, or from external events',
      sustainability: ['EC', 'SC', 'IC', 'MC', 'NC', 'HC'],
      capitalsImpacted: ['FC', 'SC', 'IC', 'MC', 'NC', 'HC'],
      riskMonitoring: [
        'Risk and Control Self-Assessment (RCSA) for fraud risk',
        'Exception monitoring',
        'Monitoring actual loss incurred and number of loss events',
        'Branch operational risk assessment',
      ],
      mitigationActions: [
        'Root cause analysis of loss / near miss incidents and introduce new controls or redesign existing controls as required',
        'Insurance',
        'Staff awareness',
        'Implementation of Mandatory Leave Policy',
        'Sound internal control system and continuous strengthening',
        'Contingency Planning',
        'Implementation of Whistle Blowing Policy and review of related incidents',
      ],
      opportunities: [
        'Continuously strengthening the internal control procedure',
        'Further expand the exception monitoring process',
        'New initiatives including career development programs to retain talented employees',
      ],
    },
  ];

  const integratedRiskData2: IntegratedRisk[] = [
    {
      category: 'LIQUIDITY RISK',
      description:
        'Inability to meet Company’s short-term contractual obligations without sustaining unacceptable losses',
      sustainability: ['FC', 'SC'],
      capitalsImpacted: ['FC', 'SC'],
      riskMonitoring: [
        'Monitoring cashflow forecast under normal and stress scenarios',
        'Close monitoring of mismatch in assets and liabilities in different maturity buckets',
        'Close monitoring of KRIs such as liquid asset ratio, deposit rollover rate, etc.',
        'Stress impact analysis',
      ],
      mitigationActions: [
        'Maintain adequate liquidity reserves',
        'Diversify funding sources',
        'Having in place a Contingency Funding Plan',
        'Manage deposit concentration',
      ],
      opportunities: [
        'Further diversification of funding allowing to access a variety of funding sources',
      ],
    },
    {
      category: 'INFORMATION SECURITY RISK',
      description:
        'Risk of potential threats exploiting vulnerabilities in information systems, processes, or assets, thereby compromising the confidentiality, integrity, or availability of sensitive information',
      sustainability: ['FC', 'SC', 'IC', 'MC', 'HC'],
      capitalsImpacted: ['FC', 'SC', 'IC', 'MC', 'HC'],
      riskMonitoring: [
        'Conduct vulnerability assessments on regular basis',
        'Privilege user access monitoring',
        'System downtime monitoring',
        'Monitoring malicious network behaviours',
      ],
      mitigationActions: [
        'Employee and customer awareness',
        'Capacity building (Invest in required Inf security solutions and acquiring skilled staff)',
      ],
      opportunities: [
        'Establishing a Security Operation Center (SOC)',
        'Enhancement of risk monitoring',
        'Strengthening the existing controls to prevent data leakage',
        'Initiatives on personal data protection in line with the Personal Data Protection Act',
      ],
    },
    {
      category: 'MODEL RISK',
      description:
        'The potential loss due to decisions based on the output of internal models, which can result from errors in the development, implementation, or use of these models',
      sustainability: ['FC', 'IC'],
      capitalsImpacted: ['FC', 'IC'],
      riskMonitoring: ['Comparison of model output with expected results'],
      mitigationActions: ['Internal and external model validation'],
      opportunities: [
        'Establish model risk governance framework',
        'Strengthening of model risk monitoring in the second line and documentation quality in the first line',
      ],
    },
    {
      category: 'SUSTAINABILITY RISK',
      description:
        'Uncertain social or environmental event of significance that, if it occurs, can cause a significant negative impact on LBF. It also includes the opportunity that may be available to the Company due to changing social or environmental factors',
      sustainability: ['EC', 'SC', 'IC', 'MC', 'NC', 'HC'],
      capitalsImpacted: ['FC', 'SC', 'IC', 'MC', 'NC', 'HC'],
      riskMonitoring: [
        'Perform internal and external audits to assess compliance with sustainability standards and regulations',
        'Use frameworks like ISO 14001 (Environmental Management) and ISO 26000 (Social Responsibility)',
        'Regularly communicate with stakeholders to understand their concerns and expectations regarding sustainability',
      ],
      mitigationActions: [
        'Ensure sustainability risks are considered in strategic decision-making processes',
        'Ethical marketing and advertising practices',
        'Solar energy at branches in addition to the use of main grid electricity',
        'Offering digital products to minimise paper consumption, customer footprint, carbon emission and to enhance efficiency through time saving measures',
        'Recruiting branch staff from its locality creating job opportunities to youth all over the country including very rural areas',
      ],
      opportunities: [
        'Introducing green financing products',
        'Increase staff awareness through targeted training initiatives to strengthen sustainable risk management within LBF',
        'Continue the solar energy program for new branches',
      ],
    },
  ];
  type keyRiskIndicator = {
    key: string;
    value2024: string;
    value2023: string;
    lfcValue: string;
  };

  const keyRiskIndicatorData: keyRiskIndicator[] = [
    {
      key: 'Gross Non Performing Advances to Total Advances',
      value2024: '3.54%',
      value2023: '4.45%',
      lfcValue: '17.76%',
    },
    {
      key: 'Net Non Performing Advances to Total Advances',
      value2024: '-0.79%',
      value2023: '-0.65%',
      lfcValue: '11.98%',
    },
    {
      key: 'Total Net Advances to Total Assets',
      value2024: '79.78%',
      value2023: '79.62%',
      lfcValue: '68.58%',
    },
    {
      key: 'Impairment Coverage Ratio',
      value2024: '122.42%',
      value2023: '114.40%',
      lfcValue: '32.53%',
    },
  ];

  const grossNPLRatioOptions: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    series: [
      {
        name: 'Gross NPL Ratio',
        data: [4, 5.5, 4.5, 4, 4],
      },
      {
        name: 'LFC Average',
        data: [11.5, 11.5, 9, 16, 18],
      },
    ],
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025'],
    },
    colors: ['#FFA500', '#800080'],
  };

  const impairmentCoverageRatioOptions: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    series: [
      {
        name: 'Impairment Coverage Ratio',
        data: [105, 100, 105, 115, 120],
      },
      {
        name: 'LFC Average',
        data: [55, 60, 70, 35, 35],
      },
    ],
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025'],
    },
    colors: ['#FFA500', '#800080'],
  };

  const stage3ImpairmentCoverageOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    series: [
      {
        name: 'Stage 3 Impairment Coverage',
        data: [30, 35, 43, 37, 58],
      },
    ],
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025'],
    },
    colors: ['#00008B'],
  };

  const stageWiseExposureOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    series: [
      {
        name: 'Stage 1',
        data: [5000, 3000, 1000, 8000, 70000, 10000],
      },
      {
        name: 'Stage 2',
        data: [0, 0, 0, 0, 5000, 15000],
      },
      {
        name: 'Stage 3',
        data: [0, 0, 500, 0, 0, 5000],
      },
    ],
    xaxis: {
      categories: [
        'Digital and Other Loan',
        'FD Draft',
        'Mortgage Loan',
        'Personal Loan',
        'Gold Loan',
        'Vehicle Finance',
      ],
    },
    colors: ['#90EE90', '#FFD700', '#8B4513'],
  };

  const collateralDistributionOptions: ApexOptions = {
    chart: {
      type: 'donut',
      height: 350,
    },
    series: [48.8, 44, 3, 2, 2, 0.2],
    labels: [
      'Vehicles and Machinery',
      'Gold',
      'Immovable Properties',
      'Guarantees',
      'Deposits',
      'Unsecured Loans',
    ],
    colors: ['#1E90FF', '#00CED1', '#FF69B4', '#FF6347', '#32CD32', '#808080'],
  };

  const creditProcessData = [
    {
      process: 'Loan Origination',
      objective:
        "Assess borrower's ability to meet obligations and determine suitable terms and conditions including pricing and timing of repayments in line with ALCO determinations. This is a critical control and the principal means of credit risk management.",
      procedure: [
        'Investigation of assets and review of documentary evidence, references, income sources, and past payment history',
        'Assess counterparty risk with internal risk scoring models',
        'Loan is approved based on the Delegation of Authority and large exposures are approved by the Credit Committee',
      ],
      responsibleDepartment: 'Credit Department',
    },
    {
      process: 'Loan Documentation and Disbursement',
      objective: 'Facilitate efficient disbursement process',
      procedure: [
        'Ensure adherence to approved procedures in credit manual',
        'Disbursement',
      ],
      responsibleDepartment: [
        'Credit Operations Department',
        'Finance Department',
      ],
    },
    {
      process: 'Post Disbursement Review',
      objective: 'Monitor and follow up on loan repayment',
      procedure: [
        'Initial monitoring',
        'Recovery and collections',
        'Asset quality performance review',
      ],
      responsibleDepartment: [
        'Credit Department',
        'Recoveries Department',
        'Risk Management Department',
      ],
    },
  ];

  // Product Concentration Data
  const productConcentrationSeries = [44, 24, 19, 6, 3, 4];
  const productConcentrationOptions: ApexOptions = {
    chart: { type: 'donut' },
    labels: [
      'Vehicle Loans',
      'Gold Loans',
      'Lease',
      'Personal Loan',
      'Power Draft',
      'Mortgage Loans',
    ],
    colors: ['#24CCAD', '#FFBD2F', '#5675E6', '#FF725B', '#FF6F61', '#5B5B5B'],
    legend: { position: 'bottom' },
  };

  // Geographical Concentration Data
  const geographicalConcentrationSeries = [47, 9, 9, 8, 7, 6, 4, 4];
  const geographicalConcentrationOptions: ApexOptions = {
    chart: { type: 'donut' },
    labels: [
      'Western',
      'Central',
      'North Western',
      'Southern',
      'Sabaragamuwa',
      'North Central',
      'Uva',
      'Eastern',
      'Northern',
    ],
    colors: ['#24CCAD', '#FFBD2F', '#5675E6', '#FF725B', '#FF6F61', '#5B5B5B'],
    legend: { position: 'bottom' },
  };

  // Industry Concentration Data
  const industryConcentrationSeries = [
    {
      name: '2024',
      data: [17, 17, 14, 11, 9, 8, 5, 4, 4, 4, 3, 3, 2],
    },
    {
      name: '2023',
      data: [23, 19, 12, 11, 10, 5, 4, 4, 4, 3, 2, 1, 1],
    },
  ];
  const industryConcentrationOptions: ApexOptions = {
    chart: { type: 'bar', stacked: true },
    xaxis: {
      categories: [
        'Consumption',
        'Agriculture, Forestry and Fishing',
        'Wholesale and Retail Trade',
        'Manufacturing',
        'Arts, Entertainment and Recreation',
        'Health Care, Social Services and Support Services',
        'Transportation and Storage',
        'Professional, Scientific and Technical Activities',
        'Construction and Infrastructure Development',
        'Financial Services',
        'Education',
        'Tourism',
        'Information Technology and Communication',
      ],
    },
    colors: ['#24CCAD', '#FFBD2F', '#5675E6', '#FF725B', '#FF6F61', '#5B5B5B'],
    legend: { position: 'bottom' },
  };

  const borrowerChartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Top 20 Customers', 'Other Customers'],
    colors: ['#CADBE7', '#004882'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const borrowerChartSeries = [1, 99];

  const statutoryRatioOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: ['2019', '2020', '2021', '2022', '2023'],
    },
    colors: ['#F49F1C', '#8B5CF6'], // Color for the lines
    stroke: {
      width: 2,
    },
    legend: {
      position: 'top',
    },
  };

  const statutoryRatioSeries = [
    {
      name: 'Statutory Liquid Asset Ratio',
      data: [10, 12, 14, 18, 20],
    },
    {
      name: 'Statutory requirement',
      data: [7, 7, 8, 10, 11],
    },
  ];

  // Data and configuration for Net Liquidity Gap
  const liquidityGapOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    xaxis: {
      categories: ['On Demand', '0-3M', '3-12M', '1-5Y', 'Over 5Y'],
    },
    yaxis: [
      {
        title: {
          text: 'Net Gap',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Cumulative Gap (Rs. Mn)',
        },
      },
    ],
    colors: ['#1E40AF', '#22C55E', '#F97316', '#FBBF24'],
    legend: {
      position: 'top',
    },
  };

  const liquidityGapSeries = [
    {
      name: 'Net Liquidity Gap-FY23',
      data: [20000, -5000, 10000, 15000, 5000],
    },
    {
      name: 'Net Liquidity Gap-FY24',
      data: [15000, -7000, 12000, 17000, 3000],
    },
    {
      name: 'Cumulative Gap-FY23',
      type: 'line',
      data: [20000, 15000, 25000, 40000, 45000],
    },
    {
      name: 'Cumulative Gap-FY24',
      type: 'line',
      data: [15000, 8000, 20000, 37000, 40000],
    },
  ];

  // Data and configuration for Funding Diversification
  const fundingDiversificationOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Deposits', 'Equity', 'Due to Banks', 'Other Borrowed funds'],
    colors: ['#10B981', '#F59E0B', '#3B82F6', '#D1D5DB'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const fundingDiversificationSeries = [63, 23, 11, 3]; // Percentages for each segment

  // Data and configuration for Deposit Renewal Ratio
  const depositRenewalOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: [
        'Apr-23',
        'May-23',
        'Jun-23',
        'Jul-23',
        'Aug-23',
        'Sep-23',
        'Oct-23',
        'Nov-23',
        'Dec-23',
        'Jan-24',
        'Feb-24',
        'Mar-24',
      ],
    },
    colors: ['#F59E0B'], // Color for the line
    stroke: {
      width: 2,
    },
  };

  const depositRenewalSeries = [
    {
      name: 'Deposit Renewal Ratio',
      data: [80, 82, 78, 85, 90, 87, 88, 85, 83, 86, 87, 84],
    },
  ];

  const interestRateOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Apr-23',
        'May-23',
        'Jun-23',
        'Jul-23',
        'Aug-23',
        'Sep-23',
        'Oct-23',
        'Nov-23',
        'Dec-23',
        'Jan-24',
        'Feb-24',
      ],
    },
  };

  const interestRateSeries = [
    {
      name: 'AWPR',
      data: [25, 24, 22, 18, 16, 14, 12, 10, 8, 6, 5],
    },
    {
      name: '364 Day Treasury Bill Rate',
      data: [28, 26, 24, 20, 18, 16, 14, 12, 10, 8, 7],
    },
  ];

  // Portfolio LTV and Gold Price Chart Data
  const portfolioLTVOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Apr-23',
        'May-23',
        'Jun-23',
        'Jul-23',
        'Aug-23',
        'Sep-23',
        'Oct-23',
        'Nov-23',
        'Dec-23',
        'Jan-24',
        'Feb-24',
      ],
    },
    yaxis: [
      {
        title: {
          text: 'USD',
        },
      },
      {
        opposite: true,
        title: {
          text: '%',
        },
      },
    ],
  };

  const portfolioLTVSeries = [
    {
      name: 'Weighted Avg. LTV (%)',
      data: [70, 69, 70, 68, 70, 71, 70, 69, 71, 72, 73],
    },
    {
      name: 'Global gold price USD',
      data: [2400, 2300, 2200, 2150, 2100, 2200, 2300, 2250, 2300, 2350, 2450],
    },
  ];

  // Exchange Rate Chart Data
  const exchangeRateOptions: ApexOptions = {
    chart: {
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Apr-23',
        'May-23',
        'Jun-23',
        'Jul-23',
        'Aug-23',
        'Sep-23',
        'Oct-23',
        'Nov-23',
        'Dec-23',
        'Jan-24',
        'Feb-24',
      ],
    },
  };

  const exchangeRateSeries = [
    {
      name: 'LKR/USD',
      data: [340, 336, 330, 324, 322, 318, 314, 310, 308, 304, 300],
    },
  ];

  const lossesRecoveriesOptions: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    colors: ['#0A3D5F', '#58B78C'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025'],
    },
    yaxis: {
      title: { text: 'Rs.Mn' },
    },
    legend: { position: 'top' },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
      },
    },
  };

  const lossesRecoveriesSeries = [
    {
      name: 'Operational Losses',
      data: [10, 20, 30, 40, 50],
    },
    {
      name: 'Recoveries',
      data: [5, 15, 10, 20, 40],
    },
  ];

  const riskByTypesOptions: ApexOptions = {
    chart: {
      type: 'donut',
      toolbar: { show: false },
    },
    labels: ['Internal Fraud', 'External Fraud', 'Loss from natural causes'],
    colors: ['#58B78C', '#12A1C0', '#0A3D5F'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: '2024',
            },
          },
        },
      },
    },
  };

  const riskByTypesSeries = [21, 12, 79];

  const lossIncidentsOptions: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025'],
    },
    yaxis: {
      title: { text: 'No.' },
    },
    colors: ['#EFB159'],
  };

  const lossIncidentsSeries = [
    {
      name: 'No of Loss Incidents',
      data: [160, 120, 80, 100, 130],
    },
  ];

  interface TotalCapital {
    item: string;
    fy202324: string;
    fy202223: string;
  }

  const totalCapitalData: TotalCapital[] = [
    {
      item: 'Tier 1 Capital',
      fy202324: '42,319,559',
      fy202223: '36,514,610',
    },
    {
      item: 'Total Capital',
      fy202324: '43,321,826',
      fy202223: '37,261,024',
    },
    {
      item: 'Total Risk Weighted Amount',
      fy202324: '134,578,311',
      fy202223: '119,700,901',
    },
    {
      item: 'Risk Weighted Amount for Credit Risk',
      fy202324: '108,812,884',
      fy202223: '97,344,063',
    },
    {
      item: 'Risk Weighted Amount for Operational Risk',
      fy202324: '25,765,428',
      fy202223: '22,356,838',
    },
    {
      item: 'Regulatory Minimum Tier 1 Ratio',
      fy202324: '10.00%',
      fy202223: '10.00%',
    },
    {
      item: 'Company’s Tier 1 Capital Ratio',
      fy202324: '31.45%',
      fy202223: '30.50%',
    },
    {
      item: 'Regulatory Minimum Total Capital Ratio',
      fy202324: '14.00%',
      fy202223: '14.00%',
    },
    {
      item: 'Company’s Total Capital Ratio',
      fy202324: '32.19%',
      fy202223: '31.13%',
    },
  ];

  interface ComputationCapital {
    item: string;
    fy202324: string;
    fy202223: string;
    isHeader?: boolean;
    isSubHeader?: boolean;
  }

  const computationTotalCapitalData: ComputationCapital[] = [
    { item: 'Tier I capital', fy202324: '', fy202223: '', isHeader: true },
    { item: 'Stated capital', fy202324: '43,671,619', fy202223: '37,054,375' },
    {
      item: 'Non-cumulative, Non-redeemable Preference Shares',
      fy202324: '838,282',
      fy202223: '838,282',
    },
    { item: 'Reserve fund', fy202324: '9,017,981', fy202223: '8,539,798' },
    {
      item: 'Audited retained earnings/(losses)',
      fy202324: '33,815,357',
      fy202223: '27,676,295',
    },
    {
      item: '(less) Revaluation gains/surplus of investment property',
      fy202324: '-',
      fy202223: '-',
    },
    {
      item: 'General and other disclosed reserves',
      fy202324: '-',
      fy202223: '-',
    },
    {
      item: "Current year's profit/(losses)",
      fy202324: '-',
      fy202223: '-',
    },
    {
      item: 'Adjustments to Tier I capital',
      fy202324: '',
      fy202223: '',
      isSubHeader: true,
    },
    { item: 'Goodwill (net)', fy202324: '1,352,060', fy202223: '539,766' },
    {
      item: 'Other intangible assets (net)',
      fy202324: '20,701',
      fy202223: '22,629',
    },
    {
      item: 'Other Comprehensive Income losses',
      fy202324: '45,551',
      fy202223: '46,750',
    },
    { item: 'Deferred tax assets (net)', fy202324: '927,914', fy202223: '-' },
    {
      item: 'Shortfall of the cumulative impairment to total provisions and interest in suspense',
      fy202324: '-',
      fy202223: '-',
    },
    {
      item: '50% of investment in banking and financial subsidiary companies',
      fy202324: '349,468',
      fy202223: '460,999',
    },
    {
      item: '50% of investment in other banking and financial institutions',
      fy202324: '8,426',
      fy202223: '9,388',
    },
    {
      item: 'Shortfall of capital in financial subsidiaries',
      fy202324: '-',
      fy202223: '-',
    },
    { item: 'SLFRS 9 day one Impact Adjustment', fy202324: '-', fy202223: '-' },
    {
      item: 'Tier I Capital (after adjustments)',
      fy202324: '42,319,559',
      fy202223: '36,514,610',
      isSubHeader: true,
    },
    { item: 'Tier 2 Capital', fy202324: '', fy202223: '', isHeader: true },
    {
      item: 'Instruments qualified as Tier 2 capital',
      fy202324: '-',
      fy202223: '-',
    },
    { item: 'Revaluation gains', fy202324: '-', fy202223: '-' },
    {
      item: 'General provisions /collective impairment allowances',
      fy202324: '1,360,161',
      fy202223: '1,216,801',
    },
    {
      item: 'Eligible Tier 2 Capital',
      fy202324: '1,360,161',
      fy202223: '1,216,801',
      isSubHeader: true,
    },
    {
      item: 'Total Adjustments to eligible Tier 2 Capital',
      fy202324: '357,894',
      fy202223: '470,387',
      isSubHeader: true,
    },
    {
      item: '50% of investment in banking and financial subsidiary companies',
      fy202324: '349,468',
      fy202223: '460,999',
    },
    {
      item: '50% of investment in other banking and financial institutions',
      fy202324: '8,426',
      fy202223: '9,388',
    },
    {
      item: 'Eligible Tier 2 Capital after adjustments',
      fy202324: '1,002,267',
      fy202223: '746,414',
      isSubHeader: true,
    },
    {
      item: 'Total Capital',
      fy202324: '43,321,826',
      fy202223: '37,261,024',
      isSubHeader: true,
    },
  ];

  const capitalRequirementOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: [
      'Capital requirement for Credit Risk',
      'Capital requirement for Op Risk',
      'Capital cushion',
    ],
    colors: ['#009CAB', '#00C1DE', '#3D65A4'],
    legend: {
      show: true,
      position: 'right',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: false,
            },
            total: {
              show: false,
            },
          },
        },
      },
    },
  };

  const capitalRequirementSeries = [55, 8, 37];

  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8">
      {/* Page 1 starts */}
      <h2 className="text-xl font-semibold mb-6">Risk Management Highlights</h2>
      <div className=" bg-white text-blue rounded-lg p-6">
        As a leading player in Sri Lanka&#39;s Non-Bank Financial Institutions
        sector, risk management is an integral part of our business model,
        maintaining a careful balance between profitability, growth aspirations
        and financial stability. This report provides an overview of how the
        Board discharges its duty to manage risks effectively.
      </div>
      <div className="w-full bg-[#cfa35b] rounded-lg py-2 px-2">
        <h2 className="text-xl font-semibold text-white">
          RISK PROFILE & HIGHLIGHTS
        </h2>
      </div>
      <div className="w-full bg-[#4e70b7] flex flex-row justify-center rounded-lg py-2">
        <h2 className="text-xl font-semibold text-white">Asset Quality</h2>
      </div>
      <div className=" bg-white text-blue rounded-lg p-6">
        Credit risk is the largest exposure for LBF and significant resources
        are allocated to manage this key risk. Elevated credit risk was
        carefully managed to reduce the same with success. As a result, LBF has
        the lowest Non-Performing loan ratio in the LFC sector with adequate
        provision coverage
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className=" bg-white text-blue rounded-lg p-6">
          <h3 className="text-lg font-bold">Credit Risk Exposure</h3>
          {/* <ApexChart
            options={creditRiskData}
            series={creditRiskSeries}
            type="bar"
            height={350}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/creditRiskExposure.png"
            alt="Credit Risk Exposure"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        <div className=" bg-white text-blue rounded-lg p-6">
          <h3 className="text-lg font-bold">Adequacy of Provisions</h3>
          {/* <ApexChart
            options={provisionData}
            series={provisionSeries}
            type="bar"
            height={350}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/adequacyOfProvisions.png"
            alt="Adequacy of Provisions"
            className="w-full mb-4 rounded-lg"
          />
        </div>
      </div>
      <div className="w-full bg-[#69c17a] flex flex-row justify-center rounded-lg py-2">
        <h2 className="text-xl font-semibold text-white">
          Liquidity & Capital Management
        </h2>
      </div>
      <div className=" bg-white text-blue rounded-lg p-6">
        Liquidity and capital adequacy are key to financial stability of LBF and
        is carefully monitored to uphold the trust and confidence of our
        stakeholders. Relevant regulatory ratios are well above the minimum
        regulatory requirement, reflecting prudent management. LBF&#39;s capital
        adequacy ratios stand well above the LFC average, reflecting its robust
        risk absorption capacity.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white text-black p-4 rounded-lg">
          <h3 className="text-lg font-bold">Liquidity</h3>
          {/* <ApexChart
            options={creditRiskData}
            series={creditRiskSeries}
            type="bar"
            height={350}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/liquidity.png"
            alt="Liquidity"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        <div className="bg-white text-black p-4 rounded-lg">
          <h3 className="text-lg font-bold">Capital Adequacy</h3>
          {/* <ApexChart
            options={creditRiskData}
            series={creditRiskSeries}
            type="bar"
            height={350}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/capitalAdequacy.png"
            alt="Capital Adequacy"
            className="w-full mb-4 rounded-lg"
          />
        </div>
      </div>
      <div className="w-full bg-[#9b4c87] flex flex-row justify-center rounded-lg py-2">
        <h2 className="text-xl font-semibold text-white">Earnings</h2>
      </div>
      <div className=" bg-white text-blue rounded-lg p-6">
        Effective management of market risk variables and the Company&#39;s cost
        profile is reflected in the earnings ratios and efficiency ratios Amidst
        the significant decrease in interest rates, LBF has managed to enhance
        its Net Interest Margin through effective risk management strategies
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white text-black p-4 rounded-lg">
          <h3 className="text-lg font-bold">Returns</h3>
          {/* <ApexChart
            options={returnsOptions}
            series={returnsSeries}
            type="line"
            height={350}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/returns.png"
            alt="Returns"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        <div className="bg-white text-black p-4 rounded-lg">
          <h3 className="text-lg font-bold">Efficiency</h3>
          {/* <ApexChart
            options={efficiencyOptions}
            series={efficiencySeries}
            type="line"
            height={350}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/efficiency.png"
            alt="Efficiency"
            className="w-full mb-4 rounded-lg"
          />
        </div>
      </div>
      {/* Page 1 ends */}

      {/* Page 2 starts */}

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {/* Key Improvements in 2023/24 */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">
            Key Improvements in 2023/24
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Established second line of defence for Information Technology and
              Security risk management
            </li>
            <li>
              Established the IT risk register and continued to monitor the
              status of action plans to mitigate the risks
            </li>
            <li>
              Compiled the first Internal Capital Adequacy Assessment Process
              (ICAAP) Report of LBF and submitted for the review of the
              Regulator
            </li>
            <li>
              Performed a comprehensive review of KRIs for appropriateness
            </li>
            <li>
              Introduced new risk appetite limits to better manage the emerging
              risks and opportunities
            </li>
            <li>
              Strengthened the Risk and Control Self-Assessment (RCSA) process
              for fraud risk
            </li>
            <li>Established an automated exception monitoring process</li>
            <li>
              Enhanced the regular risk reporting process to BIRMC and Board
            </li>
            <li>
              Continued to maintain the risk register and monitored the action
              plans to address identified risks effectively
            </li>
            <li>
              Adopted a new methodology for branch operational risk assessment
              covering all operational risk types under Basel classification
            </li>
            <li>
              Strengthened the stress testing process by increasing the
              frequencies and reviewing related scenarios and assumptions to
              reflect the changes in the operating environment
            </li>
            <li>
              Continued to review and update risk management policies and
              frameworks
            </li>
            <li>
              Facilitated BIRMC to assess the effectiveness of management
              committees
            </li>
            <li>
              Conducted Money Laundering and Terrorist Financing (ML & TF) risk
              assessment for the overall company, customers, products and
              processes adopting enhancements to the scoring methodology
            </li>
            <li>
              Constituted a new Board subcommittee to oversee the sustainability
              risk management
            </li>
          </ul>
        </div>

        {/* Priorities for 2024/25 */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Priorities for 2024/25</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Strengthen asset quality through enhanced credit underwriting
              practices by leveraging on insights gained at more frequent
              portfolio reviews
            </li>
            <li>Establish a model risk governance framework</li>
            <li>
              Contribute towards the Company’s profitability objectives by
              providing information on risk adjusted returns; facilitating for
              informed decision making
            </li>
            <li>
              Further strengthen and expand the exception monitoring process
            </li>
            <li>
              Further explore innovative options to minimise the gap between
              rate sensitive assets and rate sensitive liabilities
            </li>
            <li>Further strengthen information security risk management</li>
            <li>
              Enhance focus on digital products promoting sustainability risk
              management
            </li>
            <li>Manage product concentration</li>
            <li>
              Sharpen the attention on addressing sustainability risks and
              capitalising on opportunities
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-white">
        RISKS MANAGEMENT REVIEW
      </h2>
      <div className=" bg-white text-blue rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue pb-2">RISK LANDSCAPE</h2>
        <p>
          Managing risk was a key priority as the movement of key risk variables
          were uncertain and risks remained elevated as we commenced the year
          with significant economic stress. The uncertainty regarding the
          Domestic Debt Optimisation was resolved by end June 2023 without a
          significant impact to the stability of the financial services sector,
          easing significant stress in financial markets. Interest rates moved
          down sharply with policy rates declining by 700 basis points while
          benchmark indicators such as the 364 day Treasury Bill Rate and
          Average Weighted Prime Rate (AWPR) declined by over 1,000 basis points
          reflecting the volatility of key market risk drivers. Inflation which
          reached 73.7% in September 2022 was on a downward trend with targeted
          monetary policy interventions and moved from 49.2% to 2.5% during the
          financial year. As a whole, these changes contributed to greater
          economic stability by the close of Q1 2023/24 and Sri Lanka commenced
          a recovery recording positive growth for the next two quarters with
          all three sectors of the economy contributing to growth. A resurgence
          in tourist arrivals and migrant worker remittances together with IMF
          Extended Fund Facility eased foreign exchange liquidity, supporting
          appreciation of the rupee by 9%. Cautious optimism buoyed growth in Q4
          2023/24 with even exports recording a sharp increase in March 2024.
          Changes in key areas impacting risk management are set out in the
          table below:
        </p>
      </div>
      <div>
        {data.map((section, sectionIndex) => (
          <div key={sectionIndex} className="overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left overflow-x-auto">
                <thead>
                  <tr>
                    <th className="p-2"></th>
                    <th className="border border-white p-2">
                      Impact on the Company
                    </th>
                    <th className="border border-white p-2">Risk Level</th>
                    <th className="border border-white p-2">Trend</th>
                    <th className="border border-white p-2">
                      Strategies Adopted to Mitigate
                    </th>
                  </tr>
                </thead>
                <tbody>
                {section.rows.map((row, rowIndex) => (
                  <>
                  {rowIndex === 0 && (
                    <tr key={rowIndex}>
                      <td className="border border-white p-2 bg-[#7e90c8]" colSpan={5}>Volatility in Market Variables</td> 
                    </tr>
                  )}
                  {rowIndex === 4 && (
                    <tr key={rowIndex}>
                      <td className="border border-white p-2 bg-[#7e90c8]" colSpan={5}>Government Policies</td> 
                    </tr>
                  )}
                  {rowIndex === 6 && (
                    <tr key={rowIndex}>
                      <td className="border border-white p-2 bg-[#7e90c8]" colSpan={5}> Regulatory Environment</td> 
                    </tr>
                  )}
                  {rowIndex === 7 && (
                    <tr key={rowIndex}>
                      <td className="border border-white p-2 bg-[#7e90c8]" colSpan={5}>Economic Slowdown </td> 
                    </tr>
                  )}
                  {rowIndex === 9 && (
                    <tr key={rowIndex}>
                      <td className="border border-white p-2 bg-[#7e90c8]" colSpan={5}>Technological Advancement</td> 
                    </tr>
                  )}
                    <tr key={rowIndex}>
                      <td className="border border-white p-2 whitespace-pre-line">{row.title}</td>
                      <td className="border border-white p-2">
                      <ul className='list-outside list-disc pl-6'>
                          {row.impact.map((impact, impactIndex) => (
                            <li key={impactIndex}>{impact}</li>
                          ))}
                        </ul></td>
                      <td className="border border-white p-2">
                        {row.riskLevel}
                      </td>
                      <td className="border border-white p-2">{row.trend}</td>
                      <td className="border border-white p-2">
                        <ul className='list-outside list-disc pl-6'>
                          {row.strategies.map((strategy, strategyIndex) => (
                            <li key={strategyIndex}>{strategy}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-white text-blue rounded-lg p-6">
        While we expect the year ahead to have greater stability and growth, we
        remain vigilant for early warning signs, particularly as we commence
        growth of credit portfolios with narrower spreads to those in the
        previous year. Key sources of uncertainty remaining in 2024 include the
        finalisation of foreign debt restructuring and the elections. The
        buoyancy and the resilience of the country&#39;s economy is encouraging
        and we are on course to consolidating the growth in 2024 with high
        levels of vigilance.
      </div>
      <div className='md:flex justify-around'>
        <div className='flex items-center gap-6'><div className='bg-[#ffd654] w-4 h-4 rounded-full'/><p>Medium</p></div>
        <div className='flex items-center gap-6'><div className='bg-[#00d271] w-4 h-4 rounded-full'/><p>Low</p></div>
        <div className='flex items-center gap-6'><p>⬆</p><p>Increased trend</p></div>
        <div className='flex items-center gap-6'><p>➡</p><p>No significant change</p></div>
      </div>
      <h2 className="text-xl font-semibold text-white">RISKS GOVERNANCE</h2>
      <div className=" bg-white text-blue rounded-lg p-6">
        LBF&#39;s risk governance structure clarifies the roles and
        responsibilities for risk management and focuses on key aspects of it,
        enabling high levels of expertise in these areas. The Company&#39;s risk
        governance structure is based on the Three Lines of Defence model in
        line with best practices.
      </div>
      <Image src={riskGovernance} alt="risk-governance" />
      <div className=" bg-white text-blue rounded-lg p-6">
        The Board is ultimately responsible for managing risk and is assisted by
        BIRMC who have oversight responsibility for risk management. Management
        committees use the combined experience and knowledge of the senior
        management to implement measures to manage risks within the boundaries
        of the risk management framework. The senior management implement the
        risk management framework approved by the Board in conducting day to day
        operations. The Head of Risk Management, Compliance Officer and Chief
        Information Security Officer head their respective departments which
        constitute the second line of defence. These key officials report
        directly to BIRMC to ensure the independence of these key executive
        functions.
      </div>
      <Image src={riskCulture} alt="risk-culture" />
      <div className=" bg-white text-blue rounded-lg p-6">
        The roles of Board and Management Committees related to the risk
        management function are summarised below. These committees functions as
        per the authority delegated through a Terms of Reference approved by the
        BOD.
      </div>
      <div>
        <table
          style={{ borderCollapse: 'collapse', width: '100%' }}
          className="overflow-x-auto block"
        >
          <thead>
            <tr>
              <th className="p-2"></th>
              <th className="border border-white p-2">COMMITTEE</th>
              <th className="border border-white p-2">
                ROLES & RESPONSIBILITIES
              </th>
              <th className="border border-white p-2">MORE INFORMATION</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((data, index) => (
              <tr key={index}>
                {index === 0 ? (
                  <td className="border border-white p-2 rotate-180 text-center" style={{writingMode:'vertical-lr'}} rowSpan={5}>
                    BOARD AND BOARD SUB-COMMITTEES
                  </td>
                ) : index === 5 ? (
                  <td className="border border-white p-2 rotate-180 text-center" style={{writingMode:'vertical-lr'}} rowSpan={5}>
                    MANAGEMENT COMMITTEES
                  </td>
                ) : null}
                <td className="border border-white p-2 text-left">
                  {data.committee}
                </td>
                <td className="border border-white p-2 text-left">
                  {data.rolesAndResponsibilities}
                </td>
                <td className="border border-white p-2 text-left">
                  <ul>
                    {data.moreInformation.map((info, i) => (
                      <li key={i}>{info}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-semibold text-white">RISK CULTURE</h2>
      <div className=" bg-white text-blue rounded-lg p-6">
        Effective risk management starts with risk awareness across all three
        lines of defence and LBF seeks to create a culture of risk awareness
        among all employees on aspects relating to their roles and
        responsibilities. The Risk Management Department and Compliance
        Department spend time identifying training needs and work together with
        the HR Department to ensure that these are offered to employees. The
        risk culture is also reinforced by Internal Audit and post reviews of
        risk related incidents.
      </div>
      <h2 className="text-xl font-semibold text-white">
        STRENGTHENING RISK GOVERNANCE 2023/24
      </h2>
      <div className=" bg-white text-blue rounded-lg p-6">
        <ul>
          <li>
            • Constituted new Board Sub Committee to oversee the identification
            and management of sustainability and climate related risks and
            opportunities
          </li>
          <li>
            • Strengthened the 2nd line of defence for Information Technology
            and Security Risk Management with human resource capacity building
          </li>
        </ul>
      </div>
      <h2 className="text-xl font-semibold text-white">
        RISK MANAGEMENT POLICY FRAMEWORK
      </h2>
      <div className=" bg-white text-blue rounded-lg p-6">
        LB Finance has a comprehensive risk management policy framework which is
        summarised as below. All the policies set out below are approved by the
        Board and provides guidance to the management on implementing processes
        within the Company. These policies facilitate effective identification,
        measuring, managing, monitoring and controlling of risks faced by the
        Company. The policies are reviewed annually to ensure that new
        developments are incorporated ensuring that frameworks are robust.
      </div>
      <div className="p-6 bg-gray-100">
        <div className="bg-yellow-500 p-4 rounded-t-lg text-center text-white font-bold text-lg">
          RISK MANAGEMENT POLICY FRAMEWORK
        </div>
        <div className="bg-white p-4 rounded-b-lg shadow-lg">
          <div className="text-center mb-4 font-medium text-blue">
            Overall policy documents include:
            <br /> Integrated Risk Management Framework | Risk Appetite
            Statement | Stress Testing Policy | ICAAP Policy
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-blue">
            {/* Credit Risk Column */}
            <div className="bg-sky-100 p-4 rounded-lg">
              <h3 className="text-blue-800 font-semibold mb-2">Credit Risk</h3>
              <ul className="text-sm text-blue-900">
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Credit Risk Management Framework
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Credit and Operation Manuals
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Product Development Policy
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Delegation of Authority
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Recovery Manual
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Impairment Policy
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Loan Review Procedure
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Writeoff Policy
                </li>
                <li className="py-2">Related Party Transaction Policy</li>
              </ul>
            </div>

            {/* Market Risk Column */}
            <div className="bg-lime-100 p-4 rounded-lg">
              <h3 className="text-green-800 font-semibold mb-2">Market Risk</h3>
              <ul className="text-sm text-green-900">
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Investment Policy
                </li>
                <li className="py-2">ALM and Liquidity Management Policy</li>
              </ul>
            </div>

            {/* Liquidity Risk Column */}
            <div className="bg-teal-100 p-4 rounded-lg">
              <h3 className="text-teal-800 font-semibold mb-2">
                Liquidity Risk
              </h3>
              <ul className="text-sm text-teal-900">
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  ALM and Liquidity Management Policy
                </li>
                <li className="py-2">Contingency Funding Plan</li>
              </ul>
            </div>

            {/* Operational Risk Column */}
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="text-purple-800 font-semibold mb-2">
                Operational Risk
              </h3>
              <ul className="text-sm text-purple-900">
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Operational Risk Management Framework
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Mandatory Leave Policy
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Whistleblowing Policy
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Policy on Exception Monitoring
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Process Manuals
                </li>
                <li className="py-2">
                  Business Continuity and Disaster Recovery Plan
                </li>
              </ul>
            </div>

            {/* IT Risk Column */}
            <div className="bg-amber-100 p-4 rounded-lg">
              <h3 className="text-orange-800 font-semibold mb-2">IT Risk</h3>
              <ul className="text-sm text-orange-900">
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Technology Risk Management Framework
                </li>
                <li className="border-b-1 border-blue py-2 border-opacity-15">
                  Information Security Policy
                </li>
                <li className="py-2">
                  Information Security Management Procedures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">RISK APPETITE</h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          The Risk Appetite Statements is a key policy document, communicating
          to the executive function the risk boundaries within which the LBF
          should operate. Accordingly, the management committees, Board and
          Board Sub Committees initiate mitigating activities to steer key risk
          indicators, ensuring that the overall risk profile of LBF remains
          within the specified boundaries. The Risk Appetite Statement is
          reviewed annually by BIRMC and approved by the Board. The statement
          set out regulatory limits, covenant limits and internal prudential
          limits which are monitored on monthly basis, report to BIRMC and BOD.
        </div>
      </div>
      <div>
        <table className="min-w-full border-collapse overflow-x-auto block">
          <thead>
            <tr>
              
              <th className="border border-white p-2"></th>
              <th className="border border-white p-2">Appetite</th>
              <th className="border border-white p-2">Regulatory</th>
              <th className="border border-white p-2">Mar-24</th>
              <th className="border border-white p-2">Mar-23</th>
            </tr>
          </thead>
          <tbody>
            {riskApetiteData.map((item, index) => (
              <React.Fragment key={index}>
                {index === 0 ||
                riskApetiteData[index - 1].category !== item.category ? (
                  <tr className="bg-blue-100">
                    <td className="border border-white p-2" colSpan={6}>
                      {item.category}
                    </td>
                  </tr>
                ) : null}
                <tr>
                  
                  <td className="border border-white p-2">
                    {item.subCategory}
                  </td>
                  <td className="border border-white p-2">{item.appetite}</td>
                  <td className="border border-white p-2">{item.regulatory}</td>
                  <td className="border border-white p-2">{item.mar24}</td>
                  <td className="border border-white p-2">{item.mar23}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row p-6 bg-white rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-6">
        {/* Strengthening Risk Policy Framework Section */}
        <div className="bg-sky-500 p-6 rounded-lg flex-1">
          <h2 className="text-lg font-semibold text-blue-900">
            STRENGTHENING RISK POLICY FRAMEWORK 2023/24
          </h2>
          <ul className="mt-4 text-sm text-blue-900 space-y-2">
            <li>
              • Conducted annual review of risk policy frameworks and amended as
              required to align the risk strategy with LBF&#39;s overall
              corporate strategy
            </li>
            <li>
              • Conducted a comprehensive review of KRIs for appropriateness
            </li>
            <li>
              • Reviewed the Risk Appetite Statement in line with the risk
              management capacities, business opportunities, LBF&#39;s business
              strategy and regulatory requirements
            </li>
            <li>
              • Introduced new tolerance limits for credit risk, credit
              concentration risk and market risk
            </li>
          </ul>
        </div>

        {/* Risk Management Process Section */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-amber-500">
            RISK MANAGEMENT PROCESS
          </h2>
          <p className="mt-4 text-sm text-blue">
            LBF’s risk management processes are all based on the following
            common process, although they vary considerably across key risks.
            Accordingly, all material risk types, including credit risk,
            liquidity risk, market risk, strategic risk, operational risk and
            reputational risk are managed using the risk management process set
            out below.
          </p>

          <div className="flex flex-col items-center md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-6">
            {/* Steps of Risk Management */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-lime-500 text-white rounded-full">
                  1
                </div>
                <div className="text-sm text-blue">
                  <strong>Risk Identification</strong>
                  <br />
                  Detecting new risks and vulnerabilities
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-purple-500 text-white rounded-full">
                  2
                </div>
                <div className="text-sm text-blue">
                  <strong>Risk Analysis and Measurement</strong>
                  <br />
                  Quantitative and qualitative evaluation
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-red text-white rounded-full">
                  3
                </div>
                <div className="text-sm text-blue">
                  <strong>Risk Management Decision</strong>
                  <br />
                  Risk mitigating decisions and prompt execution
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 bg-amber-500 text-white rounded-full">
                  4
                </div>
                <div className="text-sm text-blue">
                  <strong>Risk Monitoring and Reporting</strong>
                  <br />
                  Continuous and timely controlling and recording
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">
          Risk Identification
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          This is the process of determining current and potential risks to LBF
          that may stemming from internal or external environment. A good
          understanding on the risk universe is vital for early identification
          of risk sources. During the year under review, LBF exposed to new
          risks due to volatilities in the operating environment, innovations in
          financial offerings, process changes, etc. Given the strong risk
          culture within the Company, risk identification at LBF is undertaken
          by employees at all levels. In the top down approach, Company
          leadership/BOD perceive the emerging risks that could affect the
          strategic goals of LBF while in the bottom up approach, the
          operational teams identify the risk sources while performing the
          day-today business.
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">
          Risk Analysis and Measurement
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          This process focus on assessing the likelihood and severity of the
          identified risks. At LBF, a range of quantitative and qualitative
          tools are used for this purpose depending on the principal risk type.
          These include; the Risk Matrix, VaR models, Financial analysis,
          Maturity of Assets and Liabilities analysis, Sensitivity of Assets and
          Liabilities, cash flow analysis, HHI, etc. Stress impact analysis
          under stress circumstances is also performed on continuous basis. Risk
          analysis and measurement is a primary responsibility of the Risk
          Management Department of LBF.
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">
          Risk Management Decision and Execution
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          Risk treatment is a dynamic process where appropriate treatment
          methodology is selected for each assessed risk separately, to either
          accept, transfer, mitigate or avoid the risk. This involves
          redesigning of existing controls, introducing new controls, entering
          in to hedging transactions, diversifying portfolios, developing
          contingency plans, etc. LBF&#39;s Risk Management Department under the
          guidance and oversight of the Board Integrated Risk Management
          Committee (BIRMC) are tasked with developing appropriate risk
          treatment approaches.
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">
          Risk Monitoring and Reporting
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          This process is vital to ensure the adherence to established risk
          control protocols and to maintain ongoing awareness of the
          company&#39;s risk profile. At LBF, the quantifiable risks are
          monitored in comparison with the risk appetite limits. Risk Register
          serves as a primary document which comprehensively captures the
          progress of ongoing risk identification, evaluation and mitigation
          approaches. The Risk Management Department is charged with the
          responsibility of continuous risk monitoring and periodic risk
          reporting to the senior management, BIRMC and BOD.
        </div>
      </div>
      <div>
        <table
          style={{ borderCollapse: 'collapse', width: '100%' }}
          className="overflow-x-auto block w-full"
        >
          <thead>
            <tr>
              <th className="border border-white p-2">REGULAR RISK REPORTS</th>
              <th className="border border-white p-2">FREQUENCY</th>
              <th className="border border-white p-2">REPORTED TO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-white p-2">
                Risk Appetite Statement
              </td>
              <td className="border border-white p-2">Monthly </td>
              <td className="border border-white p-2">BIRMC/ BOD</td>
            </tr>
            <tr>
              <td className="border border-white p-2">Key Risk Indicators</td>
              <td className="border border-white p-2">Every other month </td>
              <td className="border border-white p-2">BIRMC</td>
            </tr>
            <tr>
              <td className="border border-white p-2">Risk Register</td>
              <td className="border border-white p-2">Quarterly</td>
              <td className="border border-white p-2">BIRMC</td>
            </tr>
            <tr>
              <td className="border border-white p-2">Risk Profile</td>
              <td className="border border-white p-2">Every other month</td>
              <td className="border border-white p-2">BIRMC/ BOD</td>
            </tr>
            <tr>
              <td className="border border-white p-2">
                Stress Testing Results
              </td>
              <td className="border border-white p-2">Every other month</td>
              <td className="border border-white p-2">BIRMC</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">
          OVERVIEW OF PRINCIPAL RISKS
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          A summary of LBF&#39;s principal risks are set out below reflecting
          their significance to the Company. A heat map of the same is presented
          alongside to illustrate the severity of their impact and likelihood of
          occurrence, relative to each other.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-3">
          <Image alt="risk-overview-principle" src={riskPrincipleOverview} />
        </div>
        <div className=" bg-white text-blue rounded-lg p-6">
          <ul>
            <li>1 Credit Risk</li>
            <li>2 Interest Rate Risk</li>
            <li>3 Commodity Price Risk</li>
            <li>4 Operational Risk</li>
            <li>5 Liquidity Risk</li>
            <li>6 Information Security Risk</li>
            <li>7 Model Risk</li>
            <li>8 Sustainability Risk</li>
          </ul>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-white">
        INTEGRATED RISK MANAGEMENT REPORT
      </h2>

      <div>
        <table className="min-w-full border-collapse overflow-x-auto block">
          <thead>
            <tr className="bg-green-200 text-left">
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Description
              </th>
              {integratedRiskData.map((risk, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border border-gray-300 font-semibold"
                >
                  {risk.category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                Description
              </td>
              {integratedRiskData.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  {risk.description}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                Sustainability Lever Impacted
              </td>
              {integratedRiskData.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  {risk.sustainability.join(', ')}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                Capitals Impacted
              </td>
              {integratedRiskData.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  {risk.capitalsImpacted.join(', ')}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                Risk Monitoring
              </td>
              {integratedRiskData.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc pl-4">
                    {risk.riskMonitoring.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                Mitigation Actions
              </td>
              {integratedRiskData.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc pl-4">
                    {risk.mitigationActions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                Opportunities / Way Forward
              </td>
              {integratedRiskData.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc pl-4">
                    {risk.opportunities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="min-w-full border-collapse w-full overflow-x-auto block">
          <thead>
            <tr className="bg-green-200 text-left">
              <th className="px-4 py-2 border border-gray-300 font-semibold"></th>
              {integratedRiskData2.map((risk, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border border-gray-300 font-semibold"
                >
                  {risk.category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium"></td>
              {integratedRiskData2.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  {risk.description}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium"></td>
              {integratedRiskData2.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  {risk.sustainability.join(', ')}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium"></td>
              {integratedRiskData2.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  {risk.capitalsImpacted.join(', ')}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium"></td>
              {integratedRiskData2.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc pl-4">
                    {risk.riskMonitoring.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium"></td>
              {integratedRiskData2.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc pl-4">
                    {risk.mitigationActions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-medium"></td>
              {integratedRiskData2.map((risk, index) => (
                <td key={index} className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc pl-4">
                    {risk.opportunities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">CREDIT RISK</h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          Credit risk mainly stems from lending and includes investment
          activities as well. It is the largest risk exposure for the Company as
          assets with exposure to credit risk accounted for Rs.193 Bn,
          equivalent to 96% of Total Assets of the Company while credit risk
          accounts for 81% of total risk weighted assets. This key exposure is
          managed in accordance with the Credit Risk Policy suite within the
          boundaries set by the Risk Appetite Statement as risks change in
          response to a dynamic risk environment.
        </div>
        <div className="p-8 bg-white text-blue my-2 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Definition, Credit Risk Components, Objective */}
            <div className="p-4 rounded shadow bg-sky-100">
              <h2 className="text-lg font-bold mb-2">Definition</h2>
              <p>
                The risk of financial loss to the Company if a customer or a
                counterparty to a financial instrument fails to meet its
                contractual obligations.
              </p>
            </div>
            <div className="p-4 rounded shadow bg-amber-100">
              <h2 className="text-lg font-bold mb-2">Credit Risk Components</h2>
              <ul className="list-disc list-inside">
                <li>Default Risk</li>
                <li>Concentration Risk</li>
                <li>Settlement Risk</li>
              </ul>
            </div>
            <div className="p-4 rounded shadow bg-violet-100">
              <h2 className="text-lg font-bold mb-2">Objective</h2>
              <p>
                Safeguard the asset quality and reduce exposures to high risk
                segments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 rounded">
        <div className="overflow-x-auto">
          <table className="w-full table-auto overflow-x-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Key Risk Indicators</th>
                <th className="border px-4 py-2">31.3.2024</th>
                <th className="border px-4 py-2">31.3.2023</th>
                <th className="border px-4 py-2">LFC AS AT 31.12.2023*</th>
              </tr>
            </thead>
            <tbody>
              {keyRiskIndicatorData.map((indicator, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center">
                    {indicator.key}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {indicator.value2024}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {indicator.value2023}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {indicator.lfcValue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='my-4'>*Source: CBSL</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-blue bg-[#f9f1ea]">
        <div className="p-4 rounded">
          {/* <h2 className="text-xl font-bold text-center mb-4">
            Gross NPL Ratio
          </h2> */}
          {/* <ApexChart
            options={grossNPLRatioOptions}
            series={grossNPLRatioOptions.series}
            type="line"
            height={250}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/grossNplRatio.png"
            alt="Efficiency"
            className="w-full mb-4 rounded-lg"
          />
          <p className="text-center mt-4">
            LBF has consistently maintained its NPL ratio below the industry
            average reflecting its focus on credit quality.
          </p>
        </div>

        <div className="p-4 rounded">
          {/* <h2 className="text-xl font-bold text-center mb-4">
            Impairment Coverage Ratio
          </h2> */}
          {/* <ApexChart
            options={impairmentCoverageRatioOptions}
            series={impairmentCoverageRatioOptions.series}
            type="line"
            height={250}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/impairmentCoverageRatio.png"
            alt="Impairment Coverage Ratio"
            className="w-full mb-4 rounded-lg"
          />
          <p className="text-center mt-4">
            LBF continued to maintain impairment coverage ratio well above the
            LFC average reflecting prudent provisioning for credit risk in an
            uncertain environment.
          </p>
        </div>

        <div className="p-4 rounded">
          {/* <h2 className="text-xl font-bold text-center mb-4">
            Stage 3 Impairment Coverage
          </h2> */}
          {/* <ApexChart
            options={stage3ImpairmentCoverageOptions}
            series={stage3ImpairmentCoverageOptions.series}
            type="bar"
            height={250}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/stage3Covarage.png"
            alt="Stage 3 Impairment Coverage"
            className="w-full mb-4 rounded-lg"
          />
          <p className="text-center mt-4">
            Stage 3 impairment coverage increased during the year reflecting
            LBF&#39;s prudent approach to provisioning.
          </p>
        </div>
        <div className="p-4 rounded">
          {/* <h2 className="text-xl font-bold text-center mb-4">
            Collateral Distribution
          </h2> */}
          {/* <ApexChart
            options={collateralDistributionOptions}
            series={collateralDistributionOptions.series}
            type="donut"
            height={400}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/collateralDistribution.png"
            alt="Collateral Distribution"
            className="w-full mb-4 rounded-lg"
          />
          <p className="text-center mt-4">
            Unsecured portfolio continued to be insignificant while 95% of the
            portfolio is secured by physical assets.
          </p>
        </div>
        <div className="p-4 rounded md:col-span-2">
          {/* <h2 className="text-xl font-bold text-center mb-4">
            Stage wise Exposure
          </h2>
          <ApexChart
            options={stageWiseExposureOptions}
            series={stageWiseExposureOptions.series}
            type="bar"
            height={400}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/stageWiseExposure.png"
            alt="Stage wise Exposure"
            className="w-full mb-4 rounded-lg"
          />
          <p className="text-center mt-4">
            Stage 3 loans are concentrated in vehicle financing and mortgage
            loans.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">
          Managing Credit Risk at LBF
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6 my-2">
          The goal of credit risk management is to maximise the Company&#39;s
          risk-adjusted rate of return by maintaining credit risk exposure
          within acceptable parameters. Credit Risk remained elevated in the
          first half of the financial year, easing gradually in line with
          economic stress. The Company has a well-structured credit process that
          spells out the guidelines and parameters within which the
          Company&#39;s credit decision process takes place. Company&#39;s
          credit approval process plays the most vital role in credit risk
          management on a day-to-day basis. The process defines the principles
          about delegation of lending authority, client selection, due diligence
          in line with the Company&#39;s risk appetite. Company uses various
          credit indicators to identify the emerging credit risks and analytical
          tools to manage such risks.
        </div>
        <Image src={riskCreditProcess} alt="risk-credit-process" />
        <div className="my-4">
          <h5>The Credit process is summarised below:</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse overflow-x-auto">
              <thead>
                <tr>
                  <th className="border border-white p-2">PROCESS</th>
                  <th className="border border-white p-2">OBJECTIVE</th>
                  <th className="border border-white p-2">PROCEDURE</th>
                  <th className="border border-white p-2">
                    RESPONSIBLE DEPARTMENT
                  </th>
                </tr>
              </thead>
              <tbody>
                {creditProcessData.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="border border-white p-2">{item.process}</td>
                    <td className="border border-white p-2">
                      {item.objective}
                    </td>
                    <td className="border border-white p-2">
                      <ul className="list-disc list-inside">
                        {item.procedure.map((proc, i) => (
                          <li key={i}>{proc}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="border border-white p-2">
                      {Array.isArray(item.responsibleDepartment) ? (
                        <ul className="list-disc list-inside">
                          {item.responsibleDepartment.map((dept, i) => (
                            <li key={i}>{dept}</li>
                          ))}
                        </ul>
                      ) : (
                        item.responsibleDepartment
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-white text-blue rounded-lg p-6 my-2">
          The NPL ratio increased at the start of the financial year due to a
          change in the definition of NPL classification. LBF improved the
          credit follow-up process after sanction and positively affected the
          repayment pattern of the customers to reduce the NPL ratio. LBF
          achieved 3.5% NPL ratio by the end of the financial year, which is
          considerably lower than the industry average. The Company has
          provision cover more than 100%, resulting a net NPL ratio of -0.8% as
          at 31st March 2024.
        </div>
        <div className=" bg-white text-blue rounded-lg p-6 my-2">
          When introducing or undertaking any new products or activities,
          related risk management procedures and controls are reviewed to ensure
          that any risks arising from the proposed activity will be within the
          Company risk appetite and that processes and controls are sufficiently
          robust prior to approval by the Board. The company has a reliable
          management information system that supports credit risk monitoring
          across multiple dimensions.
        </div>
        <h2 className="text-xl font-semibold text-white">
          Credit Concentration Risk
        </h2>
        <div className="bg-white text-blue rounded-lg p-6 my-2">
          Credit concentration risk refers to the potential financial loss that
          arises from having a large portion of credit portfolio concentrated in
          a single borrower, sector, geographic region, or type of loan. If the
          concentrated segment experiences adverse events, such as economic
          downturns, industry-specific challenges, or borrower defaults, it can
          disproportionately impact the Company’s overall financial health and
          stability.
        </div>
        <div className="bg-white text-blue rounded-lg p-6 my-2">
          LBF has adopted an approach of diversifying its credit portfolio
          across multiple characteristics of borrowers varying from industry
          sector, geography and products. Risk appetite limits are established
          to control the level of exposure and perform continuous monitoring of
          the credit portfolio ensuring proactive risk management. Robust credit
          policies and procedures are implemented to govern lending practices
          and limit exposure to high-risk segments. Regular stress testing is
          conducted to evaluate the potential impact of adverse scenarios on the
          credit portfolio, helping to identify vulnerabilities and prepare
          strategies to mitigate potential losses.
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {/* Product Concentration */}
        <div className="bg-white text-black rounded-lg p-4">
          <h2 className="text-center font-semibold mb-4">
            Product Concentration
          </h2>
          {/* <ApexChart
            options={productConcentrationOptions}
            series={productConcentrationSeries}
            type="donut"
            width="100%"
          /> */}
          <img
            src="/images/charts/coparateStuwardship/productConcentration.png"
            alt="Product Concentration"
            className="w-full mb-4 rounded-lg"
          />
          <p className="mt-4 text-center">
            Vehicle financing being the core product of LBF, the concentration
            continued to be weighted to lending secured by vehicles (vehicle
            loans, leases, and power drafts), while there is a notable
            contribution from gold loans.
          </p>
        </div>

        {/* Geographical Concentration */}
        <div className="bg-white text-black rounded-lg p-4">
          <h2 className="text-center font-semibold mb-4">
            Geographical Concentration
          </h2>
          {/* <ApexChart
            options={geographicalConcentrationOptions}
            series={geographicalConcentrationSeries}
            type="donut"
            width="100%"
          /> */}
          <img
            src="/images/charts/coparateStuwardship/geographicalConcentration.png"
            alt="Geographical Concentration"
            className="w-full mb-4 rounded-lg"
          />
          <p className="mt-4 text-center">
            The portfolio is concentrated in Western Province due to its
            substantial economic activity and high population density.
            Nevertheless, it&#39;s evident that LBF actively operates in all
            provinces.
          </p>
        </div>
      </div>

      {/* Industry Concentration */}
      <div className="bg-white text-black rounded-lg p-4 mt-8">
        <h2 className="text-center font-semibold mb-4">
          Industry Concentration
        </h2>
        {/* <ApexChart
          options={industryConcentrationOptions}
          series={industryConcentrationSeries}
          type="bar"
          width="100%"
        /> */}
        <img
          src="/images/charts/coparateStuwardship/industryConcentration.png"
          alt="Industry Concentration"
          className="w-full mb-4 rounded-lg"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full grid md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center text-blue">
          <h2 className="text-center font-bold text-lg mb-4">
            Borrower Concentration
          </h2>
          {/* <ApexChart
            options={borrowerChartOptions}
            series={borrowerChartSeries}
            type="donut"
            height={300}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/brrowerConcentration.png"
            alt="Borrower Concentration"
            className="w-full mb-4 rounded-lg"
          />
          <p className="text-center text-sm mt-4">
            Exposure to top 20 customers is minimal at 1% reflecting
            diversification of the credit portfolio across borrowers.
          </p>
        </div>
        <div className="flex flex-col justify-center text-blue">
          <h2 className="font-bold text-lg mb-4">
            STRENGTHENING CREDIT RISK IN 2023/24
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Reviewed the Credit Risk Management framework and other related
              policies and procedures
            </li>
            <li>
              Conducted credit quality review of vehicle financing portfolio
            </li>
            <li>
              Conducted detail portfolio analysis of digital loans and
              strengthen the credit underwriting and recovery processes
            </li>
            <li>
              Reviewed Risk Appetite Statement and established new risk
              tolerance limits
            </li>
            <li>Strengthened the recovery efforts with more resources </li>
            <li>
              New stress testing scenarios were introduced and strengthened the
              process
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-white">LIQUIDITY RISK</h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          Liquidity risk has been carefully monitored to ensure that the Company
          had sufficient liquidity buffers, particularly due to stresses in the
          economy over the past few years as maintaining financial stability was
          paramount. As a large player in the country&#39;s NBFI sector,
          financial stability of LBF has a significant impact on the stability
          of the financial sector in the country. Consequently, there was
          significant focus on liquidity risk by the regulator as well.
        </div>
        <div className="p-8 bg-white text-blue my-2 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Definition, Credit Risk Components, Objective */}
            <div className="p-4 rounded shadow bg-sky-100">
              <h2 className="text-lg font-bold mb-2">Definition</h2>
              <p>
                An entity&#39;s inability to meet its short term contractual
                obligations without sustaining unacceptable losses
              </p>
            </div>
            <div className="p-4 rounded shadow bg-amber-100">
              <h2 className="text-lg font-bold mb-2">Credit Risk Components</h2>
              <ul className="list-disc list-inside">
                <li>Funding Liquidity </li>
                <li>Market Liquidity</li>
              </ul>
            </div>
            <div className="p-4 rounded shadow bg-violet-100">
              <h2 className="text-lg font-bold mb-2">Objective</h2>
              <p>
                Safeguard against funding constraints that prevent growth and
                meet demands of depositors/invest
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse my-4">
            <thead>
              <tr>
                <th className="border border-white p-2">KEY RISK INDICATORS</th>
                <th className="border border-white p-2">31.3.2024</th>
                <th className="border border-white p-2">31.3.2023</th>
                <th className="border border-white p-2">
                  {' '}
                  LFC AS AT 31.12.2023 *
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="border border-white p-2">
                  Regulatory Liquid Assets to Total Assets
                </td>
                <td className="border border-white p-2 text-center">12.89%</td>
                <td className="border border-white p-2 text-center">12.13%</td>
                <td className="border border-white p-2 text-center">14.09%</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="border border-white p-2">
                  Regulatory Liquid Assets to Deposits & Borrowings
                </td>
                <td className="border border-white p-2 text-center">21.02%</td>
                <td className="border border-white p-2 text-center">19.31%</td>
                <td className="border border-white p-2 text-center">21.25%</td>
              </tr>
            </tbody>
          </table>
          <p>*Source: CBSL</p>
        </div>
        <div className=" bg-white text-blue rounded-lg p-6 my-4">
          Liquidity improved during the year as affirmed by the improvement in
          ratios compared to the previous year. This was also partly due to the
          slow credit growth due to high levels of cost in the market
        </div>
        <div className="bg-[#f9f1ea] p-6 rounded-lg shadow-lg w-full max-w-6xl grid md:grid-cols-2 gap-6 text-blue">
          {/* Statutory Liquid Asset Ratio */}
          <div className="flex flex-col">
            {/* <h2 className="text-center font-bold text-lg mb-4">
              Statutory Liquid Asset Ratio
            </h2>
            <ApexChart
              options={statutoryRatioOptions}
              series={statutoryRatioSeries}
              type="line"
              height={300}
            /> */}
            <img
              src="/images/charts/coparateStuwardship/statutoryLiquidAssetRatio.png"
              alt="Borrower Concentration"
              className="w-full mb-4 rounded-lg"
            />
            <p className="text-center text-sm mt-4">
              LB Finance maintained adequate liquidity, well above the
              regulatory requirement while optimizing returns.
            </p>
          </div>
          {/* Funding Diversification */}
          <div className="flex flex-col">
            {/* <h2 className="text-center font-bold text-lg mb-4">
              Funding Diversification
            </h2> */}
            {/* <ApexChart
              options={fundingDiversificationOptions}
              series={fundingDiversificationSeries}
              type="donut"
              width="300"
            /> */}
            <img
              src="/images/charts/coparateStuwardship/fundingDiversification.png"
              alt="Borrower Concentration"
              className="w-full mb-4 rounded-lg"
            />
            <p className="text-center text-sm mt-4">
              Funding mix maintained largely unchanged compared to last year and
              63% consists of deposits from customers.
            </p>
          </div>
          {/* Net Liquidity Gap */}
          <div className="flex flex-col md:col-span-2">
            {/* <h2 className="text-center font-bold text-lg mb-4">
              Net Liquidity Gap Based on Contractual Maturities
            </h2>
            <ApexChart
              options={liquidityGapOptions}
              series={liquidityGapSeries}
              type="bar"
              height={300}
            /> */}
            <img
              src="/images/charts/coparateStuwardship/contractualMaturities.png"
              alt="Borrower Concentration"
              className="w-full mb-4 rounded-lg"
            />
            <p className="text-center text-sm mt-4">
              Even though 0 - 3 age bracket shows a negative liquidity gap the
              fixed deposit renewal ratio above 75% and renewals of gold loans
              makes the gap positive in the actual position.
            </p>
          </div>
          {/* Deposit Renewal Ratio */}
          <div className="flex flex-col md:col-span-2">
            {/* <h2 className="text-center font-bold text-lg mb-4">
              Deposit Renewal Ratio
            </h2>
            <ApexChart
              options={depositRenewalOptions}
              series={depositRenewalSeries}
              type="line"
              height={300}
            /> */}
            <img
              src="/images/charts/coparateStuwardship/depositRenewalRatio.png"
              alt="Borrower Concentration"
              className="w-full mb-4 rounded-lg"
            />
            <p className="text-center text-sm mt-4">
              The renewal ratio was maintained above the threshold limit of 75%
              throughout the year.
            </p>
          </div>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          Liquidity Risk Management
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          Managed by LBF&#39;s Treasury, the liquidity management strategy aims
          to ensure adequate capital and liquidity buffers are in place to
          comply with the regulatory minimum requirements under normal and
          stressed conditions. In this regard, LBF&#39;s main source of funding
          comes from deposit mobilisation activities. Treasury also pursues
          diverse funding sources both locally and internationally to supplement
          the funds mobilised through savings and deposits with institutional
          borrowings and other debt instruments. LBF&#39;s Asset and Liability
          Committee (ALCO) provides oversight for the proper implementation of
          the liquidity strategy as set out in the Board approved Asset and
          Liability Management and Liquidity Management Policy. The Contingency
          Funding Plan provides a framework for LBF to evaluate increasingly
          severe liquidity situation and monitor the availability of funding
          over these scenarios. This serves as the directive that should be
          followed in a stress liquidity circumstance that disrupts day today
          funding of LBF.
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          STRENGTHENING LIQUIDITY RISK IN 2023/24
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          <ul className="list-disc list-inside">
            <li>
              Maintained the deposit renewal ratio above the internal threshold
              throughout the year
            </li>
            <li>
              Strengthened the cashflow stress testing process by enhancing the
              frequency
            </li>
            <li>
              Continuously analysed and monitored the liquidity position to
              ensure that an adequate buffer of liquid assets are maintained
            </li>
            <li>
              Managed the deposit concentration through close monitoring of risk
              indicators
            </li>
            <li>
              Conducted frequent ALCO meetings to make necessary decisions for
              effective implementation of liquidity risk management strategy
              MARKET
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-white p-2">DEPARTMENT</th>
                <th className="border border-white p-2">PROCESS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="border border-white p-2">ALCO</td>
                <td className="border border-white p-2">
                  Monitoring liquidity risk, reporting and analysing, making
                  proposals, setting limits and guidelines, formulating and
                  implementing plans relating to liquidity risk management
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="border border-white p-2">
                  Treasury Department{' '}
                </td>
                <td className="border border-white p-2">
                  Preparing forecasted cash flow statement, presenting at the
                  ALCO to evaluate future funding requirements, monitoring daily
                  funding requirements, considering routine cash flows and
                  one-off outflows
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="border border-white p-2">
                  Risk Management Department
                </td>
                <td className="border border-white p-2">
                  Using stressed behaviour modelling techniques to determine the
                  Company&#39;s cash flow requirements, identifying signs of
                  stress, continuous monitoring of Key Risk Indicators in
                  liquidity risk
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">MARKET RISK</h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          Profitability of LBF is significantly impacted by movements of market
          factors which are beyond the control of any single entity. These
          market factors impact valuations of portfolios of assets and
          liabilities as most transactions involve at least one element of
          market risk. Consequently, LBF manages these exposures, carefully
          balancing profitability and stability within the risk appetite set by
          the Board.
        </div>
      </div>
      <div className="p-8 bg-white text-blue my-2 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Definition, Credit Risk Components, Objective */}
          <div className="p-4 rounded shadow bg-sky-100">
            <h2 className="text-lg font-bold mb-2">Definition</h2>
            <p>
              Potential losses arising from factors that affect the overall
              performance of the financial markets which cannot be eliminated
              through diversification
            </p>
          </div>
          <div className="p-4 rounded shadow bg-amber-100">
            <h2 className="text-lg font-bold mb-2">
              Components of Market Risk
            </h2>
            <ul className="list-disc list-inside">
              <li>Interest Rate Risk</li>
              <li>Foreign Exchange Risk</li>
              <li>Equity Price Risk</li>
              <li>Commodity Price Risk</li>
            </ul>
          </div>
          <div className="p-4 rounded shadow bg-violet-100">
            <h2 className="text-lg font-bold mb-2">Objective</h2>
            <p>
              Safeguard against adverse movement of market factors arising out
              of price sensitivities of funding sources, investments and
              commodity prices
            </p>
          </div>
        </div>
      </div>
      <div className="my-2">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse overflow-x-auto">
            <thead>
              <tr>
                <th className="border border-white p-2">KEY RISK INDICATORS</th>
                <th className="border border-white p-2">31.3.2024</th>
                <th className="border border-white p-2">31.3.2023</th>
                <th className="border border-white p-2">
                  LFC AS AT 31.12.2023*
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="border border-white p-2">
                  Interest Income to Interest Expense
                </td>
                <td className="border border-white p-2 text-center">214.53%</td>
                <td className="border border-white p-2 text-center">192.30%</td>
                <td className="border border-white p-2 text-center">167.07%</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="border border-white p-2">Net Interest Margin</td>
                <td className="border border-white p-2 text-center">13.70%</td>
                <td className="border border-white p-2 text-center">11.86%</td>
                <td className="border border-white p-2 text-center">7.74%</td>
              </tr>
            </tbody>
          </table>
          <p className='my-4'>*Source: CBSL</p>
        </div>
      </div>
      <div className=" bg-white text-blue rounded-lg p-6 my-2">
        LBF is primarily expose to Interest Rate Risk and Commodity Price Risk.
        LBF is also exposed to Foreign exchange risk through the gold prices in
        international markets as well as on its foreign currency denominated
        borrowings
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f9f1ea] text-blue p-4 md:gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Interest Rate Risk</h2>
          <p className="mb-4">
            Market interest rates declined by over 1,000 bps during the year
            under review, considerably increasing interest rate risk.
          </p>
          {/* <ApexChart
            options={interestRateOptions}
            series={interestRateSeries}
            type="line"
            height={300}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/interestRateMovement.png"
            alt="nterest Rate Risk"
            className="w-full mb-4 rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">
            Commodity Price Risk (Gold)
          </h2>

          <p className="mb-4">
            Gold prices remained volatile throughout the financial year
            experiencing a 20% increase during the second half
          </p>
          {/* <ApexChart
            options={portfolioLTVOptions}
            series={portfolioLTVSeries}
            type="line"
            height={300}
          /> */}
          <img
            src="/images/charts/coparateStuwardship/goldPriceMovement.png"
            alt="Commodity Price Risk (Gold)"
            className="w-full mb-4 rounded-lg"
          />
          <p className="mt-4">
            Gold loan portfolio amounts to Rs. 73 Bn which is 36% of its total
            assets. LBF maintained the portfolio weighted average LTV ratio
            around 70%, by adjusting the advance value in alignment with
            fluctuations in market price.
          </p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-2">Foreign Exchange Risk</h2>
          <p className="mb-4">
            As the country moved towards recovery, the rupee appreciated against
            the US dollar, gaining 9% at the close of the year in a reversal of
            movements in previous years.
          </p>
          {/* <ApexChart
            options={exchangeRateOptions}
            series={exchangeRateSeries}
            type="line"
            height={300}
          /> */}
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/coparateStuwardship/exchangeRate.png"
              alt="Commodity Price Risk (Gold)"
              className="w-full md:w-1/2 mb-4 rounded-lg"
            />
          </div>
          <p className="mt-4">
            LBF&#39;s exposure to foreign exchange risk is minimal at present.
          </p>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          Management of Interest Rate Risk
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          LBF manages interest rate risk primarily through alignment of interest
          rate bearing assets and liabilities to protect interest rate spreads
          from undue volatility in interest rates. It weights the portfolio with
          shorter re-pricing periods to reduce interest rate gaps and while also
          negotiating interest rate caps on new borrowings.
        </div>
      </div>

      <div>
        <table className="min-w-full border-collapse my-2 overflow-x-auto block">
          <thead>
            <tr>
              <th className="border border-white p-2">DEPARTMENT</th>
              <th className="border border-white p-2">PROCESS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="border border-white p-2"> ALCO</td>
              <td className="border border-white p-2">
                {' '}
                Responsible for management of Interest Rate Risk and closely
                monitors the market movements to determine pricing of deposit
                and lending products. It also issues directions to lending and
                borrowing units on interest rate strategies
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="border border-white p-2">Treasury Department </td>
              <td className="border border-white p-2">
                Management of funds to achieve a higher yield from investments
                while negotiating with Banks to secure bank borrowings at lowest
                possible cost
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="border border-white p-2">Risk Management </td>
              <td className="border border-white p-2">
                Conducts regular stress testing to assess interest rate
                sensitivity on LBF’s asset and liability portfolios and
                evaluates the likely financial impact under adverse scenarios
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-2">
        <p>
          Impact on Net Interest Income due to a parallel rate shock of 1% on
          rate sensitive assets and liabilities
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse my-2">
            <thead>
              <tr>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2" colSpan={2}>
                  31.03.2024
                </th>
                <th className="border border-white p-2" colSpan={2}>
                  31.03.2023
                </th>
              </tr>
              <tr>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">
                  Parallel Increase 1%
                </th>
                <th className="border border-white p-2">
                  Parallel Decrease 1%
                </th>
                <th className="border border-white p-2">
                  Parallel Increase 1%
                </th>
                <th className="border border-white p-2">
                  Parallel Decrease 1%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="border border-white p-2">
                  {' '}
                  Annual Impact (Rs. Mn)
                </td>
                <td className="border border-white p-2 text-center"> 176.24</td>
                <td className="border border-white p-2 text-center">
                  {' '}
                  (176.24){' '}
                </td>
                <td className="border border-white p-2 text-center"> 297.07</td>
                <td className="border border-white p-2 text-center">
                  {' '}
                  (297.07)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          Management of Commodity Price Risk
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6 my-2">
          Gold loans are of short duration to manage commodity price risks due
          to high volatility and high degree of difficulty in predicting
          movements. The exposure to a gold loan is typically 1 to 4 months
          providing flexibility to reprice the portfolio inline with the
          movements in market prices. LBF promptly response to the market price
          fluctuation and revisit the maximum advance amount ensuring that Board
          approved safety margin is maintained at all times. Gold items are
          auctioned in a timely manner to further reduce the risk.
        </div>
        <div className=" bg-white text-blue rounded-lg p-6 my-2">
          Value at Risk (VaR) model is used as a key tool to asses the maximum
          estimated loss that can arise with a specified probability over a
          specified period of time due to adverse movement of gold price. A
          separate impairment provision is allocated for gold loan portfolio to
          absorb any unexpected losses.
        </div>
        <div className=" bg-white text-blue rounded-lg p-6 my-2">
          Continuous stress testing is carried out to asses the effects of
          declining gold prices across a range of levels.
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          STRENGTHENING MARKET RISK IN 2023/24
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          <ul className="list-disc list-inside">
            <li>Strengthened the stress testing scenario analysis process</li>
            <li>
              Implemented timely re-pricing strategies to minimise the risk
              during the rapid decline in interest rates
            </li>
            <li>
              Explored alternative investment opportunities thorough analysis of
              risk and potential returns
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">OPERATIONAL RISK</h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          Operational risk is a key risk due to its pervasive presence across
          all transactions as LBF is a financial institution. Significant
          resources are allocated to managing this key risk and LBF notes its
          success in reducing the number of loss incidents in a year of
          significant economic stresses.
        </div>
      </div>
      <div className="p-8 bg-white text-blue my-2 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Definition, Credit Risk Components, Objective */}
          <div className="p-4 rounded shadow bg-sky-100">
            <h2 className="text-lg font-bold mb-2">Definition</h2>
            <p>
              The risk of loss resulting from inadequate or failed internal
              processes, people or systems, or from external events
            </p>
          </div>
          <div className="p-4 rounded shadow bg-amber-100">
            <h2 className="text-lg font-bold mb-2">
              Operational Risk Components
            </h2>
            <ul className="list-disc list-inside">
              <li>Compliance Risk</li>
              <li>Legal Risk</li>
              <li>Financial Crimes Risk</li>
              <li>Technology Risk</li>
              <li>Information and Cyber Risk</li>
              <li>Business Continuity Management</li>
              <li>Fraud Risk</li>
            </ul>
          </div>
          <div className="p-4 rounded shadow bg-violet-100">
            <h2 className="text-lg font-bold mb-2">Objective</h2>
            <p>
              Improve the reliability and effectiveness of business operations
              and enhance organisational capability in ensuring safety of staff
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 p-4 md:grid-cols-2 bg-[#f9f1ea] text-blue rounded-lg">
        {/* Losses and Recoveries */}
        <div className=" p-6 rounded-lg ">
          {/* <h2 className="text-lg font-semibold mb-4">Losses and Recoveries</h2> */}
          {/* <ApexChart
            options={lossesRecoveriesOptions}
            series={lossesRecoveriesSeries}
            type="area"
            height="250"
          /> */}
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/coparateStuwardship/lossesAndRecoveries.png"
              alt="Commodity Price Risk (Gold)"
              className="w-full mb-4 rounded-lg"
            />
          </div>
        </div>

        {/* Operational Risk Losses by Types */}
        <div className=" p-6 rounded-lg ">
          {/* <h2 className="text-lg font-semibold mb-4">
            Operational Risk Losses by Types
          </h2>
          <ApexChart
            options={riskByTypesOptions}
            series={riskByTypesSeries}
            type="donut"
            height="250"
          /> */}
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/coparateStuwardship/oparationalRiskLosses.png"
              alt="Commodity Price Risk (Gold)"
              className="w-full mb-4 rounded-lg"
            />
          </div>
        </div>

        {/* Number of Loss Incidents */}
        <div className=" p-6 rounded-lg md:col-span-2">
          {/* <h2 className="text-lg font-semibold mb-4">No of Loss Incidents</h2> */}
          {/* <ApexChart
            options={lossIncidentsOptions}
            series={lossIncidentsSeries}
            type="line"
            height="250"
          /> */}
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/coparateStuwardship/lossIncidents.png"
              alt="Commodity Price Risk (Gold)"
              className="w-full md:w-1/2 mb-4 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white py-2">
          Operational Risk Management
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          Operational risk is managed proactively, scanning for exceptions,
          trends and anomalies. LBF has adopted a Board approved Operational
          Risk Management Framework that facilitates effective identification,
          measuring, managing, monitoring and controlling of risks faced by the
          company and defines the roles and responsibilities in operational risk
          management.
        </div>
        <div className=" bg-white text-blue rounded-lg p-6 my-2">
          <p className="py-2">
            The following processes support management and mitigation of
            operational risks:
          </p>

          <ul className="list-disc list-inside">
            <li>
              The business processes, systems, controls, and external factors
              are reviewed to identify and record specific potential risks that
              could affect operations
            </li>
            <li>Having in place a robust internal control system</li>
            <li>
              Risk and Control Self-Assessment (RCSA) is used to evaluate fraud
              risks at different levels within operational processes of the
              company
            </li>
            <li>Gathering internal and external reports on fraud events</li>
            <li>
              Root cause analysis of loss / near miss incidents and introduce
              new controls or redesign existing controls as required
            </li>
            <li>
              Independent assurance from Internal Audit Department on
              operational processes and IT systems covering all core
              applications and security aspects
            </li>
            <li>
              Monitoring system failures, telecommunication problems, breakdowns
              and hacking events
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          Business Continuity Management
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          LBF has established a Business Continuity Management System (BCMS) to
          facilitate resilience in its operations. BCMS encompasses business
          continuity, disaster recovery, crisis management, incident management,
          emergency management and contingency planning activities. This enables
          the Company to minimise the impact to its stakeholders in case of
          disruptive events or disasters and support a return to normalcy as
          fast as possible. The BCM Steering Committee which is comprised of key
          staff members, plays an integral part of the BCM program. BCM Steering
          Committee enables the company-wide roll out of the BCM and ensures the
          alignment of business goals with the BCM goals. The scope of the BCM
          includes programme initiation and management, risk evaluation and
          business impact analysis, developing business continuity strategies,
          emergency preparedness and response, developing and implementing
          business continuity plans, awareness building and training, business
          continuity plan exercise, audit and maintenance, crisis communications
          and coordination with external agencies. During the year under review,
          the core and other critical systems were operated from the Disaster
          Recovery (DR) site.
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          STRENGTHENING OPERATIONAL RISK IN 2023/24
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          <ul className="list-disc list-inside">
            <li>
              Expanded the scope for assessing Fraud Risk within the Risk and
              Control Self assessment process by including more processes for
              review. This strengthens the RCSA process and facilitates
              identification of potential weaknesses in controls that can be
              strengthened to further minimise fraud risk
            </li>
            <li>
              Established an automated exception monitoring process and revised
              the Policy of exception monitoring to further strengthen the
              process
            </li>
            <li>
              Strengthened the Branch Operational Risk assessment methodology by
              implementing a new score card enhancing the evaluation of
              operational risk at each branch and identifying potential areas of
              weaknesses effectively
            </li>
            <li>
              Performed AML and TF risk assessment for products and processes
              adopting an enhanced scoring methodology. Further analysis was
              conducted for products and processes categorised as medium or high
              risk to ensure adequacy and effectiveness of controls for
              mitigating these risks
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          INFORMATION TECHNOLOGY AND INFORMATION SECURITY RISK
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6 my-2">
          <p>
            LBF is going through a rapid digitalisation to enhance operational
            efficiency, customer experience, and competitive advantage. However,
            this digital transformation increases the InformationTechnology (IT)
            risks necessitating an enhancement of its IT Risk Management
            Framework. LBF diligently addresses these risks through the
            implementation of robust security control measures to mitigate
            cybersecurity threats.
          </p>
          <br />
          <p>
            Information Security risk is a key risk as LBF is a retail financial
            institution and maintains personal data of its customers.
            Accordingly, LBF is required to comply with the Personal Data
            Protection Act No. 9 of 2022 and take steps to ensure that the
            information remains secure. LBF recognises the criticality of
            effectively managing IT risks to safeguard its digital operations.
            The company has implemented a robust and proactive IT risk
            management approach considering the factors such as cybersecurity,
            data privacy, and operational resilience.
          </p>
          <br />
          <p>
            Cybersecurity measures has been achieved through multi-layered
            security controls, such as firewalls, intrusion detection systems,
            and encryption mechanisms, to protect sensitive customer data and
            prevent unauthorised access. Regular security assessments,
            vulnerability scanning are conducted to identify and mitigate
            potential vulnerabilities. LBF places great emphasis on data privacy
            to ensure compliance with applicable regulations and safeguard
            customer information. The company has implemented comprehensive data
            protection measures, including encryption, access controls, and
            robust data storage practices. LBF began working on adopting
            mandates set out under the Personal Data Protection Act. Further
            operational resilience is a key aspect of LBF&#39;s IT risk
            management approach. The Company has implemented robust business
            continuity and disaster recovery plans to mitigate the impact of
            potential system failures, natural disasters, or other disruptions.
          </p>
          <br />
          <p>
            Risk mitigation methodology involves prioritising, evaluating and
            implementing the appropriate risk treatment techniques such as
            technical, operational and management controls to prevent identified
            risks exploiting the vulnerabilities. This process is strengthened
            by the implementation of the Company&#39;s Information Security
            Management System (ISMS), which was established according to the
            ISO/IEC 27001:2022 standard. A comprehensive Information Technology
            (IT) Audit framework further augments these efforts.
          </p>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          Managing IT and Information Security Risk
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          <ul className="list-disc list-inside">
            <li>
              Conducting technical vulnerability assessment of network, web
              applications, databases, servers, firewall, wireless networks and
              web/ mobile applications
            </li>
            <li>Conduct third party due diligence assessments</li>
            <li>
              Monitoring of system audit trails to identify patterns and
              anomalies.
            </li>
            <li>
              Conducting comprehensive information system audits to encompass
              LBF`s critical infrastructure and applications
            </li>
            <li>
              Performing risk assessment exercises on critical technology
              functions, technology transformation projects, and system
              implementations
            </li>
            <li>
              Analysis of information security-related incidents to identify
              vulnerabilities and weaknesses in the information systems and
              infrastructure, thereby uncovering gaps and potential loopholes
            </li>
            <li>
              Inputs taken from other periodic statutory/regulatory audits and
              ISO 27001 surveillance audits
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          STRENGTHENING IT AND INFORMATION SECURITY RISK IN 2023/24
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          <ul className="list-disc list-inside">
            <li>
              Strengthened 2nd line of defence for Information Technology and
              Security risks with human resource capacity building
            </li>
            <li>Strengthened privilege access monitoring mechanism</li>
            <li>Performed a detail risk assessment on cloud solutions</li>
            <li>
              Performed pre-implementation risk assessment of new technologies
            </li>
            <li>
              Conducted annual review of Information Risk Management Framework
            </li>
            <li>
              Implemented IT Risk register to ensure action plans are in place
              to mitigate those identified risks
            </li>
            <li>
              Performed continuous training sessions to enhance employee
              awareness on cyber security
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">COMPLIANCE RISK</h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          LBF remains firmly committed to conducting its business in accordance
          with the laws and regulations imposed by the regulatory authorities.
          Due diligence activities carried out by LBF&#39;s internal audit and
          compliance teams reinforce the Company&#39;s zero tolerance approach
          for non-compliance. Apart from this, the Board and Board
          Sub-Committees continue to monitor the latest regulatory developments
          in order to promote early adoption. Compliance Risk is assessed as
          low.
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          MANAGING COMPLIANCE RISK
        </h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          <ul className="list-disc list-inside">
            <li>
              Internal audit reviews are carried out to assess the extent of
              compliance at branch and departmental level.
            </li>
            <li>
              Regular monitoring of compliance with the directions issued by the
              regulator.
            </li>
            <li>
              Continuous monitoring of transactions to identify potential risks
              related to Financial Crimes.
            </li>
            <li>
              Conduct Customer Due diligence on a timely manner and perform
              enhanced due diligence as required.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">STRATEGIC RISK</h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          <p>
            LBF has a clear strategy for business that minimises strategic risk.
            The Board approves a 3-year strategic plan, annual budget and
            business plans, which support the Company&#39;s value creation
            goals. The main strategic actions for the financial year under
            review were; to leverage on Business opportunities and grow the
            vehicle financing portfolio, continue the market share on Gold back
            lending and enhancing the digital financial solutions to customers.
          </p>
          <br />
          <p>
            We assess strategic risk by conducting reviews of pre and post
            implementation financial performance for every product, project and
            investment. Quarterly budget reviews and monthly variance analysis
            on key income and expense items are performed to ensure that the
            company is operating with the correct strategic focus and to
            identify early warnings of any possible strategic risk. LBF has a
            solid Board approved strategy that underpins the Company&#39;s
            progress towards achieving value creation objectives.
          </p>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">REPUTATIONAL RISK</h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          LBF has built a strong reputation through its effective leadership,
          sound business strategy and solid risk management fundamentals, as
          well as its ethical conduct and its commitment to corporate
          responsibility. It is recognised as a leading financial institution in
          Sri Lanka. LBF remains vigilant regarding possible risks to its
          reputation by checking media reports, social media content, feedback
          from frontline staff and market survey results. Additionally, its
          comprehensive stakeholder engagement mechanisms provide insights in to
          developing areas of concern that are addressed in a timely manner.
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          MANAGING REPUTATIONAL RISK
        </h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          <ul className="list-disc list-inside">
            <li>
              Training employees on workplace professionalism, behaviour and
              educate them on business ethics.
            </li>
            <li>
              Swift and efficient process of resolving customer complaints.
            </li>
            <li>
              Close monitoring of any events that would lead to reputational
              risk by adopting early warning systems including media reports,
              social media content, inputs from front line staff and market
              surveys results.
            </li>
            <li>
              Sustainability Committee to play a key role in conceptualising and
              monitoring sustainability initiatives
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">CAPITAL MANAGEMENT</h2>
        <div className=" bg-white text-blue rounded-lg p-6">
          For a financial institution capital is a buffer against insolvency,
          that is available to absorb unforeseen losses. LBF adopts a proactive
          approach to ensure a satisfactory risk capital level throughout its
          operations. The company&#39;s regulatory capital adequacy has been
          computed using standardised approach for credit risk and basic
          indicator approach for operational risk in line with the regulatory
          guidelines.
        </div>
      </div>
      <div className="my-2">
        <p>
          As at 31st March 2024 LBF maintain a sound risk capital position as
          presented in the table below.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-white p-2">Item</th>
                <th className="border border-white p-2">FY 2023/24 Rs.000</th>
                <th className="border border-white p-2">FY 2022/23 Rs.000</th>
              </tr>
            </thead>
            <tbody>
              {totalCapitalData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-white p-2">{row.item}</td>
                  <td className="border border-white p-2 text-right">
                    {row.fy202324}
                  </td>
                  <td className="border border-white p-2 text-right">
                    {row.fy202223}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">
          Computation of Total Capital
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-white p-2 text-left">Item</th>
                <th className="border border-white p-2 text-right">
                  FY 2023/24 Rs.000
                </th>
                <th className="border border-white p-2 text-right">
                  FY 2022/23 Rs.000
                </th>
              </tr>
            </thead>
            <tbody>
              {computationTotalCapitalData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-white p-2">
                    {row.isHeader ? (
                      row.item
                    ) : (
                      <span className="ml-4">{row.item}</span>
                    )}
                  </td>
                  <td className="border border-white p-2 text-right">
                    {row.fy202324}
                  </td>
                  <td className="border border-white p-2 text-right">
                    {row.fy202223}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-2 bg-white text-blue p-4 rounded-lg">
        {/* <ApexChart
          options={capitalRequirementOptions}
          series={capitalRequirementSeries}
          type="donut"
          height="350"
        /> */}
        <p className="pb-6">
          The graph below shows LBF capital allocation and available capital
          buffer as at 31st March 2024 based on the quantified risk as per the
          applicable regulatory guidelines.
        </p>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-blue">
            Capital Requirement and Cushion
          </h2>
          <img
            src="/images/charts/coparateStuwardship/capitalRequrement.png"
            alt="capitalRequrement"
            className="w-full md:w-1/2 mb-4 rounded-lg"
          />
        </div>
        <div className="my-2">
          <p>
            As a systemically important NBFI, LBF enhanced its capital
            management approach in 2023 by voluntarily adopting the ICAAP
            recommended under Pillar 2 of the BASEL III framework. A formal
            Board approved ICAAP Policy was implemented to guide the application
            of the ICAAP. The Policy requires that integration of the ICAAP
            integrated into LBF’s enterprisewide risk management framework and
            processes to assess the effect on the Company’s capital adequacy
            ratios due to changes in risk profiles of all major risk categories.
            Stress testing and scenariobased analysis under the ICAAP are used
            to assesses the capital required under stressed conditions, ensuring
            the alignment of the Company’s strategic plan and risk management
            plans with the capital plan. Inputs from Senior Management,
            Management Committees, Board Sub-Committees and the Board are an
            integral part of this iterative process.
          </p>
          <br />
          <p>
            The ICAAP working Group conducts a quarterly ICAAP assessment and
            report findings to the BIRMC and the Board for appropriate
            corrective action such as raising additional capital and/ or
            reduction in exposures etc. During the year, the ICAAP assessment
            was submitted to the CBSL for its review and comments, although
            there is no mandatory requirement.
          </p>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-xl font-semibold text-white">STRESS TESTING</h2>

        <div className=" bg-white text-blue rounded-lg p-6">
          <p>
            Stress testing is an integral part of LBF&#39;s Risk management
            process. It asses whether the company has sufficient capital and
            liquidity to withstand negative economic shocks. A comprehensive
            stress testing policy is in place that describes the purpose of
            stress testing, governance structure, methodology for formulating
            stress test frequencies and assumptions.
          </p>
          <br />
          <p>
            Stress testing has provided a dynamic platform to asses “What if”
            scenarios and to provide the company with an assessment of areas to
            improve.
          </p>
          <br />
          <p>
            During the year under review, stress scenarios were updated to be
            more relevant in the current economic landscape. Stress testing
            frequencies were increased and results were reported to the BIRMC.
          </p>
        </div>
      </div>
      <div>
        <table className="min-w-full border-collapse overflow-x-auto block">
          <thead>
            <tr>
              <th className="border border-white p-2">
                Credit and Credit Concentration Risk
              </th>
              <th className="border border-white p-2">Interest Rate Risk</th>
              <th className="border border-white p-2">Liquidity Risk</th>
              <th className="border border-white p-2">Commodity Price Risk</th>
              <th className="border border-white p-2">Operational Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="border border-white p-2">
                Impact on Capital Adequacy Ratio due to ,
                <ul className="list-disc list-inside">
                  <li>Elevated NPLs</li>
                  <li>Stress in top 5 industries</li>
                  <li>Largest borrower default</li>
                  <li>Expected Credit Loss stage migration</li>
                  <li>
                    Increase concentration in terms of name, sector, geography
                  </li>
                </ul>
              </td>
              <td className="border border-white p-2">
                Impact on NII due to fluctuations in market interest rate
              </td>
              <td className="border border-white p-2">
                Impact on Liquid Asset Ratio due to
                <ul className="list-disc list-inside">
                  <li>Sudden deposit runoffs</li>
                  <li>Top FD redemptions Impact on forecasted net cashflow</li>
                </ul>
              </td>
              <td className="border border-white p-2">
                Impact on earnings due to increase defaults as a result of
                decline in commodity (Gold) Price.
              </td>
              <td className="border border-white p-2">
                Impact on CAR due to increase operational losses
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Given the strong risk capital position of LBF, the capital adequacy
          ratio stands above the regulatory minimum requirement at all stress
          levels during the year under review.
        </p>
      </div>
    </div>
  );
}

export default IntegratedRiskManagement;
