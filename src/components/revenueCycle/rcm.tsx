import React from "react";
import { FaCode, FaCircleDollarToSlot } from "react-icons/fa6";
import { LuHeartPulse } from "react-icons/lu";
import { ImStatsDots } from "react-icons/im";
import { SiCashapp } from "react-icons/si";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { AiFillAccountBook } from "react-icons/ai";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
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
      serviceId: "medical-records",
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
      serviceId: "home-health",
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
      ),
      serviceId: "cash-posting",
    },
    {
      id: 9,
      icon: <RiVerifiedBadgeFill size={36} />,
      title: "Eligibility Verification",
      innerTitle: "Eligibility Verification",
      innerDescription: (
        <p>
          Setup of new patient/emergency patient accounts, update existing accounts with insurance changes in your dental software.
        </p>
      ),
      serviceId: "eligibility-verification",
    },
    {
      id: 10,
      icon: <AiFillAccountBook size={36} />,
      title: "Account Receivables",
      innerTitle: "Account Receivables",
      innerDescription: (
        <p>
          Dental Management Services for dental billing, insurance & patient accounts receivable management, and EOB posting.
        </p>
      ),
      serviceId: "account-receivable",
    },
    {
      id: 11,
      title: "Pre - Registration",
      icon: <HowToRegIcon fontSize="large" />,
      innerTitle: 'Pre - Registration',
      innerDescription: (
        <p>
          Our Service involves collecting and verifying patient information such as demographics, insurance details, medical history, and consent forms before the patient visits the healthcare facility. This process can be completed over the phone, online, or through patient portals, allowing patients to provide their information at their convenience.
        </p>
      ),  
      serviceId: "pre-registration",
  },
  {
      id: 12,
      title: "Claim Submission",
      icon: <AssignmentIcon fontSize="large" />,
      innerTitle: 'Claim - Submission',
      innerDescription: (
        <p>
          Our Services include preparing and sending healthcare claims to insurance companies for reimbursement. This involves compiling accurate billing information, coding services correctly, and adhering to payer-specific guidelines to ensure that claims are processed efficiently and without delay.
        </p>
      ),  
      serviceId: "claim-submission",
  },
  {
      id: 13,
      title: "Claim Management",
      icon: <ManageHistoryIcon fontSize="large" />,
      innerTitle: 'Claim - Management',
      innerDescription: (
        <p>
          Our Services encompasses the processes of submitting, tracking, correcting, and following up on healthcare claims to ensure that providers are reimbursed correctly and promptly. It involves detailed attention to coding accuracy, compliance with payer guidelines, and proactive resolution of any issues that may lead to delays or denials.
        </p>
      ),  
      serviceId: "claim-management",
  },
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

  const handleClick = () => {
    navigate('/contact');
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
            onClick={handleClick}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default RCM;
