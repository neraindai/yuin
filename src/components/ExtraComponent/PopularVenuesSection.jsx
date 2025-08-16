import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import VenueCard from './VenueCard';
import { venue1, venue2, venue3, venue4 } from '../../assets';
import SectionHeader from './SectionHeader';

const venues = [
  {
    image: venue1,
    title: 'セレスティアルガーデンホール',
    description: 'セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...',
    link: '#',
  },
  {
    image: venue2,
    title: 'セレスティアルガーデンホール',
    description: 'セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...',
    link: '#',
  },
  {
    image: venue3,
    title: 'セレスティアルガーデンホール',
    description: 'セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...',
    link: '#',
  },
  {
    image: venue4,
    title: 'セレスティアルガーデンホール',
    description: 'セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...',
    link: '#',
  },
  {
    image: venue1,
    title: 'セレスティアルガーデンホール',
    description: 'セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...',
    link: '#',
  },
  {
    image: venue2,
    title: 'セレスティアルガーデンホール',
    description: 'セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...',
    link: '#',
  },
  {
    image: venue3,
    title: 'セレスティアルガーデンホール',
    description: 'セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...',
    link: '#',
  },
  {
    image: venue4,
    title: 'セレスティアルガーデンホール',
    description: 'セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...',
    link: '#',
  },
  
];

const PopularVenuesSection = () => {
  return (
    
    <section className=" text-center">
      <SectionHeader 
      sectionTitle="結婚式場一覧"
      shortDescription="特別な瞬間にふさわしい会場を簡単検索！人気の会場や最新トレンドも一挙紹介！"
      />
        <div className="container mx-auto ">
      <SectionHeader
      noborder
      sectionTitle="人気会場"
       />

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {venues.map((venue, index) => (
          <SwiperSlide key={index}>
            <VenueCard {...venue} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4">
        <button className="bg-green-100 hover:bg-green-200 font-semibold pl-12 pr-12 py-3 rounded-full transition shadow-md text-primary">
          もっと見る
        </button>
      </div>
      </div>
    </section>
  );
};

export default PopularVenuesSection;
