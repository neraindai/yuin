// src/components/TestimonialCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { venue1, venue2, venue3, iconquote } from '../../assets';
import DecorativeDivider from './DecorativeDivider';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: '佐藤 健太',
    email: 'testuser@tai.com',
    title: '理想の会場に出会えました！',
    image: venue1,
    message: 'このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、数日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！',
  },
  {
    name: '佐藤 健太',
    email: 'testuser@tai.com',
    title: '理想の会場に出会えました！',
    image: venue2,
    message: 'このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、数日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！',
  },
  {
    name: '佐藤 健太',
    email: 'testuser@tai.com',
    title: '理想の会場に出会えました！',
    image: venue3,
    message: 'このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、数日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！',
  },
  {
    name: '佐藤 健太',
    email: 'testuser@tai.com',
    title: '理想の会場に出会えました！',
    image: venue3,
    message: 'このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、数日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！',
  },
  {
    name: '佐藤 健太',
    email: 'testuser@tai.com',
    title: '理想の会場に出会えました！',
    image: venue1,
    message: 'このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、数日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！',
  },
];

const TestimonialCard = ({ image, name, email, title, message }) => (
  <div className="bg-light-bg rounded-lg shadow p-9 flex flex-col items-center text-center h-full" style={{ boxShadow:'1px 4px 6px 0px rgba(0,0,0,0.2)'}}>
    <img src={iconquote} className="absolute right-[40px] top-[-10px]" />
    <img src={image} alt={name} className="w-[82px] h-[82px] border-[2px] border-[#B2D6BC] mt-[-70px] mb-[20px] rounded-full" />
    <h3 className="text-semmd font-bold text-black-text mt-0 font-yugothic">{name}</h3>
    <span className="text-nm font-md text-black mt-2 mb-2 opacity-0.5">{email}</span>
    <strong className="text-md font-md text-black mb-2">{title}</strong>
    <p className="paragraph">{message}</p>
  </div>
);

export default function TestimonialCarousel() {
  return (
    <section className="py-10">
    <SectionHeader sectionTitle="利用者の声" shortDescription="数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります" />

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="p-9"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      <DecorativeDivider/>
    </section>
    
  );
}
