import { APP_NAME } from '../../../../../utils/BASE_URL';
import Text from '../../../../../components/Text';
import { FaPlus, FaRegHeart } from 'react-icons/fa';

const TopHeader = () => {
    return (
        <div className='fixed top-0 left-0 right-0 bg-[#E8D9FF] flex justify-between items-center border-b border-primary p-4 md:hidden z-50 shadow-md rounded-b-lg'>
            <div className='flex items-center space-x-2'>
                <Text className='title-font text-3xl font-semibold text-primary'>{APP_NAME}</Text>
            </div>
            <div className='flex space-x-4'>
                <FaRegHeart className='text-primary cursor-pointer hover:text-primary-dark transition duration-300 ease-in-out' size={24} />
                <FaPlus className='text-primary cursor-pointer hover:text-primary-dark transition duration-300 ease-in-out' size={24} />
            </div>
        </div>
    );
}

export default TopHeader;
