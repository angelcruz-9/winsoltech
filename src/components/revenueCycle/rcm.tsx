import React from "react";
import { FaCode, FaCircleDollarToSlot } from "react-icons/fa6";
import { LuHeartPulse } from "react-icons/lu";
import { ImStatsDots } from "react-icons/im";
import { motion } from "framer-motion";
import { FaPhoneSquare, FaFileMedical, FaHome } from "react-icons/fa";
import Card from "../ui components/card";

const rcmData = {
  rcmTitle: (
    <>
      Quality-Focused Services to Scale your <strong>RCM & Coding Teams</strong>
    </>
  ),
  rcmDescription: "Explore our suite of services to solve for unique needs",
  cardData: [
    {
      id: 1,
      icon: <FaCode size={24} />,
      title: "Full-Service Coding Services",
      innerTitle: "Full-Service Coding Services",
      innerDescription: (
        <ul className="list-disc">
          <li>Risk Adjustment & HCC Coding </li>
          <li>Outpatient Coding, Facility, Professional Fee</li>
          <li>Inpatient Coding</li>
          <li>CDI & Provider Education</li>
          <li>Intake & Patient Registration</li>
          <li>Home Health Coding</li>
        </ul>
      ),
      innerLink: "https://shearwaterhealth.com/coding/",
      innerButtonText: "Learn More",
    },
    {
      id: 2,
      icon: <LuHeartPulse size={24} />,
      title: "Denial Management",
      innerTitle: "Denial Management",
      innerDescription: (
        <p>
          Highly-skilled and experienced registered nurses resolving denials
          across State Authorization, Coding, and Medical Necessity aspects
        </p>
      ),
    },
    {
      id: 3,
      icon: <ImStatsDots size={24} />,
      title: "UM, Pre Auth, Pre-Service & Post-Service Verifications",
      innerTitle: "UM, Pre Auth, Pre-Service & Post-Service Verifications",
      innerDescription: (
        <p>
          Efficient UM Clinical Reviews across different specializations,
          including pre- and post-service checks done by highly skilled,
          experienced Registered Nurses
        </p>
      ),
    },
    {
      id: 4,
      icon: <FaCircleDollarToSlot size={24} />,
      title: "Charge Capture",
      innerTitle: "Charge Capture",
      innerDescription: (
        <p>
          Ensures documentation and accurate capture of appropriate charges
          related to procedures
        </p>
      ),
    },
    {
      id: 5,
      icon: <FaPhoneSquare size={24} />,
      title: "Telehealth & Remote Patient Monitoring",
      innerTitle: "Telehealth & Remote Patient Monitoring",
      innerDescription: (
        <p>
          Ensuring delivery of quality care through telehealth, remote patient
          monitoring, case management support, and care coordination
        </p>
      ),
    },
    {
      id: 6,
      icon: <FaFileMedical size={24} />,
      title: "Medical Records Management",
      innerTitle: "Medical Records Management",
      innerDescription: (
        <p>
          Assisting your medical record management needs (i.e. intake,
          retrieval, sorting, tagging, etc.)
        </p>
      ),
    },
    {
      id: 7,
      icon: <FaHome size={24} />,
      title: "Home Health Care",
      innerTitle: "Home Health Care",
      innerDescription: (
        <p>
          Providing and enhancing processes for intake services, OASIS
          management, coding, patient education, and scheduling
        </p>
      ),
    },
  ],
};

const buttonVariants = {
  hover: { scale: 1.1, backgroundColor: "#007bff", color: "#fff" },
};

function RCM() {
  return (
    <section className="py-16">
      <div className="container-common">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl">{rcmData.rcmTitle}</h1>
          <p>{rcmData.rcmDescription}</p>
          <div className="border-b-4 border-secondary w-24"></div>
        </div>
        <div className="flex flex-wrap items-center gap-6 pt-16">
          {rcmData.cardData.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              innerTitle={card.innerTitle}
              innerDescription={card.innerDescription}
            />
          ))}
        </div>
        <div className="flex justify-center items-center pt-8">
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-transform"
            variants={buttonVariants}
            whileHover="hover"
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default RCM;
