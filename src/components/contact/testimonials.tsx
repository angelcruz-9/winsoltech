import React from "react";

function Testimonials() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <blockquote className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600">
              "The team was incredibly responsive and went above and beyond to
              help us."
            </p>
            <cite className="block mt-4 font-bold text-gray-800">
              — Jane Doe
            </cite>
          </blockquote>
          <blockquote className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600">
              "I received expert guidance that helped solve my problem quickly."
            </p>
            <cite className="block mt-4 font-bold text-gray-800">
              — John Smith
            </cite>
          </blockquote>
          <blockquote className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600">
              "A fantastic experience! Highly recommend reaching out to them."
            </p>
            <cite className="block mt-4 font-bold text-gray-800">
              — Emily Brown
            </cite>
          </blockquote>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
