import fairImg1 from "../../assets/images/v1.jpg";
import fairImg2 from "../../assets/images/v2.jpg";
import fairImg3 from "../../assets/images/v3.jpg";
import Pagination from "../ExtraComponent/Pagination";

const events = [
  {
    date: "4月19日(日)",
    title: "[豪華150万特典]全館見学×新作ドレス紹介×デザート試食",
    tags: ["見学", "試食あり", "相談会", "会場コーディネート"],
    description:
      "会場のすべてをじっくり見学できるほか、店舗の新作ドレスを間近でチェック。さらに、150万円相当の豪華特典がもらえるチャンスをお見逃しなく！",
    times: ["13:30〜16:30", "17:30〜20:30"],
    image: fairImg1,
  },
  {
    date: "4月20日(月)",
    title: "【試食×相談】結婚式のすべてがわかる体験フェア",
    tags: ["見学", "試食あり", "相談会"],
    description:
      "結婚式の流れや費用感を知れる絶好の機会。人気シェフの特製料理も試食できます。",
    times: ["11:00〜14:00", "15:00〜18:00"],
    image: fairImg2,
  },
  {
    date: "4月21日(火)",
    title: "【少人数向け】アットホームな結婚式相談会",
    tags: ["相談会", "会場コーディネート"],
    description:
      "ご家族やご友人だけの温かい結婚式をお考えの方向けの相談会。小規模会場を見学できます。",
    times: ["10:00〜12:00", "14:00〜16:00"],
    image: fairImg3,
  },
];

export default function BridalFairList() {
  return (
    <div className="max-w-6xl mx-auto py-6">
      {/* Main Heading */}
      <h1
        className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-primary-text"
      >
        週末開催のおすすめブライダルフェア
      </h1>

      {events.map((event, idx) => (
        <div key={idx} className="mb-10">
          {/* Date */}
          <p className="font-semibold mb-3 text-sm sm:text-base">
            <span className="text-primary-text font-yugothic font-bold text-xlg">{event.date}</span>
            <span className="text-gray-900 font-yugothic font-regular text-base">のブライダルフェア詳細</span>
          </p>

          {/* Card */}
          <div className="grid grid-cols-[1fr] lg:grid-cols-[384px,_1fr] gap-3 lg:gap-6 overflow-hidden">
            {/* Image */}
            <div className="h-[200px] lg:h-[100%]">
              <img
                src={event.image}
                alt={event.title}
                className="w-[100%] h-[100%] object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between">
              {/* Title */}
              <h2 className="font-yugothic text-basemd md:text-baselg lg:text-md font-semibold mb-3 text-black">
                {event.title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {event.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs lg:text-sm px-3 py-1 px-5 rounded-full bg-[#E0F4E8] text-[#000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                {event.description}
              </p>

              {/* Time + Button */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mt-4 bg-gray-50 p-4 sm:p-6 rounded-xl">
                {/* Time Info */}
                <div>
                  <p className="font-semibold">開催時間</p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {event.times.join(" / ")}
                    <br />
                    <span className="text-xs sm:text-sm text-gray-500">
                      (所要時間：約3時間程度)
                    </span>
                  </p>
                </div>

                {/* Button */}
                <button
                  className="font-medium px-4 sm:px-5 py-2 rounded-full transition w-full sm:w-auto bg-[#BCF8D0] text-black shadow-md"
                >
                  フェアについてのメッセージ
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mb-8">
        <Pagination />
      </div>

      {/* Big CTA */}
      <div className="text-center pt-8">
        <button
          className="w-full sm:w-auto font-yugothic font-bold text-base lg:text-baselg px-8 lg:px-10 py-10 lg:py-4 rounded-full shadow-md transition bg-[#BCF8D0] text-primary-text"
        >
          費用負担のサービスを受けるための面談をする
          <p className="text-sm mt-2 font-yugothic font-normal text-primary-text">
            費用負担のサービスを受けたい方は直接話していただく必要があります
          </p>
        </button>
      </div>
    </div>
  );
}
