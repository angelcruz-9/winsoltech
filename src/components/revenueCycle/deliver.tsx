import React from "react";
import { motion } from "framer-motion";
import PeopleIcon from '@mui/icons-material/People';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const deliverData = {
  title: <>Partner with Us to Deliver Quality Outcomes at Scale</>,
  cardData: [
    {
      id: 1,
      title: "People",
      icon: <PeopleIcon fontSize="large" />,
      description: (
        <ul className="list-disc pl-6 space-y-2">
          <li>All our Coders are certified through AHIMA or AAPC</li>
          <li>Our Coding Educators have 10+ years of experience</li>
          <li>Our Coding Certification Programs boast a 95% average pass rate over the last 5 years</li>
          <li>Industry-leading retention rate of over 90%</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Process",
      icon: <DeveloperBoardIcon fontSize="large" />,
      description: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Identify and hire the best talent</li>
          <li>Robust quality and training platform</li>
          <li>Clear, transparent reporting</li>
          <li>Six Sigma strategies for efficiency</li>
          <li>Opportunity for concurrent coding implementation</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Result",
      icon: <MonetizationOnIcon fontSize="large" />,
      description: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Reduce costs with 30-60% savings</li>
          <li>Improve cash flow through timely compliance and reduced DNFB</li>
          <li>Increase reimbursement with improved quality</li>
          <li>Reduce the burden of recruitment and people management</li>
        </ul>
      ),
    },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

function Deliver() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
            {deliverData.title}
          </h1>
          <div className="border-b-4 border-primary w-24 mt-2"></div>
        </div>
        <div className="flex flex-col mt-12">
          <div className="flex flex-wrap justify-center gap-8">
            {deliverData.cardData.map((card) => (
              <motion.div
                key={card.id}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 flex flex-col w-full sm:w-96 lg:w-1/3 h-auto transition-transform transform hover:scale-105"
              >
                <div className="mb-6 text-primary flex justify-center">{card.icon}</div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{card.title}</h2>
                <div className="text-gray-600">{card.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deliver;
