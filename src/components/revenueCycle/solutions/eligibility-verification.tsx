import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface EligibilityVerificationItem {
  title?: string;
  content: string;
}

interface EligibilityVerificationSection {
  heading: string;
  items: EligibilityVerificationItem[];
}

interface EligibilityVerificationData {
  title: string;
  description: string;
  sections: EligibilityVerificationSection[];
}

const EligibilityVerificationComponent: React.FC = () => {
  const eligibilityVerificationData: EligibilityVerificationData = {
    title: "Eligibility Verification in U.S. Healthcare Services",
    description:
      "Eligibility verification is a crucial process in the healthcare revenue cycle that involves confirming a patient's insurance coverage and benefits before services are rendered. This process is particularly important in dental practices, where understanding a patient's insurance status can significantly impact treatment planning, patient satisfaction, and overall financial performance.",
    sections: [
      {
        heading: "What is Eligibility Verification?",
        items: [
          { content: "Active Insurance Coverage: Confirming that the patient has valid insurance at the time of service." },
          { content: "Benefit Details: Understanding what services are covered, including limits on coverage, co-pays, deductibles, and any exclusions." },
          { content: "Prior Authorization Requirements: Identifying if pre-authorization is needed for specific procedures or treatments." },
        ],
      },
      {
        heading: "Importance of Eligibility Verification",
        items: [
          { title: "Minimizing Claim Denials", content: "By verifying eligibility beforehand, providers can reduce the risk of claim denials due to lack of coverage or incorrect information." },
          { title: "Improved Cash Flow", content: "Accurate eligibility checks ensure that claims are submitted correctly and promptly, enhancing cash flow for healthcare organizations." },
          { title: "Enhanced Patient Experience", content: "Patients receive clear information about their financial responsibilities upfront, reducing confusion and dissatisfaction related to unexpected bills." },
          { title: "Efficient Resource Allocation", content: "Knowing a patient's coverage allows providers to allocate resources effectively and prioritize treatments based on insurance benefits." },
        ],
      },
      {
        heading: "The Eligibility Verification Process",
        items: [
          { content: "Patient Account Setup: When a new patient visits or an emergency patient account is created, basic demographic and insurance information is collected." },
          { content: "Insurance Information Update: For existing patients, any changes in insurance coverage must be updated in the practice management system." },
          { content: "Real-Time Verification: Many practices now use software solutions that allow for real-time verification of eligibility through direct connections with insurance payers." },
          { content: "Documentation: All verified information should be documented within the patient’s record for future reference and billing accuracy." },
        ],
      },
      {
        heading: "Technological Solutions for Eligibility Verification",
        items: [
          { title: "Automated Software Solutions", content: "Many dental practices utilize software that integrates with their practice management systems (PMS) to automate eligibility checks." },
          { content: "QuickVerify™ by Medusind: This technology offers timely updates directly into the PMS, reducing administrative burdens and enhancing cash flow." },
          { content: "CareStack's Insurance Verification Module: This module allows practices to verify patients' insurance coverage quickly and efficiently." },
          { content: "Digital Platforms: Some platforms offer mobile-friendly interfaces that allow staff to verify eligibility on-the-go, improving workflow efficiency." },
        ],
      },
      {
        heading: "Challenges in Eligibility Verification",
        items: [
          { title: "Complex Insurance Policies", content: "Navigating various insurance plans with different rules and coverage options can complicate the verification process." },
          { title: "Time Constraints", content: "Manual verification processes can be time-consuming and may delay patient care if not managed efficiently." },
          { title: "Staff Training Needs", content: "Ensuring that staff are adequately trained in using verification tools and understanding insurance policies is essential for effective implementation." },
        ],
      },
      {
        heading: "Best Practices for Effective Eligibility Verification",
        items: [
          { title: "Implement Automated Systems", content: "Utilizing automated eligibility verification tools can enhance efficiency and reduce human error." },
          { title: "Regular Staff Training", content: "Continuous education on new insurance policies and software updates helps staff stay informed and effective in their roles." },
          { title: "Create Standard Operating Procedures (SOPs)", content: "Establishing clear SOPs for eligibility verification ensures consistency across the practice." },
          { title: "Monitor Key Performance Indicators (KPIs)", content: "Tracking metrics such as denial rates related to eligibility issues can help identify areas needing improvement." },
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 py-12 pt-28 px-6 max-w-7xl mx-auto font-sans">
      <motion.h1 
        className="text-4xl text-center font-bold text-blue-800 mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {eligibilityVerificationData.title}
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-700 mb-8 text-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        {eligibilityVerificationData.description}
      </motion.p>

      {eligibilityVerificationData.sections.map((section, index) => (
        <motion.section 
          key={index} 
          className="mb-12 p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: index * 0.2 }}
        >
          <motion.h2 
            className="text-3xl font-semibold text-blue-600 mb-6"
            initial={{ y: -20 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            {section.heading}
          </motion.h2>

          <div className="space-y-6">
            {section.items.length > 1 ? (
              <motion.ul 
                className="list-disc list-inside space-y-4 text-gray-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
              >
                {section.items.map((item, itemIndex) => (
                  <motion.li key={itemIndex} 
                    initial={{ x: -30 }} 
                    animate={{ x: 0 }} 
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    {item.title && <strong className="font-medium">{item.title}: </strong>}
                    {item.content}
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex} 
                    className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-blue-500"
                    initial={{ scale: 0.9 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 0.5, delay: itemIndex * 0.3 }}
                  >
                    {item.title && (
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                    )}
                    <p className="text-gray-600">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default EligibilityVerificationComponent;
