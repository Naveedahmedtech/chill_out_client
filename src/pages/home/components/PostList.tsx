// components/PostList.tsx
import React from 'react';
import PostCard from './PostCard';
import avatar from '../../../assets/images/avatar/avatar1.jpg';


const samplePosts = [
    {
        userImage: avatar,
        username: 'john_doe',
        category: 'Travel',
        postImage: avatar,
        description: 'Exploring the beautiful landscapes of New Zealand!,',
        tags: ['travel', 'newzealand', 'adventure']
    },
    {
        userImage: avatar,
        username: 'john_doe',
        category: 'Travel',
        postImage: avatar,
        description: 'Exploring the beautiful landscapes of New Zealand!',
        tags: ['travel', 'newzealand', 'adventure']
    },
];

const PostList: React.FC = () => {
    return (
        <div className="space-y-6 my-3 mt-5">
            {samplePosts.map((post, index) => (
                <PostCard
                    key={index}
                    userImage={post.userImage}
                    username={post.username}
                    category={post.category}
                    postImage={post.postImage}
                    description={post.description}
                    tags={post.tags}
                />
            ))}
        </div>
    );
}

export default PostList;
