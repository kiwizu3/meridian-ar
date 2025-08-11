import React from 'react'
import CorporateSig from '@/public/images/annual-report/corporateSig.png'
import Image from 'next/image';

function NoticesAGM() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto grid grid-cols-1 gap-6">
      <div className=" bg-white text-blue rounded-lg p-6 ">
        <p className="py-2">
          NOTICE IS HEREBY GIVEN that the Fifty First (51st) Annual General
          Meeting of LB Finance PLC will be held at the Auditorium of the
          Corporate Office of the Company, No. 20, Dharmapala Mawatha, Colombo 3
          on Friday, 28th June 2024 at 8.30 a.m.to conduct the following
          business:
        </p>
        <ul className="list-decimal list-inside">
          <li>
            To receive the Annual Report of the Board of Directors on the
            affairs of the Company and its subsidiaries and the Financial
            Statements for the year ended 31st March 2024 and the Report of the
            Auditors thereon.
          </li>
          <li>
            To declare a Final Dividend of Rs.3.50 per Ordinary Share as
            recommended by the Board of Directors.
          </li>
          <li>
            To re-elect Ms. Ashwini Natesan as a Director in terms of Articles
            85 and 86 of the Articles of Association of the Company.
          </li>
          <li>
            To pass the Ordinary Resolution set out below to re-appoint Mr. John
            Anthony Sunil Sumith Adhihetty who attained the age of 73 years on
            4th July 2023, as a Director of the Company; <br />
            <br /> “IT IS HEREBY RESOLVED THAT the age limit stipulated in
            Section 210 of the Companies Act No.07 of 2007 shall not apply to
            Mr. John Anthony Sunil Sumith Adhihetty who attained the age of 73
            years on 4th July 2023 and that he, be and is hereby re-appointed as
            a Director of the Company.”
          </li>
          <li>
            To appoint Messrs KPMG, Chartered Accountants, as recommended by the
            Board of Directors, as the Company&#39;s Auditors and to authorise
            the Directors to determine their remuneration.
          </li>
          <li>
            To authorise the Directors to determine donations for the year
            ending 31st March 2025 and up to the date of the next Annual General
            Meeting.
          </li>
        </ul>
        <p className="my-2">By Order of the Board LB Finance PLC</p>
        <Image src={CorporateSig} alt="" width={150} />
        <p>P W Corporate Secretarial (Pvt) Ltd Secretaries</p>
        <br />
        <p>June 3, 2024</p>
        <br />
        <br />
        <p>Note:</p>
        <ul className="list-decimal list-inside">
          <li>
            A shareholder is entitled to appoint a Proxy to attend and vote at
            the meeting on his/her behalf.
          </li>
          <li>A Proxy need not be a shareholder of the Company.</li>
          <li>A Form of Proxy accompanies this Notice.</li>
        </ul>
      </div>
    </div>
  );
}

export default NoticesAGM
