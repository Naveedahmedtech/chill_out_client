import React from 'react';
import { useLocation } from 'react-router-dom';
import { APP_NAME } from '../../../../utils/BASE_URL';
import Text from '../../../../components/Text';
import IconLink from './IconLink';
import { FaPlus } from 'react-icons/fa'; // Example icon for the "More" link
import { links } from '../utils/navLinks';

const LeftSidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between h-screen p-4 space-y-4">
      <div>
        <Text className='title-font text-6xl lg:text-5xl font-normal mb-10 hidden lg:block'>{APP_NAME}</Text>
        <Text className='title-font text-6xl font-normal mb-10 block lg:hidden'>{APP_NAME[0]}</Text>
        <div className="flex flex-col flex-grow">
          {links.map((link, index) => (
            <IconLink
              key={index}
              url={link.url}
              Icon={link.Icon}
              text={link.text}
              className={link.className}
              isActive={location.pathname === link.url}
            />
          ))}
        </div>
      </div>
      <IconLink
        url="/more"
        Icon={FaPlus}
        text="More"
        className="text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all"
        isActive={location.pathname === "/more"}
      />
    </div>
  );
}

export default LeftSidebar;
