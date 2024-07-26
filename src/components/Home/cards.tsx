import React from 'react';
import { motion } from 'framer-motion';

const aboutUsData = [
  {
    id: 1,
    title: 'Cash Posting',
    description: 'When a claim has been processed and paid, the amount paid will have to be applied to the amount charged for individual patient’s treatment in the Medical Billing Software.'
  },
  {
    id: 2,
    title: 'Eligibility Verification',
    description: 'Setup of new patient/emergency patient accounts, update existing accounts with insurance changes in your dental software.'
  },
  {
    id: 3,
    title: 'Account Receivables',
    description: 'Dental Management Services for dental billing, insurance & patient accounts receivable management, and EOB posting.'
  }
];

function Cards() {
  return (
    <div className="py-16 flex flex-col items-center absolute">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {aboutUsData.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h2>
            <p className="text-gray-700">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
