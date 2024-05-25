import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaShare, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import Tooltip from '../../../../components/Tooltip';

const PostActions: React.FC = () => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [likeTooltip, setLikeTooltip] = useState("Like this post");
    const [saveTooltip, setSaveTooltip] = useState("Save post");

    const toggleLike = () => {
        setLiked(!liked);
        setLikeTooltip(liked ? "Unlike this post" : "You liked this post!");
        setTimeout(() => {
            setLikeTooltip(liked ? "Like this post" : "Unlike this post");
        }, 1000);
    };

    const toggleSave = () => {
        setSaved(!saved);
        setSaveTooltip(saved ? "Remove from saved posts" : "Post saved!");
        setTimeout(() => {
            setSaveTooltip(saved ? "Save post" : "Remove from save posts");
        }, 1000);
    };

    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex space-x-4">
                <Tooltip content={likeTooltip}>
                    {liked ? (
                        <FaHeart
                            className="text-primary text-2xl cursor-pointer"
                            onClick={toggleLike}
                        />
                    ) : (
                        <FaRegHeart
                            className="text-primary text-2xl cursor-pointer"
                            onClick={toggleLike}
                        />
                    )}
                </Tooltip>
                <Tooltip content="Comment">
                    <FaComment className="text-primary text-2xl cursor-pointer" />
                </Tooltip>
                <Tooltip content="Share">
                    <FaShare className="text-primary text-2xl cursor-pointer" />
                </Tooltip>
            </div>
            <Tooltip content={saveTooltip}>
                {saved ? (
                    <FaBookmark
                        className="text-primary text-2xl cursor-pointer"
                        onClick={toggleSave}
                    />
                ) : (
                    <FaRegBookmark
                        className="text-primary text-2xl cursor-pointer"
                        onClick={toggleSave}
                    />
                )}
            </Tooltip>
        </div>
    );
};

export default PostActions;
