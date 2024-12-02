import React, { useEffect } from "react";
import {
  FaHeartbeat,
  FaLaptopMedical,
  FaExclamationCircle,
  FaHandsHelping,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section className="p-8 py-24 bg-gradient-to-b from-blue-50 via-gray-100 to-white">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-800 mb-6">
          {telehealthData.title}
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          {telehealthData.description}
        </p>
      </div>

      <div className="container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {telehealthData.sections.map((section, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                {section.icon}
              </div>
              <h2 className="text-2xl font-semibold text-center text-blue-800 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 text-center mb-6">
                {section.description}
              </p>
              <ul className="space-y-4">
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-800">
                    <strong>{detail.title}: </strong>
                    {detail.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-green-400 to-purple-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TelehealthRPM;
