import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaPhoneAlt,
} from "react-icons/fa";

// Import images
import mainImage from "../../assets/images/venued1.png";
import venued2 from "../../assets/images/venued2.jpg";
import venued3 from "../../assets/images/venued3.jpg";
import venued4 from "../../assets/images/venued4.jpg";
import videoPreview from "../../assets/images/venued-video.png";

import GradenSomePage from "../../pages/CelestialGardenHall/GradenSomePage";
import Footer from "../../components/Footer/Footer";
import SectionHeader from "../ExtraComponent/SectionHeader";

export default function VenueShowcaseTab() {
  const images = [
    { src: mainImage, alt: "メイン会場" },
    { src: venued2, alt: "ガーデンビュー" },
    { src: venued3, alt: "室内装飾" },
    { src: venued4, alt: "セレモニースペース" },
  ];

  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-left heading text-2xl md:text-2xl lg:text-3xl font-bold mt-0 font-yumincho">
              セレスティアルガーデンホール
            </h1>
            <button className="bg-[#d0f2df] text-[#2a7a65] px-5 py-2 rounded-full text-sm">
              お気に入り登録
            </button>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mt-6 items-stretch">
            {/* Left Carousel */}
            <div className="flex flex-col h-full">
              {/* Main Image with Arrows */}
              <div className="relative">
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
                >
                  <FaChevronLeft className="text-green-800" />
                </button>

                <img
                  src={images[current].src}
                  alt={images[current].alt}
                  className="rounded-lg object-cover w-full h-72 shadow"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
                >
                  <FaChevronRight className="text-green-800" />
                </button>
              </div>

              {/* Thumbnails (click to change main image) */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {images.slice(1).map((img, idx) => {
                  const actualIndex = idx + 1; // skip mainImage
                  return (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      onClick={() => setCurrent(actualIndex)}
                      className={`rounded-lg object-cover w-full h-24 cursor-pointer border-2 ${
                        current === actualIndex
                          ? "border-green-700"
                          : "border-transparent"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Button */}
              <button className="w-full mt-3 bg-[#baf5d1] hover:bg-[#a1e6be] text-[#2a7a65] py-2 rounded-full text-sm font-medium">
                もっと見る
              </button>
            </div>

            {/* Right Text */}
            <div className="flex flex-col h-full">
              {/* Title */}
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#3a9d85] mb-3">
                セレスティアルガーデンホール
              </h2>

              {/* Content */}
              <div className="content border-t border-b border-black py-4 flex-1 flex flex-col justify-center">
                <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                  セレスティアルガーデンホールは、まるで空と自然が織りなす神秘の舞台。
                  緑に包まれた庭園と優雅なホールが調和し、昼は陽光にきらめき、
                  夜は星空に抱かれる幻想的な空間です。
                </p>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                  クラシックとモダンが融合したデザインは、特別な一日をより一層華やかに彩ります。
                  まるで天上の楽園にいるかのような、非日常を感じられる極上のロケーションです。
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-[24px_70px_1fr] gap-x-3 items-start">
                  <FaHome className="text-[#3a9d85] mt-1 text-base w-6" />
                  <span className="text-xs sm:text-sm md:text-base text-[#3a9d85] font-semibold">
                    住所：
                  </span>
                  <div>
                    <div className="text-xs sm:text-sm md:text-base text-black">
                      東京駅
                    </div>
                    <p className="text-xs sm:text-sm md:text-base mt-1 leading-relaxed">
                      東京メトロ新宿三丁目駅C5出口より徒歩2分、JR渋谷駅から新宿三丁目駅まで電車で12分、
                      JR池袋駅から新宿三丁目駅まで電車で10分
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[24px_70px_1fr] gap-x-3 items-start">
                  <FaPhoneAlt className="text-[#3a9d85] mt-1 text-base w-6" />
                  <span className="text-xs sm:text-sm md:text-base text-[#3a9d85] font-semibold">
                    連絡先：
                  </span>
                  <div>
                    <div className="text-xs sm:text-sm md:text-base text-black">
                      1234-456-789
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-black">
                      www.xxxxx.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 flex justify-center">
            <div className="w-16 border-t border-gray-300"></div>
          </div>

          {/* Video Section */}
          <div className="text-center">
            {/* <h2 className="text-lg font-semibold mb-4">
              セレスティアルガーデンホール
            </h2> */}

            <SectionHeader
              sectionTitle="セレスティアルガーデンホール"
              noborder
            />
            <div className="relative w-full max-w-5xl mx-auto">
              <img
                src={videoPreview}
                alt="ウエディングホール"
                className="rounded-lg object-cover w-full"
              />
              <button
                className="absolute inset-0 flex items-center justify-center"
                aria-label="動画を再生"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-[#3a9d85]"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.79 5.093a.5.5 0 0 1 .812.39v5.034a.5.5 0 0 1-.812.39L4.386 8.528a.5.5 0 0 1 0-.782l2.404-2.653z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="my-8 flex justify-center">
            <div className="w-16 border-t border-gray-300"></div>
          </div>

          {/* Garden Hall */}
          <div className="garden-hall">
            <GradenSomePage />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
