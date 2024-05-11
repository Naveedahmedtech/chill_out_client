import { AiOutlineHome } from 'react-icons/ai'; // A home icon for navigation
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <div className="text-center">
                <p className="text-custom-blue text-3xl  md:text-8xl text-text font-bold mb-2 md:mb-4">404</p>
                <h1 className="text-3xl md:text-6xl font-semibold text-text mb-2 md:mb-4">Page Not Found</h1>
                <p className="text-custom-gray text-sm md:text-xl mb-8 text-text" >We can't find the page you're looking for.</p>
                <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent bg-primary text-base font-medium rounded-md text-text bg-custom-blue hover:bg-custom-blue-dark">
                    <AiOutlineHome className="mr-2 -ml-1 h-5 w-5" />
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
