import React from "react";
import { SvgIconProps } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const ServiceCard: React.FC<ServiceCardProps> = ({
    id,
    title,
    icon,
    description,
    link,
}) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
        hover: { 
            scale: 1.05, 
            rotateX: 5, 
            rotateY: -5, 
            boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)" 
        },
    };

    const iconVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        hover: { rotate: 45, scale: 1.2 },
    };

    return (
        <motion.div
            className="relative bg-white p-8 rounded-xl shadow-md overflow-hidden cursor-pointer transform-gpu transition-transform duration-500 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {/* Diagonal Background Shape */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 transform rotate-45 z-0 opacity-40"></div>

            {/* Animated Icon */}
            <motion.div
                className="relative z-10 flex items-center justify-center mb-6"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-200 rounded-full">
                    {icon}
                </div>
            </motion.div>

            {/* Service Title */}
            <h2 className="relative z-10 text-2xl font-bold mb-4 text-gray-800">
                {title}
            </h2>

            {/* Service Description */}
            <p className="relative z-10 text-gray-600 mb-6">{description}</p>

            {/* Read More Link */}
            <Link
                to={`/services/${link}`}
                className="relative z-10 mt-auto inline-block text-blue-600 font-semibold hover:underline transition-colors duration-300"
                aria-label={`Read more about ${title}`}
            >
                Read More &raquo;
            </Link>

            {/* Hover Border Effect */}
            <motion.div
                className="absolute inset-0 border-4 border-blue-400 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
        </motion.div>
    );
};

export default ServiceCard;
