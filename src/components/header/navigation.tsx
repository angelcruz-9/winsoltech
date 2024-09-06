import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Our Services", path: "/services" },
  {
    name: "Our Solutions",
    path: "/solutions",
    dropdown: [
      { name: "Revenue Cycle Management", path: "/revenueCycleManagement" },
    ],
  },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="p-4">
      {/* Mobile Menu Button */}
      <div className="flex justify-between items-center md:hidden">
        <button
          className="text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed top-0 left-0 w-full h-screen bg-white z-50 p-6 flex flex-col items-center`}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-4 right-4">
              <button onClick={closeMobileMenu} className="text-xl">
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <li key={item.path} className="relative">
                  <Link
                    to={item.path}
                    className={`flex items-center justify-center ${
                      item.name === "Contact"
                        ? "bg-primary border border-primary hover:bg-blue-800 hover:border-blue-800 rounded-2xl px-6 py-1 text-white"
                        : `hover:text-secondary ${
                            isActive(item.path)
                              ? "border-b-4 border-secondary text-secondary"
                              : "text-black"
                          } `
                    }`}
                    onClick={() => {
                      if (item.dropdown) {
                        toggleDropdown();
                      }
                      closeMobileMenu(); // Close the mobile menu when an item is clicked
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <span className="ml-2 text-black">
                        {openDropdown ? (
                          <FaChevronUp size={12} />
                        ) : (
                          <FaChevronDown size={12} />
                        )}
                      </span>
                    )}
                  </Link>
                  {item.dropdown && (
                    <AnimatePresence>
                      {openDropdown && (
                        <motion.ul
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gray-700 p-2 rounded mt-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <li
                              key={subItem.path}
                              className="p-2 hover:bg-gray-600"
                            >
                              <Link
                                to={subItem.path}
                                className="text-white"
                                onClick={closeMobileMenu} // Close the mobile menu when a sub-item is clicked
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <Link
                to={item.path}
                className={`flex items-center ${
                  item.name === "Contact"
                    ? "bg-primary border border-primary hover:bg-blue-800 hover:border-blue-800 rounded-2xl px-6 py-1"
                    : `hover:text-secondary ${
                        isActive(item.path)
                          ? "border-b-4 border-secondary text-secondary"
                          : ""
                      } ${isScrolled ? 'text-black' : 'text-white'}`
                }`}
                onClick={() => {
                  if (item.dropdown) {
                    toggleDropdown();
                  }
                }}
              >
                {item.name}
                {item.dropdown && (
                  <span className="ml-2 text-black">
                    {openDropdown ? (
                      <FaChevronUp size={12} />
                    ) : (
                      <FaChevronDown size={12} />
                    )}
                  </span>
                )}
              </Link>
              {item.dropdown && (
                <AnimatePresence>
                  {openDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 bg-gray-700 p-2 rounded w-64"
                    >
                      {item.dropdown.map((subItem) => (
                        <li
                          key={subItem.path}
                          className="p-2 hover:bg-gray-600"
                        >
                          <Link to={subItem.path} className="text-white">
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
