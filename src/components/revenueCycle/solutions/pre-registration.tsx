import React from 'react';

interface PreRegistrationInfoProps {
  title: string;
  content: string[];
}

const PreRegistrationInfo: React.FC<PreRegistrationInfoProps> = ({ title, content }) => (
  <div className="border rounded-lg p-4 mb-4 shadow-md bg-white">
    <h2 className="text-xl font-semibold text-blue-700 mb-2">{title}</h2>
    <ul className="list-disc list-inside text-gray-700">
      {content.map((item, index) => (
        <li key={index} className="mb-1">{item}</li>
      ))}
    </ul>
  </div>
);

const PatientPreRegistration: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:pt-28 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
        Overview of Patient Pre-Registration in U.S. Healthcare Services
      </h1>
      <p className="text-lg text-gray-800 mb-6 text-center">
        Patient pre-registration streamlines patient intake, enhances data accuracy, and improves the overall patient experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PreRegistrationInfo
          title="Enhancing Patient Experience"
          content={[
            "Allows patients to provide information at their convenience, reducing stress.",
            "Leads to more accurate data collection as patients take time to recall and record details.",
          ]}
        />
        <PreRegistrationInfo
          title="Improving Operational Efficiency"
          content={[
            "Prepares staff for appointments by gathering information in advance.",
            "Reduces wait times and improves patient flow.",
          ]}
        />
        <PreRegistrationInfo
          title="Key Components of Patient Pre-Registration"
          content={[
            "Demographic Information: Full name, Date of birth, Address, etc.",
            "Insurance Information: Insurance provider, Policy number, Coverage details.",
            "Medical History: Current medications, Surgeries, Allergies.",
            "Consent Forms: For treatment and health information sharing.",
          ]}
        />
        <PreRegistrationInfo
          title="Process of Patient Pre-Registration"
          content={[
            "Information Collection: Patients fill forms online or by phone.",
            "Verification: Staff verifies information accuracy.",
            "Preparation for Appointment: Ensuring documentation is complete.",
            "Follow-Up: Staff contacts patients for missing information.",
          ]}
        />
        <PreRegistrationInfo
          title="Benefits of Pre-Registration"
          content={[
            "Reduced Administrative Burden: More focus on patient care.",
            "Increased Accuracy: Patients provide information at their own pace.",
            "Streamlined Billing Processes: Avoid claim denials and ensure timely reimbursements.",
            "Enhanced Patient Engagement: Involves patients in their healthcare journey.",
          ]}
        />
      </div>
    </div>
  );
};

export default PatientPreRegistration;
