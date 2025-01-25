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
          AI in Healthcare: Transforming Patient Treatment
        </h1>
        <p className="text-xl text-gray-700 mt-6">
          Discover the transformative impact of artificial intelligence on the
          healthcare sector, featuring advancements in predictive analytics and
          personalized treatment options.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 text-lg">
            Artificial intelligence is transforming the healthcare industry by
            accelerating diagnoses, customizing treatment plans, and improving
            operational efficiency. By utilizing AI-driven solutions, healthcare
            providers can deliver care that is more accurate, accessible, and
            affordable.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            The incorporation of artificial intelligence into healthcare systems
            offers real-time insights, predictive analytics, and
            patient-centered solutions, ultimately paving the way for a
            healthier future.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Principal Advantages of AI in Healthcare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Early Diagnosis
            </h3>
            <p className="text-gray-700">
              Artificial intelligence (AI) algorithms examine intricate medical
              data to detect illnesses early on, improving patient outcomes
              considerably.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Analytics for Prediction
            </h3>
            <p className="text-gray-700">
              Healthcare professionals can take preemptive steps to manage
              patient care and avert potential issues in the future by using AI
              tools to foresee health trends.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Individualized Care
            </h3>
            <p className="text-gray-700">
              By customizing medicines based on each patient's unique genetic
              profile and medical information, artificial intelligence helps to
              advance personalized medicine.
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
                <strong>AI Diagnostics:</strong> Increases the speed and
                accuracy of diagnosis by identifying patterns in scans and lab
                results.
              </li>
              <li>
                <strong>Virtual Health Assistants:</strong> The healthcare
                process is streamlined and patient interaction is enhanced via
                chatbots and virtual assistants.
              </li>
              <li>
                <strong>Real-Time Monitoring:</strong> Constant health
                monitoring is made possible by wearables and Internet of Things
                devices, which lowers the possibility of emergencies.
              </li>
              <li>
                <strong>Drug Discovery:</strong> AI speeds up the process of
                creating novel medications and treatments for illnesses.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          AI in Practice: Practical Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              AI-Powered Imaging
            </h3>
            <p className="text-gray-700">
              Artificial intelligence (AI) examines medical pictures, such as
              MRIs and X-rays, to precisely identify anomalies.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Predictive Upkeep
            </h3>
            <p className="text-gray-700">
              In order to ensure seamless patient care, hospitals utilize AI to
              predict equipment breakdowns.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Research and Genomics
            </h3>
            <p className="text-gray-700">
              AI analyzes genomic data to find mutations linked to disease and
              create customized treatments.
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
