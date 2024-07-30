import React from "react";
import ServiceCard from "./serviceCard";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CollectionsIcon from '@mui/icons-material/Collections';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoreIcon from '@mui/icons-material/More';

const servicesData = {
    title: <>Our Services</>,
    cardData: [
        {
            id: 1,
            title: "Physician Enrollment & Credentialing Services",
            icon: <FilterAltIcon fontSize="large" />,
            link: '#',
            description:
                "We provide expert assistance in navigating the complex process of physician enrollment and credentialing, ensuring seamless participation in healthcare networks, insurance panels, and medical organizations. Our comprehensive services streamline the credentialing process, allowing physicians to focus on patient care while we manage the administrative tasks.",
        },
        {
            id: 2,
            title: "Patient Eligibility Verification",
            icon: <DoneAllIcon fontSize="large" />,
            link: '#',
            description:
                "Our Patient Eligibility Verification service ensures that patients' insurance coverage and benefits are accurately verified, eliminating delays and denials at the point of care. Our team of experts utilizes industry-leading software and advanced data analytics to verify patient eligibility, confirm insurance coverage, and identify potential issues, providing real-time access to accurate information to streamline patient registration, billing, and care delivery.",
        },
        {
            id: 3,
            title: "Demographics Entry (New Patient Registry)",
            icon: <HowToRegIcon fontSize="large" />,
            link: '#',
            description:
                "Our Demographics Entry service ensures that patient information is accurately and efficiently captured and stored in our secure database. Our team of trained professionals will collect and verify new patient demographic data, including contact information, insurance details, and medical history, creating a comprehensive patient profile. This enables seamless patient registration, facilitates accurate billing and claims processing, and provides a foundation for delivering personalized and effective patient care.",
        },
        {
            id: 4,
            title: "Charge Capture & Audits",
            icon: <CollectionsIcon fontSize="large" />,
            link: '#',
            description:
                "Our Charge Capture & Audits service ensures that all patient services and procedures are accurately billed and paid. Our team of experts reviews and verifies patient charges, identifies discrepancies, and resolves billing errors, ensuring that our clients receive optimal reimbursement. Regular audits are conducted to ensure compliance with regulatory requirements, industry standards, and internal policies, resulting in increased revenue, reduced write-offs, and improved financial performance.",
        },
        {
            id: 5,
            title: "Medical Coding/Audit Services",
            icon: <MedicalInformationIcon fontSize="large" />,
            link: '#',
            description:
                "Our Medical Coding/Audit Services provide accurate and compliant coding, auditing, and compliance solutions for healthcare providers. Our team of experienced coders and auditors review medical records, assign ICD-10 and CPT codes, and conduct regular audits to ensure compliance with regulatory requirements, industry standards, and internal policies. Our services help identify and correct coding errors, reduce denials, and increase reimbursement rates, resulting in improved financial performance and enhanced patient care.",
        },
        {
            id: 6,
            title: "Remittance Process / Reconciliation",
            icon: <AccountTreeIcon fontSize="large" />,
            link: '#',
            description:
                "Our Remittance Process / Reconciliation service streamlines and automates the remittance process, ensuring that payments are accurately posted and reconciled. Our team reviews and analyzes EOBs, ERA, and other remittance documents to identify discrepancies, correct errors, and ensure timely and accurate posting of payments. This service improves cash flow, reduces delays, and enhances financial transparency, giving you greater control over your revenue cycle management.",
        },
        {
            id: 7,
            title: "Accounts Receivables",
            icon: <AccountBalanceIcon fontSize="large" />,
            link: '#',
            description:
                "Our Accounts Receivables service helps healthcare providers optimize their revenue cycle management by collecting and managing patient payments efficiently. Our team of experts sends out statements, follows up on outstanding balances, and negotiates payment plans to minimize bad debt and improve cash flow. With our Accounts Receivables service, you can expect increased patient satisfaction, reduced accounts receivable days outstanding, and improved financial performance.",
        },
        {
            id: 8,
            title: "Denial Management",
            icon: <MoreIcon fontSize="large" />,
            link: '#',
            description:
                "Our Denial Management service helps healthcare providers reduce the financial impact of denied claims by identifying and addressing the root causes of denials. Our team of experts reviews and appeals denied claims, negotiates with payers, and updates patient information to ensure accurate billing. With our Denial Management service, you can expect increased claim approval rates, reduced administrative costs, and improved revenue cycle performance.",
        },
    ],
};

const Services = () => {
    return (
        <section className="py-36 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-4xl font-bold text-gray-900">{servicesData.title}</h1>
                    <div className="border-b-4 border-primary w-24 mb-6"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {servicesData.cardData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                            link={`/service/${service.id}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
