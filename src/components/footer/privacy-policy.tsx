import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container px-6 pt-28 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-lg text-gray-700">
            Welcome to WinsolTech! Your privacy is very important to us. This Privacy Policy outlines the types of
            personal information we collect, how we use it, and the steps we take to protect it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-lg text-gray-700">
            We collect various types of information to provide and improve our services, including:
          </p>
          <ul className="list-inside list-disc text-lg text-gray-700">
            <li>Personal Identification Information: Name, email address, phone number, etc.</li>
            <li>Usage Data: Information on how you use our website, services, and content.</li>
            <li>Cookies and Tracking Technologies: To enhance user experience and collect data on usage patterns.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-lg text-gray-700">
            We may use the information we collect for the following purposes:
          </p>
          <ul className="list-inside list-disc text-lg text-gray-700">
            <li>To provide and maintain our services.</li>
            <li>To notify you about changes to our services or products.</li>
            <li>To monitor and analyze usage to improve our services.</li>
            <li>To communicate with you for customer support, updates, and marketing.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
          <p className="text-lg text-gray-700">
            We use administrative, technical, and physical security measures to protect your personal information from
            unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic
            storage is 100% secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
          <p className="text-lg text-gray-700">
            You have the right to access, correct, or delete your personal information. You may also opt out of certain
            communications and request that we stop processing your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
          <p className="text-lg text-gray-700">
            Our website uses cookies to enhance user experience. You can manage your cookie preferences in your browser
            settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-lg text-gray-700">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. Please review this Privacy Policy periodically for any updates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-lg text-gray-700">
            Email: <a href="mailto:contact@winsoltech.com" className="text-blue-500">contact@winsoltech.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
