import React from 'react';
import BrideGroomCard from './BrideGroomCard';
import { bridegroom1, bridegroom2 } from '../../assets';
import SectionHeader from './SectionHeader';
import DecorativeDivider from './DecorativeDivider';

const BrideGroomCardList = () => {
  return (
    
    <section className="">
      <div className="container mx-auto">
          <SectionHeader sectionTitle="利用者の声" 
          shortDescription="数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります"
          />

        <div className="grid grid-cols-[1fr] xl:grid-cols-[repeat(2,_1fr)] gap-[24px] w-full xl:w-[980px] mx-auto">
          <BrideGroomCard
            title="新郎新婦"
            description="結婚式場のご予約やご相談に関するお問い合わせは、こちらより承っております"
            image={bridegroom1}
            buttonText="新郎新婦 様"
          />
          <BrideGroomCard
            title="結婚式場"
            description="弊社サービスへのご掲載やご提携に関するお問い合わせは、こちらよりご連絡ください"
            image={bridegroom2}
            buttonText="結婚式場 様"
          />
        </div>
      </div>
      <DecorativeDivider />
    </section>
  );
};

export default BrideGroomCardList;
