import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 flex justify-between items-center w-full text-white">
      <div className="container-common mx-auto flex justify-between items-center">
        <div className="text-left">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
        <div className="text-right">
          <ul className="flex space-x-4">
            <li>
              <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
