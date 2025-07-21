import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import VenueCard from './VenueCard';
import { venue1, venue2, venue3, venue4 } from '../../assets';

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
];

const PopularVenuesSection = () => {
  return (
    <section className="px-4 py-12 text-center">
        <div className="container mx-auto px-4 py-3">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">人気会場</h2>

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

      <div className="mt-8">
        <button className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold px-6 py-3 rounded-full transition">
          もっと見る
        </button>
      </div>
      </div>
    </section>
  );
};

export default PopularVenuesSection;
