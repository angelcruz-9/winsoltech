import React, { useEffect } from "react";
import { FaHeartbeat, FaLaptopMedical, FaExclamationCircle, FaHandsHelping } from "react-icons/fa";

const TelehealthRPM: React.FC = () => {
  const telehealthData = {
    title: "Telehealth & Remote Patient Monitoring in U.S. Healthcare Services",
    description:
      "Telehealth and remote patient monitoring (RPM) enhance access to care, improve patient outcomes, and facilitate effective case management by leveraging digital communication tools to provide healthcare remotely.",
    sections: [
      {
        icon: <FaLaptopMedical className="text-indigo-600 text-3xl" />,
        title: "Telehealth Overview",
        description:
          "Telehealth utilizes electronic communication tools to deliver care at a distance, allowing virtual consultations, remote monitoring, and electronic consultations.",
        details: [
          { title: "Video Conferencing", content: "Virtual consultations between patients and providers." },
          { title: "Remote Monitoring", content: "Continuous tracking of patient health data using connected devices." },
          { title: "Electronic Consultations", content: "Provider-to-provider communication for patient care without in-person visits." },
        ],
      },
      {
        icon: <FaHeartbeat className="text-red-600 text-3xl" />,
        title: "Remote Patient Monitoring (RPM)",
        description:
          "RPM collects patient-generated health data from home, engaging patients in managing their health and supporting chronic disease management.",
        details: [
          { title: "Data Collection", content: "Monitoring vital signs (e.g., blood pressure, glucose) in real-time." },
          { title: "Patient Engagement", content: "Encourages patients to actively manage their health." },
          { title: "Chronic Disease Management", content: "Allows continuous monitoring and timely intervention." },
        ],
      },
      {
        icon: <FaHandsHelping className="text-green-600 text-3xl" />,
        title: "Case Management Support",
        description:
          "Telehealth and RPM enhance case management by streamlining communication, ensuring accessible care, and supporting compliance.",
        details: [
          { title: "Coordinated Care", content: "Case managers can connect patients with specialists and coordinate care virtually." },
          { title: "Increased Accessibility", content: "Ongoing support and education through virtual platforms reduces mobility barriers." },
          { title: "Monitoring Compliance", content: "Regular check-ins ensure adherence to treatment plans." },
        ],
      },
      {
        icon: <FaLaptopMedical className="text-purple-600 text-3xl" />,
        title: "Benefits of Telehealth and RPM",
        description:
          "Telehealth and RPM provide improved access, better quality of care, cost savings, and increased patient satisfaction.",
        details: [
          { title: "Improved Access to Care", content: "Specialist access for rural patients reduces healthcare disparities." },
          { title: "Enhanced Quality of Care", content: "Continuous monitoring enables proactive health management." },
          { title: "Cost Efficiency", content: "Reduces costs from in-person visits and hospital readmissions." },
          { title: "Patient Satisfaction", content: "Care from home leads to higher patient satisfaction." },
        ],
      },
      {
        icon: <FaExclamationCircle className="text-yellow-600 text-3xl" />,
        title: "Challenges and Considerations",
        description:
          "Barriers include regulatory issues, limited technology access, and training needs for effective telehealth adoption.",
        details: [
          { title: "Regulatory Barriers", content: "Limited Medicare coverage impacts adoption." },
          { title: "Technology Access", content: "Broadband limitations in rural areas reduce telehealth effectiveness." },
          { title: "Training Needs", content: "Providers require training to integrate telehealth into practice." },
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
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          {telehealthData.title}
        </h1>
        <p className="text-lg text-gray-600">{telehealthData.description}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {telehealthData.sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="ml-4 text-2xl font-semibold text-gray-800">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="space-y-2">
              {section.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="text-gray-700">
                  <strong>{detail.title}:</strong> {detail.content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TelehealthRPM;
