import Image from 'next/image';
export default function ResponsibilityStatementMdAndCFO() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto grid grid-cols-1 gap-6">
      <div className="p-6 text-blue rounded-lg bg-white">
        <p className="mb-4">
          The Financial Statements of LB Finance PLC (the Company) and the
          Consolidated Financial Statements of the Company and its Group
          Companies (the Group) as of 31 March 2024 are prepared and presented
          in compliance with the following regulatory requirements:
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            Sri Lanka Accounting Standards (SLFRS/ LKAS) issued by The Institute
            of Chartered Accountants of Sri Lanka
          </li>
          <li>
            Sri Lanka Accounting and Auditing Standards Act No. 15 of 1995
          </li>
          <li>
            Statements of Alternative Treatments (SoAT) on Accounting issued by
            The Institute of Chartered Accountants of SL
          </li>
          <li>Companies Act No. 7 of 2007</li>
          <li>Finance Business Act No. 42 of 2011</li>
          <li>Finance Leasing Act No. 56 of 2000</li>
          <li>
            Directions, circulars and guidelines issued to licensed Finance
            Companies by the Central Bank of Sri Lanka.
          </li>
          <li>Listing Rules of the Colombo Stock Exchange (as amended)</li>
          <li>
            The Code of Best Practice on Corporate Governance issued jointly by
            The Institute of Chartered Accountants of Sri Lanka and the
            Securities and Exchange Commission of Sri Lanka (2023)
          </li>
        </ol>
        <p className="mb-4">
          The formats used in the preparation of financial statements and
          disclosures made in this Annual report and interim financial
          statements comply with the specified formats described by the Central
          Bank of Sri Lanka.{' '}
        </p>
        <p className="mb-4">
          The Company presents the financial results to its shareholders every
          quarter.
        </p>
        <p className="mb-4">
          The Group has consistently applied the material accounting policies.
          The Accounting Policies of the Company and the Group are in compliance
          with Sri Lanka Accounting Standards (SLFRS/ LKAS) issued by The
          Institute of Chartered Accountants of Sri Lanka.
        </p>
        <p className="mb-4">
          Significant Accounting Policies and estimates that involve a high
          degree of judgment and complexity were discussed with the Board Audit
          Committee and the External Auditors. Comparative information has been
          reclassified wherever necessary to comply with the current
        </p>
      </div>

      <div className="p-6 text-blue rounded-lg bg-white">
        <p className="mb-4">
          year’s presentation. All significant items have been disclosed and
          explained through Notes to the Financial Statements. We confirm to the
          best of our knowledge, that the Financial Statements presented
          herewith give a true and fair view of the financial position,
          Statement of Profit or Loss and the cash flows of the Company and the
          Group for the year. Furthermore, we believe that the Company and the
          Group have adequate resources to continue its operations in the
          foreseeable future and accordingly adopt the going concern basis for
          the preparation of the Financial Statements.
        </p>
        <p className="mb-4">
          The Board of Directors and the Management of the Company and the Group
          accept responsibility for the integrity and the objectivity of the
          Financial Statements. The estimates and judgments relating to the
          Financial Statements were made on a reasonable and prudent basis; so
          that the Financial Statements reflect a true and fair view; the form
          and the substance of transactions and that the state of affairs of the
          Company and the Group is reasonably presented. To ensure this, the
          Company and the Group have taken proper and sufficient care in
          implementing internal control systems, with the use of a comprehensive
          core banking system, for safeguarding assets and for preventing and
          detecting fraud as well as other irregularities, which is reviewed,
          evaluated, and updated on an ongoing basis. The Internal Auditor of
          the Company and the Group has conducted periodic audits to provide
          reasonable assurance that the established policies and procedures of
          the Company and the Group are consistently followed. However, there
          are inherent limitations that should be recognised in weighing the
          assurance provided by any system of internal control and accounting.
        </p>
        <p className="mb-4">
          The Financial Statements of the Company and the Group were audited by
          Messrs. Ernst & Young, Chartered Accountants. The Report issued by
          them is available on page 235 of the Annual Report. The audit and
          non-audit services provided by Messrs. Ernst & Young are approved by
          the Board Audit Committee in line with the relevant audit policy or
          impair Messrs. Ernst & Young’s independence. The Board Audit Committee
          reviews the adequacy and the effectiveness of the Internal Control
          Systems including the effectiveness of the internal controls over
          financial reporting. This review ensures that all transactions are
          accurately and completely recorded in the books of account and that
          compliance with Sri Lanka Accounting Standards (SLFRS/LKAS) and other
          regulatory provisions relating to financial reporting and disclosures
          is maintained. The Board Audit Committee Report is available on pages
          188 to 191. To ensure complete independence, the External Auditors and
          the Internal Auditors have full and free access to the members of the
          Board Audit Committee to discuss any matter of substance.
        </p>
      </div>

      <div className="p-6 text-blue rounded-lg bg-white">
        <p className="mb-4">We confirm to the best of our knowledge that,</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            The Company and the Group have complied with all applicable laws,
            rules, regulations and guidelines;
          </li>
          <li>There is no material non-compliance;</li>
          <li>
            There is no material litigation against the Company and the Group
            other than those disclosed in Note 3.5.4 on page 325 of the
            Financial Statements section of Annual Report;
          </li>
          <li>
            All taxes, duties, levies and all statutory payments by the Company
            and the Group and all contributions, levies and taxes payable on
            behalf of and in respect of the employees of the Company and the
            Group as at the reporting date have been paid, or where relevant
            provided for.
          </li>
        </ul>
        <div className="mt-8">
          <Image
            src="/images/annual-report/sumith-sign.png"
            alt="Sumith Adhihetty Signature"
            width={150}
            height={50}
          />
          <p>Sumith Adhihetty</p>
          <p>Managing Director</p>
          <Image
            src="/images/annual-report/malith-sign.png"
            alt="Malith Hewage Signature"
            width={150}
            height={50}
          />
          <p>Malith Hewage</p>
          <p>Chief Financial Officer</p>
          <p>27 May 2024</p>
        </div>
      </div>
    </div>
  );
}
