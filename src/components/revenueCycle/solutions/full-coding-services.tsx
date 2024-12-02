import React, { useEffect } from "react";
import { motion } from "framer-motion";

const FullCodingServices: React.FC = () => {
  const codingServicesData = {
    title: "Comprehensive Healthcare Coding Services",
    description:
      "Explore our healthcare coding solutions designed to ensure compliance, optimize reimbursements, and improve operational efficiency in the U.S. healthcare system.",
    services: [
      {
        id: 1,
        title: "Risk Adjustment & HCC Coding",
        description:
          "Hierarchical Condition Category (HCC) coding helps ensure accurate risk adjustment, crucial for Medicare Advantage plans.",
        details: [
          "Adjusts payments based on patients' clinical complexity",
          "Ensures fair compensation for managing high-risk patients",
          "Improves patient care and reduces overall healthcare costs",
        ],
      },
      {
        id: 2,
        title: "Outpatient & Professional Fee Coding",
        description:
          "Outpatient coding ensures accurate billing for facility and professional services provided in outpatient settings.",
        details: [
          "Facility coding uses APC codes for hospital resource usage",
          "Professional fee coding ensures correct billing for physician services",
          "Optimizes claims for outpatient hospital visits and professional consultations",
        ],
      },
      {
        id: 3,
        title: "Inpatient Coding & DRG Management",
        description:
          "Inpatient coding utilizes Diagnosis-Related Groups (DRGs) to assign payment amounts for hospitalized patients.",
        details: [
          "Facilitates streamlined billing and cost management for hospital stays",
          "Ensures compliance with Medicare and other insurance providers",
          "Enhances operational efficiency and reduces reimbursement delays",
        ],
      },
      {
        id: 4,
        title: "Clinical Documentation Improvement (CDI)",
        description:
          "Clinical Documentation Improvement (CDI) ensures medical records are accurate and comprehensive, directly impacting coding accuracy.",
        details: [
          "Enhances clinical documentation to reflect true patient conditions",
          "Reduces coding errors and denials, improving reimbursement rates",
          "Educates providers on best documentation practices",
        ],
      },
      {
        id: 5,
        title: "Home Health Coding & Compliance",
        description:
          "Coding for home health services ensures compliance with Medicare and improves reimbursement rates for in-home patient care.",
        details: [
          "Complies with home health agency regulations",
          "Optimizes reimbursement for Medicare home health services",
          "Improves patient care quality through accurate coding",
        ],
      },
      {
        id: 6,
        title: "Patient Intake & Registration",
        description:
          "Efficient patient intake and registration services ensure accurate demographic and medical information for billing and coding.",
        details: [
          "Captures essential patient data for smooth coding and billing processes",
          "Ensures insurance verification and accurate coding from the start",
          "Lays the foundation for compliant healthcare billing",
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-20 bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?healthcare,hospital')",
        }}
      >
        <div className="absolute inset-0 bg-blue-800 bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              className="text-4xl lg:text-5xl font-extrabold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {codingServicesData.title}
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {codingServicesData.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {codingServicesData.services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6 border-b-4 border-blue-600">
                <motion.h2
                  className="text-2xl font-semibold text-blue-800 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {service.description}
                </motion.p>
              </div>
              <motion.ul
                className="p-4 space-y-3 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {service.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <span className="w-4 h-4 mt-1 mr-2 rounded-full bg-blue-600"></span>
                    {detail}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default FullCodingServices;
