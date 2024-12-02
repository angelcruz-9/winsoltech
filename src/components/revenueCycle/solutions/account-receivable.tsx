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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      className="pt-32 p-8 mx-auto bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen lg:px-24"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        variants={fadeIn}
      >
        <h1 className="text-5xl font-extrabold text-blue-900 tracking-wide">
          Accounts Receivables in U.S. Healthcare Services
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Efficient AR management is key to the financial sustainability of healthcare organizations, ensuring smooth operations and optimal revenue cycle processes.
        </p>
      </motion.header>

      {/* Key Metrics Section */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        variants={staggerContainer}
      >
        {[
          { label: 'Patient Payments', value: '2000' },
          { label: 'Insurance Claims', value: '5000' },
          { label: 'Outstanding Balances', value: '10000' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            variants={fadeIn}
          >
            <h2 className="text-xl font-semibold text-gray-800">{item.label}</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">{item.value}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* AR Importance Section */}
      <motion.section className="mb-16" variants={fadeIn}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Importance of Effective Accounts Receivables Management
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <motion.li variants={fadeIn} className="text-lg">
            Ensures timely payments, improving cash flow and financial stability.
          </motion.li>
          <motion.li variants={fadeIn} className="text-lg">
            Reduces days in AR, leading to improved operational efficiency.
          </motion.li>
          <motion.li variants={fadeIn} className="text-lg">
            Increases patient satisfaction with transparent billing practices.
          </motion.li>
          <motion.li variants={fadeIn} className="text-lg">
            Provides actionable insights for better decision-making and strategy.
          </motion.li>
        </ul>
      </motion.section>

      {/* Key Components Section */}
      <motion.section className="mb-16" variants={staggerContainer}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Key Components of Accounts Receivables Management
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Dental Billing',
              description:
                'Preparation and submission of claims to insurers for reimbursement, ensuring accurate coding and adherence to payer guidelines.',
            },
            {
              title: 'Insurance and Patient AR Management',
              description:
                'Tracking outstanding balances for patients and insurance claims, ensuring timely follow-ups and policies for overdue payments.',
            },
            {
              title: 'EOB Posting',
              description:
                'Accurate posting of Explanation of Benefits (EOBs) to reconcile payments with billed services and resolve discrepancies.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* KPI Section */}
      <motion.section
        className="bg-white p-6 rounded-xl shadow-xl mb-16"
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Performance Indicators (KPIs)
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="text-lg font-medium">Days in AR: {daysInAR} days</li>
          <li className="text-lg font-medium">Denial Rate: {denialRate}%</li>
        </ul>
      </motion.section>

    </motion.div>
  );
};

export default AccountsReceivables;
