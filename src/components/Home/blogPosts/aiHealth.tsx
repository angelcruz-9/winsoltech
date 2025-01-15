import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AiHealth: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 py-24 bg-gradient-to-br from-green-50 via-blue-50 to-blue-100">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
          AI in Healthcare: Revolutionizing Patient Care
        </h1>
        <p className="text-xl text-gray-700 mt-6">
          Discover the revolutionary impact of artificial intelligence in the
          healthcare sector, encompassing areas such as personalized medicine
          and predictive analytics.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 text-lg">
            Artificial intelligence is revolutionizing the healthcare sector by
            expediting diagnoses, personalizing treatment plans, and enhancing
            operational efficiency. Through the implementation of AI-driven
            solutions, healthcare professionals are able to provide care that is
            more precise, accessible, and cost-effective.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            The integration of artificial intelligence within healthcare systems
            provides immediate insights, predictive analytics, and solutions
            focused on patient needs, thereby contributing to a healthier
            future.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Key Benefits of AI in Healthcare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Early Diagnostics
            </h3>
            <p className="text-gray-700">
              AI algorithms analyze complex medical data to identify diseases at
              an early stage, leading to significantly enhanced patient
              outcomes.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Predictive Analytics
            </h3>
            <p className="text-gray-700">
              AI tools forecast health trends, enabling healthcare providers to
              take proactive measures in managing patient care and preventing
              potential complications in the future.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Personalized Treatments
            </h3>
            <p className="text-gray-700">
              Artificial intelligence facilitates personalized medicine by
              tailoring treatments to the individual genetic profiles and health
              data of each patient.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Innovative AI-Powered Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://qualitrix.com/wp-content/uploads/2023/05/Future-Of-AI-In-HealthCare-1024x576.png"
              alt="AI in Healthcare"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
              <li>
                <strong>AI Diagnostics:</strong> Recognizes patterns in scans
                and lab results, boosting diagnostic speed and precision.
              </li>
              <li>
                <strong>Virtual Health Assistants:</strong> Chatbots and virtual
                assistants improve patient interaction and streamline the
                healthcare experience.
              </li>
              <li>
                <strong>Real-Time Monitoring:</strong> Wearables and IoT devices
                enable constant health monitoring, reducing the risk of
                emergencies.
              </li>
              <li>
                <strong>Drug Discovery:</strong> AI enhances the speed of
                developing new drugs and therapies for diseases.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          AI in Action: Real-World Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              AI-Driven Imaging
            </h3>
            <p className="text-gray-700">
              AI inspects medical images, including X-rays and MRIs, to detect
              abnormalities with high precision.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Predictive Maintenance
            </h3>
            <p className="text-gray-700">
              AI is used by hospitals to forecast equipment failures,
              guaranteeing seamless patient care.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Genomics and Research
            </h3>
            <p className="text-gray-700">
              AI examines genetic data to uncover disease-related mutations and
              design personalized therapies.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="text-center py-10 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Ready to Embrace AI in Healthcare?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Join us on a journey to transform patient care and healthcare systems
          with cutting-edge AI technologies.
        </p>
        <Link
          to="/contact"
          className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-indigo-700 transition"
        >
          Learn More
        </Link>
      </footer>
    </div>
  );
};

export default AiHealth;
