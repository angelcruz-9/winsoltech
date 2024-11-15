import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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
  daysInAR,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="pt-24 p-8 mx-auto bg-gray-50 min-h-screen lg:px-24"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold text-primary">
          Accounts Receivables in U.S. Healthcare Services
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Effective AR management is essential for maintaining cash flow, ensuring financial stability, and optimizing revenue cycle processes.
        </p>
      </motion.header>

      {/* Key Information Section */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        variants={staggerContainer}
      >
        {[
          { label: 'Patient Payments', value: `$${patientPayments}` },
          { label: 'Insurance Claims', value: `$${insuranceClaims}` },
          { label: 'Outstanding Balances', value: `$${outstandingBalances}` },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={fadeIn}
          >
            <h2 className="text-xl font-semibold text-gray-700">{item.label}</h2>
            <p className="text-2xl text-gray-900 mt-2">{item.value}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Importance Section */}
      <motion.section className="mb-16" variants={fadeIn}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Importance of Effective Accounts Receivables Management
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <motion.li variants={fadeIn}>
            Optimizes cash flow by ensuring prompt payment collection.
          </motion.li>
          <motion.li variants={fadeIn}>
            Reduces days in AR, improving financial health.
          </motion.li>
          <motion.li variants={fadeIn}>
            Enhances patient satisfaction through transparent billing practices.
          </motion.li>
          <motion.li variants={fadeIn}>
            Provides insights into financial performance for better decision-making.
          </motion.li>
        </ul>
      </motion.section>

      {/* Key Components Section */}
      <motion.section className="mb-16" variants={staggerContainer}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Key Components of Accounts Receivables Management
        </h2>
        <div className="space-y-8">
          {[
            {
              title: 'Dental Billing',
              description:
                'The preparation and submission of claims to insurance companies for reimbursement of services provided. This includes accurate coding and following payer guidelines.',
            },
            {
              title: 'Insurance and Patient AR Management',
              description:
                'Monitoring outstanding balances for both patient accounts and insurance claims, ensuring timely follow-ups and clear policies for overdue accounts.',
            },
            {
              title: 'EOB Posting',
              description:
                'Accurately posting Explanation of Benefits (EOBs) into the system to reconcile payments against services billed, identifying discrepancies for resolution.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* KPI Section */}
      <motion.section
        className="bg-white p-6 rounded-lg shadow-md mb-16"
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Performance Indicators (KPIs)
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Days in AR: {daysInAR} days</li>
          <li>Denial Rate: {denialRate}%</li>
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default AccountsReceivables;
