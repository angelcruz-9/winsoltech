import React from "react";
import { FaCode, FaCircleDollarToSlot } from "react-icons/fa6";
import { LuHeartPulse } from "react-icons/lu";
import { ImStatsDots } from "react-icons/im";
import { SiCashapp } from "react-icons/si";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { AiFillAccountBook } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
      serviceId: "full-coding-services",
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
      serviceId: "denial-management",
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
      serviceId: "pre-service",
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
      serviceId: "charge-capture",
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
      serviceId: "telehealth"
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
    {
      id: 8,
      icon: <SiCashapp size={36} />,
      title: "Cash Posting",
      innerTitle: "Cash Posting",
      innerDescription : (
        <p>
          When a claim has been processed and paid, the amount paid will have to be applied to the amount charged for individual patient’s treatment in the Medical Billing Software.
        </p>
      )
    },
    {
      id: 9,
      icon: <RiVerifiedBadgeFill size={36} />,
      title: "Eligibility Verification",
      innerTitle: "Eligibility Verification",
      description: (
        <p>
          Setup of new patient/emergency patient accounts, update existing accounts with insurance changes in your dental software.
        </p>
      )
    },
    {
      id: 10,
      icon: <AiFillAccountBook size={36} />,
      title: "Account Receivables",
      innerTitle: "Account Receivables",
      description: (
        <p>
          Dental Management Services for dental billing, insurance & patient accounts receivable management, and EOB posting.
        </p>
      )
    }
  ],
};

const buttonVariants = {
  hover: { scale: 1.1, backgroundColor: "#007bff", color: "#fff" },
};

function RCM() {
  const navigate = useNavigate();

  const handleCardClick = (serviceId: string) => {
    navigate(`/solutions/${serviceId}`);
  };
  

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
              onClick={() => handleCardClick(card.serviceId ?? "default")}//+
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
