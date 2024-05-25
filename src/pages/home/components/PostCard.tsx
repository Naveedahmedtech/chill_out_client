import React from 'react';
import PostHeader from '../utils/posts/PostHeader';
import PostImage from '../utils/posts/PostImage';
import PostActions from '../utils/posts/PostActions';
import PostDescription from '../utils/posts/PostDescription';
import AddComment from '../utils/posts/AddComment';

interface PostCardProps {
    userImage: string;
    username: string;
    category: string;
    postImage: string;
    description: string;
    tags: string[];
}

const PostCard: React.FC<PostCardProps> = ({ userImage, username, category, postImage, description, tags }) => {
    return (
        <div className="max-w-md mx-auto bg-[#DDC8FF] shadow-md rounded-lg overflow-hidden">
            <PostHeader userImage={userImage} username={username} category={category} publish_at='1 day' />
            <PostImage postImage={postImage} />
            <PostActions />
            <PostDescription username={username} description={description} tags={tags} />
            <AddComment />
        </div>
    );
}

export default PostCard;
