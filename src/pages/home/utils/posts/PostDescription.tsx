import React, { useState } from 'react';

interface PostDescriptionProps {
    username: string;
    description: string;
    tags: string[];
}

const PostDescription: React.FC<PostDescriptionProps> = ({  description, tags }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="px-4 pb-4">
            <p className="mb-2">
                <span className={isExpanded ? 'block' : 'inline'}>
                    {isExpanded ? description : description.substring(0, 100)}
                    {description.length > 100 && !isExpanded && '...'}
                </span>
                {description.length > 100 && (
                    <span
                        onClick={toggleDescription}
                        className="text-blue-500 cursor-pointer transition-colors duration-300 hover:text-blue-700"
                    >
                        {isExpanded ? ' See less' : ' See more'}
                    </span>
                )}
            </p>
            <div className="text-sm flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span
                        key={tag}
                        className="text-primary"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PostDescription;
