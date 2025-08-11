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
    <div className="max-w-4xl mx-auto mt-10 rounded-md shadow-sm">
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
      </div>
    </div>
  );
};

export default TabSection;
