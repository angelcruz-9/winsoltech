import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';

const aboutData = {
  title: (
    <>
      At <strong className="text-primary">WINSOLTECH</strong>, we are dedicated to revolutionizing healthcare services by providing innovative solutions that streamline patient management, optimize operational workflows, and ensure regulatory compliance. <br /> <br /> Our global delivery model, with a major hub in India, supports healthcare providers across specialties, enhancing both patient outcomes and organizational performance. <br /> <br /> Our team of healthcare experts is committed to driving efficiency and value, ensuring that our clients can focus on what truly matters—patient care.
    </>
  ),
  subTitle: 'OUR COMMITMENT TO HEALTHCARE EXCELLENCE',
  subItems: [
    'Tailored medical billing services to ensure financial accuracy and compliance',
    'Optimized revenue cycle management with a focus on reducing administrative burden',
    'HIPAA-compliant solutions to safeguard patient information and maintain data security',
    'Healthcare IT solutions that streamline workflows and improve patient outcomes',
    'Expert support for healthcare providers, ensuring uninterrupted service delivery',
    'Proven strategies to enhance patient engagement and satisfaction',
  ],
};

function About() {
  return (
    <section className="py-16 bg-white rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 sm:p-10 gap-8">
        {/* Left Section: Main Title and Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:pr-8 rounded-2xl"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 leading-snug text-left">
            Transforming Healthcare Services with Innovation & Commitment
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-left">
            {aboutData.title}
          </p>
        </motion.div>

        {/* Right Section: Values List */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-6">
            {aboutData.subTitle}
          </h2>
          <ul className="space-y-4">
            {aboutData.subItems.map((item, index) => (
              <li key={index} className="flex items-start space-x-4">
                <FaHeartbeat className="text-blue-900 w-6 h-6 mt-1" />
                <span className="text-base sm:text-lg text-gray-700 text-left">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
