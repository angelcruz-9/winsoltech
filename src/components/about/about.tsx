import React from 'react';
import { motion } from 'framer-motion';

const aboutData = {
  title: (
    <>
      <strong className="text-primary">WINSOLTECH</strong> is a globally recognized leader in medical billing services. Our primary office in India manages outsourcing activities to ensure seamless service delivery to physicians across various specialties. Our mission is to enhance profitability, optimize cash flow, and improve office efficiency through our dedicated services. We attribute our success to our employees' commitment, sincerity, morale, communication skills, positive attitude, and leadership qualities, all of which are crucial for exceptional customer satisfaction and smooth operations.
    </>
  ),
  subTitle: 'OUR VALUES',
  subItems: [
    'High-end professional care for your billing needs',
    'Expertise in handling interactions with physicians, payers, and patients',
    'Delivering superior results with quality and timely methods',
    'Providing valuable insights on business excellence and performance',
    'Ensuring end delivery meets industry standards',
    'Offering proficient and reliable services',
  ],
};

function About() {
  return (
    <section className="py-16 bg-gray-50 pt-48">
      <div className="container px-4 mx-auto flex flex-col lg:flex-row">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl font-semibold text-gray-800 mb-4 leading-relaxed">
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {aboutData.subTitle}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {aboutData.subItems.map((item, index) => (
              <li key={index} className="text-base">{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
