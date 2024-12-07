import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaBalanceScale,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface AccountsReceivablesProps {
  denialRate?: number;
  daysInAR?: number;
}

const AccountsReceivables: React.FC<AccountsReceivablesProps> = ({
  denialRate = 6.5,
  daysInAR = 35,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      className="pt-32 py-8 px-8 mx-auto bg-gray-100 min-h-screen lg:px-24"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Header */}
      <motion.header className="text-center mb-12" variants={fadeIn}>
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          Accounts Receivables Metrics
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Track and improve financial performance with key metrics for managing
          accounts receivables effectively in U.S. healthcare services.
        </p>
      </motion.header>

      {/* Metrics Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        variants={staggerContainer}
      >
        {[
          {
            label: "Days in AR",
            value: `${daysInAR} Days`,
            description: `Target: ≤ 40 Days. Achieving ${daysInAR} days 
              indicates strong cash flow and timely payments.`,
            icon: <FaBalanceScale className="text-purple-600 text-4xl" />,
          },
          {
            label: "Denial Rate",
            value: `${denialRate}%`,
            description: `Industry standard: 5-10%. A ${denialRate}% denial rate
              reflects efficient claims processing.`,
            icon: <FaFileInvoiceDollar className="text-green-500 text-4xl" />,
          },
          {
            label: "Net Collection Rate",
            value: "95%",
            description: `Above 90% is ideal. Indicates efficient collection of 
              receivables.`,
            icon: <FaMoneyBillWave className="text-blue-600 text-4xl" />,
          },
          {
            label: "Revenue Leakage",
            value: "2%",
            description: `A low percentage minimizes missed charges and 
              underpayment.`,
            icon: <FaBalanceScale className="text-orange-500 text-4xl" />,
          },
        ].map((metric, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            variants={fadeIn}
          >
            <div className="flex items-center justify-between">
              {metric.icon}
              <h3 className="text-xl font-bold text-gray-800">
                {metric.label}
              </h3>
            </div>
            <p className="text-3xl font-extrabold text-gray-800 mt-4">
              {metric.value}
            </p>
            <p className="text-sm text-gray-600 mt-2">{metric.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Importance Section */}
      <motion.section className="mb-16" variants={fadeIn}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Effective AR Management Matters
        </h2>
        <ul className="list-none flex flex-col md:flex-row justify-between">
          {[
            {
              label: "Cash Flow",
              detail:
                "Timely payments improve cash flow and financial stability.",
              highlight: "85%",
              highlightTitle: "improvement",
            },
            {
              label: "Operational Efficiency",
              detail:
                "Reduces AR days and enables better operational planning.",
              highlight: "30% ",
              highlightTitle: "reduction",
            },
            {
              label: "Patient Satisfaction",
              detail: "Transparent billing practices enhance patient trust.",
              highlight: "70% ",
              highlightTitle: "increase",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="bg-white p-4 rounded-md shadow-md flex items-center"
              variants={fadeIn}
            >
              <div className="text-lg font-medium text-blue-700 w-1/3">
                <span className="text-5xl">{item.highlight}</span>
                <p>{item.highlightTitle}</p>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Key Components */}
      <motion.section variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Key AR Management Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Claim Submission",
              description: (
                <>
                  <p>
                    Accurate claim submissions ensure that claims are processed
                    and paid promptly, reducing rework and payment delays.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Verify patient eligibility and coverage details.</li>
                    <li>Ensure compliance with payer-specific guidelines.</li>
                    <li>
                      Automate claim scrubbing processes to identify and correct
                      errors before submission.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Patient Payments",
              description: (
                <>
                  <p>
                    Streamlined patient billing processes help improve payment
                    collection and enhance the patient experience.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Offer multiple payment options (online, in-person).</li>
                    <li>
                      Provide clear, concise, and itemized bills to avoid
                      confusion.
                    </li>
                    <li>Implement reminder systems for overdue payments.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "EOB Posting",
              description: (
                <>
                  <p>
                    Explanation of Benefits (EOB) posting ensures accurate
                    tracking of payments and outstanding balances.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Automate EOB posting to minimize manual errors.</li>
                    <li>
                      Reconcile discrepancies between payer payments and
                      expected amounts.
                    </li>
                    <li>
                      Maintain detailed records for audits and compliance
                      requirements.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Follow-Up on Denials",
              description: (
                <>
                  <p>
                    Timely follow-up on denied claims can significantly reduce
                    revenue leakage and improve collections.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>
                      Analyze denial reasons to identify patterns and trends.
                    </li>
                    <li>
                      Develop action plans for resubmission or appeal of denied
                      claims.
                    </li>
                    <li>
                      Engage with payers proactively to resolve issues
                      efficiently.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Aging AR Monitoring",
              description: (
                <>
                  <p>
                    Regularly monitoring aging accounts receivables ensures
                    timely actions on overdue payments.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>
                      Segment AR by aging buckets (e.g., 0-30, 31-60 days) for
                      prioritization.
                    </li>
                    <li>
                      Assign dedicated teams to focus on long-outstanding
                      accounts.
                    </li>
                    <li>
                      Use predictive analytics to identify and mitigate risks of
                      non-payment.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Patient Communication",
              description: (
                <>
                  <p>
                    Clear and consistent communication with patients enhances
                    trust and accelerates payments.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>
                      Educate patients on billing processes and available
                      financial assistance programs.
                    </li>
                    <li>
                      Utilize email and SMS reminders to keep patients informed
                      about payment due dates.
                    </li>
                    <li>
                      Implement online chat or support tools for addressing
                      billing queries in real-time.
                    </li>
                  </ul>
                </>
              ),
            },
          ].map((area, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
              variants={fadeIn}
            >
              <h3 className="text-lg font-bold text-gray-800">{area.title}</h3>
              <div className="text-sm text-gray-600 mt-2">
                {area.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section variants={fadeIn}>
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white p-8 mt-16 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Optimize Your Accounts Receivables?
          </h2>
          <p className="text-lg mb-6">
            Discover actionable strategies to reduce denial rates and improve
            cash flow.
          </p>
          <Link to='/contact' className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition">
            Learn More
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AccountsReceivables;
