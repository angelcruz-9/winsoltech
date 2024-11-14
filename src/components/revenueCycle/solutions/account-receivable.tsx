import React, { useEffect } from 'react';

interface AccountsReceivablesProps {
  patientPayments: number;
  insuranceClaims: number;
  outstandingBalances: number;
  denialRate: number;
  daysInAR: number;
}

const AccountsReceivables: React.FC<AccountsReceivablesProps> = ({
  patientPayments,
  insuranceClaims,
  outstandingBalances,
  denialRate,
  daysInAR
}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="pt-24 p-8 mx-auto lg:pt-24 lg:p-16 bg-gray-50">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Accounts Receivables in U.S. Healthcare Services</h1>
        <p className="text-xl text-gray-600 mt-2">
          Effective AR management is essential for maintaining cash flow, ensuring financial stability, and optimizing revenue cycle processes.
        </p>
      </header>

      {/* Key Information Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="card bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Patient Payments</h2>
          <p className="text-lg text-gray-800">${patientPayments}</p>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Insurance Claims</h2>
          <p className="text-lg text-gray-800">${insuranceClaims}</p>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Outstanding Balances</h2>
          <p className="text-lg text-gray-800">${outstandingBalances}</p>
        </div>
      </section>

      {/* Importance of AR Management Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Importance of Effective Accounts Receivables Management</h2>
        <ul className="list-inside list-disc pl-4 text-gray-700">
          <li>Optimizes cash flow by ensuring prompt payment collection.</li>
          <li>Reduces days in AR, improving financial health.</li>
          <li>Enhances patient satisfaction through transparent billing practices.</li>
          <li>Provides insights into financial performance for better decision-making.</li>
        </ul>
      </section>

      {/* Key Components of AR Management Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Components of Accounts Receivables Management</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Dental Billing</h3>
            <p className="text-gray-600">The preparation and submission of claims to insurance companies for reimbursement of services provided. This includes accurate coding and following payer guidelines.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Insurance and Patient AR Management</h3>
            <p className="text-gray-600">Monitoring outstanding balances for both patient accounts and insurance claims, ensuring timely follow-ups and clear policies for overdue accounts.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">EOB Posting</h3>
            <p className="text-gray-600">Accurately posting Explanation of Benefits (EOBs) into the system to reconcile payments against services billed, identifying discrepancies for resolution.</p>
          </div>
        </div>
      </section>

      {/* Challenges in AR Management Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenges in Accounts Receivables Management</h2>
        <ul className="list-inside list-disc pl-4 text-gray-700">
          <li>Complex insurance policies causing delays or denials in payments.</li>
          <li>High denial rates due to coding errors or incomplete documentation.</li>
          <li>Increasing patient payment responsibility making collection difficult.</li>
        </ul>
      </section>

      {/* Best Practices Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Best Practices for Effective AR Management</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Implement Robust Billing Software</h3>
            <p className="text-gray-600">Utilize advanced dental billing software that integrates with practice management systems for easier tracking and more efficient billing processes.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Regular Staff Training</h3>
            <p className="text-gray-600">Ensure staff are well-trained in billing, coding, and insurance policies to minimize errors and reduce denials.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Establish Clear Communication Channels</h3>
            <p className="text-gray-600">Maintain open communication with patients regarding their financial responsibilities and offer flexible payment options.</p>
          </div>
        </div>
      </section>

      {/* KPI Monitoring Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Performance Indicators (KPIs)</h2>
        <ul className="list-inside list-disc pl-4 text-gray-700">
          <li>Days in AR: {daysInAR} days</li>
          <li>Denial Rate: {denialRate}%</li>
        </ul>
      </section>
    </div>
  );
};

export default AccountsReceivables;
