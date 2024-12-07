import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  content: string[];
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <motion.div
    className="bg-gradient-to-r from-white via-gray-100 to-gray-200 shadow-md rounded-xl p-8 mb-8 hover:scale-102 hover:shadow-lg transform transition-all duration-300 ease-in-out"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{title}</h2>
    <ul className="list-disc list-inside text-gray-700 space-y-4">
      {content.map((item, index) => (
        <li key={index} className="text-lg">{item}</li>
      ))}
    </ul>
  </motion.div>
);

const ClaimManagement: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-20 pt-28 px-6 md:px-12">
      {/* Header Section */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Overview of Claim Management in U.S. Healthcare Services
      </motion.h1>

      {/* Introduction Paragraph */}
      <motion.p
        className="text-lg text-gray-800 mb-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Claim management involves the submission, tracking, correction, and follow-up on claims, ensuring healthcare providers receive accurate and timely payments for services rendered.
      </motion.p>

      {/* Grid of Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Section
          title="Importance of Claim Management"
          content={[
            "Financial Health of Providers: Ensures timely reimbursements for operational stability.",
            "Minimizing Denials and Delays: Reduces claim denials and billing issues, improving cash flow.",
          ]}
        />
        <Section
          title="Key Components of Claim Management"
          content={[
            "Claim Submission: Submit claims electronically for efficiency and accuracy.",
            "Tracking Claims: Use clearinghouses to monitor claim status and take immediate action.",
            "Adjudication Process: Payers review claims for eligibility, coding accuracy, and service coverage.",
            "Correcting Errors: Providers correct denied claims and resubmit as needed.",
            "Follow-Up: Continuous follow-up ensures timely payments and resolution of any issues.",
          ]}
        />
        <Section
          title="Steps in the Claim Management Process"
          content={[
            "Patient Registration: Gather comprehensive patient information.",
            "Verification of Insurance Coverage: Ensure coverage for services provided.",
            "Claim Preparation: Prepare claims with accurate coding.",
            "Claim Submission: Submit claims electronically or via paper format.",
            "Tracking Claims: Monitor status through clearinghouses or payer portals.",
            "Adjudication by Payer: Review and decision on claim payment.",
            "Correcting Denied Claims: Address and resubmit claims as needed.",
            "Payment Processing: Approved payments issued to providers.",
          ]}
        />
        <Section
          title="Benefits of Effective Claim Management"
          content={[
            "Increased Revenue Cycle Efficiency: Streamlined claim management enhances revenue cycle.",
            "Higher Claim Submission Accuracy: Compliance efforts reduce errors, leading to approvals.",
            "Enhanced Cash Flow: Timely follow-ups ensure prompt payments, supporting operations.",
            "Improved Patient Satisfaction: Minimizes billing disputes and improves communication.",
          ]}
        />
      </div>
    </div>
  );
};

export default ClaimManagement;
