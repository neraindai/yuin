import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import FaqBanner from "../../assets/images/FAQbanner.png"
import HeroMiniImage from "../../components/HeroMiniImage";

const Accordion = ({ number, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-green-300 border-t-1 last:border-b">
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-start gap-3 text-gray-800 font-medium">
          <span className="font-bold text-green-700">Q{number}</span>
          {question}
        </span>
        <span className="text-xl font-bold text-green-600">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 flex gap-3 text-gray-600 text-sm leading-relaxed">
              <span className="font-bold text-green-700">A</span>
              <span>{answer}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqAccordion = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "すべて" },
    { id: "cat1", label: "カテゴリー１" },
    { id: "cat2", label: "カテゴリー２" },
    { id: "cat3", label: "カテゴリー３" },
    { id: "cat4", label: "カテゴリー4" },
    { id: "cat5", label: "カテゴリー5" },
  ];

  const faqData = [
    {
      category: "cat1",
      question: "予約のキャンセルはいつまで可能ですか？",
      answer:
        "ご予約のキャンセルは、原則としてご利用日の7日前まで承っております。それ以降のキャンセルはキャンセル料が発生する場合がございますのでご了承ください。",
    },
    {
      category: "cat1",
      question: "見学後にその場で予約を決める必要がありますか？",
      answer: "いいえ、ご自宅でご検討いただけます。",
    },
    {
      category: "cat1",
      question: "土日や祝日も見学できますか？",
      answer: "はい、事前予約にて可能です。",
    },
    {
      category: "cat1",
      question: "会場の空き状況は確認できますか？",
      answer: "はい、電話またはメールにてお問い合わせください。",
    },
    {
      category: "cat1",
      question: "料金プランや見積もりは事前にもらえますか？",
      answer: "はい、無料でお渡しできます。",
    },
    {
      category: "cat2",
      question: "駐車場は利用可能ですか？",
      answer: "はい、無料駐車場をご利用いただけます。",
    },
    {
      category: "cat2",
      question: "ペット同伴は可能ですか？",
      answer: "ペットの同伴は屋外エリアのみ可能です。",
    },
    {
      category: "cat3",
      question: "食事の持ち込みはできますか？",
      answer: "はい、事前相談のうえ可能です。",
    },
    {
      category: "cat3",
      question: "会場内で喫煙は可能ですか？",
      answer: "屋外の指定場所のみ喫煙可能です。",
    },
    {
      category: "cat4",
      question: "キャンセルポリシーは変更できますか？",
      answer:
        "特別な事情がある場合のみ変更可能です。詳細はお問い合わせください。",
    },
    {
      category: "cat4",
      question: "バリアフリー対応はありますか？",
      answer: "はい、施設全体がバリアフリー対応です。",
    },
    {
      category: "cat5",
      question: "海外からの予約は可能ですか？",
      answer: "はい、メールまたはオンラインフォームで承ります。",
    },
    {
      category: "cat5",
      question: "英語でのサポートはありますか？",
      answer: "はい、英語対応スタッフが在籍しています。",
    },
  ];

  const filteredData =
    activeCategory === "all"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  // Group by category for display
  const groupedFaq = filteredData.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <>
    {/* Mini Hero Image */}
      <HeroMiniImage image={FaqBanner} />

      <section className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          FAQ
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full border ${
                activeCategory === cat.id
                  ? "bg-green-200 text-green-800 border-green-300"
                  : "bg-green-50 text-green-600 border-green-200"
              } transition`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Render each category section */}
        {Object.entries(groupedFaq).map(([cat, items]) => (
          <div key={cat} className="mb-10">
            {/* Category Title */}
            <div className="inline-block bg-green-100 text-green-800 font-bold px-4 py-2 border border-green-300 mb-0 text-center">
              {categories.find((c) => c.id === cat)?.label ||
                "その他カテゴリー"}
            </div>

            {/* Accordion List */}
            {items.map((item, idx) => (
              <Accordion
                key={idx}
                number={idx + 1}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default FaqAccordion;
