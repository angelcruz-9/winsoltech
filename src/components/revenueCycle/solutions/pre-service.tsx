import React from "react";
import {
  FaFileMedical,
  FaShieldAlt,
  FaClipboardCheck,
  FaCheckCircle,
  FaUserNurse,
} from "react-icons/fa";

const UMProcess: React.FC = () => {
  const umData = {
    title: "UM, Pre-Auth, Pre-Service & Post-Service Verifications in U.S. Healthcare",
    description:
      "Utilization Management (UM) is a critical process in the U.S. healthcare system that ensures patients receive appropriate, efficient, and medically necessary care. This process includes various components such as pre-authorization (pre-auth), pre-service checks, and post-service verifications, typically conducted by highly skilled registered nurses.",
    sections: [
      {
        icon: <FaFileMedical className="text-blue-500" />,
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
        icon: <FaShieldAlt className="text-green-500" />,
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
        icon: <FaClipboardCheck className="text-purple-500" />,
        title: "Pre-Service Checks",
        description:
          "Pre-service checks verify patient eligibility and benefits prior to delivering healthcare services.",
        list: [
          { title: "Insurance Verification", content: "Confirming patient’s active coverage and understanding what services are covered." },
          { title: "Identifying Required Authorizations", content: "Determining if specific procedures require prior authorization to ensure compliance with payer requirements." },
        ],
      },
      {
        icon: <FaCheckCircle className="text-indigo-500" />,
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
        icon: <FaUserNurse className="text-pink-500" />,
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

  return (
    <section className="p-8 lg:pt-32 lg:p-16 bg-gray-50">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{umData.title}</h1>
        <p className="text-lg text-gray-600">{umData.description}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {umData.sections.map((section, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-3">{section.title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{section.description}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <strong>{item.title}:</strong> {item.content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UMProcess;
