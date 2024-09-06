import React from "react";
import { SvgIconProps } from "@mui/material";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NestedSubItem {
    id?: number;
    title?: string;
    desc?: string | React.ReactNode;
    subItems?: NestedSubItem[];
}

interface InnerCardDetails {
    id?: number;
    title?: string;
    desc?: React.ReactNode | string;
    subItems?: NestedSubItem[];
}

interface ServiceCardProps {
    id?: number;
    title?: string;
    icon?: React.ReactElement<SvgIconProps>;
    description?: string;
    link?: string;
    subItems?: InnerCardDetails[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, icon, description, link }) => {

    // Define animation variants for consistent animation patterns
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
    };

    const iconVariants = {
        hidden: { rotate: -10, opacity: 0 },
        visible: { rotate: 0, opacity: 1 },
    };

    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer flex flex-col relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Animated Icon */}
            <motion.div
                className="flex items-center justify-center mb-4 text-primary"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            >
                {icon && (
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                        {icon}
                    </div>
                )}
            </motion.div>

            {/* Service Title */}
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>

            {/* Service Description */}
            <p className="text-gray-600 mb-4 flex-grow">
                {description}
            </p>

            {/* Read More Link */}
            <Link 
                to={`/services/${link}`} 
                className="mt-auto inline-block text-blue-600 font-semibold hover:underline transition-colors duration-300"
                aria-label={`Read more about ${title}`}
            >
                Read More &raquo;
            </Link>

            {/* Decorative Elements (Optional) */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-50 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none"></div>
        </motion.div>
    );
};

export default ServiceCard;
