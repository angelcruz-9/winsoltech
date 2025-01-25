import React from "react";

function ContactSection() {
  return (
    <>
      {/* Why Contact Us */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Contact Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Expert Support
            </h3>
            <p className="text-gray-600">
              Get answers from our team of specialists and expert advisors.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Fast Response
            </h3>
            <p className="text-gray-600">
              We value your time. Expect quick and helpful responses.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Customized Solutions
            </h3>
            <p className="text-gray-600">
              Let us understand your needs and tailor solutions specifically for
              you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
