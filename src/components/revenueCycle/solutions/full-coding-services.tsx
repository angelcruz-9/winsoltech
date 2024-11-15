import React, { useEffect } from "react";
import { motion } from "framer-motion";

const FullCodingServices: React.FC = () => {
  const codingServicesData = {
    title: "Overview of Full-Service Coding Services in U.S. Healthcare",
    description:
      "Explore our suite of services to ensure compliance and accurate billing.",
    services: [
      {
        id: 1,
        title: "Risk Adjustment & HCC Coding",
        description:
          "Hierarchical Condition Category (HCC) Coding is essential for risk adjustment.",
        details: [
          "Adjusts payments based on patients' health statuses",
          "Ensures fair compensation for managing high-risk patients",
          "Helps improve patient outcomes and reduce costs",
        ],
      },
      {
        id: 2,
        title: "Outpatient Coding: Facility and Professional Fee",
        description:
          "Outpatient coding includes facility and professional fee coding.",
        details: [
          "Facility Coding: Uses APC codes for hospital resources used",
          "Professional Fee Coding: Focuses on medical decision-making",
        ],
      },
      {
        id: 3,
        title: "Inpatient Coding",
        description:
          "Performed for admitted patients, using DRGs to determine payment.",
        details: [
          "Simplifies billing by assigning fixed payment for specific conditions",
          "Covers all related costs except physician fees",
        ],
      },
      {
        id: 4,
        title: "Clinical Documentation Improvement (CDI) & Provider Education",
        description:
          "CDI ensures health records reflect patient conditions accurately.",
        details: [
          "Improves coding accuracy for reimbursement",
          "Provider education reduces coding errors",
        ],
      },
      {
        id: 5,
        title: "Intake & Patient Registration",
        description:
          "Collects accurate patient information at the outset of care.",
        details: [
          "Records demographic data, insurance information, and medical histories",
          "Foundation for effective coding and billing",
        ],
      },
      {
        id: 6,
        title: "Home Health Coding",
        description:
          "Tailored for services provided in a patient's home setting.",
        details: [
          "Ensures compliance with Medicare regulations",
          "Optimizes reimbursement rates",
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-28 px-4 md:px-12 lg:px-20 bg-gray-50 py-28">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {codingServicesData.title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {codingServicesData.description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {codingServicesData.services.map((service) => (
          <motion.div
            key={service.id}
            className="p-6 rounded-lg shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05}}
          >
            <motion.h2
              className="text-xl font-semibold text-blue-700 mb-2"
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
            <motion.ul
              className="list-disc list-inside space-y-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {service.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
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
