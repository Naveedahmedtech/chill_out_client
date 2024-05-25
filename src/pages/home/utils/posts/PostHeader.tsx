import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import Tooltip from '../../../../components/Tooltip';

interface PostHeaderProps {
    userImage: string;
    username: string;
    category: string;
    publish_at: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ userImage, username, category, publish_at }) => {
    return (
        <div className="flex items-center justify-between px-3 py-2 shadow-sm rounded-t-lg">
            <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
                    <img src={userImage} alt={username} className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900">{username}</h3>
                        <p className="text-xs text-gray-400">{publish_at}</p>
                    </div>
                    <p className="text-sm text-gray-500">{category}</p>
                </div>
            </div>
            <Tooltip content="More">
                <FaEllipsisH className="text-primary cursor-pointer" />
            </Tooltip>
        </div>
    );
}

export default PostHeader;
