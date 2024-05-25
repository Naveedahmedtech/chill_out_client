import React from 'react';

interface PostImageProps {
    postImage: string;
}

const PostImage: React.FC<PostImageProps> = ({ postImage }) => {
    return <img src={postImage} alt="Post" className="w-full" />;
}

export default PostImage;
