import React from "react";
import Text from "../../../components/Text";
import CardLayout from "./CardLayout";
import { ICommonHeaderProps } from "../../../types/types";

const CommonHeader: React.FC<ICommonHeaderProps> = ({ children, image, primaryHeading, secondaryHeading, paragraph, type, additionBody }) => {
    return (
        <>
            <CardLayout>
                <div className='rounded-[28px] shadow-slate-500 bg-white shadow-lg flex flex-col md:flex-row mx-auto my-8 max-w-4xl overflow-hidden'>
                    <div className='md:w-1/2 w-full hidden sm:block'>
                        <img src={image} alt="Descriptive Alt Text" className='w-full h-full object-cover rounded-l-[28px]' />
                    </div>
                    <div className="p-5 md:w-1/2 w-full flex flex-col justify-center">
                        <div className="mb-4">
                            <Text className="text-4xl font-bold mb-5">{primaryHeading}</Text>
                            <Text className="text-lg font-semibold my-2">{secondaryHeading}</Text>
                            <Text className="text-sm">{paragraph}</Text>
                        </div>
                        {children}
                        {(type === "sign-in" || type === "sign-up") && additionBody}
                    </div>
                </div>
            </CardLayout>
        </>
    );
};

export default CommonHeader;
