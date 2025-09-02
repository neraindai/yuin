import img1 from "../../assets/images/p1.jpg";
import img2 from "../../assets/images/p2.jpg";
import img3 from "../../assets/images/p3.jpg";
import img4 from "../../assets/images/p4.jpg";
import Pagination from "../ExtraComponent/Pagination";
import quoteIcon from "../../assets/icons/quote.png";

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
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-primary-text">
        クチコミ
      </h2>

      {/* Review Cards */}
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-start gap-6 bg-light-bg rounded-lg shadow-md p-6 relative"
          >
            {/* User Image */}
            <div className="mx-auto sm:mx-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#B2D6BC] shadow-lg">
              <img
                src={review.img}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Review Content */}
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-800">{review.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{review.email}</p>
              <p className="mt-2 font-bold text-sm sm:text-base">
                {review.title}
              </p>
              <p className="mt-2 text-gray-700 leading-relaxed text-sm sm:text-base">
                {review.message}
              </p>
            </div>

            {/* Quote Icon */}
            <div className="hidden sm:block absolute md:top-[35px] lg:top-[-42px] right-4 w-10 sm:w-12 h-10 sm:h-12 opacity-70">
              <img
                src={quoteIcon}
                alt="Quote Icon"
                className="object-cover block w-[91px] lg:w-[101px] h-[77px] lg:h-[87px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <Pagination />
      </div>

      {/* Big CTA */}
      <div className="text-center pt-8">
        <button
          className="font-medium px-4 sm:px-5 py-2 rounded-full transition w-full sm:w-auto bg-[#BCF8D0] text-black shadow-md"
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
