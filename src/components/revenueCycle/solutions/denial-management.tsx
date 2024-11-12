import React from "react";
import { FaExclamationTriangle, FaUserNurse, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

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
          { title: "Coding Errors", description: "Incorrect coding can lead to denials, as claims must accurately reflect the services provided." },
          { title: "Medical Necessity", description: "Payers often deny claims if they determine that the service was not medically necessary based on their criteria." },
          { title: "Authorization Issues", description: "Lack of prior authorization or failure to meet specific payer requirements can result in denied claims." },
          { title: "Patient Eligibility", description: "Claims may be denied if the patient is not eligible for coverage under their insurance plan." },
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

  return (
    <section className="py-20 pt-28 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          {denialManagementData.title}
        </h1>
        <p className="text-lg text-gray-600">{denialManagementData.description}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {denialManagementData.sections.map((section, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="flex flex-col justify-center items-center mb-4">
              {section.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-4">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-700 mb-4">{section.content}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {section.list.map((item, itemIndex) =>
                typeof item === "string" ? (
                  <li key={itemIndex}>{item}</li>
                ) : (
                  <li key={itemIndex}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DenialManagement;
