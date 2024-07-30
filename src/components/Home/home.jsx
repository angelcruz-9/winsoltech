import React from "react";
import { Link } from "react-router-dom";
import About from "../about/about";
import Cards from "./cards";
import useScrollToHash from "./useScrollToHash";

function Home() {
  const headerText =
    "WINSOLTECH offers an extensive range of solutions to its clients to implement and upgrade best practices in the healthcare industry.";

  useScrollToHash();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-800 py-36 xl:pt-48">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl font-extrabold text-white leading-tight md:text-4xl mb-6">
            {headerText}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Empowering healthcare practices with advanced solutions for optimal
            results and efficiency.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="#services"
              className="py-3 px-8 border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
            >
              Our Services
            </Link>
            <Link
              to="#contact"
              className="py-3 px-8 border border-teal-600 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md transition duration-300"
            >
              Contact Us
            </Link>
            <Cards />
          </div>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}

export default Home;
