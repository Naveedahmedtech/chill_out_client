import React from 'react';
import avatar from '../../../assets/images/avatar/avatar1.jpg'
interface TopSectionProps {
    userImage: string;
    username: string;
    fullName: string;
    publish_at: string;
}

const TopSection: React.FC<TopSectionProps> = ({ userImage, username = "johndeo123", fullName = "John Deo", publish_at }) => {
    return (
        <div className="flex items-center justify-between px-2 py-2 shadow-sm rounded-t-lg">
            <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
                    <img src={avatar} alt={username} className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900">{username}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{fullName}</p>
                </div>
            </div>
            <button
                type="submit"
                className="ml-2 py-1 px-3 text-white bg-[#7A23FF] border-2 border-[#7A23FF] rounded-full hover:bg-white hover:text-[#7A23FF] transition-all duration-300 ease-in-out"
            >
                Switch
            </button>
        </div>
    );
}

export default TopSection;
