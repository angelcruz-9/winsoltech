import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const content = {
  title: "Medical Records Management in U.S. Healthcare Services",
  intro: `Medical records management is a vital aspect of healthcare administration that involves the systematic handling of patient health information throughout its lifecycle. This encompasses the creation, storage, retrieval, and disposal of medical records, ensuring that healthcare providers can access accurate and timely information to deliver quality care. Effective medical records management is essential for compliance with regulations, safeguarding patient privacy, and enhancing operational efficiency within healthcare organizations.`,
  sections: [
    {
      heading: "Key Components of Medical Records Management",
      items: [
        {
          title: "Intake and Creation of Medical Records",
          content: `The process begins when a patient first visits a healthcare provider. Information collected during this visit includes personal details, medical history, treatment plans, and any relevant diagnostic data. Accurate documentation during the intake process is crucial as it lays the foundation for future care and billing.`,
        },
        {
          title: "Storage and Organization",
          content: `Medical records can be stored in various formats, including paper files and electronic health records (EHRs). The shift towards digital records has been significant due to the advantages of accessibility and security.`,
        },
        {
          title: "Retrieval and Access Control",
          content: `Healthcare professionals must have timely access to medical records to make informed decisions about patient care. This requires robust systems that allow for efficient searching and retrieval.`,
        },
      ],
    },
    {
      heading: "Importance of Medical Records Management",
      items: [
        "Quality of Care: Accurate and accessible medical records enable healthcare providers to make informed decisions about diagnosis and treatment, leading to improved patient outcomes.",
        "Regulatory Compliance: Adhering to federal and state regulations regarding record keeping helps prevent legal issues and penalties associated with improper handling of patient information.",
      ],
    },
    {
      heading: "Challenges in Medical Records Management",
      items: [
        "Data Privacy Concerns: Ensuring compliance with HIPAA regulations regarding patient privacy can be challenging, especially with increasing cyber threats.",
        "Integration Issues: Many healthcare organizations face difficulties integrating new EHR systems with existing workflows or legacy systems, which can hinder efficiency.",
        "Training Needs: Staff must be adequately trained in both the technical aspects of record management systems and the legal requirements surrounding patient data.",
      ],
    },
    {
      heading: "Technological Advancements in Medical Records Management",
      items: [
        "Electronic Health Records (EHRs): EHRs automate access to patient information, reducing errors associated with manual record-keeping while facilitating better communication among care teams.",
        "Intelligent Document Processing (IDP): Advanced technologies such as optical character recognition (OCR) enable the conversion of physical documents into searchable digital formats.",
        "Cloud-Based Solutions: These allow for secure access to medical records from anywhere while ensuring data integrity and compliance with security standards.",
      ],
    },
  ],
};

const MedicalRecordsManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount
  }, []);

  return (
    <div className="py-24 px-8 bg-gradient-to-r from-blue-50 via-blue-100 to-white">
      {/* Header Section */}
      <motion.div
        className="text-center max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">{content.title}</h1>
        <p className="text-xl text-gray-600 leading-relaxed">{content.intro}</p>
      </motion.div>

      {/* Sections */}
      {content.sections.map((section, sectionIndex) => (
        <motion.section
          key={sectionIndex}
          className="px-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: sectionIndex * 0.3 }}
        >
          {/* Section Header */}
          <h2 className="text-3xl font-semibold text-blue-600 mb-8">{section.heading}</h2>

          {/* Cards or List Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((item, itemIndex) =>
              typeof item === "string" ? (
                <motion.div
                  key={itemIndex}
                  className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * itemIndex }}
                >
                  <p className="text-lg text-gray-800">{item}</p>
                </motion.div>
              ) : (
                <motion.div
                  key={itemIndex}
                  className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * itemIndex }}
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </motion.div>
              )
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default MedicalRecordsManagement;
