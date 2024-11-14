import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    innerTitle?: string;
    innerDescription?: React.ReactNode;
    serviceId?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ icon, title, description, innerTitle, innerDescription, onClick }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    // Trigger animation when the card is in view
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    // Card animation variants for scrolling and hover
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.05, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            ref={ref}
            className="relative w-96 h-80 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            onClick={onClick}
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
                    {innerDescription && <p className="text-center">{innerDescription}</p>}
                    <div className="mt-4 text-xl">
                        <FaArrowRight />
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Card;
