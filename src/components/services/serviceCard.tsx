import React from "react";
import { SvgIconProps } from "@mui/material";

interface ServiceCardProps {
    title: string;
    icon: React.ReactElement<SvgIconProps>; // Type for MUI icon components
    description: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, link }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <div className="flex justify-start mb-4 text-primary">
            {icon}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-700 line-clamp-4 relative">
            {description}
            <span className="absolute bottom-0 right-0 bg-white pl-1">
                ... <a href={link} className="text-primary underline">Read More</a>
            </span>
        </p>
    </div>
);

export default ServiceCard;
