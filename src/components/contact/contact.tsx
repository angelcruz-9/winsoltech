import React, { useState } from 'react';

// Contact component
const Contact: React.FC = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to toggle form visibility
  const [isFormVisible, setIsFormVisible] = useState(true);

  // State to handle form submission status
  const [statusMessage, setStatusMessage] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store form data in local storage
    const storedData = JSON.parse(localStorage.getItem('contactFormData') || '[]');
    localStorage.setItem('contactFormData', JSON.stringify([...storedData, formData]));

    // Display status message and hide the form
    setStatusMessage('Form submitted successfully!');
    setIsFormVisible(false);

    // Clear the form inputs
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  // Handle popup "OK" click
  const handleOkClick = () => {
    setIsFormVisible(true);
    setStatusMessage('');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/contact-bg.webp)`, // Using the image from the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* Light Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '90px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.6))', // Light gradient overlay for shadow effect
          zIndex: 0,
        }}
      ></div>

      <h2 className="text-3xl font-bold mb-6" style={{ zIndex: 1 }}>
        Get in Touch
      </h2>

      {/* Form or Popup */}
      {isFormVisible ? (
        <form
          onSubmit={handleSubmit}
          className="z-10 p-6 bg-white rounded-md shadow-lg w-full max-w-md"
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div
          className="z-10 p-6 bg-white rounded-md shadow-lg w-full max-w-md text-center"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <p className="text-lg font-bold text-black">{statusMessage}</p>
          <button
            onClick={handleOkClick}
            className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            OK
          </button>
        </div>
      )}

      {/* Address Section */}
      <div
        className="mt-8 text-black shadow-lg p-8 rounded-md bg-orange-100 w-full max-w-md"
        style={{ zIndex: 1 }}
      >
        <h3 className="text-xl font-bold">Our Office</h3>
        <p className="text-lg mt-2">
          123 Main Street, Suite 456
          <br />
          City, State, Zip Code
        </p>
      </div>
    </div>
  );
};

export default Contact;
