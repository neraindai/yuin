import React from 'react';
import BridalRelatedCard from './BridalRelatedCard';
import { bridal1, bridal2, bridal3, bridal4 } from '../../assets';
import SectionHeader from './SectionHeader';

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
            <SectionHeader 
            sectionTitle="利用者の声"
            shortDescription="数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります"
            />
            
                <div className='grid grid-cols-[1fr] md:grid-cols-[repeat(4,_1fr)] gap-[15px] md:gap-[20px]'>
             {bridalArticle.map((article, index) => (
                    <BridalRelatedCard key={index} {...article} />
                  
            ))}
              </div>
        </section>
    );
}

export default BridalRealtedList;