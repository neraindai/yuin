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
    { label: "トップ",  content: <VenueShowcaseTab /> },
    { label: "写真", content: <VenueSectionTab /> },
    { label: "フェア", content: <BridalFairList /> },
    { label: "料金・プラン", content: <RecommendedBridalFairTab /> },
    { label: "クチコミ", content: <ReviewsSection /> },
    {
      label: "スタッフの声",
      content: (
        <div>
          <h1
            className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-primary-text"
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
      <section className="mb-0">
      <HeroMiniImage image={CelestialGardenBanner} />
      </section>

        <div className="max-w-6xl mx-auto py-6 sm:py-8">
          {/* Title + Button */}
          {/* Header */}
          <section className="">
            <div className="flex flex-col lg:flex-row  gap-3 justify-between items-center mb-4">
              <h1 className="font-yugothic text-center lg:text-left heading text-xlg md:text-lg lg:text-xl font-bold mt-0">
                セレスティアルガーデンホール
              </h1>
              <button className="bg-[#d0f2df] text-[#2a7a65] px-5 py-2 rounded-full text-sm">
                お気に入り登録
              </button>
            </div>

            {/* Nav Tabs */}
            <nav className="border-t border-gray-100 pt-2 lg:pt-10 grid grid-cols-[repeat(3,_1fr)] lg:grid-cols-[repeat(6,_1fr)] justify-start gap-y-5 gap-x-4 items-center text-sm sm:text-base text-gray-700">
              {tabs.map((tab, index) => (
                <div key={tab.label} className="relative w-full after:content-[''] after:absolute after:right-0 after:top-[8px] after:w-[1px] after:h-[22px] after:bg-[#090] after:[&:nth-child(3)]:w-0 lg:after:[&:nth-child(3)]:w-[1px] after:last:w-0 lg:after:last:w-[1px]">
                  <button
                    onClick={() => setActiveTab(tab.label)}
                    className={`custom-tab px-2 sm:px-3 cursor-pointer transition-colors w-full py-2 border-0 ${
                      activeTab === tab.label
                        ? "text-[#4C8B6D] font-medium border-b-0"
                        : "hover:text-[#4C8B6D]"
                    }`}
                  >
                    {tab.label}
                  </button>
                </div>
              ))}
            </nav>
            </section>
          {/* Tab Content */}
          <div className="tab_footer">
            {tabs.find((t) => t.label === activeTab)?.content}
          </div>
        </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
