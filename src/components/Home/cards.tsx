import React from "react";
import { motion } from "framer-motion";
import { SiCashapp } from "react-icons/si";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { AiFillAccountBook } from "react-icons/ai";

const aboutUsData = [
  {
    id: 1,
    icon: <SiCashapp size={36} />,
    title: "Cash Posting",
    description:
      "When a claim has been processed and paid, the amount paid will have to be applied to the amount charged for individual patient’s treatment in the Medical Billing Software.",
  },
  {
    id: 2,
    icon: <RiVerifiedBadgeFill size={36} />,
    title: "Eligibility Verification",
    description:
      "Setup of new patient/emergency patient accounts, update existing accounts with insurance changes in your dental software.",
  },
  {
    id: 3,
    icon: <AiFillAccountBook size={36} />,
    title: "Account Receivables",
    description:
      "Dental Management Services for dental billing, insurance & patient accounts receivable management, and EOB posting.",
  },
];

function Cards() {
  return (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {aboutUsData.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                {card.icon}
              </div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                {card.title}
              </h2>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
  );
}

export default Cards;
