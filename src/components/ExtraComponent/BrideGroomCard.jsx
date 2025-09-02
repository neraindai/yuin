import React from 'react';
import { iconarrowgreen } from '../../assets';


const BrideGroomCard = ({ title, description, image, buttonText }) => {
  return (
   
    <div className="flex flex-col border border-gray-300 rounded shadow-sm">
        {/* Card */}
        <div className="flex flex-col lg:flex-row justify-center align-middle items-center gap-4 py-6 px-10">
            
            <div className="w-full lg:w-[calc(100%-250px)] xl:w-[calc(100%-230px)]">
                <h2 className="font-yugothicui font-bold heading text-md md:text-lg lg:text-xl mb-2 lg:mb-4">{title}</h2>
                <p className="font-yugothicui font-regular paragraph text-smd md:text-nm lg:text-base text-grey">{description}</p>
            </div>

            
            <div className="flex-shrink-0 w-full lg:w-[250px] xl:w-[230px]">
            <img src={image} alt={title} className="w-full h-auto object-contain" />
            </div>
        </div>
        <div className="bg-green-200 px-4 py-3 flex justify-center items-center text-base md:text-basemd lg:text-baselg">
            <span className="text-green-700 font-semibold underline underline-offset-4 decoration-1">{buttonText}</span>
            <span className="text-green-700 text-lg"><img src={iconarrowgreen} className="w-[11px] h-[20px] ml-8" /></span>
        </div>
    </div>

  );
};

export default BrideGroomCard;
