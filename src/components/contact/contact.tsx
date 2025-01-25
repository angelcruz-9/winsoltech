import React, { useEffect, useState } from "react";
import Testimonials from "./testimonials";
import ContactSection from "./contactSection";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error for the current field
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    };

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // General email format
    const validDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
    ]; // Add other valid domains here
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    } else {
      const domain = formData.email.split("@")[1]; // Extract domain from email
      if (!validDomains.includes(domain)) {
        newErrors.email = `Email domain must be a valid one`;
      }
    }

    // Phone number validation - only numbers are allowed
    const phoneNumberRegex = /^[0-9]+$/; // Only numbers allowed
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number can only contain digits.";
    }

    const messageRegex = /^[a-zA-Z0-9\s,.!?]*$/; // Allows letters, numbers, spaces, and some punctuation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (!messageRegex.test(formData.message)) {
      newErrors.message = "Message contains invalid characters.";
    }

    setErrors(newErrors);
    // Check if there are no errors
    return !Object.values(newErrors).some((error) => error);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setIsLoading(true); // Start loading
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      };

      try {
        const response = await fetch("https://node-crosscloudops.onrender.com/contact-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend), // Changed here
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setStatusMessage("Thank you! We will get back to you shortly.");
        setIsFormVisible(false);
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      } catch (error) {
        console.error("Error during form submission:", error);
        setStatusMessage(
          "There was an error submitting your form. Please try again later."
        );
      } finally {
        setIsLoading(false); // End loading
      }
    }
  };

  const handleOkClick = () => {
    setIsFormVisible(true);
    setStatusMessage("");
  };

  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      <header className="w-full bg-blue-600 py-24 pt-28 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-lg font-medium max-w-2xl mx-auto">
          We're here to answer any questions you have. Feel free to reach out to
          us!
        </p>
      </header>

      <main className="container max-w-5xl mx-auto py-10 px-4">
        <ContactSection />
        {isFormVisible ? (
          <section className="mb-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-600 mb-1"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel" // Use type="tel" for phone number input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                  pattern="\d*" // This allows only numeric characters
                  maxLength={15} // Set a max length if needed
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-1">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Write your message"
                  rows={5}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </section>
        ) : (
          <section className="text-center p-8 bg-white rounded-lg shadow-lg my-8">
            <p className="text-lg font-bold">{statusMessage}</p>
            <button
              onClick={handleOkClick}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </section>
        )}
        <Testimonials />
      </main>

      <footer className="w-full bg-blue-700 text-white py-6 text-center">
        <p>
          123 Main Street, Suite 456, City, State, Zip Code | (123) 456-7890
        </p>
      </footer>
    </div>
  );
};

export default Contact;
