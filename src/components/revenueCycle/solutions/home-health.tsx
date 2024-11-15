import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const homeHealthCareData = {
  title: "Home Health Care in U.S. Healthcare Services",
  intro: `Home health care is a vital component of the U.S. healthcare system, providing medical services and support to patients in the comfort of their homes. This model of care is particularly beneficial for individuals with chronic illnesses, disabilities, or those recovering from surgery, allowing them to receive necessary medical attention while remaining in familiar surroundings. The management of home health care services involves several key processes, including intake services, OASIS management, coding, patient education, and scheduling.`,
  sections: [
    {
      heading: "1. Intake Services",
      description: `The intake process is the first step in home health care and involves gathering comprehensive information about the patient’s medical history, current health status, and specific needs. Key aspects include:`,
      items: [
        {
          title: "Patient Assessment",
          content: `Registered nurses or trained professionals conduct assessments to determine the level of care required. This may involve physical examinations and evaluations of the patient’s living environment.`,
        },
        {
          title: "Documentation",
          content: `Accurate documentation during intake is crucial for developing a personalized care plan and ensuring compliance with regulatory requirements.`,
        },
        {
          title: "Insurance Verification",
          content: `Confirming insurance coverage and understanding benefits helps facilitate billing and reimbursement processes.`,
        },
      ],
    },
    // ... (Rest of the sections and items)
  ],
  benefits: [
    "Improved Patient Outcomes: Studies indicate that patients receiving home health care often experience better recovery outcomes due to personalized attention and reduced hospital readmissions.",
    "Cost Efficiency: Home-based care can be more cost-effective than inpatient hospital stays, reducing overall healthcare costs for both patients and providers.",
    "Enhanced Quality of Life: Patients can maintain independence and comfort while receiving necessary medical attention in their own homes.",
  ],
  challenges: [
    "Regulatory Compliance: Navigating complex regulations related to Medicare reimbursement can be challenging for home health agencies.",
    "Staffing Shortages: The demand for qualified healthcare professionals often exceeds supply, leading to staffing challenges in providing adequate home care.",
    "Technology Barriers: While telehealth and remote monitoring technologies are becoming more prevalent, not all patients have access or familiarity with these tools.",
  ],
};

const HomeHealthCare = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="py-8 pt-28 p-8 max-w-4xl mx-auto font-sans text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {homeHealthCareData.title}
      </motion.h1>
      <motion.p
        className="text-base md:text-lg mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {homeHealthCareData.intro}
      </motion.p>

      {homeHealthCareData.sections.map((section, index) => (
        <motion.section
          key={index}
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.h2
            className="text-xl md:text-2xl font-semibold text-blue-500 mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {section.heading}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {section.description}
          </motion.p>
          {section.items.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-100"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h3
                className="text-lg md:text-xl font-semibold text-blue-600 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {item.content}
              </motion.p>
            </motion.div>
          ))}
        </motion.section>
      ))}

      <motion.section
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <motion.h2
          className="text-xl md:text-2xl font-semibold text-blue-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Benefits of Home Health Care
        </motion.h2>
        <motion.ul
          className="list-disc list-inside ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          {homeHealthCareData.benefits.map((benefit, idx) => (
            <motion.li
              key={idx}
              className="text-base md:text-lg mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 + idx * 0.2 }}
            >
              {benefit}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      <motion.section
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        <motion.h2
          className="text-xl md:text-2xl font-semibold text-blue-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Challenges in Home Health Care
        </motion.h2>
        <motion.ul
          className="list-disc list-inside ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.7 }}
        >
          {homeHealthCareData.challenges.map((challenge, idx) => (
            <motion.li
              key={idx}
              className="text-base md:text-lg mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.7 + idx * 0.2 }}
            >
              {challenge}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </motion.div>
  );
};

export default HomeHealthCare;
