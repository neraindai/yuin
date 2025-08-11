import React from 'react';
import BridalRelatedCard from './BridalRelatedCard';
import { bridal1, bridal2, bridal3, bridal4 } from '../../assets';

const bridalArticle = [
    {
        image: bridal1,
        title: "カテゴリー１",
    },
    {
        image: bridal2,
        title: "カテゴリー２",
    },
    {
        image: bridal3,
        title: "カテゴリー3",
    },
    {
        image: bridal4,
        title: "カテゴリー4",
    },
];
const BridalRealtedList = () =>{
    return(
        <section className="container mx-automb-8">
            <div className="flex flex-col mb-10">
                <h2 className="text-center heading text-3xl font-bold mb-5 mt-0 font-yumincho">利用者の声</h2>
                <p className="text-center relative mb-1 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:bg-[#D5E6DC] after:mt-[25px]">数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります</p>
            </div>
            
                <div className='grid grid-cols-[1fr] md:grid-cols-[repeat(4,_1fr)] gap-[15px] md:gap-[20px]'>
             {bridalArticle.map((article, index) => (
                    <BridalRelatedCard key={index} {...article} />
                  
            ))}
              </div>
        </section>
    );
}

export default BridalRealtedList;