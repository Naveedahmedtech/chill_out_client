import React, { useState, useRef, useEffect } from 'react';

const AddComment: React.FC = () => {
    const [comment, setComment] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit the comment logic here
        console.log('Comment submitted:', comment);
        setComment('');
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [comment]);

    return (
        <div className="border-t px-4 py-2">
            <form onSubmit={handleSubmit} className="flex items-center w-full">
                <textarea
                    ref={textareaRef}
                    value={comment}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Add a comment..."
                    rows={1}
                    className={`flex-grow py-2 text-[#7A23FF] px-4 border-0 border-b-2 bg-transparent focus:outline-none transition-all duration-300 ease-in-out resize-none overflow-hidden ${isFocused ? 'border-b-[#7A23FF]' : 'border-b-primary'}`}
                    style={{ overflow: 'hidden' }}
                />
                {comment && (
                    <button
                        type="submit"
                        className="ml-2 py-1 px-3 text-white bg-[#7A23FF] border-2 border-[#7A23FF] rounded-full hover:bg-white hover:text-[#7A23FF] transition-all duration-300 ease-in-out"
                    >
                        Post
                    </button>
                )}
            </form>
        </div>
    );
};

export default AddComment;
