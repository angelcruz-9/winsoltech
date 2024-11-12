import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  {
    name: "Our Solutions",
    path: "/solutions",
  },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Determine text color based on scroll position and current page
  const isHomePage = location.pathname === "/";
  const textColor = isScrolled || !isHomePage ? "text-black" : "text-white";

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
            className="fixed top-0 left-0 w-full h-screen bg-white z-50 p-4 flex flex-col items-center"
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
                    className={`flex items-center ${
                      item.name === "Contact"
                        ? "bg-primary border border-primary hover:bg-blue-800 hover:border-blue-800 rounded-2xl px-6 py-1 text-white"
                        : `hover:text-secondary ${
                            isActive(item.path)
                              ? "border-b-4 border-secondary text-secondary"
                              : ""
                          } ${textColor}`
                    }`}
                  >
                    {item.name}
                  </Link>
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
                    ? "bg-primary border border-primary hover:bg-blue-800 hover:border-blue-800 rounded-2xl px-6 py-1 text-white"
                    : `hover:text-secondary ${
                        isActive(item.path)
                          ? "border-b-4 border-secondary text-secondary"
                          : ""
                      } ${textColor}`
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
