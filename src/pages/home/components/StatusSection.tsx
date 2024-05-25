// components/StatusSection.tsx
import React from 'react';
import { statusData } from "../utils/status";
import CustomSwiper from '../../../components/CustomSwiper';

const StatusSection: React.FC = () => {
    const slidesPerViewConfig = {
        default: 3,
        breakpoints: {
            1024: {
                slidesPerView: 8,
            },
            600: {
                slidesPerView: 5,
            },
            480: {
                slidesPerView: 3,
            },
        }
    };

    return (
        <CustomSwiper
            data={statusData}
            slidesPerViewConfig={slidesPerViewConfig}
            spaceBetween={2}
        />
    );
}

export default StatusSection;
