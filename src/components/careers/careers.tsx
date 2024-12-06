import React, { useState } from "react";
import {
  FaHospitalSymbol,
  FaMapMarkerAlt,
  FaClipboardList,
  FaUserMd,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface Job {
  title: string;
  description: string;
  requirements: string[];
  location: string;
  benefits: string[];
  department: string;
  color: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  message: string;
  resume: File | null;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    message: "",
    resume: null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleApplyNow = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };


  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsModalOpen(false);
      alert("Application submitted successfully!");
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-28">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Careers in Winsoltech
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
            At Winsoltech, we value our employees as much as our patients. Enjoy
            a collaborative work environment, competitive benefits, and the
            opportunity to make a real difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              "Inclusive Work Culture",
              "Comprehensive Benefits",
              "Career Growth",
            ].map((reason, idx) => (
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
        <div className="container mx-auto px-4" id="careers">
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
                  <button
                    onClick={() => handleApplyNow(job)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full relative"
    >
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        onClick={() => setIsModalOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Apply for <span className="text-blue-600">{selectedJob?.title}</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 font-medium">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Your country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 font-medium">Address</label>
            <textarea
              name="address"
              placeholder="Your address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Message (optional)</label>
          <textarea
            name="message"
            placeholder="Write a message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.resume && (
            <p className="text-red-500 text-sm">{errors.resume}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md"
        >
          Submit Application
        </button>
      </form>
    </motion.div>
  </div>
)}
    </div>
  );
};

export default Careers;
