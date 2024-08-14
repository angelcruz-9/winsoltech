import React from "react";
import { SvgIconProps } from "@mui/material";
import { Link } from 'react-router-dom';

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
    key?: number;
    id?: number; // Added ID prop
    title?: string;
    icon?: React.ReactElement<SvgIconProps>;
    description?: string;
    link?: string; // Should be the ID or identifier for the service
    subItems?: InnerCardDetails[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, icon, description, link }) => {

    return (
        <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
            <div className="flex justify-start mb-4 text-primary">
                {icon}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
            <p className="text-gray-700 line-clamp-6 relative">
                {description}
                <Link to={`/services/${link}`} className="absolute bottom-0 right-0 bg-white pl-1">
                    ... <span className="text-primary underline">Read More</span>
                </Link>
            </p>
        </div>
    );
};

export default ServiceCard;
