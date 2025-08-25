import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Tabs from "./Tabs";
import Accordion from "./Accordion";
import SectionHeader from "./SectionHeader";

const tabLabels = ["新郎新婦", "結婚式場", "広告会社"];

const content = [
  [
    // 新郎新婦
    {
      question: "予約のキャンセルはいつまで可能ですか？",
      answer:
        "ご予約のキャンセルは、原則としてご利用日の7日前まで承っております。それ以降のキャンセルはキャンセル料が発生する場合がございますのでご了承ください。",
    },
    {
      question: "見学後にその場で予約を決める必要がありますか？",
      answer:
        "いいえ。見学後すぐにご予約いただく必要はございません。ご自宅でご検討いただいた後に改めてご連絡いただけます。",
    },
    {
      question: "土日や祝日も見学できますか？",
      answer:
        "はい、土日・祝日も見学可能です。ただし人気の時間帯は混み合いますので、早めのご予約をおすすめいたします。",
    },
    {
      question: "会場の空き状況は確認できますか？",
      answer:
        "はい、スタッフにお問い合わせいただければ最新の空き状況をご案内いたします。",
    },
    {
      question: "料金プランや見積もりは事前にもらえますか？",
      answer:
        "はい。ご希望に合わせた料金プランやお見積もりを事前にお渡しすることが可能です。",
    },
  ],
  [
    // 結婚式場
    {
      question: "式場として登録するにはどうすれば良いですか？",
      answer:
        "専用の申請フォームからお申し込みいただくか、担当スタッフまでご連絡ください。審査後に掲載手続きを進めさせていただきます。",
    },
    {
      question: "料金はどのようになりますか？",
      answer:
        "料金はプラン内容や掲載期間によって異なります。詳しいご案内はお問い合わせいただいた後にお見積もりをお渡しいたします。",
    },
  ],
  [
    // 広告会社
    {
      question: "広告掲載の流れを教えてください。",
      answer:
        "まずは掲載内容のヒアリングを行い、プランをご提案いたします。その後、契約・制作・掲載という流れになります。",
    },
    {
      question: "成果レポートはもらえますか？",
      answer:
        "はい。定期的にアクセス数や反応率などをまとめた成果レポートをお渡しいたします。",
    },
  ],
];


const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-automb-8 mt-10 rounded-md">
      <SectionHeader
          sectionTitle="利用者の声"
          shortDescription="数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります"
        />
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabLabels}
      />

      {/* Animate tab content */}
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait" className="">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border border-green-200"
          >
            {content[activeTab].map((item, index) => (
              <Accordion
                key={index}
                number={`Q${index + 1}`}
                question={item.question}
                answer={item.answer || ""}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        <div className=" flex align-center justify-center mt-8">
          <button className="bg-green-100 hover:bg-green-200 font-bold text-semmd pl-12 pr-12 py-3 rounded-full transition text-primary">
            もっと見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
