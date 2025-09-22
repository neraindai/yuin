import fairImg1 from "../../assets/images/v1.jpg";
import fairImg2 from "../../assets/images/v2.jpg";
import fairImg3 from "../../assets/images/v3.jpg";
import Pagination from "../../components/ExtraComponent/Pagination";
import CelestialGardenBanner from "../../assets/images/CelestialGardenBanner.png";
import Header from "../../components/Header/Header";
import HeroMiniImage from "../../components/HeroMiniImage";
import VenueListBanner from "../../assets/images/VenueListBanner.png";
import VenueSearchBar from "../../components/SearchSection/VenueSearchBar";
import SectionHeader from "../../components/ExtraComponent/SectionHeader";
import SmallBadge from "../../components/ExtraComponent/SmallBadge";
import { Link } from "react-router-dom";
import SaveForLaterButton from "../../components/ExtraComponent/SaveForLatterButton";
import DecorativeDivider from "../../components/ExtraComponent/DecorativeDivider";
import BridalRealtedList from "../../components/ExtraComponent/BridalRelatedList";
import Footer from "../../components/Footer/Footer";


const pvenue = [
  {
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、季節ごとに表情を変える美しいガーデンと、自然光が差し込むガラス張りのチャペルが魅力の結婚式場です。おふたりの大切な一日を、まるで映画のワンシーンのように演出いたします。披露宴会場は最大10...",
    badge1: "ご成約で豪華特典プレゼント！キャンペーン開催中。",
    badge2: "50人",
    badge3: "教会式 / 人前式",
    image: fairImg1,
  },
  {
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、季節ごとに表情を変える美しいガーデンと、自然光が差し込むガラス張りのチャペルが魅力の結婚式場です。おふたりの大切な一日を、まるで映画のワンシーンのように演出いたします。披露宴会場は最大10...",
    badge1: "ご成約で豪華特典プレゼント！キャンペーン開催中。",
    badge2: "50人",
    badge3: "教会式 / 人前式",
    image: fairImg2,
  },
  {
    title: "セレスティアルガーデンホール",
    description:
      "セレスティアルガーデンホールは、季節ごとに表情を変える美しいガーデンと、自然光が差し込むガラス張りのチャペルが魅力の結婚式場です。おふたりの大切な一日を、まるで映画のワンシーンのように演出いたします。披露宴会場は最大10...",
    badge1: "ご成約で豪華特典プレゼント！キャンペーン開催中。",
    badge2: "50人",
    badge3: "教会式 / 人前式",
    image: fairImg3,
  },
];

export default function CostCoveredVenue() {
  return (
    <>
    {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <section className="mb-0">
      <HeroMiniImage image={VenueListBanner}>
        <VenueSearchBar />
      </HeroMiniImage>
      
      </section>
    <div className="container">
      {/* Main Heading */}
      <div className="mt-8">
        <SectionHeader sectionTitle="費用負担の受けられる会場" shortDescription="合計人気会場数：全38件" />
      </div>

      {pvenue.map((event, idx) => (
        <div key={idx} className="mb-10">
          {/* Date */}

          {/* Card */}
          <div className="grid grid-cols-[1fr] lg:grid-cols-[384px,_1fr] gap-3 lg:gap-6 overflow-hidden bg-[#F9F9F9] p-3 md:p-4 lg:p-8 rounded-[10px]">
            {/* Image */}
            <div className="relative h-[200px] lg:h-[100%]">
                <span className="absolute top-4 left-3 text-nm lg:text-base py-2 px-6 font-yugothic font-semibold rounded-full bg-[#FDE837] text-black">おすすめ</span>
              <img
                src={event.image}
                alt={event.title}
                className="w-[100%] h-[100%] object-cover rounded-[6px] lg:rounded-[10px]"
              />
            </div>

            {/* Content */}
            <div>
                <div className="relative">
                {/* fav badge */}
                <div className="absolute top-0 right-0">
                    <SaveForLaterButton />
                </div>
                {/* Title */}
                <h2 className="inline-block font-yugothic text-basemd md:text-baselg lg:text-md font-semibold mb-3 lg:mb-4 text-black border-b border-black">
                    {event.title}
                </h2>
                </div>

              {/* Description */}
              <div className="w-[100%] md:max-w-[88%]">
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {event.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3 lg:mb-4">
                    <SmallBadge title={event.badge1} />
                </div>
                <div className="flex flex-wrap gap-2 mb-3 lg:mb-4">
                    <SmallBadge title={event.badge2} />
                    <SmallBadge title={event.badge3} />
                </div>

                    {/* Button */}
                    <div className="w-full lg:w-[544px] grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-[10px] pb-[20px]">
                        <button
                        className="font-medium px-4 sm:px-5 py-2 rounded-full transition w-full sm:w-auto border border-[#4C8B6D] text-black shadow-md"
                        >
                        空き状況を確認する
                        </button>
                        <button
                        className="font-medium px-4 sm:px-5 py-2 rounded-full transition w-full sm:w-auto bg-[#BCF8D0] text-black shadow-md"
                        >
                        空き状況を確認する
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mb-8">
        <Pagination />
      </div>
      <DecorativeDivider />
      <div className="mt-[32px] md:mt-[48px] lg:mt-[60px]">
        <BridalRealtedList />
      </div>
    </div>
    <Footer />
    </>
  );
}
