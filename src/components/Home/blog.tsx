import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <section id="blog" className="bg-white py-24">
      <div className="container mx-auto px-10 lg:px-24">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Insights</h2>
        <p className="text-gray-600 mb-12">
          Stay updated with the latest trends and innovations in healthcare technology.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Blog Posts */}
          <div className="grid grid-cols-1 gap-8">
            {currentPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <Link to={post.link} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Right Column: Blog Posts */}
          <div className="grid grid-cols-1 gap-8">
            {currentPosts.slice(3, 6).map((post) => (
              <div key={post.id} className="p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <Link to={post.link} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 border border-blue-500'
                } rounded-full w-10 h-10 flex justify-center items-center font-semibold hover:bg-blue-500 hover:text-white`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
