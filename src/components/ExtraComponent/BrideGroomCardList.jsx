import React from 'react';
import BrideGroomCard from './BrideGroomCard';
import { bridegroom1, bridegroom2 } from '../../assets';

const BrideGroomCardList = () => {
  return (
    
    <section className="container mx-automb-8">
      <div className="flex flex-col mb-10">
        <h2 className="text-center heading text-3xl font-bold mb-5 mt-0 font-yumincho">利用者の声</h2>
        <p className="text-center relative mb-1 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:bg-[#D5E6DC] after:mt-[25px]">数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります</p>
      </div>

    <div className="grid grid-cols-2 gap-[10px]">
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
    </section>
  );
};

export default BrideGroomCardList;
