export function getDescription(seriesName: string): string {
  switch (seriesName) {
    case 'Net Interest Margin (%)':
      return 'Net interest income expressed as a percentage of average interest earning assets.';
    case 'Interest Spread (%)':
      return 'The difference between the average interest rate earned on average interest earning assets and the average interest rate recognized on average interest bearing liabilities.';
    case 'Cost to Income (%)':
      return 'Operating expenses excluding impairment charge as a percentage of total operating income (net of interest expenses).';
    case 'Equity to Deposits (%)':
      return "Total Shareholder's Equity as a percentage of Customer deposits.";
    case 'Debt to Equity (Times)':
      return "Debt to equity ratio calculates the value of total debt against the total shareholders' equity.";
    case 'Total Assets to Equity (Times)':
      return "The asset/equity ratio indicates the relationship of the total assets of the Company to shareholders' equity.";
    case 'Return on Equity (%)':
      return 'Net profit for the year, less dividends on preference shares, if any, expressed as a percentage of average shareholders’ equity.';
    case 'Return on Assets (%)':
      return 'Net profit for the year expressed as a percentage of average total assets; indicates overall effectiveness in generating profits with available assets.';
    case 'Equity to Assets (%)':
      return "The equity to assets ratio is a measure of how much of a company's assets are owned by investors and how much of a company's assets are leveraged.";
    case 'Net Assets Value per Share (Rs.)':
      return 'Net assets value per share (NAVPS) is Shareholders’ equity excluding preference shares, if any, divided by the number of ordinary shares in issue. It is also known as net book value per share (NBVPS).';
    case 'Earnings per Share (Rs.)':
      return 'Profit attributable to ordinary shareholders divided by the number of ordinary shares in issue; indicates the proportion of current year’s earnings attributable to an ordinary share in issue.';
    case 'Dividend per Share (Rs.)':
      return 'Value of the total dividend paid out and proposed to ordinary shareholders divided by the number of ordinary shares in issue; indicates the proportion of current year’s dividend attributable to an ordinary share in issue.';
    case 'Dividend Cover (Times)':
      return 'Profit attributable to ordinary shareholders as a percentage of gross dividends; indicates number of times dividend is covered by current year’s distributable profits.';
    case 'Dividend Yield (%)':
      return 'Dividend expressed as a percentage of market value of a share. In absence of any capital gains, this shows the return on investing on a share relative to its market price.';
    case 'Dividend Payout (%)':
      return 'Total Dividends divided by profit after tax; indicates the percentage of earnings paid out to shareholders as dividends.';
    case 'Price Earning Ratio (Times)':
      return "The market price of a share divided by earnings per share; indicates Company's current share price relative to its per-share earnings.";
    case 'Price to Book Value (Times)':
      return "The ratio of the market value of the Company's shares (share price) over its book value of equity.";
    case 'Market Price per Share (Rs.)':
      return 'The current price of a single share in a publicly traded stock.';
    case 'Market Capitalisation (Rs. Mn)':
      return 'Number of ordinary shares in issue multiplied by the market value of the share as at a date.';
    case 'Interest Cover (Times)':
      return 'Earnings before interest and taxes divided by interest expenses. This indicates the number of times interest expenses is covered by earnings before interest and tax; ability to cover interest expenses.';
    case 'Core Capital (%)':
      return 'This ratio assesses the financial strength and stability of the Company. It compares Tier-I capital to risk-weighted assets and ensures that the Company has enough high-quality capital to cover potential losses.';
    case 'Total Capital (%)':
      return 'This ratio assesses the financial strength and stability of the Company. It compares total capital to risk-weighted assets and ensures that the Company has enough capital to cover potential losses.';
    case 'Liquidity Ratio (%)':
      return "This ratio measures the Company's ability to meet its obligations with its liquid assets. It compares the liquid assets, such as cash and assets that can be quickly converted into cash, to its obligations.";
    case 'Growth in Income (%)':
      return 'The yearly growth in income.';
    case 'Growth in Interest Income (%)':
      return 'The yearly growth in interest income.';
    case 'Growth in Interest Expense (%)':
      return 'The yearly growth in interest expense.';
    case 'Growth in Net Interest Income (%)':
      return 'The yearly growth in net interest income.';
    case 'Growth in Profit before Taxation (%)':
      return 'The yearly growth in profit before taxation.';
    case 'Growth in Profit after Taxation (%)':
      return 'The yearly growth in profit after taxation.';
    case 'Growth in Total Assets (%)':
      return 'The yearly growth in total assets.';
    case 'Growth in Lending Portfolio (%)':
      return 'The yearly growth in lending portfolio.';
    case 'Growth in Customer Deposits (%)':
      return 'The yearly growth in customer deposits.';
    case 'Growth in Equity (%)':
      return 'The yearly growth in equity.';
    default:
      return 'No description available.';
  }
}
