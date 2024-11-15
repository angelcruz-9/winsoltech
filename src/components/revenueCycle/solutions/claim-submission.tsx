import React from 'react';

interface SectionProps {
  title: string;
  content: string[];
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <div className="bg-white shadow-md rounded-lg p-6 border mb-6">
    <h2 className="text-lg md:text-xl font-bold text-indigo-700 mb-4">{title}</h2>
    <ul className="list-disc list-inside text-gray-700">
      {content.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
);

const ClaimSubmission: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 pt-28 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-8 text-center">
        Overview of Claim Submission in U.S. Healthcare Services
      </h1>
      <p className="text-lg text-gray-800 mb-6 text-center">
        Claim submission ensures healthcare providers are reimbursed for services rendered while maintaining compliance and accuracy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Section
          title="Importance of Claim Submission"
          content={[
            "Financial Reimbursement: Ensures providers receive payment for services rendered.",
            "Compliance and Accuracy: Maintains regulatory standards and reduces claim denials.",
          ]}
        />
        <Section
          title="Key Components of Claim Submission"
          content={[
            "Patient Registration: Collect demographics, insurance, and medical history.",
            "Medical Coding: Use standardized codes (CPT, HCPCS) for accurate claims.",
            "Claim Preparation: Include procedure codes, diagnosis codes, and patient details.",
            "Claim Transmission: Submit electronically or via paper forms (CMS-1500).",
            "Adjudication Process: Insurance reviews claims for approval, denial, or clarification.",
            "Payment Processing: Payments issued based on negotiated rates.",
          ]}
        />
        <Section
          title="Steps in the Claim Submission Process"
          content={[
            "Patient Registration: Gather patient information.",
            "Insurance Verification: Confirm coverage for services provided.",
            "Medical Coding: Assign accurate codes for services.",
            "Claim Preparation: Compile required details.",
            "Claim Submission: Submit electronically or via paper format.",
            "Adjudication by Payer: Insurance reviews the claim.",
            "Payment Processing: Issue payment for approved claims.",
          ]}
        />
        <Section
          title="Benefits of Efficient Claim Submission"
          content={[
            "Reduced Denials: Properly coded claims reduce delays and denials.",
            "Faster Reimbursements: Electronic submissions speed up processing.",
            "Improved Cash Flow: Quicker payments enhance financial health.",
            "Enhanced Compliance: Adheres to coding standards and payer guidelines.",
          ]}
        />
      </div>
    </div>
  );
};

export default ClaimSubmission;
