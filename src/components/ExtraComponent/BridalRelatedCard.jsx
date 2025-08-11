import React from 'react';

const BridalRelatedCard = ({title, image}) =>{
    return (
        <div className="flex [flex-flow:column] justify-center align-center">
            <img src={image} alt={title} className="rounded-[20px] h-[200px] w-full object-cover" />
            <a href="#" className="text-base text-black-text block text-center mt-3 font-bold">{title}</a>
        </div>
    );
}

export default BridalRelatedCard;