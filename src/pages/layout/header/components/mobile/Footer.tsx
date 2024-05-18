import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaVideo, FaComments, FaUser } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0 bg-[#E8D9FF] border-t border-primary rounded-t-lg flex justify-between items-center shadow-md p-4 md:hidden z-50 rounded-t-lg'>
            <Link to='/home' className='flex flex-col items-center'>
                <FaHome size={24} className='text-primary cursor-pointer hover:text-primary-dark transition duration-300 ease-in-out' />
            </Link>
            <Link to='/search' className='flex flex-col items-center'>
                <FaSearch size={24} className='text-primary cursor-pointer hover:text-primary-dark transition duration-300 ease-in-out' />
            </Link>
            <Link to='/reel' className='flex flex-col items-center'>
                <FaVideo size={24} className='text-primary cursor-pointer hover:text-primary-dark transition duration-300 ease-in-out' />
            </Link>
            <Link to='/chat' className='flex flex-col items-center'>
                <FaComments size={24} className='text-primary cursor-pointer hover:text-primary-dark transition duration-300 ease-in-out' />
            </Link>
            <Link to='/profile' className='flex flex-col items-center'>
                <FaUser size={24} className='text-primary cursor-pointer hover:text-primary-dark transition duration-300 ease-in-out' />
            </Link>
        </div>
    );
}

export default Footer;
