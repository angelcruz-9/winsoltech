import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope, FaRegClock, FaShieldAlt, FaUsers } from 'react-icons/fa';

// Define a motion div component for smooth transitions
interface PreRegistrationInfoProps {
  title: string;
  content: string[];
  icon: React.ReactNode;
}

const PreRegistrationInfo: React.FC<PreRegistrationInfoProps> = ({ title, content, icon }) => (
  <motion.div
    className="bg-white border-t-4 border-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="text-3xl text-blue-600">{icon}</div>
      <h2 className="text-2xl font-semibold text-blue-800">{title}</h2>
    </div>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {content.map((item, index) => (
        <li key={index} className="text-lg">{item}</li>
      ))}
    </ul>
  </motion.div>
);

const PatientPreRegistration: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-6 lg:pt-28 lg:px-8 py-12 md:py-16 max-w-7xl">
      {/* Main Header */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Overview of Patient Pre-Registration in U.S. Healthcare Services
      </motion.h1>
      
      {/* Section Introduction */}
      <motion.p
        className="text-lg md:text-xl text-gray-800 mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Streamlining the patient intake process while enhancing data accuracy, improving the overall experience, and ensuring the best care possible.
      </motion.p>

      {/* Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PreRegistrationInfo
          title="Enhancing Patient Experience"
          content={[
            "Allows patients to provide information at their convenience, reducing stress.",
            "Leads to more accurate data collection as patients take time to recall and record details.",
          ]}
          icon={<FaUsers />}
        />
        <PreRegistrationInfo
          title="Improving Operational Efficiency"
          content={[
            "Prepares staff for appointments by gathering information in advance.",
            "Reduces wait times and improves patient flow.",
          ]}
          icon={<FaRegClock />}
        />
        <PreRegistrationInfo
          title="Key Components of Patient Pre-Registration"
          content={[
            "Demographic Information: Full name, Date of birth, Address, etc.",
            "Insurance Information: Insurance provider, Policy number, Coverage details.",
            "Medical History: Current medications, Surgeries, Allergies.",
            "Consent Forms: For treatment and health information sharing.",
          ]}
          icon={<FaShieldAlt />}
        />
        <PreRegistrationInfo
          title="Process of Patient Pre-Registration"
          content={[
            "Information Collection: Patients fill forms online or by phone.",
            "Verification: Staff verifies information accuracy.",
            "Preparation for Appointment: Ensuring documentation is complete.",
            "Follow-Up: Staff contacts patients for missing information.",
          ]}
          icon={<FaStethoscope />}
        />
        <PreRegistrationInfo
          title="Benefits of Pre-Registration"
          content={[
            "Reduced Administrative Burden: More focus on patient care.",
            "Increased Accuracy: Patients provide information at their own pace.",
            "Streamlined Billing Processes: Avoid claim denials and ensure timely reimbursements.",
            "Enhanced Patient Engagement: Involves patients in their healthcare journey.",
          ]}
          icon={<FaUsers />}
        />
      </div>
    </div>
  );
};

export default PatientPreRegistration;
