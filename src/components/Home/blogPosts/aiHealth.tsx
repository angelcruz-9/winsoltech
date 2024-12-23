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
          Uncover the transformative power of artificial intelligence in
          healthcare, spanning personalized medicine to predictive analytics.{" "}
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 text-lg">
            Artificial intelligence is transforming healthcare by accelerating
            diagnoses, customizing treatments, and boosting operational
            efficiency. With AI-driven solutions, healthcare providers can
            deliver more accurate, accessible, and affordable care.{" "}
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            The incorporation of AI into healthcare systems delivers real-time
            insights, predictive analytics, and patient-centered solutions,
            shaping a healthier future.{" "}
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
              AI algorithms examine intricate medical data to spot diseases
              early, resulting in substantially improved patient outcomes.{" "}
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Predictive Analytics
            </h3>
            <p className="text-gray-700">
              AI tools anticipate health trends, allowing providers to
              proactively manage patient care and avert future complications.{" "}
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Personalized Treatments
            </h3>
            <p className="text-gray-700">
              AI drives personalized medicine by adapting treatments to each
              patient's unique genetic makeup and health information.{" "}
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
