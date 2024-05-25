import React from 'react';
import Suggestion from './Suggestion';
import Text from '../../../components/Text';

interface SuggestionSectionProps {
    suggestions: Array<{
        userImage: string;
        username: string;
        fullName: string;
    }>;
}

const SuggestionSection: React.FC<SuggestionSectionProps> = ({ suggestions }) => {
    return (
        <div className="mt-4">
            <div className="flex justify-between items-center mt-5 mb-2">
                <Text>Suggestion for you</Text>
                <Text className='text-sm cursor-pointer'>Sell All</Text>
            </div>
            {suggestions.map((suggestion, index) => (
                <Suggestion
                    key={index}
                    userImage={suggestion.userImage}
                    username={suggestion.username}
                    fullName={suggestion.fullName}
                />
            ))}
        </div>
    );
};

export default SuggestionSection;
