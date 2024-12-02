import React from 'react';
import { motion } from 'framer-motion';
import { FaFileMedical, FaHospital, FaUserMd, FaHandHoldingMedical } from 'react-icons/fa'; // Icons

interface SectionProps {
  title: string;
  content: string[];
  icon: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex items-center space-x-4 mb-6">
      <div className="text-3xl text-indigo-600">{icon}</div>
      <h2 className="text-2xl font-medium text-indigo-800">{title}</h2>
    </div>
    <ul className="list-disc list-inside text-gray-700 space-y-3">
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const ClaimSubmission: React.FC = () => {
  return (
    <div className="px-6 md:px-12 pt-20 pb-10 bg-gradient-to-r from-blue-50 to-blue-200">
      {/* Header Section */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Healthcare Claim Submission in the U.S.
      </motion.h1>

      {/* Introduction Paragraph */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Claim submission in healthcare ensures accurate reimbursement, minimizes denials, and maintains compliance with industry regulations.
      </motion.p>

      {/* Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Section
          title="Why Claim Submission Matters"
          icon={<FaFileMedical />}
          content={[
            "Ensures providers are paid for services rendered.",
            "Prevents delays and denials by maintaining accuracy.",
            "Critical for adhering to healthcare standards and regulations.",
          ]}
        />
        <Section
          title="Key Elements in Claim Submission"
          icon={<FaHospital />}
          content={[
            "Patient Registration: Collecting accurate patient information.",
            "Medical Coding: Ensuring correct codes for services and diagnosis.",
            "Claim Preparation: Properly compiling and formatting data.",
            "Submission: Sending claims electronically or through paper.",
            "Adjudication: Review and decision-making by insurance companies.",
          ]}
        />
        <Section
          title="The Submission Process"
          icon={<FaUserMd />}
          content={[
            "Collect Patient Details: Confirm insurance and medical history.",
            "Apply Medical Codes: Use correct diagnosis and procedure codes.",
            "Submit Claims: Ensure correct submission channels.",
            "Claim Review: Insurers process and review for payment.",
            "Receive Payment: Claims are paid as per policy guidelines.",
          ]}
        />
        <Section
          title="Benefits of Efficient Claims"
          icon={<FaHandHoldingMedical />}
          content={[
            "Faster Reimbursement: Reduce waiting time for payment.",
            "Reduced Errors: Fewer claim rejections due to accurate coding.",
            "Compliance: Helps in meeting healthcare guidelines and requirements.",
            "Improved Financial Health: Strengthens cash flow for providers.",
          ]}
        />
      </div>
    </div>
  );
};

export default ClaimSubmission;
