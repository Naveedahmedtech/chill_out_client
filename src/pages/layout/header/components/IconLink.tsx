import React from 'react';
import { Link } from 'react-router-dom';
import { IIconLink } from '../../../../types/types';

const IconLink: React.FC<IIconLink> = ({ url, Icon, text, className }) => {
    return (
        <Link to={url} className={`flex items-center space-x-2 ${className}`}>
            {Icon && <Icon className="text-2xl" />}
            <span className="hidden lg:block">{text}</span>
        </Link>
    );
};

export default IconLink;
