import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeroMiniImage from "../../components/HeroMiniImage";
import CelestialGardenBanner from "../../assets/images/CelestialGardenBanner.png";
import Header from "../../components/Header/Header";
import VenueSectionTab from "../../components/tabs/VenueSectionTab";
import VenueShowcaseTab from "../../components/tabs/VenueShowcaseTab";
import BridalFairList from "../../components/tabs/BridalFairListTab";
import RecommendedBridalFairTab from "../../components/tabs/RecommendedBridalFairTab";
import ReviewsSection from "../../components/tabs/ReviewsSectionTab";
import InfoSectionComponents from "../budget-wedding/InfoSectionComponents";

export default function CelestialGardenHall() {
  const tabs = [
    { label: "トップ", content: <VenueShowcaseTab /> },
    { label: "写真", content: <VenueSectionTab /> },
    { label: "フェア", content: <BridalFairList /> },
    { label: "料金・プラン", content: <RecommendedBridalFairTab /> },
    { label: "クチコミ", content: <ReviewsSection /> },
    {
      label: "スタッフの声",
      content: (
        <div>
          <h1
            className="text-center text-lg sm:text-xl md:text-2xl font-semibold my-6 sm:my-8"
            style={{ color: "#01b29a" }}
          >
            スタッフの声
          </h1>
          <InfoSectionComponents />
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={CelestialGardenBanner} />

      <section>
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          {/* Title + Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
            <h1 className="text-center heading text-2xl md:text-2xl lg:text-3xl font-bold mt-0 font-yumincho">
              セレスティアルガーデンホール
            </h1>
            <button className="bg-[#d0f2df] text-[#2a7a65] px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap">
              お気に入り登録
            </button>
          </div>

          {/* Nav Tabs */}
          <nav className="border-t border-b border-gray-200 py-2 sm:py-3 flex justify-start sm:justify-center overflow-x-auto scrollbar-hide text-sm sm:text-base text-gray-700">
            {tabs.map((tab, index) => (
              <div key={tab.label} className="flex items-center flex-shrink-0">
                <button
                  onClick={() => setActiveTab(tab.label)}
                  className={`px-2 sm:px-3 cursor-pointer transition-colors ${
                    activeTab === tab.label
                      ? "text-[#4C8B6D] font-medium border-b-2 border-[#4C8B6D] pb-1"
                      : "hover:text-[#4C8B6D]"
                  }`}
                >
                  {tab.label}
                </button>
                {index < tabs.length - 1 && (
                  <span className="mx-2 sm:mx-4 text-gray-300">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Tab Content */}
          <div className="p-2 sm:p-4">
            {tabs.find((t) => t.label === activeTab)?.content}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
