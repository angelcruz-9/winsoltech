import React from "react";
import {
  FaHospitalSymbol,
  FaMapMarkerAlt,
  FaClipboardList,
  FaUserMd,
  FaCheckCircle,
} from "react-icons/fa";

interface Job {
  title: string;
  description: string;
  requirements: string[];
  location: string;
  benefits: string[];
  department: string;
  color: string;
}

const jobs: Job[] = [
  {
    title: "Registered Nurse (RN)",
    description:
      "Provide patient care, assist with treatments, and monitor patient progress in a hospital setting.",
    requirements: [
      "Bachelor's degree in Nursing (BSN)",
      "Current RN license",
      "Excellent communication and interpersonal skills",
      "Ability to work in a fast-paced environment",
    ],
    location: "New York, NY",
    benefits: [
      "Health insurance",
      "Retirement plan",
      "Paid time off",
      "Professional development opportunities",
    ],
    department: "Nursing",
    color: "bg-gradient-to-br from-blue-200 via-blue-100 to-white",
  },
  {
    title: "Medical Billing Specialist",
    description:
      "Handle insurance claims, billing procedures, and patient records in a healthcare facility.",
    requirements: [
      "High school diploma or equivalent",
      "Knowledge of healthcare billing software",
      "Attention to detail and organizational skills",
    ],
    location: "San Francisco, CA",
    benefits: [
      "Medical, dental, and vision insurance",
      "401(k) with company match",
      "Paid vacation and holidays",
    ],
    department: "Billing",
    color: "bg-gradient-to-br from-green-200 via-green-100 to-white",
  },
  {
    title: "Physical Therapist",
    description:
      "Help patients recover from injuries or surgeries through physical exercises and therapy.",
    requirements: [
      "Doctor of Physical Therapy (DPT)",
      "State licensure as a Physical Therapist",
      "Strong interpersonal and motivational skills",
    ],
    location: "Austin, TX",
    benefits: [
      "Competitive salary",
      "Healthcare coverage",
      "Flexible work hours",
    ],
    department: "Rehabilitation",
    color: "bg-gradient-to-br from-purple-200 via-purple-100 to-white",
  },
];

const Careers: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-28">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Careers in U.S. Health Services
          </h1>
          <p className="text-lg font-medium mb-8">
            Join a team committed to providing exceptional healthcare services
            across the nation.
          </p>
          <a href="#careers">
          <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition-all duration-300">
            Explore Opportunities
          </button>
          </a>
        </div>
      </header>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Join Our Team?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            At U.S. Health Services, we value our employees as much as our
            patients. Enjoy a collaborative work environment, competitive
            benefits, and the opportunity to make a real difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Inclusive Work Culture", "Comprehensive Benefits", "Career Growth"].map((reason, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {reason}
                </h4>
                <p className="text-gray-600">
                  Our team thrives on teamwork, growth, and inclusion to build a
                  healthier community.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto" id="careers">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Job Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 ${job.color}`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FaUserMd className="text-blue-600" />
                  {job.title}
                </h3>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    <FaHospitalSymbol className="text-green-600" /> Department
                  </h4>
                  <p className="text-gray-600">{job.department}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    <FaClipboardList className="text-purple-600" /> Requirements
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    <FaMapMarkerAlt className="text-red-600" /> Location
                  </h4>
                  <p className="text-gray-600">{job.location}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    <FaCheckCircle className="text-blue-600" /> Benefits
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {job.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-6">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
