import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const DataAnalytics: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 py-24 bg-gradient-to-br from-teal-50 via-green-100 to-green-200">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Healthcare Data Analytics: Revolutionizing Patient Care
        </h1>
        <p className="text-xl text-gray-700 mt-6">
          Examine the ways that data analytics is improving patient outcomes,
          increasing operational effectiveness, and spurring innovation in the
          medical field.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 text-lg">
            By providing data-driven insights that improve decision-making
            procedures, data analytics is transforming the healthcare industry.
            It is essential for predicting disease outbreaks and increasing
            operational effectiveness, which greatly aids in the conversion of
            modern healthcare systems.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            By using advanced data processing, medical personnel may make
            judgments more quickly and accurately, improving patient outcomes
            and raising the effectiveness of healthcare services available.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Data analytics' advantages in healthcare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-4">
              Analytics for Prediction
            </h3>
            <p className="text-gray-700">
              The ability of data analytics to forecast patient health trends
              allows for prompt treatments and sickness prevention.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Efficiency in Operations
            </h3>
            <p className="text-gray-700">
              Healthcare firms may optimize resource allocation, lower costs,
              and improve process efficiency by looking at operational data.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Enhanced Results for Patients
            </h3>
            <p className="text-gray-700">
              Data analytics gives medical personnel the ability to make
              informed decisions that result in customized care and improved
              patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Novel Aspects of Medical Data Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://www.iso.org/files/live/sites/isoorg/files/news/insights/healthcare/Healthcare_Evergreen%20-%20Healthcare%20data%20analytics.svg"
              alt="Data Analytics in Healthcare"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
              <li>
                <strong>Predictive Modeling:</strong> Predicting future health
                outcomes and preventing disease outbreaks by using historical
                data.
              </li>
              <li>
                <strong>Clinical Decision Support:</strong> AI-powered solutions
                help medical professionals by offering individualized treatment
                recommendations.
              </li>
              <li>
                <strong>Patient Monitoring:</strong> Healthcare professionals
                can gain instant insights by using IoT devices to track patient
                vitals in real-time.
              </li>
              <li>
                <strong>Data Visualization:</strong> Complex medical data can be
                simplified into an understandable format to help healthcare
                workers make choices more quickly.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Data Analytics in Practice: Practical Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Analytics for Predictive Health
            </h3>
            <p className="text-gray-700">
              By examining patterns in patient data over time, data analytics
              can forecast health-related events like heart attacks or strokes.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Optimization of Treatment
            </h3>
            <p className="text-gray-700">
              Use data analytics to enhance treatment plans, ensuring that
              patients receive the best care possible that is customized to
              their individual circumstances.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Analytics for Operations
            </h3>
            <p className="text-gray-700">
              Hospital operations can be improved by using data to streamline
              staff schedules, cut down on patient wait times, and more
              efficiently allocate resources.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="text-center py-10 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Harness the Power of Data Analytics in Healthcare
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Leverage data analytics to optimize healthcare services and improve
          patient care outcomes.
        </p>
        <Link
          to="/contact"
          className="bg-teal-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-teal-700 transition"
        >
          Learn More
        </Link>
      </footer>
    </div>
  );
};

export default DataAnalytics;
