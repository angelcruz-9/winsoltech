import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const CashPostingComponent: React.FC = () => {
  const cashPostingData = {
    title: "Cash Posting in U.S. Healthcare Services",
    description: "Cash posting, also known as payment posting, is a critical component of the revenue cycle management (RCM) process in healthcare. It involves recording payments received from patients and insurance companies into the medical billing software, ensuring that each payment is accurately allocated to the corresponding patient accounts.",
    sections: [
      {
        heading: "What is Cash Posting?",
        items: [
          { content: "Receiving Payments: Payments can come from various sources, including insurance companies, government programs, and patients themselves." },
          { content: "Recording Payments: Once payments are received, they are recorded in the billing system with details like the amount, date, and payer." },
          { content: "Allocating Payments: Payments are allocated to specific patient accounts based on services rendered." },
          { content: "Reconciliation: This involves comparing recorded payments against bank deposits to ensure all transactions are accounted for correctly." },
        ],
      },
      {
        heading: "Importance of Accurate Cash Posting",
        items: [
          { title: "Revenue Optimization", content: "Ensures healthcare providers receive full reimbursement for services rendered." },
          { title: "Reduction of Denials", content: "Helps in reducing errors when submitting claims to secondary payers." },
          { title: "Improved Financial Reporting", content: "Provides a clear picture of the financial status of the organization." },
          { title: "Enhanced Patient Satisfaction", content: "Timely and accurate billing practices contribute to higher patient satisfaction." },
        ],
      },
      {
        heading: "Methods of Cash Posting",
        items: [
          {
            title: "Manual Cash Posting",
            content: "In this method, administrative staff manually enter payment information into the billing system. While it allows detailed oversight, it is time-consuming and prone to human error.",
          },
          {
            title: "Automated Cash Posting",
            content: "Many healthcare organizations use automated systems to streamline cash posting by importing data from ERA or EOB documents, reducing errors and speeding up the process.",
          },
        ],
      },
      {
        heading: "Challenges in Cash Posting",
        items: [
          { title: "Complex Payment Structures", content: "Payments with adjustments such as co-pays, deductibles, and non-covered services complicate the allocation process." },
          { title: "Denials and Adjustments", content: "Claim denials require careful handling to determine appeal or billing adjustments." },
          { title: "Timeliness", content: "Delays in cash posting can inflate accounts receivable figures and misrepresent actual revenue." },
        ],
      },
      {
        heading: "Best Practices for Effective Cash Posting",
        items: [
          { title: "Regular Training", content: "Staff should receive ongoing training on coding updates and billing regulations." },
          { title: "Use of Technology", content: "Investing in advanced billing software can streamline cash posting." },
          { title: "Detailed Reconciliation Processes", content: "Regular reconciliation ensures funds are accounted for and discrepancies are addressed promptly." },
          { title: "Monitoring Key Performance Indicators (KPIs)", content: "Tracking metrics such as days in AR and denial rates helps identify areas for improvement." },
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-8 pt-28 max-w-7xl mx-auto font-sans px-4 sm:px-6 md:px-8">
      <motion.h1
        className="text-5xl text-center font-extrabold text-blue-900 mb-8 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {cashPostingData.title}
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {cashPostingData.description}
      </motion.p>

      {cashPostingData.sections.map((section, index) => (
        <motion.section
          key={index}
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.h2
            className="text-2xl  font-semibold text-blue-700 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {section.heading}
          </motion.h2>
          {section.items.length > 1 ? (
            <ul className="space-y-6 text-gray-700">
              {section.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: itemIndex * 0.2 }}
                >
                  <FaCheckCircle className="text-teal-500" size={24} />
                  <p>
                    {'title' in item && <strong>{item.title}: </strong>}
                    {item.content}
                  </p>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: itemIndex * 0.2 }}
                >
                  {'title' in item && (
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                  )}
                  <p className="text-gray-600">{item.content}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      ))}
    </div>
  );
};

export default CashPostingComponent;
