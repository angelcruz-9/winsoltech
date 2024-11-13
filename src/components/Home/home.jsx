import React from "react";
import { Link } from "react-router-dom";
import About from "../about/about";
import BlogSection from "./blog"; // Import the BlogSection component
import useScrollToHash from "./useScrollToHash";

function Home() {
  useScrollToHash();

  const blogPosts = [
    {
      id: 1,
      title: "Improving Patient Care Through Technology",
      excerpt:
        "Discover how the latest healthcare technologies are improving patient outcomes and streamlining clinical processes.",
      link: "https://www.bairesdev.com/blog/technologies-to-improve-patient-care/",
    },
    {
      id: 2,
      title: "The Role of AI in Healthcare Transformation",
      excerpt:
        "Artificial Intelligence is revolutionizing healthcare, from diagnostics to treatment planning. Learn how AI is making healthcare smarter.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8285156/",
    },
    {
      id: 3,
      title: "Optimizing Healthcare Operations with Data Analytics",
      excerpt:
        "Data-driven insights are helping healthcare organizations operate more efficiently. Explore the impact of data analytics.",
      link: "https://www.striim.com/blog/hospital-operations-machine-learning/",
    },
    {
      id: 4,
      title: "Improving Patient Care Through Technology",
      excerpt:
        "Discover how the latest healthcare technologies are improving patient outcomes and streamlining clinical processes.",
      link: "https://www.bairesdev.com/blog/technologies-to-improve-patient-care/",
    },
    {
      id: 5,
      title: "The Role of AI in Healthcare Transformation",
      excerpt:
        "Artificial Intelligence is revolutionizing healthcare, from diagnostics to treatment planning. Learn how AI is making healthcare smarter.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8285156/",
    },
    {
      id: 6,
      title: "Optimizing Healthcare Operations with Data Analytics",
      excerpt:
        "Data-driven insights are helping healthcare organizations operate more efficiently. Explore the impact of data analytics.",
      link: "https://www.striim.com/blog/hospital-operations-machine-learning/",
    },
    {
      id: 7,
      title: "Improving Patient Care Through Technology",
      excerpt:
        "Discover how the latest healthcare technologies are improving patient outcomes and streamlining clinical processes.",
      link: "https://www.bairesdev.com/blog/technologies-to-improve-patient-care/",
    },
    {
      id: 8,
      title: "The Role of AI in Healthcare Transformation",
      excerpt:
        "Artificial Intelligence is revolutionizing healthcare, from diagnostics to treatment planning. Learn how AI is making healthcare smarter.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8285156/",
    },
    {
      id: 9,
      title: "Optimizing Healthcare Operations with Data Analytics",
      excerpt:
        "Data-driven insights are helping healthcare organizations operate more efficiently. Explore the impact of data analytics.",
      link: "https://www.striim.com/blog/hospital-operations-machine-learning/",
    },
    {
      id: 10,
      title: "Improving Patient Care Through Technology",
      excerpt:
        "Discover how the latest healthcare technologies are improving patient outcomes and streamlining clinical processes.",
      link: "https://www.bairesdev.com/blog/technologies-to-improve-patient-care/",
    },
    {
      id: 11,
      title: "The Role of AI in Healthcare Transformation",
      excerpt:
        "Artificial Intelligence is revolutionizing healthcare, from diagnostics to treatment planning. Learn how AI is making healthcare smarter.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8285156/",
    },
    {
      id: 12,
      title: "Optimizing Healthcare Operations with Data Analytics",
      excerpt:
        "Data-driven insights are helping healthcare organizations operate more efficiently. Explore the impact of data analytics.",
      link: "https://www.striim.com/blog/hospital-operations-machine-learning/",
    },
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
            <source
              src={`${process.env.PUBLIC_URL}/assets/videos/services.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-45"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl md:w-2/3 font-bold text-white leading-tight mb-6 px-6 md:px-36">
            Revolutionizing Healthcare with Comprehensive Solutions
          </h1>
          <p className="text-base sm:text-lg md:w-2/3 md:text-xl text-white mb-8 px-4 md:px-24">
            At WINSOLTECH, we empower healthcare organizations with cutting-edge technology solutions that enhance patient care, optimize clinical workflows, and drive operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
            <Link
              to="/solutions"
              className="py-2 px-6 sm:py-3 sm:px-8 bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Explore Healthcare Solutions
            </Link>
            <Link
              to="#contact"
              className="py-2 px-6 sm:py-3 sm:px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-12 text-center">
          <About />
        </div>
      </section>

      {/* Blog Section */}
      <div id="blog" className="py-8 sm:py-12">
        <BlogSection blogPosts={blogPosts} />
      </div>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-900 py-8 sm:py-12 text-white">
        <div className="container mx-auto px-6 lg:px-24 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-6">Ready to transform your healthcare operations? Contact us to learn how we can help.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/solutions"
              className="py-2 px-6 sm:py-3 sm:px-8 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="py-2 px-6 sm:py-3 sm:px-8 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
