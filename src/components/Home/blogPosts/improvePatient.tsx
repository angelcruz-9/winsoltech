import React, { useEffect } from 'react';
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
          Discover how technology is transforming patient care, enhancing outcomes, and driving innovation in healthcare.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Introduction</h2>
          <p className="text-gray-700">
            Technology is reshaping healthcare by improving efficiency and patient engagement. Emerging tools like AI, machine learning, and IoT devices are bridging the gap between healthcare providers and patients, offering real-time monitoring and personalized care.
          </p>
          <p className="text-gray-700 mt-4">
            The adoption of technology not only ensures better diagnosis and treatment but also minimizes costs and maximizes accessibility, fostering a healthier and more equitable future.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-indigo-800 text-center mb-8">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Improved Accessibility</h3>
            <p className="text-gray-700">
              Telehealth and remote monitoring devices bring healthcare services to underserved areas, eliminating the need for travel and offering immediate support in emergencies.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-3">Enhanced Diagnostics</h3>
            <p className="text-gray-700">
              AI tools analyze vast datasets to uncover patterns, detect anomalies, and provide early warning signs, ensuring timely and effective interventions.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-purple-800 mb-3">Streamlined Operations</h3>
            <p className="text-gray-700">
              Automating administrative tasks such as appointment scheduling and record management reduces workload, allowing medical professionals to focus on critical care.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-indigo-800 text-center mb-8">Key Features</h2>
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
                <strong>AI Diagnostics:</strong> Machine learning algorithms aid in identifying potential health risks, improving the speed and accuracy of diagnoses.
              </li>
              <li>
                <strong>Telemedicine:</strong> Patients can consult with healthcare professionals from their homes, ensuring convenience and continuity of care.
              </li>
              <li>
                <strong>Wearable Devices:</strong> Fitness trackers and medical wearables collect valuable data, enabling proactive health management.
              </li>
              <li>
                <strong>Electronic Health Records (EHR):</strong> Centralized systems improve data sharing and provide a comprehensive view of patient history.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-indigo-800 text-center mb-8">Real-World Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Telemedicine</h3>
            <p className="text-gray-700">
              Telemedicine ensures that patients in rural areas receive timely care by connecting them with specialists via video calls, improving health outcomes.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">AI-Driven Imaging</h3>
            <p className="text-gray-700">
              AI-enhanced imaging tools assist radiologists by detecting minute details in scans, expediting diagnosis and treatment.
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
          Join us in leveraging technology to revolutionize healthcare and improve lives worldwide.
        </p>
        <Link to='/contact' className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-indigo-700 transition">
          Learn More
        </Link>
      </footer>
    </div>
  );
};

export default ImprovePatient;
