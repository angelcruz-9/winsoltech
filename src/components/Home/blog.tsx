import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  link: string;
};

// Define the props type for the BlogSection component
interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogPosts }) => {
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Get current posts based on page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Animation variants
  const postVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const paginationVariant = {
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
  };

  return (
    <section id="blog" className="bg-gradient-to-r from-green-200 to-blue-100 py-24">
      <div className="container-common px-10 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-900 mb-6"
        >
          Latest Insights in Healthcare
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 mb-12"
        >
          Stay updated with the latest trends, research, and innovations in healthcare technology that shape patient care and operational efficiencies.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Blog Posts */}
          <div className="grid grid-cols-1 gap-8">
            {currentPosts.slice(0, 3).map((post) => (
              <motion.div
                key={post.id}
                variants={postVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <Link to={post.link} target='_blank' className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Blog Posts */}
          <div className="grid grid-cols-1 gap-8">
            {currentPosts.slice(3, 6).map((post) => (
              <motion.div
                key={post.id}
                variants={postVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <Link to={post.link} target='_blank' className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border border-blue-500"
                } rounded-full w-12 h-12 flex justify-center items-center font-semibold transition duration-300`}
                variants={paginationVariant}
                whileHover="hover"
                whileTap="tap"
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
