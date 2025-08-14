import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Tabs from './Tabs';
import Accordion from './Accordion';

const tabLabels = ['新郎新婦', '結婚式場', '広告会社'];


const content = [
  [ // 新郎新婦
    {
      question: '予約のキャンセルはいつまで可能ですか？',
      answer:
        'ご予約のキャンセルは、原則としてご利用日の7日前まで承っております。それ以降のキャンセルはキャンセル料が発生する場合がございますのでご了承ください。',
    },
    {
      question: '見学後にその場で予約を決める必要がありますか？',
      answer:
        'ご予約のキャンセルは、原則としてご利用日の7日前まで承っております。それ以降のキャンセルはキャンセル料が発生する場合がございますのでご了承ください。',
    },
    {
      question: '土日や祝日も見学できますか？',
    },
    {
      question: '会場の空き状況は確認できますか？',
    },
    {
      question: '料金プランや見積もりは事前にもらえますか？',
    },
  ],
  [ // 結婚式場
    {
      question: '式場として登録するにはどうすれば良いですか？',
    },
    {
      question: '料金はどのようになりますか？',
    },
  ],
  [ // 広告会社
    {
      question: '広告掲載の流れを教えてください。',
    },
    {
      question: '成果レポートはもらえますか？',
    },
  ],
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-automb-8 mt-10 rounded-md">
      <div className="flex flex-col mb-10">
        <h2 className="text-center heading text-3xl font-bold mb-5 mt-0 font-yumincho">利用者の声</h2>
        <p className="text-center relative mb-1 font-yumincho pl-15 pr-15 after:content-[''] after:flex  after:h-[1px] after:bg-[#D5E6DC] after:mt-[25px]">数多くのカップルがここで出会えました。実際にご利用いただいた皆さまの声から、あなたの理想にぴったりの出会いがきっと見つかります</p>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabLabels} />
      
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
                number = {`Q${index+1}`}
                question={item.question}
                answer={item.answer || ''}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="mt-20 flex align-center justify-center mt-8">
          <button className="bg-green-100 hover:bg-green-200 font-bold text-semmd pl-12 pr-12 py-3 rounded-full transition text-primary">
              もっと見る
            </button>
          </div>
      </div>
    </div>
  );
};

export default TabSection;
