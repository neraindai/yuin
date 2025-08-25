import React from 'react';
import { iconarrowgreen } from '../../assets';


const BrideGroomCard = ({ title, description, image, buttonText }) => {
  return (
   
    <div className="flex flex-col border border-gray-300 rounded shadow-sm ">
        {/* Card */}
        <div className="flex flex-row sm:grid-cols-1 md:flex-row gap-4 p-5">
            
            <div className="w-[calc(100%-187px)]">
                <h2 className="heading text-md md:text-lg lg:text-xl">{title}</h2>
                <p className="paragraph text-smd md:text-nm lg:text-base">{description}</p>
            </div>

            
            <div className="flex-shrink-0 w-[187px]">
            <img src={image} alt={title} className="w-full max-h-[120px] object-contain" />
            </div>
        </div>
        <div className="bg-green-200 px-4 py-3 flex justify-center items-center text-base md:text-basemd lg:text-baselg">
            <span className="text-green-700 font-semibold text-decoration-underline">{buttonText}</span>
            <span className="text-green-700 text-lg"><img src={iconarrowgreen} className="w-[11px] h-[20px] ml-8" /></span>
        </div>
    </div>

  );
};

export default BrideGroomCard;
