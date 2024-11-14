import React, { useEffect } from 'react';

// Define the content dynamically
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
          content: `Medical records can be stored in various formats, including paper files and electronic health records (EHRs). The shift towards digital records has been significant due to the advantages of accessibility and security. Effective organization involves categorizing records by patient name, date of service, or type of treatment, enabling quick retrieval when needed.`,
        },
        {
          title: "Retrieval and Access Control",
          content: `Healthcare professionals must have timely access to medical records to make informed decisions about patient care. This requires robust systems that allow for efficient searching and retrieval. Access to sensitive patient information is strictly regulated under laws such as HIPAA, which mandates that only authorized personnel can view or manage medical records.`,
        },
        {
          title: "Sorting and Tagging",
          content: `Sorting involves categorizing documents by type (e.g., lab results, imaging reports) or by the nature of the visit (e.g., routine check-up, emergency care). Tagging enhances searchability within electronic systems by attaching keywords or metadata to documents, facilitating easier access during clinical decision-making.`,
        },
        {
          title: "Retention and Disposal",
          content: `Medical records must be retained for specific periods as dictated by state laws and regulations. While HIPAA does not specify retention durations, many states require records to be kept for at least seven years after the last treatment date. Secure disposal methods are essential to protect patient privacy when records are no longer needed.`,
        },
      ],
    },
    {
      heading: "Importance of Medical Records Management",
      items: [
        "Quality of Care: Accurate and accessible medical records enable healthcare providers to make informed decisions about diagnosis and treatment, leading to improved patient outcomes.",
        "Regulatory Compliance: Adhering to federal and state regulations regarding record keeping helps prevent legal issues and penalties associated with improper handling of patient information.",
        "Operational Efficiency: Streamlined processes for managing medical records reduce administrative burdens on healthcare staff, allowing them to focus more on patient care rather than paperwork.",
        "Data Security: Implementing robust security measures protects sensitive patient information from unauthorized access or breaches, which is critical in maintaining trust between patients and providers.",
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-8 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
        {content.title}
      </h1>
      <p className="text-base md:text-lg mb-8 leading-relaxed">
        {content.intro}
      </p>

      {content.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
            {section.heading}
          </h2>

          {/* Render items differently based on their structure (objects vs strings) */}
          {section.items.map((item, idx) =>
            typeof item === "string" ? (
              <li key={idx} className="text-base md:text-lg ml-5 list-disc list-inside mb-2">
                {item}
              </li>
            ) : (
              <div key={idx} className="mb-4 p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            )
          )}
        </section>
      ))}
    </div>
  );
};

export default MedicalRecordsManagement;
