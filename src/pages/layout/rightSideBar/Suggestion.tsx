import React from 'react';
import avatar from '../../../assets/images/avatar/avatar1.jpg'; // Default avatar

interface SuggestionProps {
    userImage: string;
    username: string;
    fullName: string;
}

const Suggestion: React.FC<SuggestionProps> = ({ userImage, username, fullName }) => {
    return (
        <div className="flex items-center justify-between px-2 py-2 shadow-sm rounded-lg mb-2">
            <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
                    <img src={userImage || avatar} alt={username} className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900">{username}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{fullName}</p>
                </div>
            </div>
            <button
                type="button"
                className="ml-2 py-1 px-3 text-white bg-[#7A23FF] border-2 border-[#7A23FF] rounded-full hover:bg-white hover:text-[#7A23FF] transition-all duration-300 ease-in-out"
            >
                Follow
            </button>
        </div>
    );
};

export default Suggestion;
