import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-6 pt-24">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Terms of Service</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-700">
          Welcome to Winsoltech. By using our services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">2. Services Provided</h2>
        <p className="text-gray-700">
          We offer healthcare services including medical consultations, diagnostic tests, treatment plans, and other health-related services. All services are provided by licensed professionals in accordance with the applicable laws and regulations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">3. Patient Responsibilities</h2>
        <ul className="list-inside list-disc text-gray-700">
          <li>Provide accurate and complete information regarding your health history.</li>
          <li>Follow the prescribed treatment plans and attend follow-up appointments as needed.</li>
          <li>Pay all applicable fees for services rendered as outlined in your insurance policy or billing statement.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">4. Payment Terms</h2>
        <p className="text-gray-700">
          Payment for services is due at the time of service unless otherwise specified. We accept payment through various methods, including insurance, credit cards, and other electronic payment systems. Patients are responsible for understanding their insurance coverage and any associated co-pays, deductibles, or out-of-pocket expenses.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">5. Privacy and Confidentiality</h2>
        <p className="text-gray-700">
          We are committed to protecting your privacy. All personal and health information provided to us will be kept confidential and handled in compliance with HIPAA (Health Insurance Portability and Accountability Act) regulations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">6. Limitation of Liability</h2>
        <p className="text-gray-700">
          [Healthcare Provider Name] will not be liable for any indirect, special, or consequential damages arising from the use of our services. We make no warranties or guarantees regarding the effectiveness or outcome of any medical treatment.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">7. Termination of Services</h2>
        <p className="text-gray-700">
          We reserve the right to terminate services to any patient if the patient fails to comply with the terms outlined here, engages in disruptive behavior, or does not adhere to treatment protocols. In such cases, a notice will be provided.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">8. Changes to Terms</h2>
        <p className="text-gray-700">
          We may update or modify these Terms of Service at any time. All changes will be posted on this page with an updated date. By continuing to use our services after changes are made, you agree to the revised terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">9. Contact Information</h2>
        <p className="text-gray-700">
          If you have any questions regarding these Terms of Service, please contact us at [Phone Number] or [Email Address]. We are here to assist you and ensure your experience with [Healthcare Provider Name] is satisfactory.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
