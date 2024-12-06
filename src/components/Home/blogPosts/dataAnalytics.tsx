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
          Data Analytics in Healthcare: Transforming Patient Care
        </h1>
        <p className="text-xl text-gray-700 mt-6">
          Explore how data analytics is enhancing patient outcomes, optimizing operations, and driving healthcare innovations.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Introduction</h2>
          <p className="text-gray-700 text-lg">
            Data analytics is revolutionizing the healthcare industry by enabling better decision-making through data-driven insights. From predictive analytics for disease prevention to operational efficiency improvements, data analytics plays a vital role in shaping modern healthcare systems.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            With the power of advanced data processing, healthcare providers can make faster, more accurate decisions, improving patient outcomes and healthcare efficiency.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Benefits of Data Analytics in Healthcare</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-700">
              Data analytics can predict patient health trends, allowing for early intervention and disease prevention.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Operational Efficiency</h3>
            <p className="text-gray-700">
              By analyzing operational data, healthcare organizations can streamline processes, reduce costs, and improve resource allocation.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Improved Patient Outcomes</h3>
            <p className="text-gray-700">
              Data analytics helps healthcare providers make data-driven decisions, leading to personalized treatment and better patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Innovative Features of Healthcare Data Analytics</h2>
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
                <strong>Predictive Modeling:</strong> Leveraging historical data to predict future health outcomes and prevent disease outbreaks.
              </li>
              <li>
                <strong>Clinical Decision Support:</strong> AI-powered tools provide healthcare professionals with recommendations for treatment plans.
              </li>
              <li>
                <strong>Patient Monitoring:</strong> Real-time monitoring of patient vitals through IoT devices, offering immediate insights for healthcare providers.
              </li>
              <li>
                <strong>Data Visualization:</strong> Visualizing complex medical data in an easy-to-understand format helps healthcare professionals make quicker decisions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Data Analytics in Action: Real-World Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Predictive Health Analytics</h3>
            <p className="text-gray-700">
              Data analytics is used to forecast health events, such as heart attacks or strokes, by analyzing patient data patterns over time.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Treatment Optimization</h3>
            <p className="text-gray-700">
              Using data analytics to refine treatment plans, ensuring patients receive the most effective care for their conditions.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Operational Analytics</h3>
            <p className="text-gray-700">
              Data is used to optimize hospital operations, from reducing patient wait times to improving staff scheduling and resource allocation.
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
          Leverage data analytics to optimize healthcare services and improve patient care outcomes.
        </p>
        <Link to='/contact' className="bg-teal-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-teal-700 transition">
          Learn More
        </Link>
      </footer>
    </div>
  );
};

export default DataAnalytics;
