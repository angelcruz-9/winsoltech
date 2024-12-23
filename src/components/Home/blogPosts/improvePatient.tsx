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
          Improving Patient Care Through Technology
        </h1>
        <p className="text-lg text-indigo-700 mt-4">
          Explore how technology is revolutionizing patient care, improving
          outcomes, and fostering innovation in healthcare.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700">
            Technology is revolutionizing healthcare by increasing efficiency
            and fostering better patient engagement. Advanced tools like AI,
            machine learning, and IoT devices are bridging the gap between
            providers and patients, delivering real-time monitoring and tailored
            care solutions.
          </p>
          <p className="text-gray-700 mt-4">
            Embracing technology improves diagnosis and treatment, lowers costs,
            and increases accessibility, creating a path toward a healthier and
            more equitable future.
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
              Improved Accessibility
            </h3>
            <p className="text-gray-700">
              Harnessing technology enhances diagnosis and treatment, reduces
              costs, and expands accessibility, paving the way for a healthier
              and more inclusive future.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Enhanced Diagnostics
            </h3>
            <p className="text-gray-700">
              AI tools process extensive datasets to identify patterns, detect
              anomalies, and deliver early warning signals, enabling timely and
              effective interventions.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              Streamlined Operations
            </h3>
            <p className="text-gray-700">
              By automating administrative tasks such as appointment scheduling
              and record management, the workload is reduced, allowing
              healthcare professionals to focus on providing essential care.
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
                <strong>AI Diagnostics:</strong> Machine learning algorithms
                help identify potential health risks, boosting both the speed
                and accuracy of diagnoses.
              </li>
              <li>
                <strong>Telemedicine:</strong>
                Patients can meet with healthcare professionals remotely,
                ensuring both convenience and continuous care.
              </li>
              <li>
                <strong>Wearable Devices:</strong> Fitness trackers and medical
                wearables capture essential data, supporting proactive health
                management.
              </li>
              <li>
                <strong>Electronic Health Records (EHR):</strong> Centralized
                systems enhance data sharing and offer a complete overview of a
                patient's history.
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
              Telemedicine allows patients in rural areas to receive prompt care
              by connecting them with specialists via video calls, improving
              health outcomes.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">
              AI-Driven Imaging
            </h3>
            <p className="text-gray-700">
              AI-enhanced imaging tools aid radiologists in spotting fine
              details in scans, accelerating diagnosis and treatment.
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
