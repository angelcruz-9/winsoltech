import React from 'react';
import { motion } from 'framer-motion';

const aboutData = {
  title: (
    <>
      <strong>WINSOLTECH</strong> is the Medical Billing company associated globally and Most of
      the outsourcing activities are performed from our Indian office. We offer
      medical billing services to all the physicians across various specialties
      and to increase profitability and cash flow while improving office
      efficiency. We believe that our employees’ commitment, sincerity, morale,
      communication skills, positive attitude, and leadership qualities are the
      important factors that contribute to customer satisfaction and smooth
      delivery.
    </>
  ),
  subTitle: 'OUR VALUES',
  subItems: [
    'High-end professionals care for your billing',
    'Expertise in dealing with physicians, payers, patients',
    'Better results with quality and timely delivery methods',
    'Provide inputs on business excellence and performance',
    'End delivery per standards',
    'Proficiency Services',
  ],
};

function About() {
  return (
    <div className="py-16 bg-gray-100 pt-44">
      <div className="container-common px-4 flex flex-col lg:flex-row">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl  text-gray-900 mb-4">
            {aboutData.title}
          </h1>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {aboutData.subTitle}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {aboutData.subItems.map((item, index) => (
              <li key={index} className="text-lg">{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
