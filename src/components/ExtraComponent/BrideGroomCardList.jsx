import React from 'react';
import BrideGroomCard from './BrideGroomCard';
import { bridegroom1, bridegroom2 } from '../../assets';
import SectionHeader from './SectionHeader';

const BrideGroomCardList = () => {
  return (
    
    <section className="container mx-automb-8">
      <SectionHeader sectionTitle="利用者の声" 
      shortDescription="数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります"
      />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
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
