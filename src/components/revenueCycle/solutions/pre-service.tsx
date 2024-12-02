import React, { useEffect } from "react";
import { 
  FaFileMedical, 
  FaShieldAlt, 
  FaClipboardCheck, 
  FaCheckCircle, 
  FaUserNurse 
} from "react-icons/fa";
import { motion } from "framer-motion";

const UMProcess: React.FC = () => {
  const umData = {
    title: "UM, Pre-Auth, Pre-Service & Post-Service Verifications in U.S. Healthcare",
    description:
      "Utilization Management (UM) is a critical process in the U.S. healthcare system that ensures patients receive appropriate, efficient, and medically necessary care. This process includes various components such as pre-authorization (pre-auth), pre-service checks, and post-service verifications, typically conducted by highly skilled registered nurses.",
    sections: [
      {
        icon: <FaFileMedical className="text-blue-500 text-3xl" />,
        title: "Utilization Management (UM)",
        description:
          "Utilization management involves systematic reviews of healthcare services to determine their necessity and appropriateness based on established criteria.",
        list: [
          { title: "Enhancing Patient Outcomes", content: "Ensuring that patients receive the right care at the right time." },
          { title: "Cost Containment", content: "Reducing unnecessary healthcare expenditures by preventing overutilization of services." },
          { title: "Quality Assurance", content: "Monitoring and improving the quality of care delivered to patients." },
        ],
      },
      {
        icon: <FaShieldAlt className="text-green-500 text-3xl" />,
        title: "Pre-Authorization (Pre-Auth)",
        description:
          "Pre-authorization is a process required by many insurance plans before certain services, procedures, or medications can be provided.",
        list: [
          { title: "Medical Necessity Verification", content: "Insurers assess whether the requested service is medically necessary based on clinical guidelines and patient history." },
          { title: "Avoiding Financial Burden", content: "Pre-auth prevents unexpected costs for patients and providers if a service is later deemed non-covered." },
          { title: "Timeframe for Approval", content: "Pre-auth can take up to 30 days, requiring providers to submit supporting documentation." },
        ],
      },
      {
        icon: <FaClipboardCheck className="text-purple-500 text-3xl" />,
        title: "Pre-Service Checks",
        description:
          "Pre-service checks verify patient eligibility and benefits prior to delivering healthcare services.",
        list: [
          { title: "Insurance Verification", content: "Confirming patient’s active coverage and understanding what services are covered." },
          { title: "Identifying Required Authorizations", content: "Determining if specific procedures require prior authorization to ensure compliance with payer requirements." },
        ],
      },
      {
        icon: <FaCheckCircle className="text-indigo-500 text-3xl" />,
        title: "Post-Service Verifications",
        description:
          "Post-service verifications occur after care is provided, reviewing clinical documentation to confirm that services rendered were necessary and appropriately billed.",
        list: [
          { title: "Claims Review", content: "Assessing claims to confirm alignment with medical policies and coverage criteria." },
          { title: "Medical Records Requests", content: "Insurers may request additional documentation to support claims and verify medical necessity." },
          { title: "Denial Management", content: "RNs play a vital role in analyzing denial reasons and working with providers to appeal decisions." },
        ],
      },
      {
        icon: <FaUserNurse className="text-pink-500 text-3xl" />,
        title: "Role of Registered Nurses in UM Processes",
        description:
          "Registered nurses are integral to the UM process due to their clinical expertise and ability to interpret complex medical information.",
        list: [
          { title: "Conducting Clinical Reviews", content: "RNs evaluate patient records to assess treatment appropriateness." },
          { title: "Educating Providers", content: "They provide guidance on documentation practices to reduce denials." },
          { title: "Coordinating Care", content: "Nurses liaise between patients, providers, and insurance companies to inform all parties of necessary authorizations." },
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 min-h-screen py-20">
      <div className="relative bg-blue-100 p-12 text-center mb-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900">{umData.title}</h1>
          <p className="text-lg lg:text-xl mt-4 text-blue-800">{umData.description}</p>
        </motion.div>
      </div>

      <div className="container mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 px-6 lg:px-12">
        {umData.sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform transition hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="ml-4 text-xl font-semibold text-gray-900">{section.title}</h2>
            </div>
            <p className="text-gray-700">{section.description}</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.content}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UMProcess;
