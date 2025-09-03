import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import VenueCard from "./VenueCard";
import { venue1, venue2, venue3, venue4 } from "../../assets";
import SectionHeader from "./SectionHeader";

const venues = [
  {
    image: venue1,
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...",
    link: "#",
  },
  {
    image: venue2,
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...",
    link: "#",
  },
  {
    image: venue3,
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...",
    link: "#",
  },
  {
    image: venue4,
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...",
    link: "#",
  },
  {
    image: venue1,
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...",
    link: "#",
  },
  {
    image: venue2,
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...",
    link: "#",
  },
  {
    image: venue3,
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...",
    link: "#",
  },
  {
    image: venue4,
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、緑豊かなガーデン付きの開放的なイベント会場...",
    link: "#",
  },
];

const PopularVenuesSection = () => {
  return (
    <section className="text-center venueslider">
      <div className="container mx-auto">
      <div className="px-[0px] md:px-[15px] lg:px-0 py-3 customSliderParents">
        <SectionHeader sectionTitle="キャンペーン中の会場" noborder />

        {/* <h2 className="text-2xl md:text-3xl font-bold mb-8 heading"></h2> */}

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          // autoplay={{ delay: 99000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pt-0 pb-4 lg:pb-10"
        >
          {venues.map((venue, index) => (
            <SwiperSlide key={index}>
              <VenueCard {...venue} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-[28px] md:mt-[36px] lg:mt-[54px]">
          <button
            className="
    bg-bgBtn text-primary-text hover:bg-green-200 font-semibold px-12 py-3 rounded-full transition shadow-md text-primary text-base md:text-basemd lg:text-baselg"
          >
            もっと見る
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PopularVenuesSection;
