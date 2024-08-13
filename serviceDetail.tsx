import React from "react";
import { useParams } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";

interface NestedSubItem {
  id?: number;
  title?: string;
  desc?: string | React.ReactNode;
  subItems?: NestedSubItem[];
}

interface InnerCardDetails {
  id?: number;
  title?: string;
  desc?: React.ReactNode | string;
  subItems?: NestedSubItem[];
}

interface ServiceCardProps {
  id?: number; // Added ID prop
  title?: string;
  icon?: React.ReactElement;
  description?: string;
  link?: string; // Should be the ID or identifier for the service
  subItems?: InnerCardDetails[];
}

const cardData: ServiceCardProps[] = [
  {
    id: 1,
    title: "Pre - Registration",
    icon: <HowToRegIcon fontSize="large" />,
    link: "pre-registration",
    description:
      "Our Service involves collecting and verifying patient information such as demographics, insurance details, medical history, and consent forms before the patient visits the healthcare facility. This process can be completed over the phone, online, or through patient portals, allowing patients to provide their information at their convenience.",
    subItems: [
      {
        id: 1,
        title: "Patient Registration",
        desc: (
          <ul className="list-disc pl-6">
            <li className="text-md mb-4">
              <strong>The Essential Guide to Patient Pre-Registration:</strong>{" "}
              Unlocking the Secrets to Revenue Cycle Mastery
            </li>
            <li className="text-md leading-6 mb-4">
              Patient registration in healthcare services involves gathering and
              verifying crucial patient information, including personal
              demographics, insurance details, medical history, and consent
              forms.
            </li>
            <li className="text-md leading-6 mb-4">
              Registration can be completed through multiple methods such as
              phone, online forms, or patient portals, providing flexibility and
              convenience for patients to submit their information at their own
              pace.
            </li>
            <li className="text-md leading-6 mb-4">
              In the intricate landscape of healthcare revenue cycle management,
              patient pre-registration emerges as the critical first move
              towards achieving excellence. By perfecting this essential
              process, healthcare providers secure a significant edge in
              optimizing financial outcomes while ensuring superior patient
              care. From collecting vital information to confirming insurance
              coverage, pre-registration sets the stage for a revenue cycle
              characterized by accuracy, efficiency, and a patient-focused
              approach.
            </li>
          </ul>
        ),
      },
      {
        id: 2,
        title: "Insurance Eligibility",
        desc: (
          <ul className="list-disc pl-6">
            <li className="text-md leading-6 mb-4">
              Insurance eligibility in healthcare services involves verifying a
              patient’s insurance coverage to confirm that the services they
              require are covered under their plan.
            </li>
            <li className="text-md leading-6 mb-4">
              This process includes checking the patient’s policy details,
              coverage limits, co-payments, and any pre-authorization
              requirements.
            </li>
            <li className="text-md leading-6 mb-4">
              By confirming insurance eligibility before the patient’s visit,
              healthcare providers can ensure that the patient receives the
              appropriate care and that billing processes are streamlined and
              accurate.
            </li>
          </ul>
        ),
      },
      {
        id: 3,
        title: "Patient Appointment",
        desc: (
          <ul className="list-disc pl-6">
            <li className="text-md leading-6 mb-4">
              Patient appointment scheduling in healthcare services involves
              coordinating and managing patient visits to ensure timely and
              efficient care.
            </li>
            <li className="text-md leading-6 mb-4">
              This process includes booking appointment times, confirming
              patient availability, and aligning with healthcare providers'
              schedules.{" "}
            </li>
            <li className="text-md leading-6 mb-4">
              Appointments can be arranged through various channels such as
              phone calls, online booking systems, or patient portals. Effective
              appointment management helps optimize clinic workflows, reduce
              wait times, and improve overall patient satisfaction.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Claim Submission",
    icon: <HowToRegIcon fontSize="large" />,
    link: "claim-submission",
    description:
      "Our Services include preparing and sending healthcare claims to insurance companies for reimbursement. This involves compiling accurate billing information, coding services correctly, and adhering to payer-specific guidelines to ensure that claims are processed efficiently and without delay.",
    subItems: [
      {
        id: 1,
        title: "Charge Entry",
        desc: (
          <ul className="list-disc pl-6">
            <li className="text-md leading-6 mb-4">
              Efficient charge entry ensures that all billable services are
              accounted for, leading to appropriate billing and reimbursement.
              This step helps maximize revenue and maintains compliance with
              regulatory requirements. Effective charge entry contributes to
              financial health, transparency, and the overall success of
              healthcare organizations.
            </li>
            <li className="text-md leading-6 mb-4">
              Healthcare professionals record and document the services,
              treatments, and supplies they deliver to patients during the
              crucial charge entry phase of revenue cycle management.{" "}
            </li>
            <li className="text-md leading-6 mb-4">
              Effective charge entry guarantees that all services that are
              chargeable are recorded, which results in accurate invoicing and
              payment. This action keeps regulatory compliance intact while
              maximizing revenue. Healthcare organizations' overall
              profitability, financial stability, and openness are all impacted
              by effective charge entry.
            </li>
          </ul>
        ),
      },
      {
        id: 2,
        title: "Charge Description Master (CDM)",
        desc: (
          <ul className="list-disc pl-6">
            <li className="text-md leading-6 mb-4">
              Hospital revenue cycle success depends on efficient charge capture
              and CDMs.
            </li>
            <li className="text-md leading-6 mb-4">
              Secure hospital revenue integrity by implementing best practices
              for compliant charge capture.
            </li>
            <li className="text-md leading-6 mb-4">
              When billing hospital services, it’s important to know the
              fundamental elements of the Charge Description Master (CDM).
              Here’s guidance to ensure your CDM is correct and compliant to
              keep your hospital’s financial livelihood strong.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Claim Management",
    icon: <HowToRegIcon fontSize="large" />,
    link: "claim-management",
    description:
      "Our Services encompasses the processes of submitting, tracking, correcting, and following up on healthcare claims to ensure that providers are reimbursed correctly and promptly. It involves detailed attention to coding accuracy, compliance with payer guidelines, and proactive resolution of any issues that may lead to delays or denials.",
    subItems: [
      {
        id: 1,
        title: "Payment Posting",
        desc: (
          <ul className="list-disc pl-6">
            <li className="text-md mb-4">
              <strong>Payment Posting:</strong> A Critical Step in Revenue Cycle
              Optimization
            </li>
            <li className="text-md leading-6 mb-4">
              Payment posting is an essential component of revenue cycle
              optimization, involving the accurate recording and allocation of
              payments from insurance companies, patients, and third-party
              payers to individual patient accounts. This process requires
              meticulous attention to detail to ensure precise tracking of
              payments, adjustments, and patient balances.
            </li>
            <li className="text-md leading-6 mb-4">
              Efficient payment posting not only reduces errors but also
              streamlines revenue reconciliation and financial reporting. By
              maintaining a clear financial overview, it enhances the overall
              efficiency of the revenue cycle. Accurate payment posting is
              crucial for improving cash flow and ensuring timely
              reimbursements, ultimately supporting the financial health and
              operational success of healthcare organizations.
            </li>
            <li className="text-md leading-6 mb-4">
              Incorporating automation into the payment posting process can
              further enhance accuracy and efficiency, allowing for quicker
              identification of discrepancies and smoother financial operations.
              A robust payment posting system is vital for the sustainability
              and growth of healthcare practices
            </li>
          </ul>
        ),
      },
      {
        id: 2,
        title: "Medical Coding Services",
        subItems: [
          {
            id: 1,
            title:
              "Medical Coding Services: Enhancing Your Revenue Cycle Management",
            desc: "In the intricate realm of healthcare, accurate medical coding is vital for effective revenue cycle management. Our Medical Coding Services equip healthcare providers with the expertise to translate patient information, diagnoses, and treatments into standardized codes recognized universally by insurers and payers.",
          },
          {
            id: 2,
            title: "Why Choose Our Medical Coding Services?",
            desc: "Expertise in Coding Standards: Our certified medical coders are proficient in the latest coding standards, including ICD-10 and CPT coding. This ensures that all procedures and services are accurately documented and billed, reducing the risk of claim denials.",
          },
          {
            id: 3,
            title: "Tailored Solutions for Every Specialty:",
            desc: "We recognize that each medical specialty has distinct coding needs. Our team delivers customized coding solutions tailored to the specific requirements of various healthcare practices, enhancing accuracy and compliance.",
          },
          {
            id: 4,
            title: "Streamlined Claims Processing:",
            desc: "Efficient coding is essential for timely claims submission and reimbursement. Our meticulous approach to medical coding minimizes errors and accelerates the revenue cycle, allowing healthcare providers to focus more on patient care.",
          },
          {
            id: 5,
            title: "Comprehensive Reporting and Analytics: ",
            desc: "We offer detailed analysis reports to assist healthcare providers in making informed business decisions. Our insights into coding practices and revenue trends empower you to optimize operations and financial performance.",
          },
          {
            id: 6,
            title: "Cost-Effective Solutions:",
            desc: "By outsourcing your medical coding to us, you can significantly reduce overhead costs associated with maintaining an in-house coding department. Our services combine skill, experience, and efficiency to enhance your revenue cycle while controlling expenses.",
          },
          {
            id: 7,
            title: "The Impact of Accurate Medical Coding",
            desc: "Accurate medical coding is more than a compliance requirement; its a critical factor in your practice financial success. Proper coding ensures that all services rendered are accounted for, directly impacting your revenue flow. Our dedicated team works diligently to ensure every claim is coded correctly the first time, minimizing disputes and delays in payment.",
          },
          {
            id: 8,
            title: "Partner with Us for Success",
            desc: "Choosing our Medical Coding Services means partnering with a team committed to your success. We prioritize quality, accuracy, and compliance, ensuring your revenue cycle operates smoothly and efficiently. Let us help you enhance your financial health while you focus on delivering exceptional patient care.",
          },
        ],
      },
      {
        id: 3,
        title: "Denials Management",
        subItems: [
          {
            id: 1,
            title: "Denial Management: Maximizing Revenue Recovery",
            desc: "Denial management is a vital component of revenue cycle management, focusing on identifying, addressing, and preventing claim denials. In the intricate healthcare environment, effective denial management is crucial for maintaining healthy cash flow and ensuring healthcare providers receive rightful reimbursement for services rendered.",
            subItems: [
              {
                id: 1,
                title: "Understanding Denial Management :",
                desc: (
                  <ul className="list-disc pl-6">
                    <li className="text-md  leading-6 mb-4">
                      Denial management encompasses the systematic review and
                      resolution of denied claims from insurance payers. Denials
                      can result from a range of issues, including
                      administrative errors and clinical discrepancies.
                      Efficient management of these denials enables healthcare
                      organizations to recover lost revenue and enhance their
                      financial performance.
                    </li>
                    <li className="text-md  leading-6 mb-4">
                      Our dedicated denial management team comprises experienced
                      professionals who excel in:
                    </li>
                  </ul>
                ),
                subItems: [
                  {
                    id: 1,
                    title: "Root Cause Analysis: ",
                    desc: "We investigate the reasons behind each denied claim to uncover and address underlying issues.",
                  },
                  {
                    id: 2,
                    title: "Appeals Process:",
                    desc: "We prepare and submit thorough appeals for denied claims, ensuring all necessary documentation and evidence support the case.",
                  },
                  {
                    id: 3,
                    title: "Resubmission of Claims:",
                    desc: "Once issues are resolved, we promptly resubmit claims to insurance companies to minimize payment delays.",
                  },
                  {
                    id: 4,
                    title: "Ongoing Monitoring:",
                    desc: "We continuously track and analyze denial trends to identify recurring issues, enabling proactive measures to prevent future denials.",
                  },
                ],
              },
              {
                id: 2,
                title: "Why Effective Denial Management Matters",
                desc: "",
                subItems: [
                  {
                    id: 1,
                    title: "Revenue Recovery:",
                    desc: "Prompt and efficient resolution of denied claims significantly boosts revenue recovery rates for healthcare providers.",
                  },
                  {
                    id: 2,
                    title: "Operational Efficiency:",
                    desc: "Streamlined denial management processes reduce administrative burdens and enhance overall revenue cycle efficiency.",
                  },
                  {
                    id: 3,
                    title: "Financial Transparency:",
                    desc: "A robust denial management strategy offers valuable insights into billing practices, leading to improved financial transparency.",
                  },
                  {
                    id: 4,
                    title: "Compliance and Risk Mitigation:",
                    desc: "Our services ensure claims comply with current regulations, reducing the risk of penalties and enhancing adherence to industry standards.",
                  },
                ],
              },
              {
                id: 3,
                title: "Strategies for Reducing Denials",
                desc: "To minimize claim denials, we implement several best practices:",
                subItems: [
                  {
                    id: 1,
                    title: "Proactive Prevention:",
                    desc: "We identify potential issues in front-end processes to prevent denials before they occur.",
                  },
                  {
                    id: 2,
                    title: "Comprehensive Training:",
                    desc: "Our team provides ongoing training for staff across various departments, ensuring they understand their roles impact on the revenue cycle.",
                  },
                  {
                    id: 3,
                    title: "Data-Driven Insights:",
                    desc: "We leverage analytics to monitor denial patterns and develop targeted strategies addressing specific causes of denials.",
                  },
                ],
              },
              {
                id: 4,
                title: "Partner with Us for Effective Denial Management",
                desc: (
                  <ul className="list-disc pl-6">
                    <li className="text-md  leading-6 mb-4">
                      Navigating the complexities of denial management can be
                      challenging, but with our expertise, healthcare providers
                      can enhance their revenue cycle efficiency. By partnering
                      with us, you gain access to a dedicated team committed to
                      maximizing your revenue recovery while minimizing future
                      denials.
                    </li>
                    <li className="text-md  leading-6 mb-4">
                      Let us help you transform your denial management processes
                      and pave the way for a more financially secure future.
                      Contact us today to learn more about our comprehensive
                      denial management services.
                    </li>
                  </ul>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Account Receivable",
    icon: <HowToRegIcon fontSize="large" />,
    link: "account-receivable",
    description:
      "Our service refers to the outstanding payments that healthcare providers are entitled to receive from patients, insurance companies, and other payers for services delivered. Efficient A/R management involves tracking these receivables, following up on unpaid accounts, and ensuring timely collections to optimize revenue flow and minimize the risk of bad debt.",
    subItems: [
      {
        id: 1,
        title: "AR Follow-up",
        subItems: [
          {
            id: 1,
            title:
              "Accounts Receivable: Ensuring Financial Health in Healthcare",
            desc: (
              <p>
                <strong>Accounts Receivable (A/R) management</strong> is a
                crucial aspect of revenue cycle management that focuses on
                collecting payments owed to healthcare providers for services
                rendered. Efficient A/R processes are essential for maintaining
                a healthy cash flow, minimizing financial risk, and ensuring the
                sustainability of healthcare practices.{" "}
              </p>
            ),
          },
          {
            id: 2,
            title: "What is Accounts Receivable Management?",
            desc: (
              <p>
                <strong>Accounts Receivable</strong> refers to the outstanding
                payments that healthcare providers are entitled to receive from
                patients, insurance companies, and other payers for services
                delivered. Effective A/R management involves:{" "}
              </p>
            ),
            subItems: [
              {
                id: 1,
                title: "Tracking receivables:",
                desc: "Monitoring payments that are due.",
              },
              {
                id: 2,
                title: "Follow-up on unpaid accounts:",
                desc: "Ensuring timely collections.",
              },
              {
                id: 3,
                title: "Optimizing revenue flow:",
                desc: "Enhancing cash flow for the healthcare provider.",
              },
            ],
          },
          {
            id: 3,
            title: "Our Accounts Receivable Services at WinSolTech",
            desc: "We offer comprehensive A/R management services designed to enhance your practice’s financial performance. Our services include:",
            subItems: [
              {
                id: 1,
                title: "Timely Follow-Up:",
                desc: (
                  <>
                    <p>
                      Prompt follow-ups reduce the days in A/R and accelerate
                      cash collections.
                    </p>
                    <p>
                      Prioritization of claims based on dollar value and date of
                      service maximizes recovery efforts.
                    </p>
                  </>
                ),
              },
              {
                id: 2,
                title: "Claim Management:",
                desc: (
                  <>
                    <p>
                      Meticulous tracking of claim status to address any issues
                      during the billing process.
                    </p>
                    <p>
                      Experienced billers adept at navigating insurance
                      follow-ups and resolving discrepancies efficiently.
                    </p>
                  </>
                ),
              },
              {
                id: 3,
                title: "Reporting and Analysis:",
                desc: (
                  <>
                    <p>
                      Detailed reports on A/R metrics to help you understand
                      your financial position.
                    </p>
                    <p>
                      Insights provided for informed decision-making regarding
                      your revenue cycle.
                    </p>
                  </>
                ),
              },
              {
                id: 4,
                title: "Denial Management:",
                desc: (
                  <>
                    <p>
                      Robust denial management process to address denied claims
                      swiftly.
                    </p>
                    <p>
                      Root cause analysis of denials and implementation of
                      strategies to prevent future occurrences.
                    </p>
                  </>
                ),
              },
              {
                id: 5,
                title: "Patient Collections:",
                desc: (
                  <>
                    <p>
                      Management of self-pay accounts with effective collection
                      strategies.
                    </p>
                    <p>
                      Enhancement of patient communication to improve recovery
                      rates.
                    </p>
                  </>
                ),
              },
            ],
          },
          {
            id: 4,
            title: "The Importance of Effective A/R Management",
            desc: "Effective A/R management is vital for several reasons:",
            subItems: [
              {
                id: 1,
                title: "Improved Cash Flow:",
                desc: "Ensures prompt payment collection, reducing the time between service delivery and payment receipt.",
              },
              {
                id: 2,
                title: "Minimized Bad Debt:",
                desc: "Proactive follow-ups on outstanding accounts reduce the risk of bad debt, maintaining financial viability.",
              },
              {
                id: 3,
                title: "Enhanced Operational Efficiency:",
                desc: "Streamlined processes reduce administrative burdens, allowing staff to focus on patient care.",
              },
              {
                id: 4,
                title: "Financial Stability:",
                desc: "A strong A/R management strategy contributes to the overall financial health of your practice, enabling investment in growth and improved patient services.",
              },
            ],
          },
          {
            id: 5,
            title:
              "Partner with WinSolTech for Effective Accounts Receivable Management",
            desc: "Navigating the complexities of accounts receivable can be challenging, but with WinSolTechs expertise, you can enhance your revenue cycle efficiency. By partnering with us, you gain access to a dedicated team committed to:",
            subItems: [
              {
                title: "Maximizing your revenue recovery",
              },
              {
                title: "Minimizing financial risk",
              },
            ],
            // desc1 : 'Let us help you transform your accounts receivable processes and secure a more prosperous financial future for your healthcare practice. Contact us today to learn more about our comprehensive A/R management services.'
          },
        ],
      },
      {
        id: 2,
        title: "Patient Collections",
        subItems: [
          {
            id: 1,
            title:
              "Optimizing Patient Collections: Strengthening Financial Health in Healthcare",
            desc: "Patient collections are a vital component of revenue cycle management, essential for ensuring the financial stability and sustainability of healthcare organizations. As patients increasingly bear a larger portion of their medical expenses, effective collection strategies are crucial for maintaining healthy cash flow and optimizing financial performance.",
          },
          {
            id: 2,
            title: "Understanding Patient Collections",
            subItems: [
              {
                id: 1,
                title:
                  "Patient collections involve obtaining payments from patients for healthcare services rendered, including:",
                subItems: [
                  {
                    title: "Co-pays",
                  },
                  {
                    title: "Deductibles",
                  },
                  {
                    title: "Balances remaining after insurance payments",
                  },
                ],
              },
              {
                id: 2,
                title: "Effective strategies for patient collections include:",
                subItems: [
                  {
                    title: "Clear communication",
                  },
                  {
                    title: "Patient education",
                  },
                  {
                    title:
                      "Efficient processes to maximize collections and minimize bad debt",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            title: "Our Patient Collection Services at WinSolTech",
            desc: "We offer comprehensive patient collection services designed to enhance your practices financial health, including:",
            subItems: [
              {
                id: 1,
                title: "Point-of-Service Collections:",
                subItems: [
                  {
                    title:
                      "Emphasizing the collection of payments at the time of service.",
                  },
                  {
                    title:
                      "Ensuring patients understand their financial responsibilities.",
                  },
                  {
                    title:
                      "Offering convenient payment options such as credit/debit cards and online payments.",
                  },
                ],
              },
              {
                id: 2,
                title: "Automated Payment Plans:",
                subItems: [
                  {
                    title:
                      "Providing flexible payment plans for patients to manage their balances over time.",
                  },
                  {
                    title:
                      "Facilitating easier management of healthcare expenses.",
                  },
                  {
                    title:
                      "Utilizing an automated system to ensure timely payments and reduce administrative burdens.",
                  },
                ],
              },
              {
                id: 3,
                title: "Patient Financial Assistance:",
                subItems: [
                  {
                    title:
                      "Assisting patients in navigating the complexities of healthcare financing.",
                  },
                  {
                    title:
                      "Helping them understand insurance coverage, deductibles, and out-of-pocket expenses.",
                  },
                  {
                    title:
                      "Providing information on financial assistance programs and working with patients to find suitable solutions.",
                  },
                ],
              },
              {
                id: 4,
                title: "Denial Management:",
                subItems: [
                  {
                    title:
                      "Offering a robust denial management process that addresses denied claims promptly and effectively.",
                  },
                  {
                    title:
                      "Analyzing the causes of denials and implementing strategies to prevent future occurrences, maximizing revenue recovery.",
                  },
                ],
              },
              {
                id: 5,
                title: "Reporting and Analytics:",
                subItems: [
                  {
                    title:
                      "Providing detailed reports on patient collection metrics.",
                  },
                  {
                    title:
                      "Helping you understand your financial position and identify areas for improvement.",
                  },
                  {
                    title:
                      "Empowering informed decision-making regarding your revenue cycle.",
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            title: "The Importance of Effective Patient Collections",
            desc: "Effective patient collections bring multiple benefits:",
            subItems: [
              {
                id: 1,
                title: "Improved Cash Flow:",
                desc: "Efficient processes ensure prompt payments, reducing the time between service delivery and payment receipt.",
              },
              {
                id: 2,
                title: "Reduced Bad Debt:",
                desc: "Proactive follow-ups on outstanding accounts and offering flexible payment options reduce the risk of bad debt, maintaining financial viability.",
              },
              {
                id: 3,
                title: "Enhanced Patient Satisfaction:",
                desc: "Clear communication and transparent billing practices improve patient satisfaction, fostering stronger patient-provider relationships and promoting loyalty.",
              },
              {
                id: 4,
                title: "Compliance and Risk Mitigation:",
                desc: "Adherence to industry regulations and best practices reduces the risk of legal issues and ensures compliance with healthcare laws.",
              },
            ],
          },
          {
            id: 5,
            title: "Partner with WinSolTech for Successful Patient Collections",
            desc: "Navigating the complexities of patient collections can be challenging, but with our expertise, you can enhance your revenue cycle efficiency. Partnering with WinSolTech provides you with:",
            subItems: [
              {
                title: "Access to a dedicated team",
              },
              {
                title: "Maximization of patient collections",
              },
              {
                title:
                  "Prioritization of patient satisfaction and financial transparency",
              },
            ],
            // desc1 : 'Let us help you transform your patient collection processes and secure a more prosperous financial future for your healthcare practice. Contact us today to learn more about our comprehensive patient collection services.'
          },
        ],
      },
      {
        id: 3,
        title: "Patient Statements",
        subItems: [
          {
            id: 1,
            title:
              "Patient Statements: Simplifying the Billing Process for Better Financial Health",
            desc: "Clear and accurate patient statements are essential for ensuring timely payments and maintaining strong patient-provider relationships. Our Patient Statements service is designed to enhance transparency and efficiency in the billing process, helping healthcare providers optimize their revenue cycle and improve patient satisfaction.",
          },
          {
            id: 2,
            title: "Our Patient Statements Service",
            subItems: [
              {
                id: 1,
                title: "Personalized Statements:",
                subItems: [
                  {
                    title:
                      "We create customized statements that reflect your practice’s branding, ensuring consistency and professionalism.",
                  },
                  {
                    title:
                      "User-friendly design presents all necessary information clearly, helping patients understand their charges, payments, and outstanding balances.",
                  },
                ],
              },
              {
                id: 2,
                title: "Multiple Delivery Options:",
                subItems: [
                  {
                    id: 1,
                    title: "Mailed Statements:",
                    desc: "Traditional paper statements sent to patients’ addresses.",
                  },
                  {
                    id: 2,
                    title: "Electronic Statements:",
                    desc: "Digital versions sent via email or accessible through patient portals.",
                  },
                  {
                    id: 3,
                    title: "Online Patient Portals:",
                    desc: "Secure online access to statements, offering convenience and immediate availability.",
                  },
                ],
              },
              {
                id: 3,
                title: "Flexible Payment Options:",
                subItems: [
                  {
                    id: 1,
                    title: "Online Payments:",
                    desc: "Secure payment options through a web portal.",
                  },
                  {
                    id: 2,
                    title: "Phone Payments:",
                    desc: "Pay via a dedicated phone line with customer service support.",
                  },
                  {
                    id: 3,
                    title: "Mail-in Payments:",
                    desc: "Traditional check or money order payments sent by mail.",
                  },
                  {
                    id: 4,
                    title: "Automated Follow-Up Reminders:",
                    desc: "System-generated reminders for outstanding balances, ensuring patients are aware of their payment obligations.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = cardData.find((service) => service.link === id);
  console.log(service);
  if (!service) return <div>Service not found</div>;

  return (
    <section className="container-common py-36">
      <h1 className="text-5xl font-bold text-center text-primary pb-8">
        {service.title}
      </h1>
      {service.subItems && service.subItems.length > 0 ? (
        service.subItems.map((item) => (
          <>
            <div key={item.id} className="flex flex-col mb-8">
              <h2 className="text-3xl font-semibold text-secondary">
                {item.title}
              </h2>
              {item.desc && <div className="mt-4">{item.desc}</div>}
              {item.subItems &&
                item.subItems.map((item: any) => (
                  <div key={item.id} className="mt-4">
                    <h4 className="text-xl mb-2 font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="text-md leading-6 mb-4">{item.desc}</p>
                    {item.subItems &&
                      item.subItems.map((item: any) => (
                        <div key={item.id} className="mt-4">
                          <h3 className="text-2xl mb-2 font-semibold text-primary">
                            {item.title}
                          </h3>
                          <p className="text-md leading-6 mb-4">{item.desc}</p>
                          {item.subItems &&
                            item.subItems.map((item: any) => (
                              <>
                                <h5 className="text-lg mb-2 font-semibold text-secondary">
                                  {item.title}
                                </h5>
                                <p className="text-md leading-6 mb-4">
                                  {item.desc}
                                </p>
                              </>
                            ))}
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </>
        ))
      ) : (
        <div>No sub-items available</div>
      )}
    </section>
  );
}

export default ServiceDetail;
