import React from 'react';
import { Link } from 'react-router-dom';
import { IIconLink } from '../../../../types/types';

interface IconLinkProps extends IIconLink {
    isActive: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({ url, Icon, text, className, isActive }) => {
    return (
        <Link
            to={url}
            className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${className} ${isActive ? 'bg-primary text-white' : 'text-primary hover:text-white hover:bg-primary'}`}
        >
            {Icon && <Icon className="text-2xl" />}
            <span className="hidden lg:block">{text}</span>
        </Link>
    );
};

export default IconLink;
