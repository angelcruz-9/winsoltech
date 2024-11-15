import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  content: string[];
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <motion.div
    className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mb-6 hover:shadow-xl transition-shadow"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const ClaimManagement: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 md:px-8 lg:px-16 py-10">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Overview of Claim Management in U.S. Healthcare Services
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-800 mb-8 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Claim management involves the submission, tracking, correction, and follow-up on claims, ensuring healthcare providers receive accurate and timely payments for services rendered.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
