import React, { useState } from 'react';

// Contact component
const Contact: React.FC = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    console.log(formData); // Submit the form data (you can replace it with actual submission logic)
  };

  return (
    <div
      style={{
        // backgroundImage: 'url(https://your-image-url.com)', // Add your image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        paddingTop: '60px',
      }}
    >
      <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
      <h2 className="text-3xl font-bold mb-6 z-10">Get in Touch</h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="z-10 p-6 bg-white rounded-md shadow-lg w-full max-w-md"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-left">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-left">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-left">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
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

      {/* Address Section */}
      <div className="mt-8 text-black shadow-lg p-8 rounded-md bg-orange-200">
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
