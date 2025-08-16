import fairImg1 from "../../assets/images/v1.jpg";
import fairImg2 from "../../assets/images/v2.jpg";
import fairImg3 from "../../assets/images/v3.jpg";
import Pagination from "../ExtraComponent/Pagination";

const events = [
  {
    date: "4月19日(日)",
    title: "【豪華150万特典】全館見学×新作ドレス紹介×デザート試食",
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
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Main Heading */}
      <h1
        className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-8"
        style={{ color: "#01b29a" }}
      >
        週末開催のおすすめブライダルフェア
      </h1>

      {events.map((event, idx) => (
        <div key={idx} className="mb-10">
          {/* Date */}
          <p className="font-semibold mb-3 text-sm sm:text-base">
            <span className="text-[#01b29a]">{event.date}</span>
            <span className="text-gray-900">のブライダルフェア詳細</span>
          </p>

          {/* Card */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 overflow-hidden">
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 md:w-60 md:h-80 object-cover rounded-2xl"
            />

            {/* Content */}
            <div className="p-4 md:p-5 flex flex-col justify-between md:w-2/3">
              {/* Title */}
              <h2 className="text-base sm:text-lg font-semibold mb-3">
                {event.title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {event.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#ccf5f0", color: "#01b29a" }}
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
                  className="font-medium px-4 sm:px-5 py-2 rounded-full transition w-full sm:w-auto"
                  style={{
                    backgroundColor: "#ccf5f0",
                    color: "#01b29a",
                  }}
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
          className="w-full sm:w-auto font-semibold px-6 py-4 rounded-full shadow-md transition"
          style={{
            backgroundColor: "#aaf0e8",
            color: "#016f60",
          }}
        >
          費用負担のサービスを受けるための面談をする
          <p className="text-xs sm:text-sm mt-2 font-normal">
            費用負担のサービスを受けたい方は直接話していただく必要があります
          </p>
        </button>
      </div>
    </div>
  );
}
