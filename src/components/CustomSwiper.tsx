import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface CustomSwiperProps {
    data: Array<{ id: number; image: string; name: string }>;
    slidesPerViewConfig: {
        default: number;
        breakpoints: {
            [key: number]: {
                slidesPerView: number;
            };
        };
    };
    spaceBetween: number;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ data, slidesPerViewConfig, spaceBetween }) => {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerViewConfig.default}
            breakpoints={slidesPerViewConfig.breakpoints}
        >
            {data.map(item => (
                <SwiperSlide key={item.id} className='flex justify-center items-center w-full m-0' style={{ width: "60px", marginRight: "0"}}>
                    <div className='h-20 w-20 overflow-hidden rounded-full border-2 border-primary cursor-pointer'>
                        <img src={item.image} alt={item.name} className='h-full w-full object-cover rounded-full' />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CustomSwiper;
