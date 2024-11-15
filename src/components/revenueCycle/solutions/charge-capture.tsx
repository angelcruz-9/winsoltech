import React, { useEffect } from "react";
import {
  FaClipboardList,
  FaFileAlt,
  FaChartLine,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ChargeCapture: React.FC = () => {
  const chargeCaptureData = {
    title: "Charge Capture in U.S. Healthcare Services",
    description:
      "Charge capture is a fundamental process in the U.S. healthcare system, ensuring that all billable services provided to patients are accurately documented and submitted for reimbursement. It is critical for financial health within healthcare organizations, directly impacting revenue and compliance with billing regulations.",
    sections: [
      {
        icon: <FaClipboardList className="text-blue-500" />,
        title: "What is Charge Capture?",
        description:
          "Charge capture refers to the systematic method of recording and documenting all services rendered during a patient encounter.",
        list: [
          { title: "Procedures and Treatments", content: "Any medical procedures, tests, or treatments provided to the patient." },
          { title: "Medications", content: "Documentation of any medications administered or prescribed." },
          { title: "Supplies Used", content: "Recording any medical supplies utilized during the patient’s care." },
        ],
      },
      {
        icon: <FaFileAlt className="text-green-500" />,
        title: "The Charge Capture Process",
        description: "The charge capture process involves multiple steps to ensure accurate billing and reimbursement.",
        list: [
          { title: "Provision of Service", content: "Healthcare providers deliver medical services to patients." },
          { title: "Documentation of Services Provided", content: "All services must be documented accurately and in real-time." },
          { title: "Assigning Medical Codes", content: "Services are coded using standardized codes (e.g., CPT, ICD-10)." },
          { title: "Charge Entry", content: "Coded information is entered into the billing system for record-keeping." },
          { title: "Reviews and Approvals", content: "Claims are reviewed for accuracy to ensure compliance with payer requirements." },
          { title: "Submitting Claims", content: "Final claims are submitted to insurers or payers for reimbursement." },
        ],
      },
      {
        icon: <FaChartLine className="text-purple-500" />,
        title: "Importance of Accurate Charge Capture",
        description: "Accurate charge capture is crucial for various reasons in healthcare organizations.",
        list: [
          { title: "Revenue Optimization", content: "Ensures providers are fairly compensated, supporting financial sustainability." },
          { title: "Minimizing Claim Denials", content: "Precise charge entry reduces claim denials and eases provider-payer relationships." },
          { title: "Enhancing Patient Satisfaction", content: "Transparent billing fosters trust and satisfaction among patients." },
          { title: "Supporting Compliance", content: "Proper coding and adherence to guidelines help avoid audits and penalties." },
        ],
      },
      {
        icon: <FaExclamationTriangle className="text-red-500" />,
        title: "Challenges in Charge Capture",
        description: "Despite its importance, the charge capture process faces several challenges.",
        list: [
          { title: "Documentation Errors", content: "Incomplete documentation can lead to missed or incorrect billing." },
          { title: "Technological Limitations", content: "Not all systems integrate effectively, potentially causing discrepancies." },
          { title: "Staff Training", content: "Proper training in accurate documentation is essential but often overlooked." },
        ],
      },
      {
        icon: <FaLightbulb className="text-yellow-500" />,
        title: "Strategies for Improving Charge Capture",
        description: "Healthcare organizations can implement strategies to improve the charge capture process.",
        list: [
          { title: "Real-Time Documentation", content: "Encourage providers to document services as they are delivered." },
          { title: "Integration with EHR Systems", content: "Utilize technology that integrates charge capture with EHRs to reduce errors." },
          { title: "Regular Training Sessions", content: "Provide ongoing education for staff on coding updates and documentation standards." },
          { title: "Data Analytics", content: "Use analytics to identify trends and pinpoint areas for improvement." },
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="p-8 lg:pt-24 lg:p-16 bg-gray-50">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl lg:text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {chargeCaptureData.title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {chargeCaptureData.description}
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {chargeCaptureData.sections.map((section, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-3">{section.title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{section.description}</p>
            <motion.ul
              className="list-disc list-inside space-y-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {section.list.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                >
                  <strong>{item.title}:</strong> {item.content}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChargeCapture;
