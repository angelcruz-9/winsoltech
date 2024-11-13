import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-800 p-4 flex justify-between items-center w-full text-white">
      <div className="container-common mx-auto flex justify-between items-center">
        <div className="text-left w-1/2">
          <p>&copy; {new Date().getFullYear()} WinsolTech All rights reserved.</p>
        </div>
        <div className="text-right">
          <ul className="flex flex-col xl:flex-row xl:space-x-4">
            <li>
              <button
                onClick={() => handleNavigate('/privacy-policy')}
                className="hover:text-gray-400"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('/terms-of-service')}
                className="hover:text-gray-400"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('/contact')}
                className="hover:text-gray-400"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
