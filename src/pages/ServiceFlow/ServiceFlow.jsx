import { FaArrowDown } from "react-icons/fa";
import { steps1, steps2, steps3, steps4, steps5 } from "../../assets";

const steps = [
  {
    number: "01",
    title: "会場検索 & お気に入り登録",
    description: `まずは、結婚式を検討しているカップルが希望する条件（エリア、人数、雰囲気、予算など）をもとに、理想の会場を検索します。サイトには多くの会場情報が掲載されており、写真やプラン、口コミなどを参考に会場を比較検討が可能です。`,
    img: steps1,
  },
  {
    number: "02",
    title: "新規登録(仮) → インタビュー日程調整",
    description: `お気に入りの会場を見つけ、具体的に検討が進められる場合、サービスに仮登録していただきます。`,
    img: steps2,
  },
  {
    number: "03",
    title: "面接後、本登録完了 → 費用負担サービスの正式申し込み",
    description: `インタビューを終えた後、その場で会場や費用負担の詳細を確認します。`,
    img: steps3,
  },
  {
    number: "04",
    title: "会場予約とのやりとり開始",
    description: `本登録・申し込み完了した後、いよいよ会場とのやりとりが本格的に始まります。`,
    img: steps4,
  },
  {
    number: "05",
    title: "会場決定 → 費用負担",
    description: `いつ会場を最終決定し、費用負担サービスの申請を行うか決定します。`,
    img: steps5,
  },
];

export default function ServiceFlow() {
  return (
    <div className="bg-white py-12">
      <h2 className="text-center text-2xl font-bold text-green-700 mb-12">
        サービスの流れ
      </h2>

      <div className="flex flex-col items-center gap-12">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col items-center w-full max-w-5xl"
          >
            {/* Step container */}
            <div
              className={`flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-6 border border-gray-200 rounded-lg shadow-md w-full ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-48 md:w-56">
                <img
                  src={step.img}
                  alt={`Step ${step.number}`}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-100 px-3 py-1 rounded-md text-green-700 font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-green-700 font-bold text-lg">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <FaArrowDown className="text-green-500 text-2xl my-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
