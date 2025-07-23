import React from 'react';
import Image from 'next/image';

export default function CustomerRelationship() {
  return (
    <div className="customer-relationship p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1">
        <h1 className="text-4xl font-bold mb-4">
          CUSTOMER RELATIONSHIP MANAGEMENT
        </h1>
        {/* Image 1 */}
        <div className="rounded-lg py-9">
          <h2 className="text-2xl font-semibold mb-2">
            Customer Relationship Enhancement Model
          </h2>
          <Image
            src="/images/report/content/Customer Relationship Enhancement Model.png"
            alt="Customer Relationship Enhancement Model"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-lg py-9">
          <Image
            src="/images/report/content/EXECUTIVE DIRECTORS.png"
            alt="EXECUTIVE DIRECTORS"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
