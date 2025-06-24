import React from 'react';

interface FeedbackOption {
  label: string;
  options: string[];
}

export const feedbackOptions: FeedbackOption[] = [
  {
    label:
      'Please mention your relationship with LB Finance – Please tick (✓) the appropriate box.',
    options: [
      'Shareholder',
      'Employee',
      'Customer',
      'Business Partner',
      'Regulators/Government',
      'Society',
    ],
  },
  {
    label:
      'Select the preferred communication method to contact you – Please tick (✓) the appropriate box.',
    options: ['Phone', 'Website', 'Letter', 'Email', 'Other'],
  },
];

function FeedbackForm() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 h-[654px] overflow-auto grid grid-cols-1 gap-6 custom-scrollbar">
      <p className="mb-6">
        We would like to hear thoughts, concerns or problems about this report
        so that we may take measures for improvement.
      </p>

      {feedbackOptions.map((feedback, index) => (
        <div key={index} className="mb-6">
          <p className="font-semibold mb-2">{feedback.label}</p>
          <div className="grid grid-cols-3 gap-4">
            {feedback.options.map((option, idx) => (
              <label key={idx} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div>
        <p className='py-2'>
          Your views on Annual Report 2023/24 - Please tick the appropriate
          box.
        </p>
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-white p-2">Indicator</th>
              <th className="border border-white p-2">Excellent</th>
              <th className="border border-white p-2">Good</th>
              <th className="border border-white p-2">Bad</th>
              <th className="border border-white p-2">Poor</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-500 text-white">
              <td className="border border-white p-2">Design and layout</td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
            </tr>
            <tr className="bg-blue-500 text-white">
              <td className="border border-white p-2">
                Content and Disclosures
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
            </tr>
            <tr className="bg-blue-500 text-white">
              <td className="border border-white p-2">Theme and focus</td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="border border-white p-2">
                <input type="checkbox" className="form-checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <p className="font-semibold mb-2">
          Please write details of your feedback here:
        </p>
        <textarea className="w-full h-32 p-2 border border-gray-300 rounded"></textarea>
      </div>

      <div className="mb-6">
        <p className="font-semibold mb-2">Comments/Suggestions:</p>
        <textarea className="w-full h-32 p-2 border border-gray-300 rounded"></textarea>
      </div>

      <div className="mb-6">
        <p className="font-semibold mb-2">
          Please provide your contact details
        </p>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Name:</label>
            <input type="text" className="p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Tel:</label>
            <input type="text" className="p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email:</label>
            <input
              type="email"
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      <div className="text-sm text-white">
        <p>
          Thank you for taking your time. You can post or Email your feedback
          to:
        </p>
        <p className="mt-2">
          <strong>Manager : Integrated Reporting and Sustainability</strong>
          <br />
          LB Finance PLC
          <br />
          Corporate office
          <br />
          No. 20, Dharmapala Mawatha, Colombo 3.
          <br />
          Email:
          <a href="mailto:thusithaw@lbfinance.lk" className="text-blue-600">
            thusithaw@lbfinance.lk
          </a>
          <br />
          Tel: 0112155504
        </p>
      </div>
    </div>
  );
}

export default FeedbackForm;
