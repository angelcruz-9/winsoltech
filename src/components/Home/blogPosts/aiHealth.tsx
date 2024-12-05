import React, { useEffect } from "react";

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
          Discover the transformative impact of artificial intelligence in healthcare, from personalized medicine to predictive analytics.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto mb-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Introduction</h2>
          <p className="text-gray-700 text-lg">
            Artificial intelligence is reshaping healthcare by enabling faster diagnoses, personalized treatments, and improved operational efficiency. With AI-driven tools, healthcare providers can offer more accurate, accessible, and affordable care.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            The integration of AI into medical systems ensures real-time insights, predictive analytics, and patient-centric solutions, paving the way for a healthier future.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Key Benefits of AI in Healthcare</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-green-900 mb-4">Early Diagnostics</h3>
            <p className="text-gray-700">
              AI algorithms analyze complex medical data to detect diseases at an early stage, improving patient outcomes significantly.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-700">
              AI tools predict health trends, helping providers manage patient care proactively and prevent future complications.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Personalized Treatments</h3>
            <p className="text-gray-700">
              AI enables personalized medicine by tailoring treatments based on individual genetic profiles and health data.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Innovative AI-Powered Features</h2>
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
                <strong>AI Diagnostics:</strong> Identifies patterns in scans and lab results, improving diagnostic speed and accuracy.
              </li>
              <li>
                <strong>Virtual Health Assistants:</strong> Chatbots and virtual assistants enhance patient engagement and simplify healthcare navigation.
              </li>
              <li>
                <strong>Real-Time Monitoring:</strong> Wearables and IoT devices provide continuous health monitoring, reducing emergencies.
              </li>
              <li>
                <strong>Drug Discovery:</strong> AI accelerates the process of developing new drugs and treatments for diseases.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">AI in Action: Real-World Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI-Driven Imaging</h3>
            <p className="text-gray-700">
              AI analyzes medical images, such as X-rays and MRIs, detecting abnormalities with exceptional precision.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Predictive Maintenance</h3>
            <p className="text-gray-700">
              Hospitals use AI to predict equipment failures, ensuring uninterrupted patient care.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Genomics and Research</h3>
            <p className="text-gray-700">
              AI deciphers genetic data to identify disease-causing mutations and create targeted therapies.
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
          Join us on a journey to transform patient care and healthcare systems with cutting-edge AI technologies.
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </footer>
    </div>
  );
};

export default AiHealth;
