import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images from assets
import img1 from "../../assets/images/v1.jpg";
import img2 from "../../assets/images/v2.jpg";
import img3 from "../../assets/images/v3.jpg";
import img4 from "../../assets/images/v1.jpg";
import img5 from "../../assets/images/v2.jpg";
import img6 from "../../assets/images/v3.jpg";
import { nextArrow } from "../../assets";
import SectionHeader from "../ExtraComponent/SectionHeader";

// Example data for three sections
const sections = [
  {
    title: "セレモニ",    
    description:
      "自然光が降り注ぐ幻想的な空間で叶える、心に残る華麗な瞬間。まるで映画のワンシーンのような挙式のひとときをご覧ください。",
    images: [img1, img2, img3, img4, img5, img6, img2],
  },
  {
    title: "パーティー",
    description:
      "温もりあるデザインと開放感あふれる空間で、大切なゲストと過ごす笑顔あふれるひととき。華やかで心地よいパーティーシーンを写真で体感。",
    images: [img1, img2, img3, img4, img5, img6, img2],
  },
  {
    title: "ロケーション・施設",
    description:
      "緑豊かなガーデンや洗練された館内設備など、美しいロケーションをご紹介。非日常を感じる贅沢な空間をご覧ください。",
    images: [img1, img2, img3, img4, img5, img6, img2],
  },
];

export default function VenueSectionTab() {
  return (
    <div className="py-10">
      <SectionHeader sectionTitle="挙式会場" noborder />
      {sections.map((section, idx) => (
        <ImageGalleryBlock key={idx} {...section} />
      ))}
    </div>
  );
}

function ImageGalleryBlock({ title, description, images }) {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="mb-12">
        <SectionHeader sectionTitle={title} shortDescription={description} smallHeading colorBlack />
        <div className="relative customSliderButton">
          <button
            onClick={prevImage}
            className="prev absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full w-[50px]"
          >
            <img src={nextArrow} alt="arrow" />
          </button>

          <img
            src={images[current]}
            alt=""
            className="w-full h-96 object-cover rounded-lg shadow"
          />

          <button
            onClick={nextImage}
            className="next absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full w-[50px]"
          >
            <img src={nextArrow} alt="arrow" className="scale-x-[-1]" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-4 overflow-x-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setCurrent(index)}
              className={`w-[calc(100%_/_7_-_10px)] object-cover rounded-lg cursor-pointer border-2 ${
                current === index ? "border-green-700" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
