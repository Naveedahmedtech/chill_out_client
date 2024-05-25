import React from 'react';
import TopSection from './TopSection';
import SuggestionSection from './SuggestionSection';
interface RightSideBarProps {
    userImage: string;
    username: string;
    fullName: string;
    publish_at: string;
}


const suggestions = [
    { userImage: '', username: 'janedoe123', fullName: 'Jane Doe' },
    { userImage: '', username: 'richard_roe', fullName: 'Richard Roe' },
    // Add more suggestions here
];

const props = { userImage: '', username: "johndeo123", fullName: "John Deo", publish_at: "1day" };

const RightSideBar = () => {
    return (
        <>
            <TopSection userImage={props.userImage} username={props.username} fullName={props.fullName} publish_at={props.publish_at} />
            <SuggestionSection suggestions={suggestions} />

        </>
    );
}

export default RightSideBar;

