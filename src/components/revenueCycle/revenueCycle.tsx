import React from 'react';
import { motion } from 'framer-motion';
import RCM from './rcm';
import Priority from './priority';
import Current from './current';

const revenueData = {
    hightLightText: 'Revenue Cycle Management',
    headTitle: 'Maximize Reimbursement Opportunities with Confidence.',
    headDescription: 'Dedicated teams of certified coders to maximize revenue and improve accuracy.',
    headButton: 'GET STARTED',
    revenueImg: 'assets/images/rcm.png'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

const buttonVariants = {
  hover: { scale: 1.1, backgroundColor: "#007bff", color: "#fff" },
};

function RevenueCycle() {
  return (
    <section className='flex flex-col'>
            <div className="container-common pt-40">
      <motion.div 
        className="flex flex-col h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Section */}
        <div className="flex flex-row mb-16">
          {/* Left Section */}
          <div className="w-1/2 p-4 flex flex-col justify-between items-start space-y-6">
            <motion.h3
              className='text-lg font-bold text-blue-400'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {revenueData.hightLightText}
            </motion.h3>
            <motion.h2
              className="text-5xl font-bold mb-4 leading-[44px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {revenueData.headTitle}
            </motion.h2>
            <motion.p
              className="text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {revenueData.headDescription}
            </motion.p>
            <motion.button
              className="px-6 py-2 bg-blue-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-transform"
              variants={buttonVariants}
              whileHover="hover"
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
            >
              {revenueData.headButton}
            </motion.button>
          </div>

          {/* Right Section */}
          <div className="w-1/2 p-4 flex items-center justify-center">
            <motion.img
              src={`${process.env.PUBLIC_URL}/${revenueData.revenueImg}`}
              alt="Revenue Cycle Management"
              className="w-full h-auto"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>

        {/* Bottom Section */}
            <RCM />
      </motion.div>
    </div>
    <Priority />
    <Current />
    </section>
  );
}

export default RevenueCycle;
