import React, { useEffect } from "react";
import {
  FaExclamationTriangle,
  FaUserNurse,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

const DenialManagement: React.FC = () => {
  const denialManagementData = {
    title: "Denial Management in U.S. Healthcare",
    description:
      "Denial management is a critical aspect of revenue cycle management in healthcare, focusing on the prevention, investigation, and resolution of denied claims. Effective denial management ensures healthcare providers receive timely and appropriate reimbursement for services rendered.",
    sections: [
      {
        icon: <FaExclamationTriangle className="text-red-600 text-4xl mb-4" />,
        title: "Understanding Denials",
        content:
          "A claim denial occurs when a payer, such as Medicare or a private insurance company, refuses to reimburse a provider for medical services. Denials can stem from various issues, including:",
        list: [
          {
            title: "Coding Errors",
            description:
              "Incorrect coding can lead to denials, as claims must accurately reflect the services provided.",
          },
          {
            title: "Medical Necessity",
            description:
              "Payers often deny claims if they determine that the service was not medically necessary based on their criteria.",
          },
          {
            title: "Authorization Issues",
            description:
              "Lack of prior authorization or failure to meet specific payer requirements can result in denied claims.",
          },
          {
            title: "Patient Eligibility",
            description:
              "Claims may be denied if the patient is not eligible for coverage under their insurance plan.",
          },
        ],
      },
      {
        icon: <FaUserNurse className="text-blue-600 text-4xl mb-4" />,
        title: "The Role of Registered Nurses in Denial Management",
        content:
          "Highly-skilled and experienced registered nurses play a pivotal role in resolving denials related to state authorization, coding, and medical necessity. Their expertise allows them to:",
        list: [
          "Analyze Denials: Nurses can review denied claims to identify patterns and root causes, which is crucial for preventing future denials.",
          "Conduct Root-Cause Analysis: By understanding why claims are denied, nurses can implement changes in documentation or coding practices.",
          "Educate Providers: They can provide education on proper documentation and coding practices to minimize errors that lead to denials.",
        ],
      },
      {
        icon: <FaMoneyBillWave className="text-green-600 text-4xl mb-4" />,
        title: "Impact of Denials on Healthcare Organizations",
        content:
          "Denial rates have been increasing across the healthcare industry, with recent reports indicating an average denial rate of around 12%. The financial impact of these denials is substantial:",
        list: [
          "Revenue Loss: Denied claims can lead to significant revenue loss for healthcare providers. Estimates suggest that hospitals lose approximately $262 billion annually due to denied claims.",
          "Increased Administrative Burden: Resolving denials requires considerable time and resources, diverting attention from patient care.",
        ],
      },
      {
        icon: <FaChartLine className="text-indigo-600 text-4xl mb-4" />,
        title: "Effective Denial Management Strategies",
        content:
          "To combat the rising issue of claim denials, healthcare organizations can implement several key strategies:",
        list: [
          "Preventative Measures: Establishing robust processes to prevent denials before they occur is essential. This includes thorough training for staff on coding and documentation practices.",
          "Root-Cause Analysis: Regularly analyzing denied claims helps identify common issues and trends that need addressing.",
          "Appeals Process: Developing a structured appeals process allows providers to contest unjustified denials effectively.",
          "Continuous Monitoring: Ongoing monitoring of denial trends enables organizations to adapt their strategies and improve overall claim acceptance rates.",
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-18 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        className="text-center mb-16 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-800 mb-6">
          {denialManagementData.title}
        </h1>
        <p className="text-lg text-gray-700">
          {denialManagementData.description}
        </p>
      </motion.div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {denialManagementData.sections.map((section, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                {section.icon}
                <h2 className="text-2xl font-bold text-gray-800 mt-2">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-4">{section.content}</p>
              <ul className="space-y-4">
                {section.list.map((item, itemIndex) =>
                  typeof item === "string" ? (
                    <li
                      key={itemIndex}
                      className="text-gray-700 border-l-4 border-blue-600 pl-4"
                    >
                      {item}
                    </li>
                  ) : (
                    <li
                      key={itemIndex}
                      className="text-gray-700 border-l-4 border-blue-600 pl-4"
                    >
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DenialManagement;
