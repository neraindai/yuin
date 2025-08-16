import { steps1, steps2, steps3, steps4, steps5 } from "../../assets";
import arrowDown from "../../assets/icons/ArrowVector.png";
import Header from "../../components/Header/Header";
import HeroMiniImage from "../../components/HeroMiniImage";
import BudgetBanner from "../../assets/images/BudgetBanner.png";
import Footer from "../../components/Footer/Footer";
import DecorativeDivider from "../../components/ExtraComponent/DecorativeDivider";

const steps = [
  {
    number: "01",
    title: "会場検索 & お気に入り登録",
    description: `まずは、結婚式を検討しているカップルが希望する条件（エリア、人数、雰囲気、予算など）をもとに、理想の会場を検索します。サイト上には多くの式場情報が掲載されており、写真やプラン、口コミなどを参考にしながら比較検討が可能です。
気になる会場が見つかった場合は「お気に入り登録」機能を活用し、あとで見返せるようにリスト化しておきます。この段階では、まだ登録や申し込みは不要なので、気軽に情報収集を始めることができます。`,
    img: steps1,
  },
  {
    number: "02",
    title: "新規登録(仮) → インタビュー日程調整",
    description: `お気に入りの会場が複数見つかり、具体的に検討を進めたい場合は、サービスに仮登録をしていただきます。仮登録では、基本的な情報（氏名・連絡先・結婚予定時期など）を入力するだけで、専門スタッフによるサポートが受けられるようになります。
仮登録後は、担当者とのインタビュー（カウンセリング）日程をオンラインで調整します。このインタビューでは、おふたりのご希望や状況、こだわりを詳しくヒアリングすることが目的です。`,
    img: steps2,
  },
  {
    number: "03",
    title: "面接後、本登録完了 → 費用負担サービスの正式申し込み",
    description: `インタビューを通じて、サービスの仕組みや費用負担制度（例：割引、キャッシュバックなど）について丁寧に説明が行われます。内容をご理解いただき、納得されたうえで「本登録」を行うと、正式に会員としてサポートがスタートします。
その後、費用負担サービスに申し込むことで、特典の対象となる条件（式場の決定方法や期間など）に基づいたサポートが受けられるようになります。このステップが、実際の会場選びに向けた本格的なスタート地点です。`,
    img: steps3,
  },
  {
    number: "04",
    title: "会場予約とのやりとり開始",
    description: `本登録・申し込みが完了した後は、いよいよ気になる会場とのやりとりが本格的に始まります。空き日程の確認や見学予約、フェアの参加手続きなどを、専任のスタッフがサポートしながらスムーズに進めていきます。
希望の会場が複数ある場合は、それぞれの比較やスケジュール調整などもサポートし、最終的な意思決定を後押しします。また、交渉や条件確認なども代行できるため、初めての会場探しでも安心して進められます。`,
    img: steps4,
  },
  {
    number: "05",
    title: "会場決定 → 費用負担",
    description: `いくつかの会場を見学・比較したうえで、最終的に「ここにしよう」と決定したタイミングで、費用負担サービスが適用されます。サービス内容に応じて、成約後にお祝い金やキャッシュバックが受け取れるほか、紹介特典なども提供されることがあります。
また、契約内容に関する確認や、式場とのやりとりの最終サポートも行われるため、安心して会場決定までを進めることができます。おふたりにとって大切な一日を安心して迎えるための、ラストステップです。`,
    img: steps5,
  },
];

export default function ServiceFlow() {
  return (
    <>
      {/* Header part*/}
      <Header />

      {/* Mini Hero Image */}
      <HeroMiniImage image={BudgetBanner} />

      <div className="bg-white py-12">
        {/* Title */}
        <h2 className="text-center text-green-700 text-2xl font-bold mb-12">
          サービスの流れ
        </h2>

        {/* Steps */}
        <div className="flex flex-col items-center gap-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col items-center w-full max-w-5xl"
            >
              {/* Step box with alternating layout */}
              <div
                className={`flex flex-col md:flex-row items-center gap-6 w-full ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-40 md:w-52">
                  <img
                    src={step.img}
                    alt={`Step ${step.number}`}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col md:flex-row gap-4 rounded-lg shadow-sm bg-gray-50 p-6 flex-1">
                  {/* Number */}
                  <div className="text-green-600 font-bold text-lg md:w-12">
                    {step.number}
                  </div>

                  {/* Title + Description */}
                  <div className="flex-1">
                    <h3 className="text-green-700 font-bold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <img
                  src={arrowDown}
                  alt="Arrow Down"
                  className="w-11 h-11 my-6"
                />
              )}
            </div>
          ))}
        </div>
      </div>

        <DecorativeDivider />

      {/* Footer part  */}
      <Footer />
    </>
  );
}
