import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('contactFormData') || '[]');
    localStorage.setItem('contactFormData', JSON.stringify([...storedData, formData]));
    setStatusMessage('Thank you! We will get back to you shortly.');
    setIsFormVisible(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleOkClick = () => {
    setIsFormVisible(true);
    setStatusMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      {/* Header Section */}
      <header className="w-full bg-blue-600 py-24 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-lg font-medium max-w-2xl mx-auto">
          We're here to answer any questions you have. Feel free to reach out to us!
        </p>
      </header>

      <main className="container max-w-5xl mx-auto py-10 px-4">
        {/* Why Contact Us */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Contact Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Expert Support</h3>
              <p className="text-gray-600">Get answers from our team of specialists and expert advisors.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Fast Response</h3>
              <p className="text-gray-600">We value your time. Expect quick and helpful responses.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                Let us understand your needs and tailor solutions specifically for you.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        {isFormVisible ? (
          <section className="mb-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Write your message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </section>
        ) : (
          <section className="text-center p-8 bg-white rounded-lg shadow-lg">
            <p className="text-lg font-bold">{statusMessage}</p>
            <button
              onClick={handleOkClick}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </section>
        )}

        {/* Testimonials Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <blockquote className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600">
                "The team was incredibly responsive and went above and beyond to help us."
              </p>
              <cite className="block mt-4 font-bold text-gray-800">— Jane Doe</cite>
            </blockquote>
            <blockquote className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600">
                "I received expert guidance that helped solve my problem quickly."
              </p>
              <cite className="block mt-4 font-bold text-gray-800">— John Smith</cite>
            </blockquote>
            <blockquote className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600">
                "A fantastic experience! Highly recommend reaching out to them."
              </p>
              <cite className="block mt-4 font-bold text-gray-800">— Emily Brown</cite>
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full bg-blue-700 text-white py-6 text-center">
        <p>123 Main Street, Suite 456, City, State, Zip Code | (123) 456-7890</p>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
