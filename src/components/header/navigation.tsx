import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:text-gray-400">Our Services</Link>
        </li>
        <li>
          <Link to="/solutions" className="text-white hover:text-gray-400">Our Solutions</Link>
        </li>
        <li>
          <Link to="/careers" className="text-white hover:text-gray-400">Careers</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
