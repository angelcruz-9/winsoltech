import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ImprovePatient: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-900">
          Using Technology to Improve Patient Care
        </h1>
        <p className="text-lg text-indigo-700 mt-4">
          Consider the ways that technology is improving patient care,
          encouraging innovation, and improving results in the healthcare
          industry.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700">
            Through increased efficiency and better patient involvement,
            technology is revolutionizing the healthcare industry. Modern
            technologies like artificial intelligence, machine learning, and
            Internet of Things (IoT) gadgets are bringing patients and
            healthcare providers together, allowing for real-time monitoring and
            individualized treatment choices.
          </p>
          <p className="text-gray-700 mt-4">
            Technology adoption improves diagnostic and therapeutic procedures,
            lowers costs, and increases accessibility, opening the door to a
            more just and healthy future.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-indigo-800 text-center mb-8">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Enhanced Availability
            </h3>
            <p className="text-gray-700">
              Utilizing technology creates a path to a healthier and more
              inclusive future by improving diagnostic and therapeutic
              procedures, reducing costs, and improving accessibility.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Improved Diagnostics
            </h3>
            <p className="text-gray-700">
              Artificial intelligence (AI) tools examine vast datasets to find
              trends, spot abnormalities, and offer early warning signs,
              enabling timely and effective interventions.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              Simplified Procedures
            </h3>
            <p className="text-gray-700">
              Automating administrative tasks, such as scheduling appointments
              and managing records, reduces workload and frees up healthcare
              workers to focus on providing essential care.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-indigo-800 text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://retinalscreenings.com/wp-content/uploads/2022/02/AdobeStock_317687329-1024x512.jpeg"
              alt="Technology in Healthcare"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>
                <strong>AI Diagnostics:</strong> The speed and accuracy of
                diagnoses are increased by machine learning algorithms that
                assist in identifying possible health risks.
              </li>
              <li>
                <strong>Telemedicine:</strong>
                Remote consultations between patients and medical specialists
                guarantee convenience and ongoing care.
              </li>
              <li>
                <strong>Wearable Devices:</strong> In order to support proactive
                health management, fitness trackers and medical wearables gather
                crucial data.
              </li>
              <li>
                <strong>Electronic Health Records (EHR):</strong> Centralized
                systems provide a comprehensive overview of a patient's history
                and improve data sharing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-indigo-800 text-center mb-8">
          Real-World Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">
              Telemedicine
            </h3>
            <p className="text-gray-700">
              By making it possible for patients living in rural areas to
              consult with specialists virtually via video calls, telemedicine
              improves health outcomes by facilitating prompt access to
              healthcare.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">
              AI-Driven Imaging
            </h3>
            <p className="text-gray-700">
              Artificial intelligence (AI)-driven imaging technologies help
              radiologists spot minute details in scans, speeding up the
              diagnosis and treatment processes.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="text-center py-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
          Ready to Transform Patient Care?
        </h2>
        <p className="text-lg text-indigo-700 mb-6">
          Join us in leveraging technology to revolutionize healthcare and
          improve lives worldwide.
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

export default ImprovePatient;
