import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiCashapp } from "react-icons/si";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { AiFillAccountBook } from "react-icons/ai";

const aboutUsData = [
  {
    id: 1,
    icon: <SiCashapp size={32} />,
    title: "Cash Posting",
    description:
      "When a claim has been processed and paid, the amount paid will have to be applied to the amount charged for individual patient’s treatment in the Medical Billing Software.",
  },
  {
    id: 2,
    icon: <RiVerifiedBadgeFill size={32} />,
    title: "Eligibility Verification",
    description:
      "Setup of new patient/emergency patient accounts, update existing accounts with insurance changes in your dental software.",
  },
  {
    id: 3,
    icon: <AiFillAccountBook size={32} />,
    title: "Account Receivables",
    description:
      "Dental Management Services for dental billing, insurance & patient accounts receivable management, and EOB posting.",
  },
];

function Cards() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % aboutUsData.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="py-16 flex flex-col items-center absolute">
      <div className="xl:grid grid-cols-1 hidden sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {aboutUsData.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              {card.title}
            </h2>
            <p className="text-gray-700">{card.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="block xl:hidden">
        <motion.div
          key={aboutUsData[currentCard].id}
          className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.9 }}
          transition={{ duration: 0.6 }} // Slow animation
        >
          <div className="flex justify-center mb-4">
            {aboutUsData[currentCard].icon}
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            {aboutUsData[currentCard].title}
          </h2>
          <p className="text-gray-700">
            {aboutUsData[currentCard].description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Cards;
