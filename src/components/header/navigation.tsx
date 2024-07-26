import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Services", path: "/services" },
  {
    name: "Our Solutions",
    path: "/solutions",
    dropdown: [
      { name: "Revenue cycle Management", path: "/revenueCycleManagement" },
    ],
  },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);

  const isActive = (path: any) => location.pathname === path;

  return (
    <div className="p-4">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.path} className="relative">
            <Link
              to={item.path}
              className={`flex items-center ${
                item.name === "Contact" 
                  ? "bg-primary border border-primary hover:bg-blue-800 hover:border-blue-800 rounded-2xl text-white px-6 py-1"
                  : `hover:text-secondary ${
                      isActive(item.path) ? "border-b-4 border-secondary text-secondary" : "text-black"
                    }`
              }`}
              onClick={() => {
                if (item.dropdown) {
                  setOpenDropdown(!openDropdown);
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
                    className="absolute left-0 mt-2 bg-gray-700 p-2 rounded w-64 h-32"
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.path} className="p-2 hover:bg-gray-600">
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
  );
};

export default Navigation;
