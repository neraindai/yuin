import { useState } from "react";
import { FaHome, FaPhoneAlt } from "react-icons/fa";

// Import images
// import mainImage from "../../assets/images/venued1.png";
// import venued2 from "../../assets/images/venued2.jpg";
// import venued3 from "../../assets/images/venued3.jpg";
// import venued4 from "../../assets/images/venued4.jpg";
// import videoPreview from "../../assets/images/venued-video.png";
import Footer from "../../components/Footer/Footer";
import HeroMiniImage from "../../components/HeroMiniImage";
import CelestialGardenBanner from "../../assets/images/CelestialGardenBanner.png";
import Header from "../../components/Header/Header";
import VenueSectionTab from "../../components/tabs/VenueSectionTab";
import VenueShowcaseTab from "../../components/tabs/VenueShowcaseTab";
import BridalFairList from "../../components/tabs/BridalFairListTab";

export default function CelestialGardenHall() {
  const tabs = [
    {
      label: "トップ",
      content: (
        <div>
          <VenueShowcaseTab />
        </div>
      ),
    },
    {
      label: "写真",
      content: (
        <div>
          <VenueSectionTab />
        </div>
      ),
    },
    { label: "フェア", content: <div>
      <BridalFairList />
    </div> },
    { label: "料金・プラン", content: <p>料金とプランの詳細。</p> },
    { label: "クチコミ", content: <p>お客様のレビュー一覧。</p> },
    { label: "スタッフの声", content: <p>スタッフからのメッセージ。</p> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={CelestialGardenBanner} />

      <section>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-[#3a9d85]">
              セレスティアルガーデンホール
            </h1>
            <button className="bg-[#d0f2df] text-[#2a7a65] px-5 py-2 rounded-full text-sm">
              お気に入り登録
            </button>
          </div>

          {/* Nav Tabs */}
          <nav className="border-t border-b border-gray-200 py-3 flex justify-center text-sm text-gray-700">
            {tabs.map((tab, index) => (
              <div key={tab.label} className="flex items-center">
                <button
                  onClick={() => setActiveTab(tab.label)}
                  className={`cursor-pointer transition-colors ${
                    activeTab === tab.label
                      ? "text-[#3a9d85] font-medium border-b-2 border-[#3a9d85] pb-1"
                      : "hover:text-[#3a9d85]"
                  }`}
                >
                  {tab.label}
                </button>
                {index < tabs.length - 1 && (
                  <span className="mx-4 text-gray-300">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Tab Content */}
          <div className=" p-4">
            {tabs.find((t) => t.label === activeTab)?.content}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
