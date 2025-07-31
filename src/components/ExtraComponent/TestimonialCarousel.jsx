// src/components/TestimonialCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { venue1 } from '../../assets';


const testimonials = [
  {
    name: '佐藤 健太',
    image: venue1,
    message: '理想の出会いに出会えました！このサイトで素敵な相手を見つけることができ、真剣に交際を始めました。生活がより豊かに、幸せになりました。',
  },
  {
    name: '佐藤 健太',
    image: venue1,
    message: 'このサイトで素敵な相手を見つけることができ、真剣に交際を始めました。生活がより豊かに、幸せになりました。',
  },
  {
    name: '佐藤 健太',
    image: venue1,
    message: '真剣に交際を始めました。生活がより豊かに、幸せになりました。婚活を考えている方におすすめしたいサイトです！',
  },
  {
    name: '佐藤 健太',
    image: venue1,
    message: '婚活を考えている方におすすめしたいサイトです！真剣に交際を始めました。生活がより豊かに、幸せになりました。',
  },
  {
    name: '佐藤 健太',
    image: venue1,
    message: 'このサイトで素敵な相手を見つけることができました。生活がより豊かに、幸せになりました。',
  },
];

const TestimonialCard = ({ image, name, message }) => (
  <div className="bg-light-bg rounded-lg shadow p-9 flex flex-col items-center text-center h-full" style={{ boxShadow:'1px 4px 6px 0px rgba(0,0,0,0.2)'}}>
    <img src={image} alt={name} className="w-16 h-16 rounded-full mb-2" />
    <h3 className="font-semibold">{name}</h3>
    <p className="text-sm text-gray-600 mt-2">{message}</p>
  </div>
);

export default function TestimonialCarousel() {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-center heading text-3xl font-bold mb-5 mt-5 font-yumincho">利用者の声</h2>
        <p className="text-center relative mb-1 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:bg-[#D5E6DC] after:mt-[25px]">数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります</p>
      </div>

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
    </section>
  );
}
