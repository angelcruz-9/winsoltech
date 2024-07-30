import React from "react";
import { motion } from "framer-motion";
import PeopleIcon from '@mui/icons-material/People';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const deliverData = {
  title: <>Partner with us to Deliver Quality Outcomes at Scale</>,
  cardData: [
    {
      id: 1,
      title: "People",
      icon: <PeopleIcon fontSize="large" />,
      description: (
        <ul className="list-disc pl-5">
          <li>All our Coders are certified through AHIMA or AAPC</li>
          <li>
            Our Coding Educators bear up to 10 years average professional
            experience
          </li>
          <li>
            Our Coding Certification Programs boasts of {">"} 95% average pass
            rate for the last 5 years
          </li>
          <li>
            Coding talent from certification programs bears {">"} 90%
            Industry-leading retention rate
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Process",
      icon: <DeveloperBoardIcon fontSize="large" />,
      description: (
        <ul className="list-disc pl-5">
          <li>Identify and hire the best talent</li>
          <li>Robust quality and training platform</li>
          <li>Clear reporting</li>
          <li>Six Sigma strategy and efficiencies</li>
          <li>Opportunity to implement concurrent coding</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Result",
      icon: <MonetizationOnIcon fontSize="large" />,
      description: (
        <ul className="list-disc pl-5">
          <li>Reduce Cost with 30-60% savings</li>
          <li>
            Improve cash flow through consistent turn around time compliance and
            reduce DNFB
          </li>
          <li>Increase reimbursement through improved quality</li>
          <li>Reduce burden of recruitment and people management</li>
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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-semibold text-gray-900">{deliverData.title}</h1>
          <div className="border-b-4 border-primary w-24"></div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex flex-wrap justify-center gap-8">
            {deliverData.cardData.map((card) => (
              <motion.div
                key={card.id}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col w-full sm:w-80 h-96"
              >
                <div className="mb-4 text-primary">{card.icon}</div>
                <h2 className="text-xl font-semibold mb-4 text-left">{card.title}</h2>
                <div className="text-gray-700">{card.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deliver;
