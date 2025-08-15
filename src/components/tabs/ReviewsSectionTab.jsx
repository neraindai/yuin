import img1 from "../../assets/images/p1.jpg";
import img2 from "../../assets/images/p2.jpg";
import img3 from "../../assets/images/p3.jpg";
import img4 from "../../assets/images/p4.jpg";
import Pagination from "../ExtraComponent/Pagination";
import quoteIcon from "../../assets/icons/quote.png"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "佐藤 健太",
      email: "testuser@email.com",
      title: "理想の会場に出会えました！",
      message:
        "このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、即日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！",
      img: img1,
    },
    {
      name: "佐藤 健太",
      email: "testuser@email.com",
      title: "理想の会場に出会えました！",
      message:
        "このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、即日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！",
      img: img2,
    },
    {
      name: "佐藤 健太",
      email: "testuser@email.com",
      title: "理想の会場に出会えました！",
      message:
        "このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、即日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！",
      img: img3,
    },
    {
      name: "佐藤 健太",
      email: "testuser@email.com",
      title: "理想の会場に出会えました！",
      message:
        "このサイトで簡単に理想の結婚式場を見つけることができました。写真やレビューがとても参考になり、即日で予約まで進めました。実際の会場も想像以上に素敵で、当日は本当に感動的な時間を過ごせました。これから結婚式を考えている方にぜひおすすめしたいサイトです！",
      img: img4,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Section Title */}
      <h2 className="text-center text-xl font-semibold text-[#01b29a] mb-8">
        クチコミ
      </h2>

      {/* Review Cards */}
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex gap-8 bg-light-bg rounded-lg shadow-md p-6 relative py-10"
          >
            {/* User Image */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-300 shadow-lg">
              <img
                src={review.img}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Review Content */}
            <div>
              <p className="font-semibold text-gray-800">{review.name}</p>
              <p className="text-sm text-gray-500">{review.email}</p>
              <p className="mt-2 font-bold">{review.title}</p>
              <p className="mt-2 text-gray-700 leading-relaxed text-sm">
                {review.message}
              </p>
            </div>

            {/* Quote Icon */}
            <div className="absolute -top-4 right-4 w-12 h-12 opacity-70">
              <img
                src={quoteIcon}
                alt="Quote Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination />

      {/* Big CTA */}
      <div className="text-center pt-8">
        <button
          className="font-semibold px-6 py-4 rounded-full shadow-md transition"
          style={{
            backgroundColor: "#aaf0e8",
            color: "#016f60",
          }}
        >
          費用負担のサービスを受けるための面談をする <br />
          <p className="text-sm mt-2">
            費用負担のサービスを受けたい方は直接話していただく必要があります
          </p>
        </button>
      </div>
    </div>
  );
}
