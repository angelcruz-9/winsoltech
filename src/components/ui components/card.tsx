import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    innerTitle?: string; // innerTitle is optional
    innerDescription?: React.ReactNode; // innerDescription is optional
    innerLink?: string;
    innerButtonText?: string;
  }
  

  const Card: React.FC<CardProps> = ({ icon, title, description, innerTitle, innerDescription, innerLink, innerButtonText }) => {
    return (
    <motion.div
      className="relative w-96 h-80 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      {/* Default Content */}
      <div className="p-6 flex flex-col items-center justify-center h-full">
        <div className="text-blue-500 text-4xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
        <p className="text-gray-700 text-center">{description}</p>
      </div>

      {/* Hover Content */}
      {(innerTitle || innerDescription) && (
        <motion.div
          className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {innerTitle && <h3 className="text-xl font-bold mb-2 text-center">{innerTitle}</h3>}
          {innerDescription && <p className='text-center'>{innerDescription}</p>}
          {innerLink && (
            <a href={innerLink} target='_blank' rel="noreferrer" className='text-white'>{innerButtonText}</a>
          )}
          <FaArrowRight className="mt-4 text-xl" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
