import fairImg1 from "../../assets/images/v1.jpg";
import fairImg2 from "../../assets/images/v2.jpg";
import fairImg3 from "../../assets/images/v3.jpg";
import Pagination from "../ExtraComponent/Pagination";

const events = [
  {
    date: "〜25年10月迄挙式",
    title: "〜お得な直前割〜",
    description:
      "会場のすべてをじっくり見学できるほか、店舗の新作ドレスを間近でチェック。さらに、専属パティシエによる絶品デザート試食をご用意。150万円相当の豪華特典がもらえるチャンスをお見逃しなく！",
    guests: "81人以上",
    tags: [
      "ゲスト人数特典割引プレゼント",
      "【ご来館特典】シェフ特製絶品スイーツ",
      "【ご成約特典】衣装2着無料",
      "ご成約特典 エンドロール",
      "1件目来館で】旅行券進呈",
      "【AM限定】最大¥xxx分プレゼント",
    ],
    image: fairImg1,
  },
  {
    date: "〜25年10月迄挙式",
    title: "〜お得な直前割〜",
    description:
      "会場のすべてをじっくり見学できるほか、店舗の新作ドレスを間近でチェック。さらに、専属パティシエによる絶品デザート試食をご用意。150万円相当の豪華特典がもらえるチャンスをお見逃しなく！",
    guests: "81人以上",
    tags: [
      "ゲスト人数特典割引プレゼント",
      "【ご来館特典】シェフ特製絶品スイーツ",
      "【ご成約特典】衣装2着無料",
      "ご成約特典 エンドロール",
      "1件目来館で】旅行券進呈",
      "【AM限定】最大¥xxx分プレゼント",
    ],
    image: fairImg2,
  },
  {
    date: "〜25年10月迄挙式",
    title: "〜お得な直前割〜",
    description:
      "会場のすべてをじっくり見学できるほか、店舗の新作ドレスを間近でチェック。さらに、専属パティシエによる絶品デザート試食をご用意。150万円相当の豪華特典がもらえるチャンスをお見逃しなく！",
    guests: "81人以上",
    tags: [
      "ゲスト人数特典割引プレゼント",
      "【ご来館特典】シェフ特製絶品スイーツ",
      "【ご成約特典】衣装2着無料",
      "ご成約特典 エンドロール",
      "1件目来館で】旅行券進呈",
      "【AM限定】最大¥xxx分プレゼント",
    ],
    image: fairImg3,
  },
];

export default function RecommendedBridalFairTab() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Heading */}
      <h1
        className="text-center text-2xl md:text-3xl font-semibold mb-10"
        style={{ color: "#01b29a" }}
      >
        週末開催のおすすめブライダルフェア
      </h1>

      {/* Event Cards */}
      {events.map((event, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row gap-6 mb-12 border-b pb-8"
        >
          {/* Image */}
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 md:h-full object-cover rounded-xl"
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 flex flex-col">
            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">
              【{event.date}】{event.title}
            </h3>
            {/* Description */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              {event.description}
            </p>
            {/* Guests */}
            <p className="font-semibold mb-4">
              主な人数帯:{" "}
              <span className="text-gray-700 pl-2 font-normal">
                {event.guests}
              </span>
            </p>
            {/* Tags */}{" "}
            <div className="flex mb-5">
              {" "}
              {/* First row of tags */}{" "}
              <div className="flex flex-wrap gap-2">
                {" "}
                {event.tags.slice(0, 3).map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-sm px-3 py-1 rounded-full bg-[#ccf5f0] text-[#01b29a]"
                  >
                    {" "}
                    {tag}{" "}
                  </span>
                ))}{" "}
              </div>{" "}
              {/* Second row of tags */}{" "}
              <div className="flex flex-wrap gap-2">
                {" "}
                {event.tags.slice(3).map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-sm px-3 py-1 rounded-full bg-[#ccf5f0] text-[#01b29a]"
                  >
                    {" "}
                    {tag}{" "}
                  </span>
                ))}{" "}
              </div>{" "}
            </div>
            {/* Button */}
            <button
              className="w-full sm:w-40 py-2 rounded-full font-medium text-white text-sm text-center"
              style={{ backgroundColor: "#01b29a" }}
            >
              見学予約する
            </button>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination />
      </div>

      {/* Big CTA */}
      <div className="text-center pt-10">
        <button
          className="w-full sm:w-auto font-semibold px-6 py-4 rounded-full shadow-md transition"
          style={{
            backgroundColor: "#aaf0e8",
            color: "#016f60",
          }}
        >
          費用負担のサービスを受けるための面談をする
          <p className="text-sm mt-2 font-normal">
            費用負担のサービスを受けたい方は直接話していただく必要があります
          </p>
        </button>
      </div>
    </div>
  );
}
